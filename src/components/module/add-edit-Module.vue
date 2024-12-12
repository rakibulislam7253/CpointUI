<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->

            <div class="modal fade" id="modal-default">
              <div class="modal-dialog modal-lg">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <h4 class="modal-title">
                      {{
                        module_info.module_id
                          ? "Update Module"
                          : "Create Module"
                      }}
                    </h4>
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
                    <p style="display: none">{{ updateModule }}</p>
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- Module_id -->
                          <!-- menu-title -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Module Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="module_info.module_name"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label>Short Name</label>
                            <input
                              style="width: 100%; margin-top: -8px"
                              type="text"
                              class="form-control form-control-sm"
                              id="menu_id"
                              v-model="module_info.module_short_name"
                            />
                          </div>
                        </div>
                        <!-- short name && icon -->
                        <div class="row clearfix">
                          <!-- short Name -->

                          <!-- Icon -->
                          <div class="col-md-6">
                            <label>Icon</label>
                            <input
                              style="width: 100%; margin-top: -8px"
                              type="text"
                              class="form-control form-control-sm"
                              id="menu_id"
                              v-model="module_info.module_font_awesome"
                            />
                          </div>
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>API</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="module_info.module_api_ip"
                              />
                            </div>
                          </div>
                        </div>
                        <!--  API && Navigation URL  -->
                        <div class="row clearfix">
                          <!-- Navigation URL -->

                          <!-- Navigation URL -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Navigation URL</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="module_info.module_nevigation_link"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label> Color</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="module_info.module_color_class"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- menu Order -->
                        <div class="row clearfix">
                          <!-- menu Order -->

                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label> Module Order</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="module_info.module_order"
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
                    <div v-if="module_info.module_id">
                      <button
                        type="button"
                        class="btn btn-success btn-sm"
                        data-dismiss="modal"
                        v-on:click.prevent="update_module"
                      >
                        Update
                      </button>
                    </div>
                    <div v-else>
                      <button
                        type="button"
                        class="btn btn-success btn-sm"
                        data-dismiss="modal"
                        v-on:click.prevent="create_module"
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
import Cp_Module_Info from "@/models/Cp_Module_Info";
import sweet_alert from "../../common/sweet";
import moduleService from "@/services/module.service";
export default {
  name: "department",
  data() {
    return {
      module_info: new Cp_Module_Info(),
      search: "",
      showdate: false,
    };
  },
  computed: {
    updateModule() {
      this.module_info.loadModel(this.$store.state.auth.editMenu);
      return this.$store.state.auth.editMenu;
    },
  },
  methods: {
    async create_module() {
      this.saveCreateModuleInfo();
    },
    async update_module() {
      this.saveUpdateModuleInfo();
    },
    saveCreateModuleInfo() {
      this.loading = true;
      moduleService.createModule(this.module_info).then(
        (response) => {
          if (response != null) {
            this.$emit("reload");
            this.loading = false;
            sweet_alert.confirmation_box(response);
          } else {
            sweet_alert.error_message("Response not found!");
          }
        },
        (error) => {
          this.loading = false;
          sweet_alert.error_message("Internal server error!" + error.message);
        }
      );
    },
    saveUpdateModuleInfo() {
      this.loading = true;
      moduleService.update_module_info(this.module_info).then(
        (response) => {
          if (response.data != null) {
            this.$emit("reload");
            this.loading = false;
            sweet_alert.confirmation_box(response);
          } else {
            sweet_alert.error_message("Response not found!");
          }
        },
        (error) => {
          this.loading = false;
          sweet_alert.error_message("Internal server error" + error.message);
        }
      );
    },
    cleardata() {
      this.module_info.loadModel("");
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
