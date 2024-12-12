<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->

            <div class="modal fade" id="modal-default">
              <div class="modal-dialog modal-md">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <h4 class="modal-title">
                      <!-- Create Module & Role -->
                      {{
                        permissionModule.module_id
                          ? "Update Role"
                          : "Create Module"
                      }}
                    </h4>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      @click="cleardata()"
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
                            <label>Module Id</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <!-- <select
                                v-if="this.permissionModule.module_id"
                                disabled
                              >
                                <option>
                                  {{ this.permissionModule.module_name }}
                                </option>
                              </select> -->

                              <select
                                @change="changeModuleEvent($event)"
                                v-if="this.permissionModule.make_by"
                              >
                                <option>
                                  {{ this.permissionModule.module_name }}
                                </option>
                                <option>--Select Application--</option>
                                <option
                                  v-for="moduleId in modules_list"
                                  :key="moduleId.id"
                                  :value="moduleId.module_id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ moduleId.module_name }}
                                </option>

                                <!-- <option value="">Select Module Id</option> -->
                              </select>
                              <select
                                @change="changeModuleEvent($event)"
                                v-else
                              >
                                <!-- <option>
                                  {{ this.permissionModule.module_name }}
                                </option> -->
                                <option>--Select Application--</option>
                                <option
                                  v-for="moduleId in modules_list"
                                  :key="moduleId.id"
                                  :value="moduleId.module_id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ moduleId.module_name }}
                                </option>

                                <!-- <option value="">Select Module Id</option> -->
                              </select>
                            </div>
                          </div>
                          <!-- Role Name -->
                          <div class="col-md-6">
                            <label>Role Id</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select
                                @change="changeRoleEvent($event)"
                                v-if="this.permissionModule.make_by"
                              >
                                <option>
                                  {{ this.permissionModule.role_name }}
                                </option>
                                <option value="">Select Role Id</option>
                                <option
                                  v-for="roleId in role"
                                  :key="roleId.roleId"
                                  :value="roleId.role_id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ roleId.role_name }}
                                  <!-- {{ roleId }} -->
                                </option>
                              </select>
                              <select @change="changeRoleEvent($event)" v-else>
                                <option value="">Select Role Id</option>
                                <option
                                  v-for="roleId in role"
                                  :key="roleId.roleId"
                                  :value="roleId.role_id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ roleId.role_name }}
                                  <!-- {{ roleId }} -->
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
                      @click="cleardata()"
                    >
                      Close
                    </button>
                    <div>
                      <button
                        type="button"
                        class="btn btn-success btn-sm"
                        data-dismiss="modal"
                        v-on:click.prevent="addData"
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
import premissionModule from "@/services/permissionModule.service";
import permission_module from "@/models/permission_module";
import moduleService from "@/services/module.service";
import sweet_alert from "@/common/sweet";
export default {
  name: "module_role_userpermission",
  data() {
    return {
      permissionModule: new permission_module(),
      showdate: false,
      role: [],
      modules_list: [],
    };
  },

  methods: {
    moduledataList() {
      moduleService.get_module_list().then((response) => {
        if (response.data != null) {
          this.modules_list = response.data;
        } else {
          sweet_alert.error_message("Response not found!");
        }
      });
    },
    // props data for userPermission
    updatePermission(appPermission) {
      this.permissionModule = appPermission;
      console.log(appPermission);
      console.log(this.permissionModule);
      this.moduledataList();
    },
    async addData() {
      this.updateModuleChange();
    },
    async updateModule() {
      this.updateModuleChange();
    },
    updateModuleChange() {
      console.log(this.permissionModule);
      console.log(this.permissionModule.permission_id);
      console.log(this.permissionModule.user_id);
      console.log(this.permissionModule.module_id);
      console.log(this.permissionModule.role_id);
      premissionModule
        .update_module_role_for_user(
          this.permissionModule.permission_id,
          this.permissionModule.user_id,
          this.permissionModule.module_id,
          this.permissionModule.role_id
        )
        .then(
          (response) => {
            console.log(response);
            // role missing
            if (response.data.error_msg != null) {
              sweet_alert.error_message(response.data.error_msg);
              this.permissionModule.loadModel("");
              console.log(response.data.error_msg);
            } else {
              sweet_alert.confirmation_box(response);
              this.permissionModule.loadModel("");
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
    cleardata() {
      // this.permissionModule.loadModel("");
      this.permissionModule = new permission_module();
      this.modules_list = [""];
      this.role = [""];
      this.moduledataList();
      // this.$emit("reload");
    },

    changeRoleEvent(event) {
      console.log(event.target.value);
      this.permissionModule.role_id = event.target.value;
    },

    changeModuleEvent(event) {
      console.log(event.target.value);
      this.permissionModule.module_id = event.target.value;
      this.permissionModule.user_id = this.$store.state.auth.userid;
      moduleService
        .get_application_roles_by_module(event.target.value)
        .then((response) => {
          console.log(response);
          if (response.data != null) {
            this.role = response.data;
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });

      console.log(this.permissionModule);
    },
  },
  mounted() {
    this.moduledataList();
    // moduleService.get_module_list().then((response) => {
    //   if (response.data != null) {
    //     this.modules_list = response.data;
    //   } else {
    //     sweet_alert.error_message("Response not found!");
    //   }
    // });
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
