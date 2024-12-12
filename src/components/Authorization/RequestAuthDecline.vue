<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->

            <div class="modal fade" id="modal-default" data-backdrop="static">
              <div class="modal-dialog modal-xl modal-dialog-scrollable">
                <div class="modal-content bg-default" style="margin-top: 5%">
                  <div class="modal-header">
                    <h4 class="modal-title">Authorization</h4>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      v-on:click.prevent="cleardata"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div
                    class="modal-body"
                    style="min-height: 400px; max-height: 500px"
                  >
                    <div class="container">
                      <div>
                        <table style="">
                          <thead>
                            <tr style="display: none">
                              <!-- <th></th> -->
                              <th>Name</th>
                              <th>Email</th>
                              <th>Comment</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="evenData in tableEven"
                              :key="evenData.table_name"
                            >
                              <td
                                style="
                                  font-weight: bold;
                                  font-size: 14px
                                  text-transform: uppercase;
                                  max-width: 60px;
                                "
                              >
                                {{ evenData.column_name }}
                              </td>
                              <td>
                                <div v-if="evenData.old_value">
                                  {{ evenData.old_value
                                  }}<sup class="sup">Old</sup>
                                </div>
                              </td>
                              <td style="max-width: 130px">
                                <div v-if="evenData.value">
                                  {{ evenData.value
                                  }}<sup class="sup2">New</sup>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <div>
                          <table>
                            <thead>
                              <tr style="display: none">
                                <!-- <th></th> -->
                                <th>Name</th>
                                <th>Email</th>
                                <th>Comment</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="oddData in tableOdd"
                                :key="oddData.table_name"
                              >
                                <td
                                  style="
                                    font-weight: bold;
                                    font-size: 14px
                                    text-transform: uppercase;
                                    max-width: 60px;
                                  "
                                >
                                  {{ oddData.column_name }}
                                </td>
                                <td>
                                  <div v-if="oddData.old_value">
                                    {{ oddData.old_value
                                    }}<sup class="sup">Old</sup>
                                  </div>
                                </td>
                                <td style="max-width: 130px">
                                  <div v-if="oddData.value">
                                    {{ oddData.value
                                    }}<sup class="sup2">New</sup>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="modal-footer d-flex justify-content-between"
                    style="margin-top: 0%; height: 11%"
                  >
                    <div>
                      <button
                        type="button"
                        class="btn btn-success btn-xs pl-5 pr-5"
                        data-dismiss="modal"
                        aria-label="Close"
                        style="margin-top: -25px"
                        v-on:click.prevent="authorizeData"
                      >
                        Authorize
                      </button>
                    </div>
                    <div>
                      <div class="input-group input-group-sm mb-3">
                        <label>Remark`s:</label>
                        <input
                          style="
                            border: 1px solid rgb(185, 181, 181);
                            border-round: 5px;
                            width: 600px;
                            height: 23px;
                            margin-top: 0px;
                          "
                          type="text"
                          class="form-control form-control-xs ml-2"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          v-model="remarks"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        style="margin-top: -20px"
                        data-dismiss="modal"
                        aria-label="Close"
                        class="btn btn-block btn-danger btn-xs pl-5 pr-5"
                        v-on:click.prevent="declineData"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import unauthorized_data from "@/models/authorizedDecline";
import unauthorized from "@/services/authorization";
import sweet_alert from "@/common/sweet";
import confrim_box from "../../common/sweet";
export default {
  data() {
    return {
      unauthorized_data: new unauthorized_data(),
      search: "",
      showdate: false,
      tabledata: [],
      tableEven: [],
      tableOdd: [],
      remarks: "",
    };
  },

  methods: {
    async authorizeData() {
      this.authorize();
    },
    async queue_Id() {
      this.queueId();
    },
    authorize() {
      this.unauthorized_data.log_status = "A";
      this.unauthorized_data.make_by = "atikur.rahaman";
      console.log(this.unauthorized_data);
      unauthorized
        .authorization_decline_by_queue_id(this.unauthorized_data)
        .then((response) => {
          if (response != null) {
            // this.$emit("reload");
            // console.log(response);
            // this.departmentData.splice( 1);
            confrim_box.confirmation_box(response);
          } else {
            sweet_alert.error_message("Response not found!");
          }
          console.log(response.data);
        });
    },

    searchUserId(event) {
      console.log(event.target.value);
      this.remarks = event.target.value;
    },

    declineData() {
      if (this.remarks == "") {
        this.$emit("reload");
        sweet_alert.error_message("Please input decline reasone!!");
      } else {
        this.unauthorized_data.log_status = "D";
        this.unauthorized_data.remarks = this.remarks;
        console.log(this.unauthorized_data);
        console.log(this.remarks);
        unauthorized
          .authorization_decline_by_queue_id(this.unauthorized_data)
          .then((response) => {
            this.remarks = "";
            if (response != null) {
              this.tableEven = [];
              this.tableOdd = [];
              console.log(response);
              confrim_box.confirmation_box(response);
              // this.$emit("reload");
            } else {
              sweet_alert.error_message("Response not found!");
            }
            console.log(response.data);
          });
      }
    },

    queueId(id) {
      console.log(id);
      this.unauthorized_data.queue_id = id;
      unauthorized.get_unauthorized_data(id).then((response) => {
        this.tabledata = response.data;
        console.log(response.data);
        if (response.data.error_msg == null) {
          for (var i = 0; i < this.tabledata.length; i++) {
            if (i % 2 === 0) {
              this.tableEven.push(this.tabledata[i]);
            } else {
              this.tableOdd.push(this.tabledata[i]);
            }
          }
          console.log("Even-", this.tableEven);
        } else {
          sweet_alert.error_message(response.data.error_msg);
        }
      });
    },

    cleardata() {
      this.$emit("reload");
      this.tableEven = [];
      this.tableOdd = [];
    },
  },
};
</script>

<style scoped>
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

.pagination {
  margin-left: 76%;
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

#myinput {
  width: 150%;
  /* border: 2px solid rgb(159, 199, 231); */
}

.select_option {
  position: relative;
  width: 100%;
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

label {
  font-size: 12px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}

.items {
  width: 100%;
  height: auto;
  align-items: center;
  border-radius: 5px;
  padding: 2px 2px 2px 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding-top: 5px;
}

.unAuthHeader {
  font-weight: bold;
  font-size: 14px;
}

.sup {
  font-size: 10px;
  font-weight: bolder;
  color: green;
}

.sup2 {
  font-size: 9px;
  font-weight: bold;
  color: rgb(248, 3, 3);
}
table {
  width: 100%;
  max-width: 100%;
  border-collapse: separate;
  border-spacing: 0 7px;
}

th {
  font-weight: 700;
  font-size: 13px;
  color: #fff;
  vertical-align: bottom;
}

td {
  vertical-align: middle;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  font-size: 13px;
  color: #000000;
  width: 3%;
  padding: 7px;
}
</style>
