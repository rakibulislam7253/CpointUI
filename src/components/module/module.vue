<template>
  <div>
    <div class="container-fluid">
      <div>
        <div class="col-12">
          <!-- /.card -->

          <div>
            <!--------------------------- Add & edit module -------------------------->
            <createModule @reload="getReload" />
            <applicationSetting @reload="getReload" />
          </div>
          <div>
            <!-- full table -->
            <div class="card-body">
              <div class="card-header">
                <div>
                  <h5>Application</h5>
                </div>
              </div>
              <div class="searchoption">
                <div>
                  <i
                    class="fas fa-search searchicon my-2"
                    style="color: rgb(171, 171, 207)"
                  ></i>
                  <input
                    class="form-control form-control-sm"
                    v-model.trim="search"
                    id="myinput"
                    type="text"
                    placeholder="Search..."
                    @input="searchinput"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-warning btn-sm add_menu"
                    data-toggle="modal"
                    data-target="#modal-default"
                    data-bs-whatever="@mdo"
                  >
                    <i class="fas fa-plus"></i> Create Application
                  </button>
                </div>
              </div>

              <table class="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
                    <th>SL No</th>
                    <th>Id</th>
                    <th>Application Name</th>
                    <th>Short Name</th>
                    <th>Icon</th>
                    <th>Api</th>
                    <th>Nevigation</th>
                    <th>color</th>
                    <th>Application Order</th>

                    <th style="width: 8%; text-align: center">Action</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <!--  -->
                  <tr
                    v-for="(moduleData, index) in filteredRows.slice(
                      pageStart,
                      pageStart + countOfPage
                    )"
                    :key="moduleData.id"
                    style="font-size: 12px"
                  >
                    <td style="text-align: center; width: 5%">
                      <b>{{ (currPage - 1) * countOfPage + index + 1 }} </b>
                    </td>
                    <td>{{ moduleData.module_id }}</td>
                    <td>{{ moduleData.module_name }}</td>
                    <td>{{ moduleData.module_short_name }}</td>
                    <td>
                      <i :class="[`${moduleData.module_font_awesome}`]"></i>
                    </td>
                    <td>{{ moduleData.module_api_ip }}</td>
                    <td>{{ moduleData.module_nevigation_link }}</td>
                    <td>{{ moduleData.module_color_class }}</td>
                    <td>{{ moduleData.module_order }}</td>
                    <td style="display: flex; border: none" class="ml-2">
                      <button
                        type="button"
                        class="btn btn-xs"
                        data-toggle="modal"
                        data-target="#modal-default"
                        style="padding-right: 6px"
                        @click="editRow(moduleData.module_id)"
                      >
                        <i class="far fa-edit"></i>
                      </button>

                      <button
                        class="btn btn-xs ml-2"
                        @click="deleteRow(moduleData.module_id, index)"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                      <!-- <button
                        class="btn btn-xs ml-2"
                        @click="moduleSetting(moduleData.module_id)"
                      >
                        <i class="fa fa-cog"></i>
                      </button> -->
                      <button
                        type="button"
                        class="btn btn-xs ml-2"
                        data-toggle="modal"
                        data-target="#modal-primary"
                        @click="moduleSetting(moduleData.module_id)"
                      >
                        <i class="fa fa-cog"></i>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Module";
import axios from "axios";
import moduleService from "../../services/module.service";
import createModule from "./add-edit-Module.vue";
import applicationSetting from "./module_settings.vue";
import Cp_Module_Info from "@/models/Cp_Module_Info";
import sweet_alert from "@/common/sweet";
import module_setting from "@/models/module_setting";
export default {
  components: { createModule, applicationSetting },
  name: "menuMaster",
  data() {
    return {
      Cp_Module_Info: new Cp_Module_Info(),
      module_setting: new module_setting(),
      countOfPage: 15, //Number of items per page
      currPage: 1, // Current page number
      filter_name: "",
      modules_list: [],
      menuIdPass: [],
      update_module_setting: [],
      api: "Module/delete_module_by_id",
      // moduleList: [],
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
    searchinput() {
      console.log(this.search);
      var objectdata = this.modules_list.filter((data) =>
        data.department_name.toLowerCase().includes(this.search.toLowerCase())
      );
      this.modules_list = objectdata;
      console.log(objectdata);
    },
    editRow(module_id) {
      console.log(module_id);
      axios
        .get(API_URL + `/get_module_by_id?id=${module_id}`)
        .then((response) => {
          if (response.data != null) {
            this.Cp_Module_Info.loadModel(response.data[0]);
            this.modulePass = this.Cp_Module_Info;
            this.$store.dispatch("auth/editMenu", this.modulePass);
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });
    },

    deleteRow(id, index) {
      this.haveID = id;
      console.log(this.haveID);
      sweet_alert.delete_box(id, this.api);
      this.modules_list.splice(index, 1);
    },
    moduleSetting(module_setting_id) {
      console.log(module_setting_id);
      axios
        .get(API_URL + `/get_module_by_id?id=${module_setting_id}`)
        .then((response) => {
          // console.log(response);
          if (response.data != null) {
            this.Cp_Module_Info.loadModel(response.data[0]);
            this.modulePass = this.Cp_Module_Info;
            this.$store.dispatch("auth/editMenu", this.modulePass);
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });
      moduleService
        .get_document_upload_configure_by_module(module_setting_id)
        .then((response2) => {
          // console.log("configure_by_module", response.data);
          if (response2.data != null) {
            this.update_module_setting = response2.data[0];
            this.$store.dispatch(
              "auth/module_setting",
              this.update_module_setting
            );
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });
    },

    cleardata() {
      (this.branch_id = ""), (this.branch_name = "");
      this.phone_no = "";
      this.address = "";
      this.email = "";
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
    filteredRows: function () {
      var filter_name = this.filter_name.toLowerCase();
      return this.filter_name.trim() !== ""
        ? this.modules_list.filter(function (d) {
            return d.name.toLowerCase().indexOf(filter_name) > -1;
          })
        : this.modules_list;
    },
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function () {
      return Math.ceil(this.filteredRows.length / this.countOfPage);
    },
  },
  mounted() {
    moduleService.get_module_list().then((response) => {
      if (response.data != null) {
        this.modules_list = response.data;
        console.log(this.modules_list);
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
