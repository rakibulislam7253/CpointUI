<!-- eslint-disable prettier/prettier -->
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
                      {{ department.make_by ? "Update Department" : "Create Department" }}
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
                    <p class="d-none">
                      {{ updateDepartment }}
                    </p>
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- branch_id -->
                          <div class="col-md-12" v-if="department.id">
                            <div class="input_field form-group">
                              <label>Department ID</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="branch_id"
                                v-model="this.$store.state.auth.editMenu.id"
                                disabled
                              />
                            </div>
                          </div>
                          <!-- branch_name -->
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Depaerment Name</label>
                              <input
                                type="text"
                                style="width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="branch_id"
                                v-model="department.department_name"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row clearfix">
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Department Short Name</label>
                              <input
                                type="text"
                                style="width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="branch_short_name"
                                v-model="department.short_name"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="input_field form-group">
                              <label>Group Email</label>
                              <input
                                type="text"
                                style="width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="branch_short_name"
                                v-model="department.email"
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
                      {{ department.id ? "Update" : "Save" }}
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
import Cp_Department_Info from "@/models/Cp_Department_Info";
import DepartmentService from "../../services/department.service";
import confrim_box from "../../common/sweet";
export default {
  name: "department",
  data() {
    return {
      department: new Cp_Department_Info(),
      branchData: [],
      search: "",
      showdate: false,
    };
  },

  methods: {
    async addData() {
      this.saveDepartmentInfo();
    },
    saveDepartmentInfo() {
      //   this.loading = true;

      DepartmentService.createEditDepartment(this.department).then(
        (response) => {
          this.loading = false;
          confrim_box.confirmation_box(response);
        }
      );
    },
    cleardata() {
      // this.$store.state.auth.editMenu = "";
      this.department.loadModel("");
    },
  },
  computed: {
    updateDepartment() {
      this.department.loadModel(this.$store.state.auth.editMenu);
      return this.$store.state.auth.editMenu;
    },
  },
};
</script>

<style>
@import "../../assets/Css/department/department.css";
</style>
