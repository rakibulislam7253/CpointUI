<template>
  <div class="background">
    <div class="row">
      <childComponent @sendData="receiveData" v-if="showChild"></childComponent>
      <div class="col-md-6 offset-md-3">
        <div class="my-5">
          <div class="card-body cardbody-color">
            <div class="text-center my-4">
              <img
                src="../../assets/logo/Logo.png"
                style="margin-bottom: 60px; width: 60%"
                alt="profile"
              />
              <div><p class="inhouse">ICT Division</p></div>
            </div>

            <!-- INPUT WITH EMAIL -->
            <div class="mb-3" @change="searchUserId($event)">
              <input
                type="text"
                id="userName"
                v-model="user.userName"
                required
                class="form-control form-control-sm"
                placeholder="UserName"
              />
            </div>
            <!-- INPUT WITH PASSWORD -->
            <input
              v-if="showPassword"
              type="text"
              class="input form-control form-control-sm showinput"
              required
              v-model="user.password"
            />

            <input
              v-else
              :disabled="!passDisabled"
              type="password"
              class="input form-control form-control-sm showinput"
              required
              placeholder="Password..."
              v-model="user.password"
            />

            <div style="color: red; position: absolute">
              <p style="margin-left: 50px">{{ errordata }}</p>
            </div>

            <!-- SHOW PASSWORD ICON -->
            <div class="field has-addons">
              <div class="control mt-5">
                <p class="button" @click="toggleShow">
                  <span class="icon is-small is-right">
                    <FontAwesome v-if="showPassword" icon="fas fa-eye-slash" />
                    <FontAwesome v-else icon="fas fa-eye" />
                    <!-- <i v-else class="fas fa-eye" /> -->
                  </span>
                </p>
              </div>

              <!-- LOGIN BUTTON -->

              <div class="text-center">
                <button
                  v-if="adButton"
                  v-on:click="submitFormAd()"
                  class="btn btn-color btn-success btn-sm"
                >
                  Login
                </button>

                <button
                  v-if="nonAdButton"
                  v-on:click="submitForm()"
                  class="btn btn-color btn-primary btn-sm"
                >
                  Login
                </button>
              </div>

              <div
                style="
                  color: rgb(41, 125, 221);
                  margin-top: -40px;
                  margin-bottom: 69px;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import childComponent from "../nav/Lnav-bar.vue";
import AuthService from "../../services/auth/auth.service";
import AccountService from "@/services/account.service";
import UserLogin from "../../models/UserLogin";
import UserPermission from "../../services/userPermission";
import sweet_alert from "../../common/sweet";
export default {
  components: { childComponent },
  name: "LgoinPanel",
  data() {
    return {
      loading: false,
      user: new UserLogin(),
      showPassword: false,
      passDisabled: false,
      errordata: "",
      adButton: true,
      showChild: false,
      nonAdButton: false,
      userData: {
        firstName: "",
        lastName: "",
        jwt: "",
      },
    };
  },
  mounted() {
    localStorage.clear();
    localStorage.removeItem("accessToken");
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },

  methods: {
    receiveData(data) {
      console.log("objectfaergfsegvdv", data);
      location.reload();
      // this.childData = data;
    },
    //   reloadPage () {
    // console.log("event.target.value");
    //     // <!-- location.reload(); -->
    //   },
    searchUserId(event) {
      console.log(event.target.value);
      // this.$refs.child.reload();
      // this.$emit("sendData", "Hello from Child!");
      if (event.target.value.trim() != "") {
        AccountService.check_user_exist(event.target.value).then(
          (response1) => {
            console.log(response1);
            if (response1) {
              if (response1.data == event.target.value) {
                this.passDisabled = true;
                AuthService.check_ad_user(response1.data).then((response2) => {
                  console.log(response2);
                  if (response2 != null) {
                    if (response2.data == 1) {
                      console.log("an AD user");
                      this.adButton = true;
                      this.nonAdButton = false;
                    } else {
                      console.log(" not an AD user");
                      this.nonAdButton = true;
                      this.adButton = false;
                    }
                  } else {
                    this.passDisabled = false;
                    this.adButton = true;
                    this.nonAdButton = false;
                    sweet_alert.error_message("data found");
                  }
                });
              } else {
                this.passDisabled = false;
                this.adButton = true;
                this.nonAdButton = false;
                sweet_alert.error_message("Please create your user!");
              }
            } else {
              sweet_alert.error_message("Do not data load");
            }
          }
        );
      } else {
        this.passDisabled = false;
        this.adButton = true;
        this.nonAdButton = false;
        sweet_alert.error_message("Please do not space search!!!");
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    async submitFormAd() {
      this.loginWithAD();
    },

    async submitForm() {
      this.tryLogin();
    },
    loginWithAD() {
      this.loading = true;
      AuthService.loginWithAD(this.user).then(
        (response) => {
          console.log(response);
          if (response != null && response.status == "200") {
            this.loading = false;
            if (response.data.error_msg != null) {
              sweet_alert.error_message(response.data.error_msg);
            } else {
              localStorage.setItem("counter", 0);
              UserPermission.get_menu_by_user(response.data.userId)
                .then((response2) => {
                  localStorage.setItem(
                    "menuList",
                    JSON.stringify(response2.data)
                  );
                  this.$store.dispatch("auth/setMenuList", response2.data);
                  // action response
                })
                .catch((error) => {
                  console.error(error);
                });
              this.$store.dispatch("auth/login", response.data);
              console.log("login store", this.$store.state.auth.login);

              this.$router.push("/dashboard");
              sweet_alert.Login_confirmation_box(response);
            }
          } else {
            sweet_alert.confirmation_box("Invalid UserName or Password");
          }
        },
        (error) => {
          this.loading = false;
          sweet_alert.Login_confirmation_box(error.message);
        }
      );
    },
    tryLogin() {
      this.loading = true;
      AuthService.login(this.user).then(
        (response) => {
          if (response != null && response.status == "200") {
            console.log("Login response1");
            console.log(response.data.error_msg);
            this.loading = false;
            if (response.data.error_msg != null) {
              sweet_alert.error_message(response.data.error_msg);
            } else {
              console.log("Login response2");
              console.log(response.data.userId);
              localStorage.setItem("counter", 0);
              UserPermission.get_menu_by_user(response.data.userId)
                .then((response2) => {
                  console.log("Login response3");
                  console.log(response2);
                  localStorage.setItem(
                    "menuList",
                    JSON.stringify(response2.data)
                  );
                  this.$store.dispatch("auth/setMenuList", response2.data);
                })
                .catch((error) => {
                  console.error(error);
                });
              this.$store.dispatch("auth/login", response.data);
              console.log("login store", this.$store.state.auth.login);

              this.$router.push("/dashboard");
              sweet_alert.Login_confirmation_box(response);
            }
          } else {
            sweet_alert.error_message("Invalid UserName or Password");
          }
        },
        (error) => {
          this.loading = false;
          sweet_alert.Login_confirmation_box(error.message);
        }
      );
    },
  },
};
</script>

<style>
@import "../../assets/Css/login/login.css";
</style>
