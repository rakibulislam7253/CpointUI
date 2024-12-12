import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Profile";
const REQEST_URL = API_URL;
class userProfileService {
  get_users_profile(userId) {
    return axios.get(API_URL + "/get_users_profile" + "?user_id=" + userId, {
      showLoader: false,
    });
  }
  get_all_user_list() {
    return axios.get(API_URL + "/get_all_user_list", { showLoader: false });
  }
  updateProfile(profileObj) {
    console.log("UpdateProfile", profileObj);
    return axios.post(REQEST_URL + "/create_update_profile_info", profileObj);
  }
  update_profile_image(queue_id, user_id) {
    console.log("update_profile_image", queue_id, user_id);
    return axios.post(
      REQEST_URL +
        "/update_profile_image?_image_queue_id=" +
        queue_id +
        "&_user_id=" +
        user_id
    );
  }
}
export default new userProfileService();
