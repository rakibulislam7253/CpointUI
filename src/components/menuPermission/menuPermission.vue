<template>
  <section class="content">
    <div class="container-fluid">
      <br />
      <!-- <p>atikur.rahaman</p> -->
      <div class="row">
        <div style="margin-left: 9.5%; width: 81%">
          <div class="input-group" @change="searchUserId($event)">
            <input
              type="search"
              class="form-control form-control"
              placeholder="Search users"
            />
            <!-- {{ UserProfile }} -->
            <div class="input-group-append">
              <button type="submit" class="btn btn-sm btn-default">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 5px">
        <div class="col-md-10 offset-md-1">
          <div class="col-md-12">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <p class="card-title">
                  {{ UserProfile.full_name }} -
                  {{ UserProfile.employee_id }}
                  <!-- {{ UserProfile.employee_designation }} -->
                </p>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0" style="margin-top: -20px">
                <table class="tg card-header">
                  <thead>
                    <tr>
                      <th class="tg-0lax">Designation</th>
                      <th class="tg-0lax">:</th>
                      <th class="tg-0lax">
                        {{ UserProfile.employee_designation }}
                      </th>
                      <th class="tg-0lax"></th>
                      <th class="tg-0lax"></th>
                      <th class="tg-0lax"></th>
                      <th class="tg-0lax">Branch Name</th>
                      <th class="tg-0lax tg-1lax">:</th>
                      <th class="tg-0lax">{{ this.branchName }}</th>
                    </tr>
                  </thead>
                  <tbody style="margin-top: -15%">
                    <tr>
                      <td class="tg-0lax">Email</td>
                      <td class="tg-0lax">:</td>
                      <td class="tg-0lax">{{ UserProfile.email }}</td>
                      <td class="tg-0lax"></td>
                      <td class="tg-0lax"></td>
                      <td class="tg-0lax"></td>
                      <td class="tg-0lax">Department</td>
                      <td class="tg-0lax tg-1lax">:</td>
                      <td class="tg-0lax">{{ UserProfile.department_onfo }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.mailbox-read-info -->

              <div class="" style="margin-bottom: -5px">
                <div class="card-header" style="width: 95%; margin-left: 2.5%">
                  <div>
                    <p
                      class="card-title"
                      style="margin-left: -1.5%; font-weight: 700"
                    >
                      Add Menu Permission
                    </p>
                  </div>
                  <div class="col-sm-10 d-flex">
                    <label class="ml-5" style="font-size: 14px">
                      Application:</label
                    >
                    <select
                      class="form-control-sm select2 ml-2"
                      style="width: 195%"
                      @change="changeModuleEvent($event)"
                    >
                      <option selected="selected">
                        - Select Application -
                      </option>
                      <option
                        v-for="moduleitem in moduleList"
                        :key="moduleitem.id"
                        :value="moduleitem.module_id"
                      >
                        {{ moduleitem.module_name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- menu permission -->
              <div style="margin-bottom: -5%">
                <div class="row">
                  <div>
                    <MultiSelect
                      v-show="showWidget"
                      style="
                        font-size: 17px;
                        color: black;
                        font-family: Helvetica Neue, Arial, sans-serif;
                      "
                      v-model="value"
                      :options="options"
                      :selectedNoOptionsText="selectedNoOptionsText"
                      :show-select-all-buttons="showSelectAll"
                      search-input-class="custom-input-class"
                      :reduce-display-property="(options) => options.menu_title"
                      :reduce-value-property="(options) => options.menu_id"
                      :reduceGroupProperty="
                        (options) => options.parent_menu_name
                      "
                      ref="multi"
                      highlight-diff
                      @diff-changed="handleChange"
                    />
                  </div>
                </div>
              </div>
              <!-- menu remove -->
              <div style="margin-top: -5px">
                <!-- <div class="ml-4 remove_reader"><h4>Menu Remove</h4></div> -->
                <div class="" style="margin-bottom: -5px">
                  <div
                    class="card-header"
                    style="width: 95%; margin-left: 2.5%"
                  >
                    <p
                      class="card-title"
                      style="margin-left: -1.5%; font-weight: 700"
                    >
                      Remove Menu Permission
                    </p>
                  </div>
                </div>

                <div>
                  <div class="row">
                    <div>
                      <MultiSelectRemove
                        v-show="showWidget"
                        style="
                          font-size: 17px;
                          color: black;
                          font-family: Helvetica Neue, Arial, sans-serif;
                        "
                        v-model="value"
                        :options1="options1"
                        :selectedNoOptionsText="selectedNoOptionsText"
                        :show-select-all-buttons="showSelectAll"
                        search-input-class="custom-input-class"
                        :reduce-display-property="
                          (options1) => options1.menu_title
                        "
                        :reduce-value-property="(options1) => options1.menu_id"
                        :reduceGroupProperty="
                          (options1) => options1.parent_menu_name
                        "
                        ref="multi"
                        highlight-diff
                        @diff-changed="handleChange1"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      :disabled="!menuLoad"
                      style="
                        margin-left: 25%;
                        margin-top: -5%;
                        margin-bottom: 2%;
                        font-size: 16px;
                        width: 50%;
                      "
                      @click="menuPermission"
                      class="btn btn-primary btn-block btn-sm"
                    >
                      <i class="fa fa-book"></i> Save Menu
                    </button>
                  </div>
                </div>
              </div>

              <!-- /.card-body -->
              <!-- /.card-footer -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import userProfileService from "@/services/userProfile.service";
import sweet_alert from "@/common/sweet";
import MultiSelect from "../../../node_modules/vue-multiselect-listbox/src/components/MultiSelect/MultiSelect.vue";
import MultiSelectRemove from "../menuPermission/src/components/MultiSelect/MultiSelect.vue";
import Users from "../../models/UserProfile";
import userMenuDelete from "../../models/grant_menu_delete";
import moduleService from "@/services/module.service";
import UserPermission from "@/services/userPermission";
import menuMasterService from "@/services/menuMaster.service";
import userPermission from "@/services/userPermission";
import confrim_box from "@/common/sweet";
export default {
  components: {
    MultiSelect,
    MultiSelectRemove,
  },

  data() {
    return {
      myselectedvalue: [],
      activ_user: JSON.parse(this.$store.state.auth.userLoginInfo),
      UserProfile: new Users(),
      grant_menu_data: new userMenuDelete(),
      menuLoad: "",
      moduleList: [],
      menuList: [],
      childMenuList: [],
      branchName: "",
      items: [],
      items2: [],
      originalArray: [],
      originalArray2: [],
      options: [],
      options1: [],
      menuData: "",
      menuData1: [],
      moduleNameSelect: "",
      showSelectAll: true,
      showWidget: true,
      userSearchName: "",
      count: 0,
      menupart: "",
      menupart1: [],
      count2: 0,
    };
  },

  methods: {
    unassigned_menu_list(module_id, userName) {
      menuMasterService
        .get_unassigned_menu_list(module_id, userName)
        .then((response) => {
          console.log(response);
          if (response.data == "") {
            sweet_alert.error_message("Module data not found!");
            this.options = "";
            this.options1 = "";
          } else {
            if (response != null) {
              // select option
              this.originalArray = response.data;
              this.items = this.originalArray.map(
                ({ menu_title, menu_id, parent_menu_name }) => ({
                  menu_title,
                  menu_id,
                  parent_menu_name,
                })
              );
              this.options = this.items;
              // console.log(this.options);
            } else {
              sweet_alert.error_message("Module Data not found!");
            }
          }
        });
    },
    assigned_menu_list(userName) {
      UserPermission.get_menu_by_user(userName).then((response4) => {
        console.log("response4", response4.data);
        if (response4 != null) {
          // select option
          this.originalArray = response4.data;
          this.items = this.originalArray.map(
            ({ menu_title, menu_id, parent_menu_name }) => ({
              menu_title,
              menu_id,
              parent_menu_name,
            })
          );
          const filteData = this.items.filter((item) => {
            return item.parent_menu_name != null;
          });
          console.log(filteData);
          this.options1 = filteData;
        } else {
          sweet_alert.error_message("Module Data not found!");
        }
      });
    },

    menuPermission() {
      console.log(this.menupart1);
      for (let i = 0; i < this.menupart1.length; i++) {
        userPermission.grant_menu_to_user(this.menupart1[i]).then(
          (response) => {
            console.log(response);
            if (response.data.error_msg) {
              sweet_alert.error_message(response.data.error_msg);
            } else {
              if (response != null) {
                this.loading = false;
                console.log(this.moduleNameSelect, this.userSearchName);
                confrim_box.confirmation_box(response);
                this.options = "";
                this.options1 = "";
                //  this.assigned_menu_list(this.userSearchName);
                // this.unassigned_menu_list(
                //   this.moduleNameSelect,
                //   this.userSearchName
                // );
                // window.location.reload();
              } else {
                sweet_alert.error_message("Response not found!");
                // window.location.reload();
              }
            }
          },
          (error) => {
            this.loading = false;
            sweet_alert.error_message(error.message);
          }
          // this.unassigned_menu_list(
          //       this.moduleNameSelect,
          //       this.userSearchName
          //     );
          //     this.assigned_menu_list(this.userSearchName);
        );
      }
      // console.log(this.moduleNameSelect, this.userSearchName);
      // this.unassigned_menu_list(this.moduleNameSelect, this.userSearchName);
      // this.assigned_menu_list(this.userSearchName);
    },
    // window.location.reload();

    searchUserId(event) {
      console.log(event.target.value);
      // const trmp = event.target.value.trim();
      // this.userSearchName = event.target.value;
      this.userSearchName = event.target.value;
      if (event.target.value.trim() != "") {
        userProfileService
          .get_users_profile(event.target.value)
          .then((response) => {
            if (response.data.error_msg == null) {
              this.UserProfile.loadModel(response.data);
              if (response.data.department_onfo.length > 0) {
                this.UserProfile.department_onfo =
                  response.data.department_onfo[0].department_name;
              } else {
                sweet_alert.error_message("Employee Department not found!");
              }
              if (response.data.employee_designation.length > 0) {
                this.UserProfile.employee_designation =
                  response.data.employee_designation[0].designation_name;
              } else {
                sweet_alert.error_message("Employee Designation not found!");
              }
              // User by branch
              UserPermission.get_branch_by_user(event.target.value).then(
                (response) => {
                  if (response.data.error_msg != null) {
                    sweet_alert.error_message("Response not found!");
                  } else {
                    if (response != null) {
                      if (response.data.length > 0) {
                        this.branchName = response.data[0].branch_name;
                      } else {
                        sweet_alert.error_message("Brunch not found!");
                      }
                    } else {
                      sweet_alert.error_message("Response not found!");
                    }
                  }
                }
              );
              // module list
              moduleService.get_module_list().then((response2) => {
                if (response != null) {
                  this.moduleList = response2.data;
                } else {
                  sweet_alert.error_message("Menu not found!");
                }
              });
            } else {
              sweet_alert.error_message("Invalid User ID");
            }
          });
      }
    },

    changeModuleEvent(event) {
      console.log(event.target.value);
      this.moduleNameSelect = event.target.value;
      this.unassigned_menu_list(this.moduleNameSelect, this.userSearchName);
      this.assigned_menu_list(this.userSearchName);
    },
    handleChange(changes) {
      this.menuData1 = changes.newSelected[this.count];
      this.menuLoad = changes.newSelected[this.count];
      this.menupart1.push({
        user_id: this.userSearchName,
        menu_id: changes.newSelected[this.count],
        grant_type: "A",
        make_by: this.activ_user.userId,
        auth_status_id: "A",
      });
      this.count++;
    },
    handleChange1(changes) {
      console.log(changes.newSelected[this.count2]);
      this.menuLoad = changes.newSelected[this.count2];
      this.menupart1.push({
        user_id: this.userSearchName,
        menu_id: changes.newSelected[this.count2],
        grant_type: "D",
        make_by: this.activ_user.userId,
        auth_status_id: "A",
      });

      this.count2++;
    },
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
/* input,
input::-webkit-input-placeholder {
    font-size: 25px;
    line-height: 4;
} */
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
dd {
  margin-left: -13%;
}
.input-group {
  font-size: 10px;
}
.tg {
  /* border-collapse: collapse; */
  /* border-spacing: 0; */
  margin-top: 30px;
  padding: 20px;
  width: 90%;
  margin-left: 5%;
}

.tg td {
  /* border-color: black;
  border-style: solid;
  border-width: 1px; */
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 1px 5px 10px 5px;
  word-break: normal;
}
.tg th {
  /* border-color: black;
  border-style: solid;
  border-width: 1px; */
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 1px 5px 5px 5px;
  word-break: normal;
}
.tg .tg-p91n {
  border-color: #ffccc9;
  text-align: right;
  vertical-align: top;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
