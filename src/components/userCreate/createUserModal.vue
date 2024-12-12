<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->
            <div class="modal fade" id="modal-default" data-backdrop="static">
              <div class="modal-dialog modal-lg">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <h4 class="modal-title">Create User</h4>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      v-on:click.prevent="cleardata"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="row">
                    <div style="margin-left: 5.5%; width: 90%; margin-top: 3%">
                      <div class="input-group" @change="searchUserId($event)">
                        <input
                          type="search"
                          class="form-control form-control-sm"
                          placeholder="Search AD User"
                        />
                        <!-- {{ UserProfile }} -->
                        <div class="input-group-append">
                          <button type="submit" class="btn btn-sm btn-default">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- First Name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label
                                >First Name
                                <span style="color: red"
                                  >*
                                  <small v-if="messege1" style="color: red">
                                    Please fill out this field</small
                                  ></span
                                >
                              </label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                v-model="this.search_ad_from_user.firstName"
                              />
                            </div>
                          </div>
                          <!-- Last Name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Last Name </label>
                              <input
                                type="text"
                                style="width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="designation_id"
                                v-model="this.search_ad_from_user.lastName"
                              />
                            </div>
                          </div>
                        </div>

                        <!-- depart && role -->
                        <div class="row clearfix">
                          <!-- email -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label
                                >UserName
                                <span style="color: red">*</span></label
                              >
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="designation_id"
                                v-model="this.search_ad_from_user.userName"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label
                                >Email<span style="color: red"
                                  >*<small v-if="messege2" style="color: red"
                                    >Please fill out this field</small
                                  ></span
                                ></label
                              >
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="email"
                                class="form-control form-control-sm"
                                id="mobile_no"
                                v-model="this.search_ad_from_user.email"
                              />
                            </div>
                          </div>
                        </div>
                        <div v-if="showOthers" class="row clearfix listItem">
                          <!-- branch -->
                          <div class="col-md-12">
                            <label
                              >Branch Id
                              <span style="color: red"
                                >*<small v-if="messege3" style="color: red"
                                  >Please fill out this field</small
                                ></span
                              ></label
                            >
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeBranchEvent($event)">
                                <option value="">Select Branch Id</option>
                                <option
                                  v-for="branchId in branchData"
                                  :key="branchId.id"
                                  :value="branchId.branch_id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ branchId.branch_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <!-- Designation Id -->
                          <div class="col-md-12">
                            <label
                              >Designation Id
                              <span style="color: red"
                                >*<small v-if="messege4" style="color: red"
                                  >Please fill out this field</small
                                ></span
                              ></label
                            >
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeDesigEvent($event)">
                                <option value="">Select Designation Id</option>
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
                          <!-- Department Id -->
                          <div class="col-md-12">
                            <label
                              >Department Id
                              <span style="color: red"
                                >*<small v-if="messege5" style="color: red"
                                  >Please fill out this field</small
                                ></span
                              ></label
                            >
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeDepEvent($event)">
                                <option value="">Select department Id</option>
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
                          <!-- Module Id -->
                          <div class="col-md-12">
                            <label
                              >Module Id
                              <span style="color: red"
                                >*<small v-if="messege6" style="color: red"
                                  >Please fill out this field</small
                                ></span
                              ></label
                            >
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeModuleEvent($event)">
                                <option value="">Select Module Id</option>
                                <option
                                  v-for="moduleId in modules_list"
                                  :key="moduleId.id"
                                  :value="moduleId.module_id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ moduleId.module_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <!-- roleId -->
                          <div class="col-md-12">
                            <label
                              >Role Id
                              <span style="color: red"
                                >*<small v-if="messege7" style="color: red"
                                  >Please fill out this field</small
                                ></span
                              ></label
                            >
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeRoleEvent($event)">
                                <option value="">Select Role Id</option>
                                <option
                                  v-for="roleId in role"
                                  :key="roleId.roleId"
                                  :value="roleId.role_id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ roleId.role_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <!-- password -->
                          <div
                            class="col-md-12"
                            v-if="register_info.isAdUser == 0"
                          >
                            <label
                              >Password <span style="color: red">*</span></label
                            >
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="password"
                                class="form-control form-control-sm"
                                id="mobile_no"
                                v-model="register_info.password"
                              />
                            </div>
                            <input
                              @click="checkbox"
                              type="checkbox"
                              v-model="checkboxState"
                            />
                            <label style="font-size: 14px; margin-left: 10px">
                              I am accepting that I am creating non AD user in
                              the system.</label
                            ><br />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    v-if="showOthers"
                    class="modal-footer justify-content-between"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="cleardata"
                    >
                      Close
                    </button>
                    <button
                      :disabled="!checkboxState"
                      type="submit"
                      class="btn btn-success btn-sm"
                      v-on:click.prevent="addData"
                    >
                      Save changes
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
<style>
.listItem div {
  margin-bottom: 10px;
}
</style>
<script>
import AccountService from "../../services/account.service";
import sweet_alert from "@/common/sweet";
import RegisterDto from "@/models/RegisterDto";
import search_user_from_ad from "@/models/Search_Ad_From_User";
import departmentService from "../../services/department.service";
// import roleService from "../../services/role.service";
import designationService from "@/services/designation.service";
import branchService from "@/services/branch.service";
import moduleService from "@/services/module.service";
export default {
  name: "Register",
  data() {
    return {
      register_info: new RegisterDto(),
      search_ad_from_user: new search_user_from_ad(),
      search: "",
      showdate: false,
      department: [],
      role: [],
      designation: [],
      modules_list: [],
      branchData: [],
      showOthers: false,
      checkboxState: false,
      messege1: false,
      messege2: false,
      messege3: false,
      messege4: false,
      messege5: false,
      messege6: false,
      messege7: false,
      count: 0,
    };
  },

  methods: {
    checkbox() {
      this.count++;
      if (this.count % 2 == 0) {
        this.checkboxState = false;
      } else {
        this.checkboxState = true;
      }
    },
    searchUserId(event) {
      if (event.target.value.trim() != "") {
        AccountService.check_user_exist(event.target.value).then((response) => {
          // console.log(response);
          if (response.data != event.target.value) {
            AccountService.search_user_from_ad(event.target.value).then(
              (response) => {
                if (response != null) {
                  this.search_ad_from_user.loadModel(response.data);
                  this.register_info.firstName =
                    this.search_ad_from_user.firstName;
                  this.register_info.lastName =
                    this.search_ad_from_user.lastName;
                  this.register_info.userName =
                    this.search_ad_from_user.userName;
                  this.register_info.isAdUser = 1;
                  this.register_info.email = this.search_ad_from_user.email;
                  this.showOthers = true;
                  this.checkboxState = true;
                } else {
                  sweet_alert.error_message(
                    event.target.value + " not an AD user"
                  );
                  // console.log("normal user", event.target.value);
                  this.search_ad_from_user.userName = event.target.value;
                  this.register_info.userName =
                    this.search_ad_from_user.userName;
                  this.register_info.isAdUser = 0;
                  this.showOthers = true;
                  event.target.value = "";
                  this.checkboxState = false;
                }

                // console.log(this.register_info);
                event.target.value = "";
              }
            );
          } else {
            sweet_alert.error_message("Existing User!!");
            this.event = "";
          }
        });
      } else {
        sweet_alert.error_message("Please do not space search!!!");
      }
    },
    async addData() {
      this.createUserInfo();
    },
    createUserInfo() {
      this.loading = true;
      this.register_info.firstName = this.search_ad_from_user.firstName;
      this.register_info.lastName = this.search_ad_from_user.lastName;
      this.register_info.userName = this.search_ad_from_user.userName;
      this.register_info.email = this.search_ad_from_user.email;
      if (this.register_info.firstName) {
        this.messege1 = false;
        if (this.register_info.email) {
          this.messege2 = false;
          if (this.register_info.branchId) {
            this.messege3 = false;
            if (this.register_info.departmentId) {
              this.messege4 = false;
              if (this.register_info.designationId) {
                this.messege5 = false;
                if (this.register_info.moduleId) {
                  this.messege6 = false;
                  if (this.register_info.roleId) {
                    this.messege7 = false;
                    console.log(this.register_info);
                    AccountService.createRegister(this.register_info).then(
                      (response) => {
                        this.loading = false;
                        console.log("createRegister", response);
                        if (response.data != null) {
                          sweet_alert.confirmation_box(response);
                          this.$emit("reload");
                        } else {
                          sweet_alert.error_message("Response not found!");
                        }
                      }
                    );
                  } else {
                    sweet_alert.error_message(
                      "Please select your Application Role!!"
                    );
                    this.messege7 = true;
                  }
                } else {
                  sweet_alert.error_message("Please select your Application!!");
                  this.messege6 = true;
                }
              } else {
                sweet_alert.error_message("Please select your Designation!!");
                this.messege5 = true;
              }
            } else {
              sweet_alert.error_message("Please select your Department Name!!");
              this.messege4 = true;
            }
          } else {
            sweet_alert.error_message("Please select your Branch Name!!");
            this.messege3 = true;
          }
        } else {
          sweet_alert.error_message("Please enter your Email address!!");
          this.messege2 = true;
        }
      } else {
        sweet_alert.error_message("Please enter your name!!");
        this.messege1 = true;
      }

      //   this.designation_info = "";
    },
    cleardata() {
      this.register_info.loadModel("");
      this.search_ad_from_user.loadModel("");
      // this.showOthers = false;
    },
    changeDepEvent(event) {
      // console.log(event.target.value);
      this.register_info.departmentId = event.target.value;
    },

    changeDesigEvent(event) {
      // console.log(event.target.value);
      this.register_info.designationId = event.target.value;
    },
    changeModuleEvent(event) {
      // console.log(event.target.value);
      moduleService
        .get_application_roles_by_module(event.target.value)
        .then((response) => {
          this.role = response.data;
          // console.log(response.data);
        });
      this.register_info.moduleId = event.target.value;
    },
    changeRoleEvent(event) {
      // console.log(event.target.value);
      this.register_info.roleId = event.target.value;
      // this.checkboxState = true;
    },
    changeBranchEvent(event) {
      // console.log(event.target.value);
      this.register_info.branchId = event.target.value;
    },
  },
  mounted() {
    branchService.get_branch_list().then((response) => {
      this.branchData = response.data;
      // console.log(this.branchData);
    });
    departmentService.get_department_list().then((response) => {
      this.department = response.data;
    });
    designationService.get_designation_list().then((response) => {
      this.designation = response.data;
    });
    moduleService.get_module_list().then((response) => {
      this.modules_list = response.data;
    });
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
.dataTables_filter {
  margin-left: 70%;
}

.flex-wrap {
  margin-top: 10px;
}

.card-body {
  margin-top: -18px;
}

#myinput {
  width: 150%;
  /* border: 2px solid rgb(159, 199, 231); */
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
