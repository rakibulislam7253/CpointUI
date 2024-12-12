<template>
  <div class="wrapper">
    <navber />
    <sidebar :navData="navData" />

    <div class="content-wrapper">
      <router-view />
    </div>

    <appfooter />
    <aside class="control-sidebar control-sidebar-dark"></aside>
  </div>
</template>

<script>
import Navber from "./nav/Lnav-bar.vue";
import Sidebar from "./nav/side-bar.vue";
import appfooter from "../layout/footer.vue";
export default {
  components: {
    Navber,
    Sidebar,
    appfooter,
  },
  data() {
    console.log("Stupid Programming 1");
    return {
      navData: JSON.parse(localStorage.getItem("menuList")),
    };
  },
};
</script>
