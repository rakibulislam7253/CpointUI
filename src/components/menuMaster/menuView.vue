<template>
  <h3>Menu View</h3>
  <div>
    <select @change="changeModuleEvent($event)">
      <option value="">Select Module Id</option>
      <option
        v-for="moduleId in modules_list"
        :key="moduleId.id"
        :value="moduleId.module_id"
      >
        <!-- {{ moduleId.module_id }} -->
        {{ moduleId.module_name }}
      </option>
    </select>
  </div>
  <nav class="mt-2">
    <ul
      class="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      <section v-for="MenuList in menuList" :key="MenuList.menu_id">
        <li class="nav-item menu-close" v-if="MenuList.parent_menu_id == null">
          <a href="#" style="color: rgb(0, 0, 0)" class="nav-link">
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
              <div class="nav-link">
                <i :class="[`${ChildMenuList.menu_icon}`]"> </i>
                <p>{{ ChildMenuList.menu_title }}</p>
              </div>
            </li>
          </ul>
        </li>
      </section>
    </ul>
  </nav>
</template>
<script>
import menuMasterService from "../../services/menuMaster.service";
import sweet_alert from "@/common/sweet";
import moduleService from "@/services/module.service";
export default {
  data() {
    return {
      menuList: [],
      childMenuList: [],
      showChildren: false,
      modules_list: [],
    };
  },
  methods: {
    changeModuleEvent(event) {
      console.log(event.target.value);
      menuMasterService
        .get_menu_list_by_module(event.target.value)
        .then((response2) => {
          console.log(response2.data);
          if (response2 != null) {
            this.menuList = response2.data;
            this.childMenuList = response2.data;
          } else {
            sweet_alert.error_message("Response not found!");
          }
        });
      // this.permissionModule.module_id = event.target.value;
      // this.permissionModule.user_id = this.$store.state.auth.userid;
      // console.log(this.permissionModule);
    },
  },
  mounted() {
    moduleService.get_module_list().then((response) => {
      if (response.data != null) {
        this.modules_list = response.data;
      } else {
        sweet_alert.error_message("Response not found!");
      }
    });
    {
      var toggler = document.getElementsByClassName("carettt");
      var i;
      for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
          this.parentElement
            .querySelector(".nesteddd")
            .classList.toggle("active");
          this.classList.toggle("carettt-down");
        });
      }
    }
    // menuMasterService.get_menu_list().then((response) => {

    // });
  },
};
</script>
<!-- <style scoped>
ul,
#myUL {
  list-style-type: none;
}

/* Remove margins and padding from the parent ul */
#myUL {
  margin: 0;
  padding: 0;
}
.parentMenu {
  margin-top: 20px;
}
.parentMenu i {
  font-size: 18px;
  color: rgb(0, 0, 0);
  margin-left: 10px;
}
/* Style the carettt/arrow */
.carettt {
  cursor: pointer;
  user-select: none;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-right: 32%;
  color: rgb(0, 0, 0);
}

/* Create the carettt/arrow with a unicode, and style it */
.carettt::after {
  content: "\00BB";
  color: rgb(0, 0, 0);
  display: inline-block;
  float: right;
  font-size: 25px;
  margin-top: -4px;
  font-weight: 900;
  /* font-family: 900; */
}

/* Rotate the carettt/arrow icon when clicked on (using JavaScript) */
.carettt-down {
  cursor: pointer;
}
.carettt-down::after {
  transform: rotate(90deg);
}

/* Hide the nesteddd list */
.nesteddd {
  display: none;
  margin-top: 15%;
}
.nesteddd li {
  transition-delay: 5s;
}

/* Show the nesteddd list when the user clicks on the carettt/arrow (with JavaScript) */
.active {
  display: block;
  transition-delay: 3s;
}
/* .childItem {
  margin-top: -25%;
  margin-left: -20px;
} */
.childItem:hover {
  color: rgb(0, 0, 0);
  background-color: rgb(51, 51, 51);
}
</style> -->
