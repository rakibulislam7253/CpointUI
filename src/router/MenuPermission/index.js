export default [
  {
    path: "/menuPermission",
    name: "menu_permission",
    component: () =>
      import(
        /* webpackChunkName: 'PassThroughPanel' */ "../../components/menuPermission/menuPermission.vue"
      ),
    meta: {
      title: "menu_permission",
    },
  },
];
