<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->

            <div class="modal fade" id="modal-primary" data-backdrop="static">
              <div class="modal-dialog modal-lg">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <h4 class="modal-title">Update Profile</h4>

                    <!-- <p>{{ user_by_designation.permission_id }}</p> -->
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p class="d-none">{{ userData }}</p>
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- branch_id -->
                          <!-- <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>User Id</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.user_id"
                                disabled
                              />
                            </div>
                          </div> -->
                          <!-- menu-title -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>User Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.user_name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row clearfix">
                          <!-- first_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>First Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.first_name"
                              />
                            </div>
                          </div>
                          <!-- last_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Last Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.last_name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row clearfix">
                          <!-- first_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>permanent Address</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.permanent_address"
                              />
                            </div>
                          </div>
                          <!-- last_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Present Address</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.present_address"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row clearfix">
                          <!-- first_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Fathers Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.fathers_name"
                              />
                            </div>
                          </div>
                          <!-- last_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Mothers Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.mothers_name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row clearfix">
                          <!--Spouse Name-->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Spouse Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.spouse_name"
                              />
                            </div>
                          </div>
                          <!-- Blood Group -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Blood Group</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.blood_group"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row clearfix">
                          <!-- Phone Number -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Phone Number</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.phone_number"
                              />
                            </div>
                          </div>
                          <!-- last_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Emergency Contact Number</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="
                                  Cp_Users_AllProfile.emergency_contact_number
                                "
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row clearfix">
                          <!-- Employee ID -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Employee ID</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.employee_id"
                              />
                            </div>
                          </div>
                          <!-- Employee Designation -->
                          <div class="col-md-6">
                            <label>Designation Id</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeDesigEvent($event)">
                                <option value="" v-if="user_by_designation">
                                  {{ user_by_designation.designation_name }}
                                </option>
                                <option value="">Select Designation</option>
                                <option
                                  v-for="designationId in designation"
                                  :key="designationId.id"
                                  :value="designationId.id"
                                >
                                  {{ designationId.designation_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row clearfix">
                          <!-- department_onfo -->
                          <div class="col-md-6">
                            <label>Department Id</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeDepEvent($event)">
                                <option value="" v-if="cp_department_info">
                                  {{ cp_department_info.department_name }}
                                </option>
                                <option value="">Select Designation</option>
                                <option
                                  v-for="departmentId in department"
                                  :key="departmentId.id"
                                  :value="departmentId.id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ departmentId.department_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <!-- Nid -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>NID</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Users_AllProfile.nid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer justify-content-between">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="cleardata"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="update_module"
                    >
                      Update
                    </button>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cp_Users_AllProfile from "@/models/Cp_Users_AllProfile";
import userProfileService from "../../services/userProfile.service";
import departmentService from "../../services/department.service";
import designationService from "@/services/designation.service";
import confrim_box from "../../common/sweet";
import RegisterDto from "@/models/RegisterDto";
import sweet_alert from "@/common/sweet";
import permissionModuleService from "@/services/permissionModule.service";
import Cp_Employee_Designation from "@/models/Cp_Employee_Designation";
import Cp_Department_Info from "@/models/Cp_Department_Info";

export default {
  name: "updateProfileModal",
  props: ["user_by_designation"],

  data() {
    return {
      Cp_Users_AllProfile: new Cp_Users_AllProfile(),
      register_info: new RegisterDto(),
      cp_employee_designation: new Cp_Employee_Designation(),
      cp_department_info: new Cp_Department_Info(),
      search: "",
      showdate: false,
      department: [],
      designation: [],
      userName: Cp_Users_AllProfile.user_name,
      user_permission: "",
    };
  },
  computed: {
    userData() {
      this.cp_employee_designation.loadModel(
        this.$store.state.auth.userDesignationPermission
      );
      this.cp_department_info.loadModel(
        this.$store.state.auth.userDepPermission
      );

      this.Cp_Users_AllProfile.loadModel(this.$store.state.auth.editMenu);

      return this.$store.state.auth.editMenu;
    },
  },
  mounted() {
    console.log(this.cp_employee_designation);

    departmentService.get_department_list().then((response) => {
      if (response.data != null) {
        this.department = response.data;
      } else {
        sweet_alert.error_message("Response not found!");
      }
    });
    designationService.get_designation_list().then((response) => {
      if (response.data != null) {
        this.designation = response.data;
      } else {
        sweet_alert.error_message("Response not found!");
      }
    });
  },

  methods: {
    async update_module() {
      this.updateUser();
    },
    updateUser() {
      this.loading = true;
      console.log(this.Cp_Users_AllProfile);

      userProfileService
        .updateProfile(this.Cp_Users_AllProfile)
        .then((response) => {
          console.log(response.data);

          if (this.cp_employee_designation.id != null) {
            permissionModuleService
              .assign_designation_to_user(this.cp_employee_designation)
              .then((response2) => {
                response2;
                console.log(this.cp_employee_designation);
              });
          }
          if (this.cp_department_info.id != null) {
            console.log("before", this.cp_department_info);
            permissionModuleService
              .assign_department_to_user(this.cp_department_info)
              .then((response3) => {
                response3;
                console.log("after");
                console.log(this.cp_department_info);
              });
          }
          if (response.data != null) {
            this.loading = false;
            confrim_box.confirmation_box(response);
            this.$emit("reload");
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });
    },
    changeDepEvent(event) {
      console.log(event.target.value);
      // this.Cp_Users_AllProfile.department_onfo = event.target.value;
      this.cp_department_info.id = event.target.value;
      this.cp_department_info.user_id = this.Cp_Users_AllProfile.user_name;
      console.log(this.cp_department_info);
    },
    changeDesigEvent(event) {
      console.log(event.target.value);
      this.cp_employee_designation.id = event.target.value;
      this.cp_employee_designation.user_id = this.Cp_Users_AllProfile.user_name;
      console.log(this.cp_employee_designation);
    },
    cleardata() {
      this.Cp_Users_AllProfile.loadModel("");
    },
  },
};
</script>

<style>
header p {
  margin-bottom: -3px;
  margin-top: -9px;
  font-weight: 700;
}

.modal-header {
  background-image: url("../../assets/logo/Logo-Big.jpg");
  background-size: cover;
  background-position: center;
  min-height: 8vh;
}

.modal-title {
  font-size: 28px;
  color: #ececec;
  font-weight: 500;
}

th {
  color: #000000;
}

td {
  color: black;
}

.pagination {
  margin-left: 76%;
}

.dataTables_filter {
  margin-left: 70%;
}

/* tbody {
  font-family: var(--ut-base-font-family, var(--a-base-font-family, sans-serif));
} */

.flex-wrap {
  margin-top: 10px;
}

.card-body {
  margin-top: -18px;
}

.searchicon {
  position: absolute;
  margin-left: 17.5%;
}

.searchoption {
  display: flex;
  justify-content: space-between;
  float: right;
  width: 100%;
  /* background-color: #7b7b7b; */
  margin: 10px 0px 8px 0px;
}

#myinput {
  width: 150%;
  /* border: 2px solid rgb(159, 199, 231); */
}

.select_option {
  position: relative;
  width: 100%;
}

.select_option select {
  display: inline-block;
  width: 100%;
  height: 35px;
  padding: 0px 15px;
  cursor: pointer;
  color: #7b7b7b;
  border: 1px solid #cccccc;
  border-radius: 0;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: all 0.2s ease;
}

.select_option select::-ms-expand {
  display: none;
}

.select_option select:hover,
.select_option select:focus {
  color: #000000;
  background: #fafafa;
  border-color: #000000;
  outline: none;
}

.select_arrow {
  position: absolute;
  top: calc(50% - 4px);
  right: 15px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-width: 8px 5px 0 5px;
  border-style: solid;
  border-color: #7b7b7b transparent transparent transparent;
}

.select_option select:hover + .select_arrow,
.select_option select:focus + .select_arrow {
  border-top-color: #000000;
}
</style>
