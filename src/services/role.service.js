import axios from "axios";

// const MODULE_NAME = process.env.VUE_APP_MODULE_NAME;
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Role";
const REQEST_URL = API_URL;

class roleService {
  get_roles() {
    return axios.get(API_URL + "/get_roles", {
      showLoader: false,
    });
  }

  createRole(roleObj) {
    console.log(roleObj);
    return axios.post(REQEST_URL + "/create_role" + "?name=" + roleObj);
  }
  update_role(roleObj) {
    console.log(roleObj);
    return axios.post(REQEST_URL + "/update_role", roleObj);
  }
}
export default new roleService();
