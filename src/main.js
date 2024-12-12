import { computed, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import UserService from "../src/services/user.service";
import GlobalConstants from "../src/common/GlobalConstant";
import GlobalFunction from "../src/common/GlobalFunction";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ContentHeader from "./components/ContentHeader.vue";
import Swal from "sweetalert2";
import sweet_alert from "../src/common/sweet";
library.add(fas);

import DataTable from "datatables.net-vue3";
import Select from "datatables.net-select";
DataTable.use(Select);

/* GLOBAL & CONSTANT VARIABLES REGISTERED HERE */
/* On any vue file access using this.$variableName */
const app = createApp(App);
app.config.globalProperties.$GlobalConstants = GlobalConstants;
app.config.globalProperties.$GlobalFunctions = GlobalFunction;
app.component("content-header", ContentHeader);
app.component("FontAwesome", FontAwesomeIcon);
app.use(store).use(router).mount("#app");
axios.defaults.showLoader = true;
computed({
  menuList() {
    return this.$store.state.auth.clickMenu;
  },
});
axios.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
      axios.defaults.headers.common["module_id"] =
        localStorage.getItem("module_id");
      axios.defaults.headers.common["menu_id"] = localStorage.getItem("menuId");
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      axios.defaults.headers.common["Access-Control-Allow-Methods"] =
        "OPTIONS,GET,PUT,POST,DELETE";
      axios.defaults.headers.common["Access-Control-Allow-Headers"] =
        "Content-Type, Authorization";
      store.dispatch("loader/done");
    } else if (config.method === "get" && config.showLoader) {
      store.dispatch("loader/pending");
    }
    return config;
  },
  function (error) {
    // Do something with request error
    if (error.config.method === "get" && error.config.showLoader) {
      store.dispatch("loader/done");
    }
    Swal.fire("Server Error!");
    return Promise.reject();
  }
);
//Global Error Handles here
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message === "Network Error") {
      Swal.fire("Network Error!");
    }
    Swal.fire("Server Error!");
    return null;
  }
);
const RefreshTokenInterval =
  process.env.VUE_APP_RefreshTokenIntervalInMinutes * 60 * 1000;
function refreshToken() {
  if (store.state.auth.loggedIn) {
    UserService.refreshAdminUserAccessToken().then(
      (response) => {
        if (response != null && response.data.jwt != null) {
          store.dispatch("auth/refreshAccessToken", response.data.jwt);
        } else {
          Error401();
        }
      },
      (error) => {
        console.log(error);
        store.dispatch("auth/logout");
        router.push("/login");
        // deleteAllCookies();
        sweet_alert.error_message("Session Time Out! Please Log in!");
      }
    );
  }
}
refreshToken();
setInterval(() => {
  refreshToken();
}, RefreshTokenInterval);

function Error401() {
  if (router.currentRoute.fullPath !== "/login") {
    var message =
      "Either session is expired or you are not authorized for the action. Please try login again.";
    store.dispatch("auth/logout");
    router.push("/login");
    sweet_alert.error_message(message);
  }
}
