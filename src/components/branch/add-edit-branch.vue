<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->
            <div class="modal fade" id="modal-default">
              <div class="modal-dialog modal-lg">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <h4 class="modal-title">
                      {{ Cp_Branch_Info.make_by ? "Update Branch" : "Create Branch" }}
                    </h4>
                    <!-- <h4 class="modal-title" v-if="this.update == 1">Update Branch</h4> -->
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
                  <div class="modal-body">
                    <p style="display: none">{{ updateBranch }}</p>
                    <form>
                      <div class="card-body">
                        <div class="row clearfix">
                          <!-- branch_id -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label> Branch ID </label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="branch_id"
                                v-model="Cp_Branch_Info.branch_id"
                              />
                            </div>
                          </div>
                          <!-- branch_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Branch Name</label>
                              <input
                                type="text"
                                style="width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="branch_id"
                                v-model="Cp_Branch_Info.branch_name"
                                placeholder="branch_name"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row clearfix">
                          <!-- Branch_Open_Date -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Branch_Open_Date</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="date"
                                class="form-control form-control-sm"
                                id="Branch_Open_Date"
                                v-model="Cp_Branch_Info.branch_open_date"
                              />
                            </div>
                          </div>
                          <!-- branch_Short_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Branch Short Name</label>
                              <input
                                type="text"
                                style="width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="branch_short_name"
                                v-model="Cp_Branch_Info.branch_short_name"
                                placeholder="branch_short_name(max 6 letter)"
                              />
                            </div>
                          </div>
                        </div>

                        <!-- address -->
                        <div class="row clearfix">
                          <!-- address1 -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Address 1</label>
                              <textarea
                                style="margin-top: -5px; width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="address1"
                                v-model="Cp_Branch_Info.address1"
                                placeholder="Address1"
                              />
                            </div>
                          </div>
                          <!-- address2 -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Address 2</label>
                              <textarea
                                style="margin-top: -5px; width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="address"
                                v-model="Cp_Branch_Info.branch_address2"
                                placeholder="Address2"
                              />
                            </div>
                          </div>
                        </div>

                        <!-- mobile_no && phone -->
                        <div class="row clearfix">
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Mobile_No:</label>
                              <input
                                style="width: 100%; margin-top: -8px"
                                type="text"
                                class="form-control form-control-sm"
                                id="mobile_no"
                                v-model="Cp_Branch_Info.mobile_no"
                                placeholder="+880"
                              />
                            </div>
                          </div>
                          <!-- branch_name -->
                          <div class="col-md-6">
                            <div class="input_field form-group">
                              <label>Phone No:</label>
                              <input
                                type="text"
                                style="width: 100%; margin-top: -8px"
                                class="form-control form-control-sm"
                                id="phone_no"
                                v-model="Cp_Branch_Info.phone_no"
                                placeholder="phone_no"
                              />
                            </div>
                          </div>
                        </div>

                        <!-- country city -->
                        <div class="row clearfix">
                          <!-- country -->
                          <div class="col-md-6">
                            <label>Country:</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <select
                                v-model="Cp_Branch_Info.country"
                                name="designationId"
                              >
                                <!-- <option selected>country</option> -->
                                <!-- <option disabled value="">City</option> -->
                                <option>Ban</option>
                              </select>
                              <div class="select_arrow"></div>
                            </div>
                          </div>

                          <!-- Division -->
                          <div class="col-md-6">
                            <label>Division:</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <select
                                v-model="Cp_Branch_Info.division"
                                @change="updatedivisions"
                              >
                                <!-- <option selected>country</option> -->
                                <!-- <option disabled value="">Division</option> -->
                                <option value="">Select division</option>
                                <option
                                  v-for="division in divisions"
                                  :key="division.id"
                                  :value="division.name"
                                >
                                  {{ division.name }}
                                </option>
                              </select>
                              <!-- <p>{{selectedDivision}}</p> -->
                            </div>
                          </div>
                        </div>

                        <!-- district state -->
                        <div class="row clearfix">
                          <!-- district -->
                          <div class="col-md-6">
                            <label>District:</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <select
                                v-model="Cp_Branch_Info.district"
                                @change="updatedistricts"
                              >
                                <option value="">Select district</option>
                                <option
                                  v-for="district in districts"
                                  :key="district.id"
                                  :value="district.name"
                                >
                                  {{ district.name }}
                                </option>
                              </select>
                              <!-- <p>{{ selectedDistrict}}</p> -->
                            </div>
                          </div>

                          <!-- city -->
                          <div class="col-md-6">
                            <label>City:</label>
                            <div
                              class="input_field select_option"
                              style="margin-top: -10px"
                            >
                              <select v-model="Cp_Branch_Info.city" @click="updatecitys">
                                <!-- <option selected>country</option> -->
                                <option value="">Select City</option>
                                <option
                                  v-for="city in cities"
                                  :key="city.id"
                                  :value="city.name"
                                >
                                  {{ city.name }}
                                </option>
                              </select>
                              <!-- <p>{{ selectedCity }}</p> -->
                            </div>
                          </div>
                        </div>

                        <!-- email -->
                        <div class="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            style="margin-top: -5px"
                            class="form-control form-control-sm"
                            id="email"
                            v-model="Cp_Branch_Info.email"
                            placeholder="Email"
                          />
                        </div>

                        <!-- time click  -->
                        <div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              v-model="showdate"
                              id="inlineCheckbox1"
                              value="option1"
                            />
                            <label class="form-check-label" for="inlineCheckbox1"
                              >Branch Closed Date:
                            </label>
                            <div style="margin-left: 10px">
                              <input
                                v-if="showdate"
                                v-model="Cp_Branch_Info.branch_closed_date"
                                type="date"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer justify-content-between">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="cleardata"
                    >
                      Close
                    </button>
                    <button
                      v-if="Cp_Branch_Info.make_by"
                      type="button"
                      class="btn btn-success btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="editData"
                    >
                      Update
                    </button>
                    <button
                      v-if="!Cp_Branch_Info.make_by"
                      type="button"
                      class="btn btn-success btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="addData"
                    >
                      Save
                    </button>
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
import Cp_Branch_Info from "@/models/Cp_Branch_Info";
import BranchService from "../../services/branch.service";
import GlobalFunctions from "../../common/GlobalFunction";
import sweet_alert from "../../common/sweet";
export default {
  name: "branch",
  data() {
    return {
      Cp_Branch_Info: new Cp_Branch_Info(),
      branchData: [{}],
      search: "",
      showdate: false,
      branch_close_date_formate: "",
      insert: "",
      update: "",
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
    };
  },
  computed: {
    updateBranch() {
      this.Cp_Branch_Info.loadModel(this.$store.state.auth.editMenu);
      console.log(this.Cp_Branch_Info.branch_open_date);
      return this.$store.state.auth.editMenu;
    },
  },
  methods: {
    // updateInputValue(event) {
    //   this.Cp_Branch_Info.branch_id = event.target.value;
    // },
    async addData() {
      this.saveCreateUpdateBranchInfo();
    },
    async editData() {
      this.saveCreateUpdateBranchInfo();
    },
    saveCreateUpdateBranchInfo() {
      this.loading = true;
      console.log(this.Cp_Branch_Info.branch_closed_date);
      const branch_open_date_formate = GlobalFunctions.formatDate(
        this.Cp_Branch_Info.branch_open_date
      );

      if (this.showdate) {
        this.branch_close_date_formate = GlobalFunctions.formatDate(
          (this.Cp_Branch_Info.branch_closed_date = "")
        );
      } else {
        this.branch_close_date_formate = GlobalFunctions.formatDate(
          this.Cp_Branch_Info.branch_closed_date
        );
      }

      this.Cp_Branch_Info.branch_open_date = branch_open_date_formate;
      this.Cp_Branch_Info.branch_closed_date = this.branch_close_date_formate;
      BranchService.createEditBranch(this.Cp_Branch_Info).then((response) => {
        if (response != null) {
          this.loading = false;
          this.update = 1;
          sweet_alert.confirmation_box(response);
        } else {
          sweet_alert.error_message("Data not found!");
        }
      });
    },
    cleardata() {
      this.Cp_Branch_Info.loadModel("");
    },

    updatedivisions() {
      console.log(this.Cp_Branch_Info.division);
      const selectedDivision = this.divisions.find(
        (division) => division.name === this.Cp_Branch_Info.division
      );
      if (selectedDivision) {
        console.log(selectedDivision);
        this.districts = selectedDivision.districts;
        console.log(this.districts);
        this.Cp_Branch_Info.district = null;
      }
    },

    updatedistricts() {
      console.log(this.Cp_Branch_Info.district);
      const selectedDistrict = this.districts.find(
        (district) => district.name === this.Cp_Branch_Info.district
      );
      // console.log(selectedDistrict.name);
      if (selectedDistrict) {
        this.cities = selectedDistrict.cities;
        console.log(this.cities);
        this.Cp_Branch_Info.city = null;
      }
    },
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

th {
  color: #000000;
}

td {
  color: black;
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
