<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/dashboard" class="brand-link">
      <img
        src="../../assets/logo/logo-only.png"
        alt="AdminLTE Logo"
        class="img-size-50 py-2 px-1 mr-2 bg-white"
        style="opacity: 0.8"
      />
      <span
        style="
          font-weight: bolder;
          color: rgb(229, 243, 255);
          font-family: 'Times New Roman', Times, serif;
        "
        class="mt-2"
        >Citizens Bank
      </span>
    </a>

    <div class="sidebar">
      <br />
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <section v-for="MenuList in menuList" :key="MenuList.menu_id">
            <li
              class="nav-item menu-close"
              v-if="MenuList.parent_menu_id == null"
            >
              <a href="#" style="color: white" class="nav-link">
                <i :class="[`${MenuList.menu_icon}`]"></i>
                &nbsp;
                <p>
                  {{ MenuList.menu_title }}
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul
                class="nav nav-treeview childItem"
                v-for="ChildMenuList in childMenuList"
                :key="ChildMenuList.menu_id"
              >
                <li
                  class="nav-item"
                  v-if="MenuList.menu_id == ChildMenuList.parent_menu_id"
                >
                  <router-link
                    @click="clickMenuId(ChildMenuList.menu_id)"
                    :to="ChildMenuList.navigate_url"
                    class="nav-link"
                  >
                    <i :class="[`${ChildMenuList.menu_icon}`]"> </i>
                    <p>{{ ChildMenuList.menu_title }}</p>
                  </router-link>
                </li>
              </ul>
            </li>
          </section>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
      <!-- /.sidebar -->
    </div>
  </aside>

  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
</template>

<script>
//import Navitem from "./nav-item.vue";
// import UserPermission from "../../services/userPermission";
export default {
  components: {},
  props: {
    navData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    // console.log("Stupid Programming 2");
    // console.log(this.navData);
    return {
      data: this.navData,
      count: 0,
    };
  },
  computed: {
    menuList() {
      // console.log(JSON.parse(localStorage.getItem("menuList")));
      // console.log(this.$store.state.auth.setMenuList);
      // console.log("Stupid Programming 3");
      return JSON.parse(localStorage.getItem("menuList"));
    },
    childMenuList() {
      return JSON.parse(localStorage.getItem("menuList"));
    },
  },
  methods: {
    clickMenuId(menu) {
      // console.log("Stupid Programming 4");
      // this.$store.dispatch("auth/clickMenu", menu);
      localStorage.setItem("menuId", menu);
      console.log(menu);
    },
  },
  mounted() {
    this.menuList = this.$store.state.auth.setMenuList;
    this.childMenuList = this.$store.state.auth.setMenuList;

    if (this.count == 0 && localStorage.getItem("counter") == 0) {
      location.reload(true);
      localStorage.setItem("counter", "1");
      // console.log("counter done");
    }
  },
};
</script>
<style scoped>
.nav-link:hover {
  background-color: #9c9d9e;
  color: aliceblue;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
.childItem {
  margin-left: 5%;

  /* border-bottom: 1px solid rgb(146, 98, 7); */
}
p {
  font-size: 14px;
}
</style>
