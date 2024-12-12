export default [
  {
    path: "/userPermission",
    name: "user_permission",
    component: () =>
      import(
        /* webpackChunkName: 'PassThroughPanel' */ "../../components/userPermission/UserPermission.vue"
      ),
    meta: {
      title: "user_permission",
    },
  },
];
