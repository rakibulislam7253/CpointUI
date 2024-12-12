import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Designation";
const REQEST_URL = API_URL;

class designationService {
  get_designation_list() {
    return axios.get(API_URL + "/get-designation_list", { showLoader: false });
  }

  createEditDesignation(desigObj) {
    console.log("designation", desigObj);
    return axios.post(REQEST_URL + "/create-designation", desigObj);
  }
}
export default new designationService();
