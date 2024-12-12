<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div class="container-fluid">
      <div>
        <div class="col-12">
          <div>
            <!--------------------------- Add modal -------------------------->
            <CreateUser @reload="getReload" />
            <UpdateUser @reload="getReload" :user_by_designation="user_designation" />
            <!-- add user button -->

            <!-- /.card-header -->
          </div>
          <div class="card-body">
            <div class="searchoption">
              <div style="float: right">
                <button
                  type="button"
                  class="btn btn-warning btn-sm add_user"
                  data-toggle="modal"
                  data-target="#modal-default"
                  data-bs-whatever="@mdo"
                  style="float: right"
                >
                  <i class="fas fa-plus"></i> Create User
                </button>
              </div>
            </div>
            <!-- <div> -->
                  <!-- <i
                    class="fas fa-search searchicon my-2"
                    style="color: rgb(171, 171, 207)"
                  ></i> -->
                  <!-- <input
                    class="form-control form-control-sm w-50"
                    v-model.trim="search"
                    id="myinput"
                    type="text"
                    placeholder="Search..."
                    @input="searchinput"
                  />
                </div> -->

            <table class="table table-bordered table-striped table-sm">
              <thead>
                <tr>
                  <th style="text-align: center">Employee Id</th>
                  <th style="text-align: center">Name</th>
                  <th style="text-align: center">User Name</th>
                  <th style="text-align: center">Blood Group</th>
                  <th style="text-align: center">E-Mail</th>
                  <th style="text-align: center">Phone Number</th>
                  <th style="text-align: center" class="action">Action</th>
                </tr>
              </thead>
              <tbody id="myTable">
                <tr v-for="profileData in this.profile" :key="profileData.id">
                  <td>{{ profileData.employee_id }}</td>
                  <td>{{ profileData.full_name }}</td>
                  <td>{{ profileData.user_name }}</td>
                  <td>{{ profileData.blood_group }}</td>
                  <td>{{ profileData.email }}</td>
                  <td>{{ profileData.phone_number }}</td>

                  <td style="display: flex; border: none">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style="padding: 0px 15px 0px 15px"
                      >
                        Action
                      </button>

                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button
                          class="dropdown-item btn-sm"
                          type="button"
                          @click="profileView(profileData)"
                        >
                          Profile View
                        </button>
                        <button
                          class="dropdown-item btn-sm"
                          type="button"
                          data-toggle="modal"
                          data-target="#modal-primary"
                          data-bs-whatever="@mdo"
                          @click="profileUpdate(profileData)"
                        >
                          Profile Update
                        </button>
                        <button class="dropdown-item btn-sm" type="button">
                          Reset Password
                        </button>
                        <button @click="profile_Lock_Unlock(profileData)" class="dropdown-item btn-sm" type="button">
                          {{ profileData.locked? "Unlock":" Lock" }}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userProfileService from "../../services/userProfile.service";
import CreateUser from "./createUserModal.vue";
import UpdateUser from "./UpdateProfileModal.vue";
import userPermission from "../../services/userPermission";
import sweet_alert from "@/common/sweet";
import Cp_Users_AllProfile from "@/models/Cp_Users_AllProfile";
import Cp_Employee_Designation from "@/models/Cp_Employee_Designation";
import accountService from "@/services/account.service";
// import { user } from "fontawesome";
// import ViewProfile from "./ViewProfile.vue";
export default {
  components: { CreateUser, UpdateUser },
  name: "createUser",
  data() {
    return {
      Cp_Users_AllProfile: new Cp_Users_AllProfile(),
      cp_employee_designation: new Cp_Employee_Designation(),
      countOfPage: 15, //Number of items per page
      currPage: 1, // Current page number
      filter_name: "",
      profile: [],
      user_designation: [],
      permission: "",
      model: {
        search: "",
        deleted: false,
        haveID: "",
        date: "",
      },
      api: "Account/unlock_user",
    };
  },
  methods: {
    getReload() {
      window.location.reload();
    },
    profile_Lock_Unlock(userProfileData) {
      if (userProfileData.locked == 0) {
        // accountService.lockUser(userProfileData.user_name);
        sweet_alert.userLock(
          userProfileData.user_name,
          userProfileData.full_name
        );
      } else {
        sweet_alert.userUnlock(
          userProfileData.user_name,
          userProfileData.full_name
        );
      }
    },
    profileUpdate(userProfileData) {
      // console.log(userProfileData);
      this.Cp_Users_AllProfile.loadModel(userProfileData);
      this.profileIdPass = userProfileData;
      this.$store.dispatch("auth/editMenu", this.profileIdPass);
      userPermission
        .get_designation_by_user(userProfileData.user_name)
        .then((response) => {
          this.user_designation = response;
          // store permissionid

          if (response.data.length > 0) {
            this.$store.dispatch(
              "auth/userDesignationPermission",
              response.data[0]
            );
            this.user_designation = response.data[0];
          } else {
            // eslint-disable-next-lineprettier/prettier
            sweet_alert.error_message("Employee Designation not found!");
          }
          if (response.data != null) {
            this.user_designation = response.data[0];
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });
      userPermission
        .get_department_by_user(userProfileData.user_name)
        .then((response) => {
          console.log(response);
          if (response.data.length > 0) {
            this.$store.dispatch("auth/userDepPermission", response.data[0]);
          } else {
            // eslint-disable-next-lineprettier/prettier
            sweet_alert.error_message(" Department not found!");
          }
        });
    },

    profileView(userProfileData) {
      this.$store.dispatch("auth/editMenu", userProfileData.user_name);
      this.$router.push("/viewprofile");
    },
  },

  mounted() {
    userProfileService.get_all_user_list().then((response) => {
      if (response.data != null) {
        if (response.data.error_msg == null) {
          this.profile = response.data;
          console.log(this.profile);
        } else {
          sweet_alert.error_message(response.data.error_msg);
        }
      } else {
        sweet_alert.error_message("Response not found!");
      }
    });
  },
};
</script>
<style>
.action {
  width: 10px;
}
td {
  font-size: 14px;
}
th {
  font-size: 14px;
}
</style>
