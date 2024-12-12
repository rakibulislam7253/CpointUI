<template>
  <div id="app">
    <loader></loader>
    <router-view v-if="publicRoute"></router-view>
    <div>
      <AdminTemplate v-if="!publicRoute"></AdminTemplate>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Loader from "../src/components/loader/loader.vue";
import AdminTemplate from "../src/layout/MainLayout.vue";

export default {
  name: "Home",
  data: function () {
    return {
      token: "",
    };
  },
  components: {
    Loader,
    AdminTemplate,
  },
  computed: {
    publicRoute: function () {
      var currentRoute = this.$route.path.toLowerCase();
      const publicRoutes = ["/login", "/forgot-password"];

      var isPublicRoute = publicRoutes.includes(currentRoute);
      if (currentRoute.includes("/reset-password")) {
        isPublicRoute = true;
      }

      return isPublicRoute;
    },
  },
  mounted() {
    this.token = localStorage.getItem("accessToken");
    // console.log(this.token);
    this.$nextTick(() => {
      this.onRouteChange(this.$route);
    });
  },
  watch: {
    $route(to) {
      this.onRouteChange(to);
    },
  },
  methods: {
    onRouteChange(route) {
      document.title = route.meta.title || "Center point";
    },
  },
};
</script>
