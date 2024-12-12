import axios from "axios";
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/UserPermission";
const REQEST_URL = API_URL;
class premissionModule {
  assign_module_to_user(moduleObj) {
    console.log("modulePermission", moduleObj);
    return axios.post(REQEST_URL + "/assign_module_to_user", moduleObj);
  }
  assign_designation_to_user(designation) {
    console.log(designation);
    return axios.post(REQEST_URL + "/assign_designation_to_user", designation);
  }
  assign_department_to_user(department) {
    console.log("assign_department_to_user", department);
    return axios.post(REQEST_URL + "/assign_department_to_user", department);
  }
  // update_module_role_for_user?id=s&_user_id=s&_module_id=s&_role_id=s
  update_module_role_for_user(permission_id, user_id, module_id, role_id) {
    console.log("assign_department_to_user", permission_id);
    return axios.post(
      REQEST_URL +
        "/update_module_role_for_user?id=" +
        permission_id +
        "&_user_id=" +
        user_id +
        "&_module_id=" +
        module_id +
        "&_role_id=" +
        role_id
    );
  }
}
export default new premissionModule();
