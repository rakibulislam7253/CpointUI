<template>
  <h5 class="card-header bg-info">Module And Role Permission</h5>
  {{ userName }}
  <div class="card-body">
    <div style="width: 60%">
      <table class="table table-bordered table-sm" style="margin-left: 30%">
        <thead>
          <tr>
            <th style="text-align: center">Module Name</th>
            <th style="text-align: center">Role</th>
            <th style="width: 20%; text-align: center">Action</th>
          </tr>
        </thead>
        <tbody id="myTable">
          <!--  -->
          <tr
            style="font-size: 16px"
            v-for="moduleList in moduleList"
            :key="moduleList.id"
          >
            <td style="text-align: center">{{ moduleList.module_name }}</td>
            <td style="text-align: center">Admin</td>

            <td style="display: flex">
              <!-- <button class="btn btn-xs ml-3">
                <i class="fas fa-plus"></i>
              </button> -->
              <button
                type="button"
                class="btn btn-xs ml-4"
                data-toggle="modal"
                data-target="#modal-default"
              >
                <i class="far fa-edit"></i>
              </button>

              <button class="btn btn-xs ml-4">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import UserPermission from "../../services/userPermission";
import sweet_alert from "@/common/sweet";
// import axios from 'axios';
export default {
  name: "Module-and-Role",
  props: ["userName"],

  data() {
    console.log(this.userName);
    return {
      // props: ["userName"],

      moduleList: [],
    };
  },

  mounted() {
    console.log("userId pass from userPermission= ", this.userName);
    UserPermission.get_module_by_user(this.userName)
      .then((response) => {
        if (response != null) {
          this.moduleList = response.data;
        } else {
          sweet_alert.error_message("Response not found!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
