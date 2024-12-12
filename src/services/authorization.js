import axios from "axios";
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Authorization";
class unauthorized {
  get_unauthorized_menu_list(module_id, user_id) {
    return axios.get(
      API_URL +
        "/get_unauthorized_menu_list?_module_id=" +
        module_id +
        "&_user_id=" +
        user_id
    );
  }
  get_unauthorized_data_list(menu_id) {
    return axios.get(
      API_URL + "/get_unauthorized_data_list?_menu_id=" + menu_id
    );
  }
  get_unauthorized_data(queue_id) {
    return axios.get(API_URL + "/get_unauthorized_data?_queue_id=" + queue_id);
  }

  authorization_decline_by_queue_id(authorizationObj) {
    console.log("authorizationObj", authorizationObj);
    return axios.post(
      API_URL + "/authorization_decline_by_queue_id",
      authorizationObj
    );
  }
}
export default new unauthorized();
