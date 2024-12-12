<template>
  {{ menu_id }}
  <li class="nav-item">
    <router-link :to="link" class="nav-link" :class="{ active: isActive() }">
      <i class="icon" :class="icon"></i>
      <p class="menu_id" :class="menu_id"></p>
      <p><slot /></p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    menu_id: {
      type: String,
      default: null,
    },
    link: {
      type: [String, Object],
      default: null,
    },
  },
  methods: {
    isActive() {
      if (typeof this.link === "object") {
        console.log(this.link);
        return this.$route.name === this.link.name;
      } else {
        return this.$route.path === this.link;
      }
    },
  },
};
</script>
