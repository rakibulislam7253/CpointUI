<template>
  <div>
    <div class="container-fluid">
      <div>
        <div class="col-12">
          <!-- /.card -->

          <div>
            <!--------------------------- Add modal & edit modal -------------------------->
            <createUpdateMenu @reload="getReload" />
          </div>
          <div class="d-flex">
            <!-- full table -->
            <div class="card-body w-75">
              <div class="card-header">
                <div>
                  <h5>Menu Master</h5>
                </div>
              </div>
              <div class="searchoption">
                <div>
                  <!-- <i
                    class="fas fa-search searchicon my-2"
                    style="color: rgb(171, 171, 207)"
                  ></i> -->
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
                    @click="addMenu()"
                  >
                    <i class="fas fa-plus"></i> Create menu
                  </button>
                </div>
              </div>

              <table class="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
                    <th>SL No</th>
                    <th>Menu Name</th>
                    <th>Menu Url</th>
                    <th>Icon</th>
                    <th>Order</th>
                    <th>Parent Menu</th>
                    <th>Module Name</th>

                    <th style="width: 8%; text-align: center">Action</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <!--  -->
                  <tr
                    v-for="(menu, index) in filteredRows.slice(
                      pageStart,
                      pageStart + countOfPage
                    )"
                    :key="menu.id"
                    style="font-size: 12px"
                  >
                    <td style="text-align: center; width: 6%">
                      <b>{{ (currPage - 1) * countOfPage + index + 1 }} </b>
                    </td>
                    <td>{{ menu.menu_title }}</td>
                    <td>{{ menu.navigate_url }}</td>
                    <td><i :class="[`${menu.menu_icon}`]"></i></td>
                    <td>{{ menu.menu_order }}</td>
                    <td>{{ menu.parent_menu_name }}</td>
                    <td>{{ menu.module_name }}</td>
                    <td style="display: flex; border: none" class="ml-2">
                      <button
                        type="button"
                        class="btn btn-xs"
                        data-toggle="modal"
                        data-target="#modal-default"
                        style="padding-right: 6px"
                        @click="editRow(menu)"
                      >
                        <i class="far fa-edit"></i>
                      </button>

                      <button
                        class="btn btn-xs ml-4"
                        @click="deleteRow(menu.menu_id, index)"
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
            <div class="w-25 mt-5">
              <menuView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import menuMasterService from "../../services/menuMaster.service";
import menuView from "../menuMaster/menuView.vue";
import createUpdateMenu from "./create&UpdateMenu.vue";
import Cp_Menu_Master from "@/models/Cp_Menu_Master";
import sweet_alert from "@/common/sweet";

export default {
  components: { menuView, createUpdateMenu },
  name: "menuMaster",
  data() {
    return {
      Cp_Menu_Master: new Cp_Menu_Master(),
      countOfPage: 15, //Number of items per page
      currPage: 1, // Current page number
      filter_name: "",
      rows: [],
      menuIdPass: [],
      api: "Menu/delete-menu_by_id",
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
      var objectdata = this.rows.filter((data) =>
        data.department_name.toLowerCase().includes(this.search.toLowerCase())
      );
      this.rows = objectdata;
      console.log(objectdata);
    },
    addMenu() {
      console.log("addMenu");
    },
    editRow(menu_id) {
      console.log(menu_id);
      this.$store.dispatch("auth/editMenu", menu_id);
    },

    deleteRow(id, index) {
      this.haveID = id;
      console.log(this.haveID);
      sweet_alert.delete_box(id, this.api);
      this.rows.splice(index, 1);
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
        ? this.rows.filter(function (d) {
            return d.name.toLowerCase().indexOf(filter_name) > -1;
          })
        : this.rows;
    },
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function () {
      return Math.ceil(this.filteredRows.length / this.countOfPage);
    },
  },
  mounted() {
    menuMasterService.get_menu_list().then((response) => {
      if (response.data != null) {
        this.rows = response.data;
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
  font-size: 14px;
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
  margin-left: 17%;
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
/* // Medium devices (tablets, 768px and up) */
@media (max-width: 890px) {
  .menuView {
    margin-top: -6%;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 900px) {
  .menu_MenuView {
    display: flex;
  }
}
</style>
