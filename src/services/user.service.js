import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api";
class UserService {
  getCurrentUserData() {
    return axios.get(API_URL + "/Login/refresh-user-token", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
  }

  logout() {
    return axios.post(API_URL + "/Login/logout");
  }

  getUserById(userId) {
    return axios.get(API_URL + "/" + userId);
  }

  updateUserActiveStatus(userId, publishStatus) {
    return axios.post(
      API_URL + "/" + userId + "/change-status/" + publishStatus,
      null
    );
  }

  updateCurrentUser(userData) {
    return axios.post(API_URL + "/update/current-user", userData);
  }

  updateUser(user) {
    return axios.post(API_URL + "/update", user);
  }

  refreshAdminUserAccessToken() {
    return axios.get(API_URL + "/Login/refresh-user-token", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
  }
}

export default new UserService();
