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
                    <p style="display: none">{{ roleUser }}</p>
                    <p style="display: none">{{ applicationRole }}</p>
                    <h4 class="modal-title" v-if="roleUser.make_by">
                      Application Role Update
                    </h4>
                    <h4 class="modal-title" v-else>Application Role</h4>
                    <!-- <h4 class="modal-title">
                        {{ roleUser }}
                        Application Role
                        </h4> -->
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
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- Role Id -->
                          <div class="col-md-12">
                            <label>Application Name</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeModuleEvent($event)">
                                <option value="" v-if="applicationRole">
                                  {{ applicationRole.module_name }}
                                </option>
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
                          <!-- Role Name -->
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>User Role</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="roleName"
                                v-model="applicationRole.role_name"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <label>Api Access Role</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Menu_Master.module_id" -->
                              <select @change="changeAccessRoleEvent($event)">
                                <option value="" v-if="applicationRole">
                                  {{ applicationRole.api_access_role }}
                                </option>
                                <option value="" v-else>api_access_role</option>
                                <option
                                  v-for="roleName in role"
                                  :key="roleName.name"
                                  :value="roleName.name"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ roleName.name }}
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
                      v-on:click.prevent="cleardata"
                    >
                      Close
                    </button>
                    <div v-if="roleUser.make_by">
                      <button
                        type="button"
                        class="btn btn-success btn-sm"
                        data-dismiss="modal"
                        v-on:click.prevent="updateData"
                      >
                        Update
                      </button>
                    </div>
                    <div v-else>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import aplicationRole from "@/models/create_update_application_roles";
import roleService from "@/services/role.service";
import sweet_alert from "@/common/sweet";
import moduleService from "@/services/module.service";
export default {
  name: "applicationRoleCreate",
  data() {
    return {
      applicationRole: new aplicationRole(),
      search: "",
      showdate: false,
      modules_list: [],
      role: [],
    };
  },
  computed: {
    roleUser() {
      this.applicationRole.loadModel(this.$store.state.auth.module_setting);
      return this.$store.state.auth.module_setting;
    },
  },
  methods: {
    changeModuleEvent(event) {
      console.log(event.target.value);
      this.applicationRole.module_id = event.target.value;
    },
    changeAccessRoleEvent(event) {
      console.log(event.target.value);
      this.applicationRole.api_access_role = event.target.value;
    },
    async addData() {
      this.saveCreateRoleInfo();
    },
    async updateData() {
      this.saveCreateRoleInfo();
    },
    saveCreateRoleInfo() {
      console.log(this.applicationRole);
      moduleService
        .create_update_application_roles(this.applicationRole)
        .then((response) => {
          console.log(response);
          if (response.data != null) {
            sweet_alert.confirmation_box(response);
          } else {
            sweet_alert.error_message("Response not found!");
          }
          this.$emit("reload");
        });
    },

    cleardata() {
      this.applicationRole.loadModel("");
      this.$emit("reload");
    },
  },
  mounted() {
    roleService.get_roles().then((response) => {
      this.role = response.data;
      console.log(this.role);
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
