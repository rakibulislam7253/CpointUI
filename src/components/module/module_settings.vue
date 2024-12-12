<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->

            <div class="modal fade" id="modal-primary">
              <div class="modal-dialog modal-lg">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <h4 class="modal-title" v-if="application_setting.make_by">
                      Application Setting Update
                    </h4>
                    <h4 class="modal-title" v-else>Application Setting</h4>
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
                    <p style="display: none">{{ Module_setting }}</p>
                    <p style="display: none">{{ update_Module_setting }}</p>
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- Module_id -->
                          <div v-if="module_info.module_id" class="col-md-6">
                            <div class="input_field form-group">
                              <label>Module Id</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="module_info.module_id"
                                disabled
                              />
                            </div>
                          </div>
                          <!-- menu-title -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Application Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="module_info.module_name"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <!-- short name && icon -->
                        <div class="row clearfix">
                          <div class="col-md-6">
                            <label>FTP Location</label>
                            <input
                              style="width: 100%; margin-top: -8px"
                              type="text"
                              class="form-control form-control-sm"
                              id="menu_id"
                              v-model="application_setting.ftp_location"
                            />
                          </div>

                          <div class="col-md-6">
                            <label>FTP Folder Name</label>
                            <input
                              style="width: 100%; margin-top: -8px"
                              type="text"
                              class="form-control form-control-sm"
                              id="menu_id"
                              v-model="application_setting.ftp_folder_nm"
                            />
                          </div>

                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>File Path</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="application_setting.save_filepath"
                              />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Local Decrypt File Path</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="
                                  application_setting.local_decrypt_filepath
                                "
                              />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Local File Path</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="application_setting.local_filepath"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Ftp UserName</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="application_setting.ftp_user_nm"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Password</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="menu_id"
                                v-model="application_setting.ftp_password"
                              />
                            </div>
                          </div>
                          <!-- menu Order -->

                          <div class="d-flex mt-4 ml-3">
                            <div class="input_field form-group">
                              <input
                                type="checkbox"
                                v-model="application_setting.ftp_flag"
                              />
                              <label class="ml-2"> Ftp Flag</label>
                            </div>

                            <div class="input_field form-group ml-4">
                              <input
                                type="checkbox"
                                v-model="application_setting.encrypt_flag"
                              />
                              <label class="ml-2"> Encrypt Flag</label>
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
                    <div>
                      <div v-if="application_setting.make_by">
                        <button
                          type="button"
                          class="btn btn-success btn-sm"
                          data-dismiss="modal"
                          v-on:click.prevent="application_sett_create"
                        >
                          Update
                        </button>
                      </div>
                      <div v-else>
                        <button
                          type="button"
                          class="btn btn-success btn-sm"
                          data-dismiss="modal"
                          v-on:click.prevent="application_sett_create"
                        >
                          Save
                        </button>
                      </div>
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
import module_setting from "@/models/module_setting";
export default {
  name: "department",
  data() {
    return {
      module_info: new Cp_Module_Info(),
      application_setting: new module_setting(),
      user_info: JSON.parse(localStorage.getItem("user")),
      module_info_list: "",
      list: "",
    };
  },
  computed: {
    Module_setting() {
      this.module_info.loadModel(this.$store.state.auth.editMenu);
      return this.$store.state.auth.editMenu;
    },
    update_Module_setting() {
      console.log(this.$store.state.auth.module_setting);
      if (this.$store.state.auth.module_setting != null) {
        this.application_setting.loadModel(
          this.$store.state.auth.module_setting
        );
      }
      return this.$store.state.auth.module_setting;
    },
  },
  methods: {
    async application_sett_create() {
      this.CreateApplicationInfo();
    },
    CreateApplicationInfo() {
      this.loading = true;
      this.application_setting.module_id = this.module_info.module_id;
      this.application_setting.make_by = this.user_info.userId;
      this.application_setting.auth_1st_by = "";
      this.application_setting.auth_1st_dt = "";
      this.application_setting.auth_2nd_by = "";
      this.application_setting.auth_2nd_dt = "";
      this.application_setting.make_dt = "";

      if (this.application_setting.ftp_flag == true) {
        this.application_setting.ftp_flag = "1";
      } else {
        this.application_setting.ftp_flag = "0";
      }
      if (this.application_setting.encrypt_flag == true) {
        this.application_setting.encrypt_flag = "1";
      } else {
        this.application_setting.encrypt_flag = "0";
      }
      console.log(this.application_setting);
      moduleService
        .module_document_upload_configuration(this.application_setting)
        .then(
          (response) => {
            console.log(response.data.result_id);
            if (response.data.result_id) {
              sweet_alert.confirmation_box(response);
              this.$emit("reload");
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

    cleardata() {
      this.module_info.loadModel("");
      this.application_setting.loadModel("");
      this.$emit("reload");
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
  margin-top: -8px;
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
label {
  font-size: 14px;
}
</style>
