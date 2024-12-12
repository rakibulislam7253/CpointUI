<template>
  <div class="d-flex justify-content-between row backgroundImage">
    <div class="ml-5 col-sm-8 mt-3">
      <div>
        <!-- <div id="headerPart"></div> -->
        <div>
          <div class="ml-3">
            <div>
              <div>
                <!--------------------------- Add modal & edit modal -------------------------->
              </div>
              <!-- Profile Image -->
              <div class="d-flex profileHeader">
                <div>
                  <div>
                    <div>
                      <img
                        v-if="imageSrc"
                        class="avatar"
                        :src="imageSrc"
                        alt="Uploaded Picture"
                        style="max-width: 100%"
                      />
                      <img
                        v-else
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
                    <div v-if="imageUrl">
                      <button
                        class="btn btn-success btn-xs ml-4 mt-2"
                        @click="upload"
                      >
                        Upload</button
                      ><button
                        class="btn btn-danger btn-xs ml-4 mt-2"
                        @click="cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
                <div class="profile_details">
                  <p class="profile_name">
                    {{ UserProfile.full_name }}
                  </p>
                  <p>{{ this.designation_name }}</p>
                </div>
                <!-- /.card-body -->
              </div>
            </div>
          </div>
          <div class="information_table">
            <table>
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
                <!-- <th class="name">Email :</th>
                <td class="details">
                  {{ UserProfile. }}
                </td> -->
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
      <div class="mt-5">
        <div class="mr-5 mt-4 activities" style="height: 300px">
          <h4>Your Activities</h4>

          <hr />
        </div>
      </div>
    </div>

    <div
      style="height: 500px; overflow: scroll"
      class="mr-5 col-sm-3 badge text-wrap mt-4 logActivities"
    >
      <p class="logActivitiesP">Log Activities</p>

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
import documentService from "@/services/document.service";
import sweet_alert from "@/common/sweet";
import userProfile from "../../assets/images/userProfile.jpg";
export default {
  name: "viewprofile",
  data() {
    return {
      UserProfile: new Users(),
      Cp_Log_Activity: new Cp_Log_Activity(),
      filter_name: "",
      imageUrl: "",
      designation_name: "",
      avata: userProfile,
      //   userName: localStorage.getItem("user_name"),

      UserProfileData: this.$store.state.auth.editMenu,
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];

      console.log("Selected File:", file);
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;

        this.imageUrl = dataUrl;
        console.log(this.imageUrl);
        console.log("File Data URL:", dataUrl);
      };
      reader.readAsDataURL(file);
    },

    upload() {
      documentService.documentUpload(this.imageUrl).then((response) => {
        console.log(response);
      });
      (error) => {
        console.log(error);
      };
    },
    cancel() {
      this.imageUrl = "";
    },
  },
  computed: {
    userData() {
      console.log("viewProfile", this.$store.state.auth.editMenu);
      return this.$store.state.auth.editMenu;
    },
  },
  mounted() {
    console.log("viewProfile", this.UserProfileData);
    documentService
      .get_profile_img_by_user_id(this.UserProfileData)
      .then((response) => {
        if (response.data) {
          this.byteData = response.data;
          console.log(this.byteData);
          // Convert byte data to a Blob
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
            sweet_alert.error_message("No image found!");
          }
        } else {
          sweet_alert.error_message("Response not found!");
        }
      });
    userProfileService
      .get_users_profile(this.UserProfileData)
      .then((response) => {
        if (response.data != null) {
          this.UserProfile = response.data;
          console.log(response.data);
          if (response.data.error_msg == null) {
            if (response.data.employee_designation.length > 0) {
              this.designation_name =
                response.data.employee_designation[0].designation_name;
            } else {
              // eslint-disable-next-lineprettier/prettier
              sweet_alert.error_message("Employee Designation not found!");
            }
          } else {
            sweet_alert.error_message("Please Update your Information");
          }
          // this.designation_name = response.data.employee_designation[0].designation_name;
          // console.log("userProfileForm", this.UserProfile);
        } else {
          sweet_alert.error_message("Response not found!");
        }
      });
    userPermission
      .get_api_access_history(this.UserProfileData)
      .then((response) => {
        if (response.data != null) {
          this.Cp_Log_Activity = response.data.slice(-10);
        } else {
          sweet_alert.error_message("Response not found!");
        }
      });
  },
};
</script>

<style>
.profileHeader {
  background-image: url("../../assets/logo/Logo-Big.jpg");
  background-size: cover;
  background-position: center;
  padding: 10px;
  width: 100%;
}
.backgroundImage {
  background-image: url("../../assets/logo/Texture.JPG");
  /* background-size: cover;
    background-position: center; */
}
.information_table {
  /* background-color: rgb(255, 255, 255); */
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  width: 98.5%;
  margin-left: 15px;
  border: 1px solid rgb(240, 237, 237);
}
.profile_name {
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
}
.edit_button {
  margin-left: 59%;
}
table {
  /* border: 1px solid black; */
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin-top: 10px;
}

td,
th {
  /* border: 1px solid black; */
  text-align: left;
  padding: 5px;
}

.details {
  font-weight: bold;
  font-size: 14px;
  color: rgb(41, 40, 40);
}

.activities {
  border-left: 2px solid rgb(201, 198, 198);
  border-right: 1px solid rgb(223, 221, 221);
  border-top: 1px solid rgb(223, 221, 221);
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  padding: 10px 0px 0px 5px;
}
.logActivities {
  border-left: 2px solid rgb(201, 198, 198);
  border-right: 1px solid rgb(223, 221, 221);
  border-top: 1px solid rgb(223, 221, 221);
}

.logActivitiesP {
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  padding: 10px 0px 0px 5px;
}
.name {
  font-weight: 600;
  font-size: 14px;
  color: rgb(78, 77, 77);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.avatar {
  vertical-align: middle;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid rgb(202, 201, 201);
  /* box-shadow: 0px 25px 20px -20px rgba(0, 0, 0, 0.45),
        25px 0 20px -20px rgba(0, 0, 0, 0.45); */
}

.profile_details {
  margin-top: 40px;
  margin-left: 20px;
}

.profile_details p {
  margin-top: -18px;
  /* font-size: 16px; */
}
.log_activity {
  width: 100%;
  border: 2px solid rgb(226, 222, 222);
  margin-top: 5px;
  text-align: left;
  padding: 4px 2px 4px 6px;
}
.log_activity p {
  margin-bottom: 3px;
  font-size: 12px;
}
small {
  color: rgb(34, 0, 156);
}
</style>
