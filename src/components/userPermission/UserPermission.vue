<template>
  <div class="body">
    <CreateAddUserPermissionVue
      ref="updatePermissionData"
      @reload="getReload"
    />
    <UpdateBranchPermission ref="updatePermissionData1" />
    <div class="bodyPart">
      <div class="card-header">
        <div><h5>User Module Permission</h5></div>
      </div>
      <div style="margin-left: 0%; margin-top: 1%; width: 100%">
        <div class="input-group" @change="searchUserId($event)">
          <input
            type="search"
            class="form-control form-control-sm"
            placeholder="Search users"
          />
          <!-- {{ UserProfile }} -->
          <div class="input-group-append">
            <button type="submit" class="btn btn-sm btn-default">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- information -->
      <div class="card mt-1">
        <div class="card-header" style="width: 95%; margin-left: 2.5%">
          <h3 class="card-title" style="margin-left: -1.5%; font-weight: 600">
            User Information
          </h3>
        </div>
        <!-- <h5 class="card-header bg-info">User Information</h5> -->
        <div class="card-body">
          <div class="row row-cols-3 mt-3" style="margin-left: 5%">
            <div>
              <label class="d-inline">User Id:</label>
              <p class="d-inline ml-5">{{ UserProfile.user_name }}</p>
            </div>
            <div class="d-inline">
              <label class="d-inline">Name:</label>
              <p class="d-inline ml-5">{{ UserProfile.full_name }}</p>
            </div>
            <div>
              <label>Email:</label>
              {{ UserProfile.email }}
            </div>
            <div>
              <label class="d-inline">Department:</label>
              <p class="d-inline ml-2">{{ this.department_name }}</p>
            </div>
            <div class="input_field form-group">
              <label class="d-inline">Designation:</label>
              <p class="d-inline ml-1">{{ this.designation_name }}</p>
            </div>
            <div class="input_field form-group">
              <label class="d-inline">Branch:</label>
              <p
                class="d-inline"
                v-for="branchList in branch"
                :key="branchList.id"
              >
                {{ branchList.branch_name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-------------------------------------- Module And Role Permission -------------------------------------->
      <div class="card">
        <div class="d-inline">
          <div class="card-header" style="width: 95%; margin-left: 2.5%">
            <h3 class="card-title" style="margin-left: -1.5%; font-weight: 600">
              Module And Role Permission

              <button
                v-if="UserProfile.user_name"
                class="btn btn-xs font-weight-bold"
                data-toggle="modal"
                data-target="#modal-default"
                data-bs-whatever="@mdo"
                style="
                  float: right;
                  margin-right: -340%;
                  background-color: rgb(231, 226, 220);
                "
              >
                <i class="fas fa-plus font-weight-bold"></i>
              </button>
            </h3>
          </div>
        </div>

        <div class="card-body">
          <div style="width: 90%">
            <table
              class="table table-bordered table-sm"
              style="margin-left: 5%"
            >
              <thead>
                <tr>
                  <th style="text-align: center">Module Name</th>
                  <th style="width: 25%; text-align: center">Role</th>
                  <th style="width: 20%; text-align: center">Action</th>
                </tr>
              </thead>
              <tbody id="myTable">
                <!--  -->
                <tr
                  style="font-size: 16px"
                  v-for="(moduleList, index) in moduleList"
                  :key="moduleList.id"
                >
                  <td style="text-align: center">
                    {{ moduleList.module_name }}
                  </td>
                  <td style="text-align: center">{{ moduleList.role_name }}</td>

                  <td style="display: flex">
                    <div style="margin-left: 30%">
                      <button
                        type="button"
                        class="btn btn-xs"
                        data-toggle="modal"
                        @click="updatePermission(moduleList)"
                        data-target="#modal-default"
                      >
                        <i class="far fa-edit"></i>
                      </button>

                      <button
                        class="btn btn-xs ml-4"
                        @click="delete_box_user_module(moduleList, index)"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!---------------------------------- branch and designation Permission ----------------------------------->
      <div class="card">
        <div class="d-inline">
          <div class="card-header" style="width: 95%; margin-left: 2.5%">
            <h3 class="card-title" style="margin-left: -1.5%; font-weight: 600">
              Branch And Designation Permission
            </h3>
          </div>
          <!-- <h5 class="card-header bg-info">Branch And Designation Permission</h5> -->
        </div>

        <div class="card-body">
          <div style="width: 90%">
            <table
              class="table table-bordered table-sm"
              style="margin-left: 5%"
            >
              <thead>
                <tr>
                  <th style="text-align: center">Branch Name</th>
                  <th style="text-align: center">Designation</th>
                  <th style="width: 20%; text-align: center">Action</th>
                </tr>
              </thead>
              <tbody id="myTable">
                <!--  -->
                <tr
                  style="font-size: 16px"
                  v-for="branchList in branch"
                  :key="branchList.id"
                >
                  <td style="text-align: center">
                    {{ branchList.branch_name }}
                  </td>
                  <td style="text-align: center">
                    {{ this.designation_name }}
                  </td>

                  <td style="display: flex; border: none">
                    <div style="margin-left: 30%">
                      <button
                        type="button"
                        class="btn btn-xs ml-4"
                        data-toggle="modal"
                        @click="
                          updatePermissionBranch(
                            branchList,
                            this.designation_data
                          )
                        "
                        data-target="#modal-primery"
                      >
                        <i class="far fa-edit"></i>
                      </button>
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
import Users from "../../models/UserProfile";
import moduleService from "@/services/module.service";
import UserPermission from "../../services/userPermission";
import CreateAddUserPermissionVue from "./module-role-permission.vue";
import UpdateBranchPermission from "./Branch-and-designation.vue";
import sweet_alert from "@/common/sweet";
import { ref } from "vue";
const updatePermissionData = ref(0);
const updatePermissionData1 = ref(0);
export default {
  components: { CreateAddUserPermissionVue, UpdateBranchPermission },
  data() {
    return {
      UserProfile: new Users(),
      search: "",
      search_event: "",
      userName: "",
      moduleList: [],
      designation_name: "",
      branch: [],
      department: [],
      designation_data: "",
      // api: "Module/delete_module_by_id",
      api: "UserPermission/remove_module_from_user",
      a: "",
    };
  },
  methods: {
    getReload() {
      console.log("yes");
    },
    searchUserId(event) {
      userProfileService
        .get_users_profile(event.target.value)
        .then((response) => {
          console.log("search user name", response);
          if (response.data.error_msg != null) {
            sweet_alert.error_message("Invalid User ID");
          } else {
            if (response != null) {
              this.UserProfile = response.data;
              this.search_event = response.data.user_name;
              console.log(this.search_event);
              this.$store.dispatch("auth/userid", this.search_event);
              if (response.data.employee_designation.length > 0) {
                this.designation_name =
                  response.data.employee_designation[0].designation_name;
                this.designation_data = response.data.employee_designation[0];
              } else {
                sweet_alert.error_message("Employee Designation not found!");
              }
              if (response.data.department_onfo.length === 1) {
                this.department_name =
                  response.data.department_onfo[0].department_name;
              } else {
                sweet_alert.error_message("Department not found!");
              }
            } else {
              sweet_alert.error_message("Response not found!");
            }
          }
        });
      moduleService
        .get_application_roles_by_user(event.target.value)
        .then((response) => {
          if (response.data.error_msg != null) {
            sweet_alert.error_message("Response not found!");
          } else {
            if (response != null) {
              this.moduleList = response.data;
              console.log(this.moduleList);
            } else {
              sweet_alert.error_message("Response not found!");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
      UserPermission.get_branch_by_user(event.target.value)
        .then((response) => {
          console.log(response.data);
          if (response.data.error_msg != null) {
            sweet_alert.error_message("Response not found!");
          } else {
            if (response != null) {
              this.branch = response.data;
            } else {
              sweet_alert.error_message("Response not found!");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updatePermission(updatePermissionData) {
      this.$refs.updatePermissionData.updatePermission(updatePermissionData);
    },
    updatePermissionBranch(updatePermissionData1, designation) {
      this.$refs.updatePermissionData1.updatePermissionBranch(
        updatePermissionData1,
        designation
      );
    },
    delete_box_user_module(moduledara, index) {
      moduledara.user_id = this.search_event;
      sweet_alert.delete_box_user_module(
        moduledara.module_id,
        moduledara.user_id,
        moduledara.role_id,
        moduledara.permission_id,
        this.api
      );
      this.moduleList.splice(index, 1);
    },
  },
};
</script>

<style>
@import "../../assets/Css/userPermission/userpermission.css";
</style>
