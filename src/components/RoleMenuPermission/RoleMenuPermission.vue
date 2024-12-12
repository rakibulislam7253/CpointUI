<template>
  <section class="content">
    <div class="container-fluid body">
      <br />
      <div class="row" style="margin-top: 5px">
        <div class="col-md-10 offset-md-1">
          <div class="col-md-12">
            <div class="card card-primary card-outline">
              <div style="margin-bottom: -5px">
                <div
                  class="card-header d-flex justify-content-between"
                  style="width: 95%; margin-left: 2.5%"
                >
                  <div>
                    <p
                      class="card-title"
                      style="margin-left: -3%; font-weight: 700"
                    >
                      Role Permission
                    </p>
                  </div>
                  <div>
                    <dl class="row" style="margin-top: 3px">
                      <dt class="col-sm-4">
                        Application:<span style="color: red">*</span>
                      </dt>
                      <dd class="col-sm-8">
                        <select
                          class="form-control-sm select2 ml-5"
                          style="width: 110%"
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
                      </dd>
                    </dl>
                    <div class="messege1">
                      <small v-if="messege1" style="color: red"
                        >Please fill out this field</small
                      >
                    </div>
                  </div>
                  <div>
                    <dl class="row" style="margin-top: 1px">
                      <dt class="col-sm-4">
                        Role:<span style="color: red">*</span>
                      </dt>
                      <dd class="col-sm-8">
                        <select
                          class="form-control-sm select2"
                          style="width: 160%"
                          @change="changeModuleByRoleEvent($event)"
                        >
                          <option selected="selected">
                            - Select Application Role -
                          </option>
                          <option
                            v-for="role in applicationRole"
                            :key="role.id"
                            :value="role.role_id"
                          >
                            {{ role.role_name }}
                          </option>
                        </select>
                      </dd>
                    </dl>
                    <div class="messege">
                      <small v-if="messege2" style="color: red"
                        >Please fill out this field</small
                      >
                    </div>
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
              <div style="margin-top: -6px">
                <!-- <div class="ml-4 remove_reader"><h4>Menu Remove</h4></div> -->
                <div class="" style="margin-bottom: -5px">
                  <div
                    class="card-header"
                    style="width: 95%; margin-left: 2.5%"
                  >
                    <p
                      class="card-title"
                      style="
                        margin-left: -1.5%;
                        font-weight: 700;
                        margin-bottom: -10px;
                      "
                    >
                      Remove Role Permission
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
                      style="
                        margin-left: 25%;
                        margin-top: -5%;
                        margin-bottom: 2%;
                        font-size: 16px;
                        width: 50%;
                      "
                      @click="menuPermission"
                      class="btn btn-primary btn-block btn-sm"
                      :disabled="!menuLoad"
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
// import userProfileService from "@/services/userProfile.service";
import sweet_alert from "@/common/sweet";
import MultiSelect from "../../../node_modules/vue-multiselect-listbox/src/components/MultiSelect/MultiSelect.vue";
import MultiSelectRemove from "../menuPermission/src/components/MultiSelect/MultiSelect.vue";
import Users from "../../models/UserProfile";
import userMenuRole_id from "../../models/grant_menu_roleId";
import moduleService from "@/services/module.service";
// import UserPermission from "@/services/userPermission";
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
      messege1: false,
      messege2: false,
      menuLoad: "",
      myselectedvalue: [],
      activ_user: JSON.parse(this.$store.state.auth.userLoginInfo),
      UserProfile: new Users(),
      grant_menu_data: new userMenuRole_id(),
      roleId: "",
      moduleId: "",
      confrimButton: false,
      moduleList: [],
      menuList: [],
      // childMenuList: [],
      // branchName: "",
      items: [],
      // items2: [],
      originalArray: [],
      // originalArray2: [],
      options: [],
      options1: [],
      menuData: "",
      menuData1: [],
      // datapush: [],
      // user_by_menuData: "",
      showSelectAll: true,
      showWidget: true,
      // userSearchName: "",
      // allData: {},
      applicationRole: [],
      count: 0,
      menupart: "",
      userMenuRole: [],
      count2: 0,
    };
  },

  methods: {
    menuListData_unassigned(moduleData, role) {
      menuMasterService
        .get_unassigned_menu_list_to_role(moduleData, role)
        .then((response) => {
          console.log(response.data);
          if (response.data == "") {
            sweet_alert.error_message("Menu_list_to_role data not found!");
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
            } else {
              sweet_alert.error_message("Module Data not found!");
            }
          }
        });
    },
    menuListData_assigned(moduleData, role) {
      menuMasterService
        .get_menu_list_by_role(moduleData, role)
        .then((response4) => {
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
      console.log(this.userMenuRole);
      console.log(this.userMenuRole.length);
      console.log(this.moduleId);
      console.log(this.roleId);
      if (this.moduleId && this.roleId) {
        this.messege1 = false;
        this.messege2 = false;
      } else if (this.moduleId) {
        this.messege1 = false;
        this.messege2 = true;
      } else if (this.userMenuRole.length == 0) {
        this.messege1 = true;
        this.messege2 = true;
        sweet_alert.error_message("Please Select Application and Role!");
      }
      if (this.moduleId && this.roleId && this.userMenuRole.length != 0) {
        for (let i = 0; i < this.userMenuRole.length; i++) {
          userPermission.grant_menu_to_role(this.userMenuRole[i]).then(
            (response) => {
              console.log(response);
              if (response != null) {
                this.loading = false;
                confrim_box.confirmation_box(response);
                this.menuListData_unassigned(this.moduleId, this.userRoleId);
                this.menuListData_assigned(this.moduleId, this.userRoleId);
              } else {
                sweet_alert.error_message("Response not found!");
              }
            },
            (error) => {
              this.loading = false;
              sweet_alert.error_message(error.message);
            }
          );
        }
      } else {
        sweet_alert.error_message("Please Select Menu!");
      }
    },
    changeModuleEvent(event) {
      // console.log(event.target.value);
      this.moduleId = event.target.value;
      moduleService
        .get_application_roles_by_module(event.target.value)
        .then((response) => {
          this.applicationRole = response.data;
          console.log("role by menu permission");
          console.log(response.data);
        });
    },
    changeModuleByRoleEvent(event) {
      console.log(event.target.value);
      this.roleId = event.target.value;
      this.userRoleId = event.target.value;
      this.menuListData_unassigned(this.moduleId, this.userRoleId);
      this.menuListData_assigned(this.moduleId, this.userRoleId);
    },
    handleChange(changes) {
      this.menuData1 = changes.newSelected[this.count];
      console.log(this.menuData1);
      this.menuLoad = this.menuData1;
      this.userMenuRole.push({
        role_id: this.userRoleId,
        menu_id: changes.newSelected[this.count],
        module_id: this.moduleId,
        grant_type: "A",
        make_by: this.activ_user.userId,
        auth_status_id: "A",
      });
      this.count++;
    },
    handleChange1(changes) {
      console.log(changes.newSelected[this.count2]);
      this.menuLoad = changes.newSelected[this.count2];
      this.userMenuRole.push({
        role_id: this.userRoleId,
        menu_id: changes.newSelected[this.count],
        module_id: this.moduleId,
        grant_type: "D",
        make_by: this.activ_user.userId,
        auth_status_id: "A",
      });

      this.count2++;
    },
  },
  mounted() {
    moduleService.get_module_list().then((response) => {
      if (response != null) {
        this.moduleList = response.data;
      } else {
        sweet_alert.error_message("Menu not found!");
      }
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
  /* font-size: 10px; */
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
dd {
  margin-left: -13%;
}
.messege1 {
  position: relative;
  margin-top: -20px;
  margin-left: 30%;
}
.messege {
  position: relative;
  margin-top: -20px;
  margin-left: 58px;
}
</style>
