import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/Department";
const REQEST_URL = API_URL;

class departmentService {
  get_department_list() {
    return axios.get(API_URL + "/get-department_list", { showLoader: false });
  }

  createEditDepartment(departObj) {
    console.log("department", departObj);
    return axios.post(REQEST_URL + "/create-department", departObj);
  }
}
export default new departmentService();
