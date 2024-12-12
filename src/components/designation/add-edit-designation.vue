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
                    <h4 class="modal-title">
                      {{
                        designation_info.id
                          ? "Update Designation"
                          : "Create Designation"
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
                    <p style="display: none">{{ updateDesignation }}</p>
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- designation_id -->
                          <div class="col-md-12" v-if="designation_info.id">
                            <div class="input_field form-group">
                              <label>Designation ID</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="designation_id"
                                v-model="designation_info.id"
                                :disabled="designation_info.id"
                              />
                            </div>
                          </div>
                          <!-- designation_name -->
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Designation Name</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="designation_id"
                                v-model="designation_info.designation_name"
                              />
                            </div>
                          </div>
                          <!-- designation_short_name -->
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Designation Short Name</label>
                              <input
                                type="text"
                                style="width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="designation_id"
                                v-model="designation_info.short_name"
                              />
                            </div>
                          </div>
                        </div>

                        <!-- mobile_no && phone -->
                        <div class="row clearfix">
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Designation Grade</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="mobile_no"
                                v-model="designation_info.grade"
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
                      v-on:click.prevent="addData"
                    >
                      {{ designation_info.id ? "Update" : "Save" }}
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
import Cp_Employee_Designation from "@/models/Cp_Employee_Designation";
import DesignationService from "../../services/designation.service";
import confrim_box from "../../common/sweet";
import sweet_alert from "@/common/sweet";
export default {
  name: "designation",
  data() {
    return {
      designation_info: new Cp_Employee_Designation(),
      search: "",
      showdate: false,
    };
  },
  computed: {
    updateDesignation() {
      this.designation_info.loadModel(this.$store.state.auth.editMenu);
      return this.$store.state.auth.editMenu;
    },
  },
  methods: {
    async addData() {
      this.savedesignationInfo();
    },
    savedesignationInfo() {
      //   this.loading = true;
      DesignationService.createEditDesignation(this.designation_info).then(
        (response) => {
          if (response != null) {
            this.loading = false;
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
    cleardata() {
      this.designation_info.loadModel("");
    },
  },
};
</script>
