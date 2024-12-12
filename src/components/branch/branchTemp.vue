<template>
  <div>
    <div class="container-fluid">
      <div>
        <div class="col-12">
          <!-- /.card -->

          <div class="card">
            <!--------------------------- Add modal and -------------------------->
            <addEditBranch />

            <!-- /.card-header -->
            <div class="card-body">
              <div class="card-header">
                <div>
                  Branch Information
                  <button
                    type="button"
                    class="btn btn-warning btn-sm add_domain float-right"
                    data-toggle="modal"
                    data-target="#modal-default"
                    data-bs-whatever="@mdo"
                  >
                    <i class="fas fa-plus"></i> Create Branch
                  </button>
                </div>
              </div>
              <DataTableVue
                :tableData="tableData"
                :tableColumns="columns"
                ref="dataTable"
              >
              </DataTableVue>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import branchService from "../../services/branch.service";
import addEditBranch from "./add-edit-branch.vue";
import DataTableVue from "@/components/Datatable/datatable.vue";
import Cp_Branch_Info from "@/models/Cp_Branch_Info";
import sweet_alert from "@/common/sweet";
import { ref } from "vue";
const dataTable = ref(0);
export default {
  components: { addEditBranch, DataTableVue },
  name: "branch",
  data() {
    return {
      Cp_Branch_Info: new Cp_Branch_Info(),
      api: "Branch/delete-branch_by_id",
      columns: [
        {
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
          },
        },
        { title: "Branch Name", data: "branch_name" },
        { title: "Phone", data: "mobile_no" },
        { title: "Address", data: "address1" },
        { title: "Email", data: "email" },
        {
          data: "branch_id",
          render: function (data, type, row, meta) {
            return '<button type="button" data-toggle="modal" data-bs-target="#staticBackdrop" data-target="#modal-default"  @click="alert("Bonhg");" style="padding-right: 6px"class="btn btn-xs"><i class="far fa-edit"></i></button><button type="button" class="btn btn-xs ml-3"><i class="fa fa-trash"></i></button>';
          },
        },
      ],
      model: {
        branchData: [],
        search: "",
        address: "",
        haveID: "",
        date: "",
        branch_id: "",
        phone_no: "",
        selected_Division: null,
        selected_District: null,
        selected_City: null,
        districts: [],
        cities: [],

        divisions: [
          {
            id: "1",
            name: "Barishal",

            districts: [
              {
                name: "b1",
              },
              {
                name: "b2",
              },
              {
                name: "b3",
              },
            ],
            lat: "22.701002",
            long: "90.353451",
          },
          {
            id: "2",
            name: "Chattogram",
            districts: [
              {
                name: "c1",
              },
              {
                name: "c2",
              },
              {
                name: "c3",
              },
            ],

            lat: "22.356851",
            long: "91.783182",
          },
          {
            id: "3",
            name: "Dhak",
            districts: [
              {
                name: "Gazi",
                cities: [
                  {
                    name: "Kal",
                  },
                  {
                    name: "Kapa",
                  },
                  {
                    name: "Sreepur",
                  },
                  {
                    name: "Kaliganj",
                  },
                ],
              },
              {
                name: "kishoreganj",
              },
              {
                name: "Manikganj",
              },
              {
                name: "Narayanganj",
              },
            ],

            lat: "23.810332",
            long: "90.412518",
          },
        ],
      },
    };
  },

  methods: {
    getBranchInfo() {
      branchService.get_branch_list().then((response) => {
        if (response != null) {
          this.model.branchData = response.data;
          this.$refs.dataTable.getTableData(response.data);
        } else {
          sweet_alert.error_message("Data not found!");
        }
      });
    },
    deleteRow(id, index) {
      alert("I am edit");
      this.haveID = id;
      console.log(this.haveID);
      sweet_alert.delete_box(id, this.api);
      this.model.branchData.splice(index, 1);
    },
    editRow(branch) {
      alert("I am edit");
      console.log(branch);
      this.branchIdPass = branch;
      this.$store.dispatch("auth/editMenu", this.branchIdPass);
      console.log(this.branchIdPass);
      console.log(this.Cp_Branch_Info.make_by);
    },
  },
  computed: {},
  mounted() {
    this.getBranchInfo();
  },
  created() {},
};
</script>

<style>
@import "../../assets/Css/branch/branch.css";
</style>
