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
                <div><h5>Department</h5></div>
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
import departmentService from "../../services/department.service";
import Cp_Department_Info from "@/models/Cp_Department_Info";
import DataTableVue from "@/components/Datatable/datatable.vue";
import sweet_alert from "@/common/sweet";
import { ref } from "vue";
const dataTable = ref(0);
export default {
  components: { DataTableVue },
  name: "department",
  data() {
    return {
      Cp_Department: new Cp_Department_Info(),
      columns: [
        {
          title: "#",
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
          },
        },
        { title: "Department Name", data: "department_name" },
        { title: "Short Name", data: "short_name" },
        { title: "Group Email", data: "email" },
        // { title: "Head Of Department", data: "hod" },
      ],
    };
  },

  methods: {
    getdepartmentInfo() {
      departmentService.get_department_list().then((response) => {
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
@import "../../assets/Css/department/department.css";
</style>
