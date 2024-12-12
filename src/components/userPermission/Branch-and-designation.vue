<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->

            <div class="modal fade" id="modal-primery">
              <div class="modal-dialog modal-md">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <h4 class="modal-title">Update Branch and Designation</h4>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      v-on:click.prevent="cleardata()"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <!-- <p>{{ updateRole }}</p> -->
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- Role Id -->
                          <div class="col-md-6">
                            <label>Branch</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <select @change="changeModuleEvent($event)">
                                <option value="">
                                  {{ this.branchName.branch_name }}
                                </option>
                                <option
                                  v-for="branch in branchData"
                                  :key="branch.id"
                                  :value="branch.branch_id"
                                >
                                  {{ branch.branch_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <!-- Role Name -->
                          <div class="col-md-6">
                            <label>Designation</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <select @change="changeDesignation($event)">
                                <option value="">
                                  {{
                                    this.employeeDesignation.designation_name
                                  }}
                                </option>
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
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer justify-content-between">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="cleardata()"
                    >
                      Close
                    </button>
                    <div>
                      <button
                        type="button"
                        class="btn btn-success btn-sm"
                        data-dismiss="modal"
                        v-on:click.prevent="updateUserBranchData"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
            <!--------------------------------- branch and designation ------------------------------------>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userPermission from "@/services/userPermission";
import permission_module from "@/models/permission_module";
import branch from "@/models/Cp_Branch_Info";
import employee_Designation from "@/models/Cp_Employee_Designation";
import moduleService from "@/services/module.service";
import sweet_alert from "@/common/sweet";
import designationService from "@/services/designation.service";
import branchService from "@/services/branch.service";
export default {
  name: "module_role_userpermission",
  data() {
    return {
      permissionModule: new permission_module(),
      branchName: new branch(),
      employeeDesignation: new employee_Designation(),
      showdate: false,
      role: [],
      designation: [],
      branchData: [],
    };
  },

  methods: {
    updatePermissionBranch(appPermission, designation) {
      this.branchName = appPermission;
      this.employeeDesignation = designation;
      console.log(this.branchName);
      console.log(this.employeeDesignation);
    },
    async updateUserBranchData() {
      this.updateUserBranch();
    },
    updateUserBranch() {
      userPermission.assign_branch_to_user(this.branchName).then(
        (response) => {
          console.log(response);
          // branch
          if (response.data.error_msg != null) {
            sweet_alert.error_message(response.data.error_msg);
            console.log(response.data.error_msg);
          } else {
            sweet_alert.confirmation_box(response);
          }
        },
        (error) => {
          console.log(error);
        }
      );
      // employeeDesignation
      userPermission.assign_designation_to_user(this.employeeDesignation).then(
        (response) => {
          console.log(response);
          // role missing
          if (response.data.error_msg != null) {
            sweet_alert.error_message(response.data.error_msg);
            console.log(response.data.error_msg);
          } else {
            sweet_alert.confirmation_box(response);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    changeDesignation(event) {
      console.log(event.target.value);
      this.employeeDesignation.id = event.target.value;
      // this.branchName.branch_id = event.target.value;
    },

    changeModuleEvent(event) {
      console.log(event.target.value);
      this.branchName.branch_id = event.target.value;
      // console.log(this.permissionModule);
    },
    cleardata() {
      // this.branchName.loadModel("");
      // this.employeeDesignation.loadModel("");
      // this.branchData = [""];
    },
  },
  mounted() {
    branchService.get_branch_list().then((response) => {
      this.branchData = response.data;
      console.log(this.branchData);
    });
    designationService.get_designation_list().then((response) => {
      this.designation = response.data;
      console.log(this.designation);
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
