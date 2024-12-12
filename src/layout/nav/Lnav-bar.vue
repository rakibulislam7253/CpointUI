<template>
  <div v-if="showComponenet">
    <ChangePassword @condition="getName" />
  </div>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="/dashboard" class="nav-link">Home</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <div v-if="imageSrc">
            <div class="user-panel d-flex" style="margin-top: -1%">
              <div class="info" v-if="user">
                <p class="d-block fw-bold">
                  {{ user.firstName }} {{ user.lastName }}
                </p>
              </div>
              <div class="image">
                <img
                  :src="imageSrc"
                  class="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
            </div>
          </div>
          <div v-if="!imageSrc">
            <div class="user-panel d-flex" style="margin-top: -1%">
              <div class="info" v-if="user">
                <p class="d-block fw-bold">
                  {{ user.firstName }} {{ user.lastName }}
                </p>
              </div>
              <div class="image">
                <img
                  :src="avata"
                  class="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
            </div>
          </div>
          <p
            v-if="!user"
            style="float: right; color: black"
            class="pr-2 text-semibold"
          >
            Log in
          </p>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <a href="/profile" class="dropdown-item">
            <i class="fas fa-user mr-2"></i>View Profile
          </a>
          <div class="dropdown-divider"></div>
          <a
            href="javascript:void(0)"
            data-toggle="modal"
            data-target="#modal-change_password"
            data-bs-whatever="@mdo"
            @click="ChangePasswordClick"
            class="dropdown-item"
          >
            <i class="fas fa-key mr-2"></i> Change Password
          </a>
          <a
            href="javascript:void(0)"
            @click="LogoutClick"
            class="dropdown-item"
          >
            <i class="fas fa-sign-out-alt mr-2"></i> Log Out
          </a>
          <div class="dropdown-divider"></div>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
import ChangePassword from "../../components/UserManagement/ChangePassword.vue";
import logout from "../../services/user.service";
import nav_photo from "../../assets/images/user.png";
export default {
  name: "nav-bar",
  components: { ChangePassword },
  data() {
    return {
      user_info: JSON.parse(localStorage.getItem("user")),
      byteData: "",
      user: null,
      imageSrc: localStorage.getItem("imageSrc"),
      avata: nav_photo,
      showComponenet: false,
    };
  },

  methods: {
    getName() {
      this.showComponenet = false;
      // console.log(value); // Raja Tamil
    },
    LogoutClick() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
      this.$emit("send-data", "Hello from Child!");
      logout.logout().then((response) => {
        console.log(response);
      });
    },
    ChangePasswordClick() {
      this.showComponenet = true;
    },
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  computed: {
    updatelogedinuserInfo() {
      return JSON.parse(this.$store.state.auth.userLoginInfo);
    },
  },
};
</script>
<style>
.profile_picture {
  width: 15%;
  float: right;
}
.navbar-light .navbar-nav .nav-link {
  color: rgb(36, 35, 35);
  font-weight: 500;
  font-size: 15px;
}
p {
  font-size: 14px;
}
a {
  font-size: 14px;
}
</style>
