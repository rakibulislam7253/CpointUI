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
                <div><h5>Branch Information</h5></div>
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
import DataTableVue from "@/components/Datatable/datatable.vue";
import Cp_Branch_Info from "@/models/Cp_Branch_Info";
import sweet_alert from "@/common/sweet";
import { ref } from "vue";
const dataTable = ref(0);
export default {
  components: { DataTableVue },
  name: "branch",
  data() {
    return {
      Cp_Branch_Info: new Cp_Branch_Info(),
      api: "Branch/delete-branch_by_id",
      columns: [
        {
          title: "#",
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
          },
        },
        { title: "Branch Name", data: "branch_name" },
        { title: "Phone", data: "mobile_no" },
        { title: "Address", data: "address1" },
        { title: "Email", data: "email" },
      ],
    };
  },

  methods: {
    getBranchInfo() {
      branchService.get_branch_list().then((response) => {
        if (response != null) {
          // this.model.branchData = response.data;
          this.$refs.dataTable.getTableData(response.data);
        } else {
          sweet_alert.error_message("Data not found!");
        }
      });
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
DataTableVue {
  font-size: 10px;
}
@import "../../assets/Css/branch/branch.css";
</style>
