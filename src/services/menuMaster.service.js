import axios from "axios";

// const MODULE_NAME = process.env.VUE_APP_MODULE_NAME;
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Menu";
const REQEST_URL = API_URL;
class menuMasterService {
  get_menu_list() {
    return axios.get(API_URL + "/get-menu_list", { showLoader: false });
  }
  get_menu_list_by_module(module_id) {
    return axios.get(
      API_URL + "/get_menu_list_by_module" + "?ModuleId=" + module_id
    );
  }
  get_parent_menu_list(module_id) {
    return axios.get(
      API_URL + "/get_parent_menu_list" + "?ModuleId=" + module_id
    );
  }
  get_unassigned_menu_list(module_id, userName) {
    return axios.get(
      API_URL +
        "/get_unassigned_menu_list" +
        "?_module_id=" +
        module_id +
        "&_user_id=" +
        userName
    );
  }
  get_unassigned_menu_list_to_role(module_id, role_id) {
    console.log(module_id, role_id);
    return axios.get(
      API_URL +
        "/get_unassigned_menu_list_to_role?_module_id=" +
        module_id +
        "&_role_id=" +
        role_id
    );
  }

  get_menu_list_by_role(module_id, role_id) {
    console.log(module_id, role_id);
    return axios.get(
      API_URL +
        "/get_menu_list_by_role?_module_id=" +
        module_id +
        "&_role_id=" +
        role_id
    );
  }
  createMenu(desigObj) {
    return axios.post(REQEST_URL + "/create-menu", desigObj);
  }
  updateMenu1(desigObj) {
    return axios.post(REQEST_URL + "/update-menu", desigObj);
  }
}
export default new menuMasterService();
