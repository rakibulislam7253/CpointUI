export default [
  {
    path: "/dashboard",
    name: "dashboard",
    // redirect: { name: "dashboard" },
    component: () =>
      import(
        /* webpackChunkName: 'PassThroughPanel' */ "../../components/dashboard/index.vue"
      ),
    meta: {
      title: "Dashboard",
    },
    children: [
      {
        path: "",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: 'Dashboard' */ "../../components/dashboard/index.vue"
          ),
        meta: {
          title: "Dashboard",
        },
      },
    ],
  },
];
