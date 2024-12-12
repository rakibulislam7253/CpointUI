export default [
  {
    path: "/ApplicationRole",
    name: "applicationRole",
    // redirect: { name: "branch" },
    component: () =>
      import(
        /* webpackChunkName: 'branch' */ "../../components/role/ApplicationRole.vue"
      ),
    meta: {
      title: "ApplicationRole",
    },
    children: [
      {
        path: "",
        name: "applicationRole",
        component: () =>
          import(
            /* webpackChunkName: 'Dashboard' */ "../../components/role/ApplicationRole.vue"
          ),
        meta: {
          title: "ApplicationRole",
        },
      },
    ],
  },
];
