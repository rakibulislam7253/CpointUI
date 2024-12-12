import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;

var API_PATH = BASE_URL + "api/UserPermission";
var REQEST_URL = BASE_URL + "api/UserPermission";

class userPermission {
  get_module_by_user(user_id) {
    return axios.get(
      API_PATH + "/get_module_by_user" + "?_user_id=" + user_id,
      {
        showLoader: false,
      }
    );
  }

  get_menu_by_user(user_id) {
    return axios.get(API_PATH + "/get_menu_by_user" + "?_user_id=" + user_id, {
      showLoader: false,
    });
  }
  grant_menu_to_user(user_data) {
    return axios.post(REQEST_URL + "/grant_menu_to_user", user_data);
  }
  assign_branch_to_user(branch_data) {
    return axios.post(REQEST_URL + "/assign_branch_to_user", branch_data);
  }
  assign_designation_to_user(designation_data) {
    return axios.post(
      REQEST_URL + "/assign_designation_to_user",
      designation_data
    );
  }
  grant_menu_to_role(user_data) {
    return axios.post(REQEST_URL + "/grant_menu_to_role", user_data);
  }
  get_branch_by_user(user_id) {
    return axios.get(
      API_PATH + "/get_branch_by_user" + "?_user_name=" + user_id,
      {
        showLoader: false,
      }
    );
  }
  get_designation_by_user(user_id) {
    return axios.get(
      API_PATH + "/get_designation_by_user" + "?_user_name=" + user_id,
      {
        showLoader: false,
      }
    );
  }
  get_department_by_user(user_id) {
    return axios.get(
      API_PATH + "/get_department_by_user" + "?_user_name=" + user_id,
      {
        showLoader: false,
      }
    );
  }
  get_api_access_history(user_id) {
    return axios.get(API_PATH + "/get_user_access_history/" + user_id, {
      showLoader: false,
    });
  }
}

export default new userPermission();
