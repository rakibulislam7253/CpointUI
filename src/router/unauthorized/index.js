export default [
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () =>
      import(
        /* webpackChunkName: 'PassThroughPanel' */ "../../views/Unauthorized.vue"
      ),
    meta: {
      title: "Unauthorized",
    },
  },
];
