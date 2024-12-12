<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->

            <div class="modal fade" id="modal-default">
              <div class="modal-dialog modal-xm">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <!-- <h4 class="modal-title" v-if="Cp_data == 'Cp_Menu_Master'">
                      Update Menu
                    </h4> -->
                    <div>
                      <h4 class="modal-title">
                        {{
                          Cp_Menu_Master.menu_id ? "Update Menu" : "Create Menu"
                        }}
                      </h4>
                    </div>
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
                    <p style="display: none">{{ updateMenu }}</p>
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Menu title</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Menu_Master.menu_title"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- module_id && parent menu -->
                        <div class="row clearfix">
                          <!-- module_id -->
                          <div class="col-md-12">
                            <label>Module Id</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <!-- v-model="Cp_Menu_Master.module_id" -->
                              <select @change="changeModuleEvent($event)">
                                <option value="">Select module Id</option>
                                <option
                                  v-for="moduleId in moduleList"
                                  :key="moduleId.id"
                                  :value="moduleId.module_id"
                                >
                                  <!-- {{ moduleId.module_id }} -->
                                  {{ moduleId.module_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <!-- parent menu -->
                          <div class="col-md-12">
                            <label>Parent menu</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <select @change="changeParentEvent($event)">
                                <option value="">Select Parent menu</option>
                                <option
                                  v-for="perentMenu in perentMenuList"
                                  :key="perentMenu.id"
                                  :value="perentMenu.menu_id"
                                >
                                  {{ perentMenu.menu_title }}
                                </option>
                              </select>
                              <!-- update -->
                            </div>
                          </div>
                        </div>
                        <!-- Navigation URL && menu icon -->
                        <div class="row clearfix">
                          <!-- Navigation URL -->
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Navigation Url</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Menu_Master.navigate_url"
                              />
                            </div>
                          </div>
                          <!-- menu_icon -->
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Menu_icon</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Menu_Master.menu_icon"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- menu Order -->
                        <div class="row clearfix">
                          <!-- menu Order -->
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label> Menu Order</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="Cp_Menu_Master.menu_order"
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
                    <div v-if="Cp_Menu_Master.menu_id">
                      <button
                        type="button"
                        class="btn btn-success btn-sm"
                        data-dismiss="modal"
                        v-on:click.prevent="update_menu"
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
import Cp_Menu_Master from "@/models/Cp_Menu_Master";
import confrim_box from "../../common/sweet";
import moduleService from "@/services/module.service";
import menuMasterService from "../../services/menuMaster.service";
import sweet_alert from "@/common/sweet";
export default {
  name: "createMenu",
  data() {
    return {
      Cp_Menu_Master: new Cp_Menu_Master(),
      perentMenuList: [],
      moduleList: [],
      menuList: [],
      search: "",
      showdate: false,
    };
  },
  computed: {
    updateMenu() {
      this.Cp_Menu_Master.loadModel(this.$store.state.auth.editMenu);
      return this.$store.state.auth.editMenu;
    },
  },
  mounted() {
    moduleService.get_module_list().then((response) => {
      if (response != null) {
        this.moduleList = response.data;
        this.childMenuList = response;
      } else {
        sweet_alert.error_message("Response not found!");
      }
    });
  },
  methods: {
    changeModuleEvent(event) {
      console.log(event.target.value);
      this.Cp_Menu_Master.module_id = event.target.value;
      var selectedModuleId = event.target.value;
      menuMasterService
        .get_parent_menu_list(selectedModuleId)
        .then((response) => {
          console.log(response.data);
          if (response != null) {
            this.perentMenuList = response.data;
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });
    },
    changeParentEvent(event) {
      console.log(event.target.value);
      this.Cp_Menu_Master.parent_menu_id = event.target.value;
    },

    async addData() {
      this.saveCreateMenuInfo();
    },
    async update_menu() {
      this.saveUpdateMenuInfo();
    },
    saveCreateMenuInfo() {
      //   this.loading = true;
      menuMasterService.createMenu(this.Cp_Menu_Master).then(
        (response) => {
          if (response != null) {
            this.$emit("reload");
            confrim_box.confirmation_box(response);
          } else {
            sweet_alert.error_message("Response not found!");
          }
        },
        (error) => {
          this.loading = false;
          sweet_alert.error_message(error.message);
        }
      );
    },
    saveUpdateMenuInfo() {
      menuMasterService.updateMenu1(this.Cp_Menu_Master).then(
        (response) => {
          if (response != null) {
            // this.perentMenuList = response.data;
            confrim_box.confirmation_box(response);
            sweet_alert.error_message("Menu Update Successfully");
            this.$emit("reload");
          } else {
            sweet_alert.error_message("Response not found!");
          }
        },
        (error) => {
          sweet_alert.error_message("Response not found!" + error.message);
        }
      );
    },
    cleardata() {
      this.Cp_Menu_Master.loadModel("");
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

tbody {
  font-family: var(
    --ut-base-font-family,
    var(--a-base-font-family, sans-serif)
  );
}

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
