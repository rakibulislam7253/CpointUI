<template>
  <section class="content">
    <div class="container-fluid">
      <RequestAuthDecline
        :initialCount="parentCount"
        ref="authorize_id"
        @reload="getReload"
      />
      <br />
      <div class="row" style="margin-top: 5px">
        <div class="col-md-10 offset-md-1">
          <div class="col-md-12">
            <div class="card card-primary card-outline">
              <div class="">
                <div class="card-header" style="width: 100%">
                  <div class="col-sm-10 d-flex" style="margin-left: 10%">
                    <label class="" style="font-size: 14px">
                      Authorization:</label
                    >
                    <select
                      class="form-control-sm select2 ml-2"
                      style="width: 125%"
                      @change="changeModuleEvent($event)"
                    >
                      <option selected="selected">
                        ---UnAuthorize Request---
                      </option>
                      <option
                        v-for="menuitem in menuList"
                        :key="menuitem.id"
                        :value="menuitem.column_name"
                      >
                        {{ menuitem.value }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="p-2">
                  <div style="margin-top: 10px"></div>
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 60px">SL NO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Make By</th>
                        <th scope="col">Make Date</th>
                        <th scope="col" style="width: 15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(unauthorized_item, index) in unauthorized_data"
                        :key="unauthorized_item.menu_id"
                      >
                        <td data-label="Sl NO" style="text-align: center">
                          <b>{{ (currPage - 1) * countOfPage + index + 1 }} </b>
                        </td>
                        <td data-label="Remarks">
                          {{ unauthorized_item.remarks }}
                        </td>
                        <td data-label="Make_By">
                          {{ unauthorized_item.make_by }}
                        </td>
                        <td data-label="Make_Date">
                          {{ unauthorized_item.make_dt }}
                        </td>
                        <td data-label="Action">
                          <button
                            data-toggle="modal"
                            data-target="#modal-default"
                            @click="authorize(unauthorized_item, index)"
                            type="button"
                            class="btn btn-info btn-xs w-auto"
                          >
                            Authorize/Decline
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import unauthorized from "@/services/authorization";
import sweet_alert from "@/common/sweet";
import confrim_box from "@/common/sweet";
import Authorization from "@/models/Authorization";
import RequestAuthDecline from "@/components/Authorization/RequestAuthDecline.vue";
import { ref } from "vue";
const authorize_id = ref(0);
export default {
  components: { RequestAuthDecline },

  data() {
    return {
      authorization: new Authorization(),
      countOfPage: 15, //Number of items per page
      currPage: 1, // Current page number
      menuList: [],
      queue_data: [],
      parentCount: 5,
      unauthorized_data: [],
      moduleevent: "",
      splicedata: "",
    };
  },

  methods: {
    getReload() {
      this.unauthorized_data.push(this.splicedata[0]);
    },
    getReloadData(moduleevent) {
      unauthorized.get_unauthorized_data_list(moduleevent).then((response) => {
        console.log(response.data);
        if (response.data) {
          this.unauthorized_data = response.data;
        } else {
          sweet_alert.error_message("Response not found!");
        }
      });
    },
    changeModuleEvent(event) {
      console.log(event.target.value);
      this.moduleevent = event.target.value;
      this.getReloadData(this.moduleevent);
    },
    authorize(authorize_id, index) {
      console.log(index);
      this.splicedata = this.unauthorized_data.splice(index, 1);
      this.$refs.authorize_id.queueId(authorize_id.queue_id);
    },
  },
  mounted() {
    unauthorized.get_unauthorized_menu_list().then((response) => {
      console.log(response.data);
      this.menuList = response.data;
    });
  },
};
</script>

<style scoped>
@import "../../assets/Css/multiselect/vue-multi-select-listbox.css";
html,
body {
  margin: 0;
  height: 100%;
  font-family: "Calibri";
}
input,
input::-webkit-input-placeholder {
  font-size: 14px;
}
#app {
  height: 100%;
}
p {
  font-size: 14px;
}
option input {
  font-size: 14px;
}

hr {
  border: none;
  border-bottom: 1px solid #cacaca;
  margin-bottom: 1em;
  padding-top: 1em;
  width: 90%;
}
option {
  font-size: 16px;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin-left: 12%;
  padding: 0;
  width: 70%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
}
table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}
table th {
  text-align: center;
}
table tr {
  font-size: 14px;
  text-align: left;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}

body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
</style>
