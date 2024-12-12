import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Branch";
const REQEST_URL = API_URL;
// get-branch_list
class branchService {
  get_branch_list() {
    return axios.get(API_URL + "/get-branch_list", { showLoader: false });
  }
  createEditBranch(branchObj) {
    console.log("branchObj", branchObj);
    return axios.post(REQEST_URL + "/create-branch", branchObj);
  }
}
export default new branchService();
