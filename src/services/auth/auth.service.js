import axios from "axios";
axios.defaults.headers.common["module_id"] = process.env.VUE_APP_MODULE_ID;
const API_URL = process.env.VUE_APP_API_BASE_URL;
const REQEST_URL = API_URL + "api/Login/";
// http://10.140.6.22/cPoint/api/Login/login
class AuthService {
  login(user) {
    console.log(user);
    return axios.post(REQEST_URL + "login", {
      userName: user.userName,
      password: user.password,
    });
    // console.log(user);
  }
  //http://10.140.6.22/cPoint/api/Login/check_ad_user?user_id=atikur.rahaman
  check_ad_user(ad_user) {
    console.log(ad_user);
    return axios.post(REQEST_URL + "check_ad_user?user_id=" + ad_user);
  }
  // search_user_from_ad(ad_user) {
  //   console.log("search_user_from_ad", ad_user);
  //   return axios.post(
  //     REQEST_URL + "/search_user_from_ad" + "?userName=" + ad_user
  //   );
  // }
  loginWithAD(user) {
    return axios.post(REQEST_URL + "loginWithAd", {
      userName: user.userName,
      password: user.password,
    });
  }
}

export default new AuthService();
