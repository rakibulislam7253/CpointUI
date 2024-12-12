<template>
  <div class="modal fade" id="modal-primary">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-default">
        <div class="modal-header">
          <h4 class="modal-title">Update Menu</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>{{ Cp_data }}</p>
        <p>{{ updateMenu }}</p>
        <div class="modal-body">
          <form>
            <div class="card-body">
              <div class="row clearfix">
                <!-- branch_id -->
                <div class="col-md-6">
                  <div class="input_field form-group">
                    <label>Menu Id</label>
                    <input
                      style="width: 100%; margin-top: -8px"
                      type="text"
                      class="form-control form-control-sm"
                      id="menu_id"
                      v-model="Cp_Menu_Master.menu_id"
                      disabled
                    />
                    <!-- <p>{{ Cp_Menu_Master.menu_id }}</p> -->
                  </div>
                </div>
                <!-- menu-title -->
                <div class="col-md-6">
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
                <div class="col-md-6">
                  <label>Module Id</label>
                  <!-- <p>{{ Cp_Menu_Master.menu_id }}</p> -->
                  <div
                    class="input_field select_option"
                    style="margin-top: -10px"
                  >
                    <select @change="changeModuleEvent($event)">
                      <option>{{ Cp_Menu_Master.module_id }}</option>
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
                <div class="col-md-6">
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
                        <!-- {{ perentMenu.menu_id }} -->
                        {{ perentMenu.menu_title }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- Navigation URL && menu icon -->
              <div class="row clearfix">
                <!-- Navigation URL -->
                <div class="col-md-6">
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
                <div class="col-md-6">
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
                <div class="col-md-6">
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
          <button
            type="button"
            class="btn btn-success btn-sm"
            data-dismiss="modal"
            v-on:click.prevent="editData"
          >
            Update
          </button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
<script>
import Cp_Menu_Master from "@/models/Cp_Menu_Master";
import menuMasterService from "../../services/menuMaster.service";
import moduleService from "@/services/module.service";
import sweet_alert from "@/common/sweet";
export default {
  props: ["Cp_data"],
  data() {
    return {
      Cp_Menu_Master: new Cp_Menu_Master(),
      perentMenuList: [],
      moduleList: [],
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
          if (response != null) {
            this.perentMenuList = response.data;
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });
    },
    changeParentEvent(event) {
      this.Cp_Menu_Master.parent_menu_id = event.target.value;
    },

    async editData() {
      this.saveUpdateMenuInfo();
    },
    saveUpdateMenuInfo() {
      menuMasterService.updateMenu1(this.Cp_Menu_Master).then(
        (response) => {
          if (response != null) {
            this.perentMenuList = response.data;
          } else {
            sweet_alert.error_message("Response not found!");
          }
        },
        (error) => {
          sweet_alert.error_message("Response not found!" + error.message);
        }
      );
    },
  },
};
</script>
