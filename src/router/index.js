import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import _ from "lodash";
import Unauthorized from "./unauthorized";
import Dashboard from "./dashboard";
import UserManagement from "./UserManagement";
import branch from "./branch";
import department from "./department";
import designation from "./designation";
import menuMaster from "./menuMaster";
import module from "./module";
import viewProfile from "./viewProfile";
import UserPermission from "./UserPermission";
import MenuPermission from "./MenuPermission";
import ApplicationRole from "./applicationRole";
import RoleMenuPermission from "./RoleMenuPermission";
import Authorization from "./authorization";
import roleCetagory from "./roleCetagory";
import dms from "./dms";

const routes = [
  // Root
  {
    path: "/",
    name: "login",
    component: function () {
      return import("../layout/nav/LoginView.vue");
    },
  },
  {
    path: "/createUser",
    name: "user_create",
    component: function () {
      return import("../components/userCreate/UserCreate.vue");
    },
  },

  // Reseller Auth
  //...ResellerAuth,

  // Unauthorized
  ...Unauthorized,
  ...roleCetagory,
  //Dashboard
  ...Dashboard,

  // User Management
  ...UserManagement,
  // Branch
  ...branch,

  //department
  ...department,

  //designation
  ...designation,

  // menuMaster
  ...menuMaster,

  // module
  ...module,

  // view profile
  ...viewProfile,
  // UserPermission
  ...UserPermission,
  // MenuPermission
  ...MenuPermission,
  ...ApplicationRole,
  ...RoleMenuPermission,
  ...Authorization,
  ...dms,
];
// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const router = new createRouter({
  history: createWebHistory("/"),
  base: process.env.BASE_URL,
  routes,
});

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // Scroll to top
  var currentRoute = to.path;
  console.log("Current path" + currentRoute);
  const loggedIn = localStorage.getItem("accessToken");
  if (loggedIn) {
    const jwtPayload = parseJwt(loggedIn);
    if (jwtPayload.exp < Date.now() / 1000) {
      // token expired
      localStorage.clear();
      next("/logout");
    }
  }
  const publicRoutes = ["/login", "/forgot-password"];
  const allowedForLoggedInUsers = ["/", "/dashboard"];
  const isAllowedForLoggedInUsers = allowedForLoggedInUsers.some((element) =>
    currentRoute.includes(element)
  );
  if (currentRoute == "/") next("/dashboard");
  var isPublicRoute = publicRoutes.includes(currentRoute);
  if (currentRoute.includes("/reset-password")) {
    isPublicRoute = true;
  }
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (!isPublicRoute && !loggedIn) {
    next("/login");
  } else if (
    !isPublicRoute &&
    loggedIn &&
    currentRoute !== "/unauthorized" &&
    isAllowedForLoggedInUsers
  ) {
    next();
  } else if (!isPublicRoute && loggedIn && currentRoute !== "/unauthorized") {
    store.dispatch("auth/fetchAndSetPermissions").then((response) => {
      var pathName = currentRoute.split("/")[1].toLowerCase();
      var permissions = response;
      var isAuthorized = _.find(permissions, function (p) {
        return (
          p.PrivilegeName.toLowerCase().includes(pathName) && p.Label === 1
        );
      });
      if (isAuthorized) {
        next();
      } else {
        router.push({
          name: "unauthorized",
        });
      }
    });
  } else {
    next();
  }
});

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}
export default router;
