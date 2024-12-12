<!-- eslint-disable prettier/prettier -->
<template>
    <section class="content">
        <div class="row">
            <div class="col-12">
                <DataTable :data="data" :columns="columns" class="table table-striped table-bordered display display nowrap" 
                    :options="{responsive: true, autowidth: true, select: false, dom: 'Bfrtip', language:{
                    search: 'Search', zeroRecords: 'No data found',
                    info: 'Showing of _START_ to _END_, _TOTAL_ records',
                    infoFiltered: '(Filtering the _MAX_ records.)',
                    paginate: { first: 'First', previous: 'Previous',next: 'Next',last: 'Last'}
                    }, buttons:buttons}" >
                </DataTable>
            </div>
        </div>
    </section>
</template>
<script>
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net-bs5";
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import branchService from "../../services/branch.service";
import print from "datatables.net-buttons/js/buttons.print";
import pdfmake from "pdfmake";
import sweet_alert from "@/common/sweet";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfmake.vfs = pdfFonts.pdfMake.vfs;
import "datatables.net-responsive-bs5";
import JsZip from "jszip";
window.JSZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);

export default {
  components: { DataTable },
  name: "DataTableVue",
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
    tableColumns: {
      type: Array,
      default() {
        return [];
      },
    },
    tableHeader: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      data: this.tableData,
      columns: this.tableColumns,
      buttons: [
        {
          title: "Reporte de productos",
          extend: "excelHtml5",
          text: '<i class="fas fa-file-excel"></i> Excel',
          className: "btn btn-success",
        },
        {
          title: "Reporte de productos",
          extend: "pdfHtml5",
          text: '<i class="fas fa-file-pdf"></i> PDF',
          className: "btn btn-danger",
        },
        {
          title: "Reporte de productos",
          extend: "print",
          text: '<i class="fas fa-print"></i> Print',
          className: "btn btn-dark",
        },
        {
          title: "Reporte de productos",
          extend: "copy",
          text: '<i class="fas fa-copy"></i> Copy Text',
          className: "btn btn-light",
        },
      ],
    };
  },
  mounted() {
    this.data = this.tableData;
  },
  methods: {
    getTableData(tableData) {
      this.data = tableData;
    },
  },
  created() {
    this.data = this.tableData;
  },
};
</script>
<style>
@import "datatables.net-bs5";
@import "datatables.net-dt";
@import "datatables.net-buttons-dt";
@import "datatables.net-responsive-dt";
@import "datatables.net-select-dt";
</style>
