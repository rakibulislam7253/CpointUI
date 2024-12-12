<template>
  <div>
    <div class="container-fluid">
      <div>
        <div>
          <!-- /.card -->

          <div>
            <!--------------------------- Add modal -------------------------->
            <createRole @reload="getReload" />
          </div>
          <div class="">
            <!-- full table -->
            <div class="card-body">
              <div class="card-header">
                <div>
                  <h5>User Role</h5>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <div class="searchoption">
                    <div>
                      <button
                        type="button"
                        class="btn btn-warning btn-sm add_menu"
                        data-toggle="modal"
                        data-target="#modal-default"
                        data-bs-whatever="@mdo"
                      >
                        <i class="fas fa-plus"></i> Create Role
                      </button>
                    </div>
                  </div>

                  <table
                    style="width: 120%"
                    class="table table-bordered table-striped table-sm"
                  >
                    <thead>
                      <tr>
                        <th>SL no</th>
                        <th>Name</th>
                        <th>NormalizedName</th>

                        <th style="width: 8%; text-align: center">Action</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      <!--  -->
                      <tr
                        v-for="(role, index) in filterRoleData.slice(
                          pageStart,
                          pageStart + countOfPage
                        )"
                        :key="role.id"
                        style="font-size: 12px"
                      >
                        <td style="text-align: center; width: 9%">
                          <b>{{ (currPage - 1) * countOfPage + index + 1 }} </b>
                        </td>
                        <td>{{ role.name }}</td>
                        <td>{{ role.normalizedName }}</td>
                        <td style="display: flex; border: none" class="ml-2">
                          <button
                            type="button"
                            class="btn btn-xs"
                            data-toggle="modal"
                            data-target="#modal-default"
                            style="padding-right: 6px"
                            @click="editRow(role)"
                          >
                            <i class="far fa-edit"></i>
                          </button>

                          <button
                            class="btn btn-xs ml-4"
                            @click="deleteRow(role.id, index)"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- pagination -->
                  <table style="width: 100%">
                    <div>
                      <ul class="pagination justify-content-end mt-2">
                        <li
                          class="page-item"
                          v-bind:class="{ disabled: currPage === 1 }"
                          @click.prevent="setPage(currPage - 1)"
                        >
                          <a class="page-link" href="">Prev</a>
                        </li>
                        <li
                          class="page-item"
                          v-for="n in totalPage"
                          v-bind:class="{ active: currPage === n }"
                          :key="n.id"
                          @click.prevent="setPage(n)"
                        >
                          <a class="page-link" href="">{{ n }}</a>
                        </li>
                        <li
                          class="page-item"
                          v-bind:class="{ disabled: currPage === totalPage }"
                          @click.prevent="setPage(currPage + 1)"
                        >
                          <a class="page-link" href="">Next</a>
                        </li>
                      </ul>
                    </div>
                  </table>
                </div>
                <div>
                  <div style="margin-left: 40%; margin-top: 2%">
                    <section class="content">
                      <div class="container-fluid">
                        <div class="row">
                          <div>
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3 class="card-title">
                                  Authorization Permissions
                                </h3>
                              </div>
                              <!-- /.card-header -->
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div
                                      class="position-relative p-3"
                                      style="
                                        height: 100%;
                                        background-color: rgb(214, 212, 205);
                                      "
                                    >
                                      <div class="ribbon-wrapper">
                                        <div class="ribbon bg-green">Admin</div>
                                      </div>
                                      Admin Permission <br />
                                      <small>
                                        <ol>
                                          <li>ribbon-wrapper</li>
                                          <li>ribbon-wrapper</li>
                                          <li>ribbon-wrapper</li>
                                        </ol>
                                      </small>
                                    </div>
                                  </div>
                                  <div class="col-sm-12 mt-3">
                                    <div
                                      class="position-relative p-3"
                                      style="
                                        height: 100%;
                                        background-color: rgb(255, 237, 237);
                                      "
                                    >
                                      <div class="ribbon-wrapper">
                                        <div class="ribbon bg-green">User</div>
                                      </div>
                                      User Permission <br />
                                      <small>
                                        <ol>
                                          <li>ribbon-wrapper</li>
                                          <li>ribbon-wrapper</li>
                                          <li>ribbon-wrapper</li>
                                        </ol>
                                      </small>
                                    </div>
                                  </div>
                                  <div class="col-sm-12 mt-3">
                                    <div
                                      class="position-relative p-3"
                                      style="
                                        height: 100%;
                                        background-color: rgb(241, 241, 241);
                                      "
                                    >
                                      <div class="ribbon-wrapper">
                                        <div class="ribbon bg-green">
                                          Manager
                                        </div>
                                      </div>
                                      Manager Permission <br />
                                      <small>
                                        <ol>
                                          <li>ribbon-wrapper</li>
                                          <li>ribbon-wrapper</li>
                                          <li>ribbon-wrapper</li>
                                        </ol>
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
                          </div>
                          <!-- /.col -->
                        </div>
                        <!-- /.row -->
                      </div>
                      <!-- /.container-fluid -->
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- sideOption -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import createRole from "../roleCetagory/createRole.vue";
import AdminRole from "@/models/AdminRole";
import sweet_alert from "@/common/sweet";
// import menuMasterService from "@/services/menuMaster.service";
import roleService from "@/services/role.service";
export default {
  components: { createRole },
  name: "roleMaster",
  data() {
    return {
      adminRole: new AdminRole(),
      countOfPage: 15, //Number of items per page
      currPage: 1, // Current page number
      filter_name: "",
      roleData: [],
      api: "Role/delete_role",
      model: {
        search: "",
        deleted: false,
        haveID: "",
        date: "",
      },
    };
  },

  methods: {
    getReload() {
      window.location.reload();
    },
    editRow(role_id) {
      this.adminRole.loadModel(role_id);
      this.role = this.adminRole;
      this.$store.dispatch("auth/editMenu", this.role);
      console.log(this.adminRole);
    },
    searchinput() {
      console.log(this.search);
      var objectdata = this.roleData.filter((data) =>
        data.department_name.toLowerCase().includes(this.search.toLowerCase())
      );
      this.roleData = objectdata;
      console.log(objectdata);
    },

    deleteRow(id, index) {
      this.haveID = id;
      console.log(this.haveID);
      sweet_alert.delete_box(id, this.api);
      this.roleData.splice(index, 1);
    },

    setPage: function (idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
  },
  // pegination
  computed: {
    filterRoleData: function () {
      var filter_name = this.filter_name.toLowerCase();
      return this.filter_name.trim() !== ""
        ? this.roleData.filter(function (d) {
            return d.name.toLowerCase().indexOf(filter_name) > -1;
          })
        : this.roleData;
    },
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function () {
      return Math.ceil(this.filterRoleData.length / this.countOfPage);
    },
  },
  mounted() {
    roleService.get_roles().then((response) => {
      console.log("Role User");
      console.log(response);
      if (response.data != null) {
        this.roleData = response.data;
        console.log("role data");
        console.log(this.roleData);
      } else {
        sweet_alert.error_message("Response not found!");
      }
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

tr th {
  color: #006bd8;
  text-align: center;
  /* font-weight: 600; */
}

td {
  color: black;
  text-align: center;
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
