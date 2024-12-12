import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Document";
const REQEST_URL = API_URL;

class documentService {
  documentUpload(imageObj) {
    return axios.post(REQEST_URL + "/profile_image_upload", imageObj);
  }
  get_profile_img_by_queue_id(queue_id) {
    return axios.get(
      REQEST_URL + "/get_profile_img_by_queue_id" + "?_queue_id=" + queue_id
    );
  }
  get_profile_img_by_user_id(user_id) {
    return axios.get(
      REQEST_URL + "/get_profile_img_by_user_id" + "?_user_id=" + user_id
    );
  }
  profile_image_upload(files) {
    return axios.post(REQEST_URL + "/profile_image_upload", files);
  }
}
export default new documentService();
