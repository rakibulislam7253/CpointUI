<template>
  <div class="d-flex justify-content-between row backgroundImage">
    <div class="ml-5 col-sm-8 col-lg-7 mt-3">
      <div>
        <!-- <div id="headerPart"></div> -->
        <div>
          <div class="ml-3">
            <div>
              <div>
                <!--------------------------- Add modal & edit modal -------------------------->
                <addEditProfile />
              </div>
              <!-- Profile Image -->
              <div class="d-flex profileHeader">
                <div>
                  <div>
                    <div v-if="imageSrc">
                      <img
                        class="avatar"
                        :src="imageSrc"
                        alt="Uploaded Picture"
                        style="max-width: 100%"
                      />
                    </div>
                    <div v-if="!imageSrc">
                      <img
                        class="avatar"
                        :src="avata"
                        alt="Uploaded Picture"
                        style="max-width: 100%"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="file"
                      ref="fileInput"
                      style="display: none"
                      @change="handleFileChange"
                    />

                    <button
                      class="btn btn-primary btn-xs ml-4 mt-2"
                      @click="triggerFileInput"
                    >
                      Change Profile
                    </button>
                    <div v-if="showbutton">
                      <!-- class="btn btn-success btn-xs ml-4 mt-2" -->
                      <button
                        @click="uploadImg"
                        class="btn bg-gradient-success btn-xs ml-4"
                      >
                        Upload
                      </button>
                      <!-- <button >Upload</button -->
                      <button
                        class="btn btn-danger btn-xs ml-3"
                        @click="cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
                <div class="profile_details">
                  <p class="profileFullName">
                    {{ UserProfile.full_name }}
                  </p>
                  <p style="color: #fff6ea">
                    {{ this.designation_name }}
                  </p>
                </div>
                <!-- /.card-body -->
              </div>
            </div>
          </div>
          <div class="information_table">
            <div class="edit_button">
              <button
                class="btn btn-primary btn-xs ml-4 mt-2"
                type="button"
                data-toggle="modal"
                data-target="#modal-default"
                @click="editRow(UserProfile)"
              >
                Edit Profile
              </button>

              <!-- <a href="" /> -->
            </div>
            <table>
              <tr>
                <th class="name">Department :</th>
                <td class="details">{{ this.department_name }}</td>
              </tr>
              <tr>
                <th class="name">Fathers Name :</th>
                <td class="details">{{ UserProfile.fathers_name }}</td>
              </tr>
              <tr>
                <th class="name">Mothers Name :</th>
                <td class="details">{{ UserProfile.mothers_name }}</td>
              </tr>
              <tr>
                <th class="name">Spouse Name :</th>
                <td class="details">{{ UserProfile.spouse_name }}</td>
              </tr>
              <tr>
                <th class="name">Present Address :</th>
                <td class="details">{{ UserProfile.present_address }}</td>
              </tr>
              <tr>
                <th class="name">Permanent Address :</th>
                <td class="details">{{ UserProfile.permanent_address }}</td>
              </tr>
              <tr>
                <th class="name">Nid :</th>
                <td class="details">{{ UserProfile.nid }}</td>
              </tr>

              <tr>
                <th class="name">Phone Number :</th>
                <td class="details">{{ UserProfile.phone_number }}</td>
              </tr>
              <tr>
                <th class="name">Emergency Number :</th>
                <td class="details">
                  {{ UserProfile.emergency_contact_number }}
                </td>
              </tr>
              <tr>
                <th class="name">Blood Group :</th>
                <td class="details">{{ UserProfile.blood_group }}</td>
              </tr>

              <tr>
                <th class="name">Role :</th>
                <td class="details">Administration</td>
              </tr>
              <!-- <tr>
                <th class="name">Employee Id :</th>
                <td class="details">{{ UserProfile.employee_id }}</td>
              </tr> -->
            </table>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div class="card card-primary card-outline permission">
        <div class="card-header">
          <h4 class="card-title fw-bolder">User Permission</h4>
        </div>
        <div class="card-body">
          <h6 class="card-title">Special title treatment</h6>

          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
    <div class="mr-5 col-md-6 col-sm-3 col-lg-3 badge text-wrap logActivities">
      <div class="sticky">
        <p class="logActivitiesP">Log Activities</p>
      </div>

      <hr />
      <div
        v-for="Log_Activity in Cp_Log_Activity"
        :key="Log_Activity"
        class="log_activity"
      >
        <p>
          Name: <small>{{ Log_Activity.user_name }}</small>
        </p>
        <p>
          Path: <small>{{ Log_Activity.path }}</small>
        </p>
        <p>
          Local Ip: <small>{{ Log_Activity.local_ip }}</small>
        </p>
        <p>
          Browser Details: <small>{{ Log_Activity.browser_details }}</small>
        </p>
        <p>
          Make Date: <small>{{ Log_Activity.make_dt }}</small>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import userProfileService from "../../services/userProfile.service";
import Users from "../../models/UserProfile";
import Cp_Log_Activity from "../../models/Cp_Log_Activity";
import userPermission from "@/services/userPermission";
import addEditProfile from "./add-edit-profile.vue";
import sweet_alert from "@/common/sweet";
import documentService from "@/services/document.service";
// import userProfile from "@/assets/images/userProfile.jpg";
import profile from "../../assets/images/user.png";
import axios from "axios";
export default {
  components: { addEditProfile },
  name: "profile",
  data() {
    return {
      UserProfile: new Users(),
      Cp_Log_Activity: new Cp_Log_Activity(),
      filter_name: "",
      userDataInfo: JSON.parse(localStorage.getItem("user")),
      imageUrl: "",
      designation_name: "",
      department_name: "",
      department: [],
      file: "",
      byteData: "",
      imageSrc: "",
      showbutton: false,
      avata: profile,
      queue_id: "",
      user_id: "",
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      console.log(event.target.value);
      this.file = event.target.files[0];
      // this.imageSrcNew = event.target.files[0];
      console.log(this.file);
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.showbutton = true;
      };
      reader.readAsDataURL(this.file);
    },

    uploadImg() {
      let formData = new FormData();
      formData.append("files", this.file);
      console.log(this.file);
      documentService.profile_image_upload(formData).then((response) => {
        console.log("imageSrcNew", response);
        this.queue_id = response.data.result_id;
        this.user_id = this.userDataInfo.userId;
        userProfileService.update_profile_image(this.queue_id, this.user_id);
        sweet_alert.confirmation_box(response);
        this.showbutton = false;
        window.location.reload();
      });
      //upload picture
      documentService
        .documentUpload(formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          sweet_alert.error_message(error);
        });
    },
    cancel() {
      this.showbutton = false;
      window.location.reload();
      // this.$router.push("/dashboard");
      // this.$router.push("/profile");
    },
    editRow(userData) {
      console.log(userData);
      this.$store.dispatch("auth/editMenu", userData);
    },
  },
  computed: {
    user: function () {
      console.log(
        "profile-view",
        JSON.parse(this.$store.state.auth.userLoginInfo)
      );
      return JSON.parse(this.$store.state.auth.userLoginInfo);
    },
  },
  mounted() {
    documentService
      .get_profile_img_by_user_id(this.user.userId)
      .then((response) => {
        console.log(response);
        if (response.data != null) {
          this.byteData = response.data;
          if (this.byteData) {
            const byteCharacters = atob(this.byteData);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: "image/*" });
            // Create a data URL from the Blob
            const reader = new FileReader();
            reader.onload = (e) => {
              this.imageSrc = e.target.result;
            };
            reader.readAsDataURL(blob);
          } else {
            console.log("profile picture Null");
          }
        } else {
          sweet_alert.error_message("Response not found!");
        }
      });

    userProfileService.get_users_profile(this.user.userId).then((response) => {
      this.UserProfile = response.data;
      console.log(response.data);
      if (response.data != null) {
        // employee_designation
        if (response.data.employee_designation.length > 0) {
          this.designation_name =
            response.data.employee_designation[0].designation_name;
        } else {
          sweet_alert.error_message("Employee Designation not found!");
        }
        if (response.data.employee_designation.length > 0) {
          this.designation_name =
            response.data.employee_designation[0].designation_name;
        } else {
          sweet_alert.error_message("Employee Designation not found!");
        }
        // employee_department
        if (response.data.department_onfo.length > 0) {
          this.department_name =
            response.data.department_onfo[0].department_name;
        } else {
          sweet_alert.error_message("Employee Department_name not found!");
        }
      } else {
        sweet_alert.error_message("Response not found!");
      }
    });
    userPermission.get_api_access_history(this.user.userId).then((response) => {
      if (response.data != null) {
        this.Cp_Log_Activity = response.data.slice(-10);
      } else {
        sweet_alert.error_message("Response not found!");
      }
    });
    userPermission
      .get_designation_by_user(this.user.userId)
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
    userPermission.get_department_by_user(this.user.userId).then((response) => {
      console.log(response);
      if (response.data.length > 0) {
        this.$store.dispatch("auth/userDepPermission", response.data[0]);
      } else {
        // eslint-disable-next-lineprettier/prettier
        sweet_alert.error_message(" Department not found!");
      }
    });
  },
};
</script>

<style>
@import "../../assets/Css/profile/profile-view.css";
</style>
