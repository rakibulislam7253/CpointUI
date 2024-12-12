import axios from "axios";

const MODULE_NAME = process.env.VUE_APP_MODULE_NAME;
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Module";
const REQEST_URL = API_URL;

class moduleService {
  get_module_list() {
    return axios.get(API_URL + "/get_module_list", { showLoader: false });
  }
  get_application_roles_list() {
    return axios.get(API_URL + "/get_application_roles_list", {
      showLoader: false,
    });
  }
  // get_application_roles_by_user
  get_application_roles_by_user(user_id) {
    return axios.get(
      API_URL + "/get_application_roles_by_user?_user_id=" + user_id
    );
  }
  get_application_roles_by_module(_module_id) {
    return axios.get(
      API_URL + "/get_application_roles_by_module?_module_id=" + _module_id
    );
  }

  createModule(moduleObj) {
    console.log("createModule", moduleObj);
    return axios.post(REQEST_URL + "/create_module_info", moduleObj);
  }
  update_module_info(moduleObj) {
    console.log("createModule", moduleObj);
    return axios.post(REQEST_URL + "/update_module_info", moduleObj);
  }
  create_update_application_roles(applicationRole) {
    console.log("createModule", applicationRole);
    return axios.post(
      REQEST_URL + "/create_update_application_roles",
      applicationRole
    );
  }
  module_document_upload_configuration(app_config) {
    console.log("configuration", app_config);
    return axios.post(
      REQEST_URL + "/module_document_upload_configuration",
      app_config
    );
  }

  get_document_upload_configure_by_module(module_id) {
    console.log("configuration", module_id);
    return axios.get(
      API_URL +
        "/get_document_upload_configure_by_module?module_id=" +
        module_id
    );
  }

  get_module_by_name() {
    return axios.get(
      API_URL + "/get_module_by_name" + encodeURIComponent(MODULE_NAME)
    );
  }

  get_module_by_id(module_id) {
    return axios.get(API_URL + "/get_module_by_id" + module_id);
  }

  get_module_by_shortName() {
    console.log(MODULE_NAME);
    return axios.get(
      API_URL + "/get_module_by_shortName" + "?shortName=" + MODULE_NAME
    );
  }

  deleteRoleById(RoleId) {
    return axios.delete(API_URL + "/delete_role" + RoleId);
  }

  createOrUpdateRoles(AdminRole) {
    const data = {
      AdminRole,
    };
    return axios.post(API_URL, data);
  }

  getRoleByUserId(RoleId) {
    return axios.get(API_URL + "/" + RoleId);
  }
}

export default new moduleService();
