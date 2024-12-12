<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div class="container-fluid">
      <div>
        <div class="col-12">
          <!-- /.card -->

          <div class="card">
            <!--------------------------- Add modal and -------------------------->
            <!-- /.card-header -->
            <div class="card-body">
              <div class="card-header">
                <div><h5>Designation</h5></div>
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
import designationService from "../../services/designation.service";
import Cp_Employee_Designation from "@/models/Cp_Employee_Designation";
import DataTableVue from "@/components/Datatable/datatable.vue";
import sweet_alert from "@/common/sweet";
import { ref } from "vue";
const dataTable = ref(0);
export default {
  components: { DataTableVue },
  name: "department",
  data() {
    return {
      Cp_designation: new Cp_Employee_Designation(),
      columns: [
        {
          title: "#",
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
          },
        },
        { title: "Department Name", data: "designation_name" },
        { title: "Short Name", data: "short_name" },
        // { title: "Group Email", data: "email" },
      ],
    };
  },

  methods: {
    getdepartmentInfo() {
      designationService.get_designation_list().then((response) => {
        if (response != null) {
          this.$refs.dataTable.getTableData(response.data);
        } else {
          sweet_alert.error_message("Response not found!");
        }
      });
    },
  },
  computed: {},
  mounted() {
    this.getdepartmentInfo();
  },
  created() {},
};
</script>

<style>
/* .dataTables_paginate .paginate_button {
  box-sizing: border-box;
  display: inline-block;
  min-width: 1.5em;
  padding: 0.5em 1em;
  margin-left: 2px;
  text-align: center;
  text-decoration: none !important;
  cursor: pointer;
  color: inherit !important;
  border: 1px solid transparent;
  border-radius: 2px;
  background: transparent;
} */
@import "../../assets/Css/department/department.css";
</style>
