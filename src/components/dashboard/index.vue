<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div
          class="col-sm-3 mb-3 mb-sm-0 mt-2"
          v-for="ModuleList in moduleList"
          :key="ModuleList.module_id"
        >
          <!-- small box -->
          <div :class="[`${ModuleList.module_color_class}`]">
            <div class="inner">
              <h3>{{ ModuleList.module_short_name }}</h3>
              <p>{{ ModuleList.module_name }}</p>
            </div>
            <div class="icon">
              <i :class="[`${ModuleList.module_i_class}`]"></i>
            </div>
            <!-- :href="`${ModuleList.module_nevigation_link}?token=${loginData.jwt}`" -->
            <a
              :href="[`${ModuleList.module_nevigation_link}`]"
              class="small-box-footer"
              target="_blank"
              @click="moduledata(ModuleList.module_nevigation_link)"
              >More info <i class="fas fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="row">
        <section class="col-lg-5 connectedSortable"></section>
      </div>
    </div>
  </section>
  <loginView :message="parentMessage" @sendData="handleDataFromChild" />
</template>

<script>
import UserPermission from "../../services/userPermission";
import ModuleInfo from "../../services/module.service";
import documentService from "@/services/document.service";
// import loginView from "../../components/dashboard/LoginView.vue";
import sweet_alert from "@/common/sweet";
// import axios from 'axios';
export default {
  // components: { loginView },
  name: "Home",
  data() {
    return {
      dataShow: "",
      moduleList: [],
      loginData: JSON.parse(localStorage.getItem("user")),
    };
  },
  computed: {
    user: function () {
      return JSON.parse(this.$store.state.auth.userLoginInfo);
    },
    updateLocation() {
      return this.$store.state.auth.locationAllocate;
    },
  },
  methods: {
    buttonClick() {
      this.$emit("sendData", "Hello from Child!");
    },

    moduledata(data) {
      console.log("data link", data);
      // const token = localStorage.getItem("user");
      // window.location.href = `data?token=${this.loginData.jwt}`;
    },
  },
  // nevbar name photo show
  mounted() {
    documentService
      .get_profile_img_by_user_id(this.loginData.userId)
      .then((response) => {
        if (response != null) {
          this.byteData = response.data;
          if (this.byteData) {
            const byteCharacters = atob(this.byteData);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: "image/*" });
            // Create a data URL from the Blob
            const reader = new FileReader();
            reader.onload = (e) => {
              localStorage.setItem("imageSrc", e.target.result);
            };
            reader.readAsDataURL(blob);
          } else {
            console.log("profile picture Null");
          }
        } else {
          sweet_alert.error_message("Response not found!");
        }
      });
    UserPermission.get_module_by_user(this.loginData.userId)
      .then((response) => {
        if (response != null) {
          this.moduleList = response.data;
          console.log("profile picture Null");
        } else {
          sweet_alert.error_message("Response not found!");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    ModuleInfo.get_module_by_shortName()
      .then((response) => {
        // console.log(response);
        // localStorage.setItem(
        //   "sharedData",
        //   JSON.stringify({ key: "response.data" })
        // );
        if (response != null) {
          this.$store.dispatch("auth/setModuleInfo", response.data);
        } else {
          sweet_alert.error_message("Response not found!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
.content {
  background-image: url("../../assets/logo/Texture.JPG");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
</style>
