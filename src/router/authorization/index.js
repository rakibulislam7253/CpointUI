export default [
  {
    path: "/authorize",
    name: "authorize",
    // redirect: { name: "branch" },
    component: () =>
      import(
        /* webpackChunkName: 'branch' */ "../../components/Authorization/authorization.vue"
      ),
    meta: {
      title: "Authorize",
    },
    children: [
      {
        path: "",
        name: "authorize",
        component: () =>
          import(
            /* webpackChunkName: 'Dashboard' */ "../../components/Authorization/authorization.vue"
          ),
        meta: {
          title: "Authorize",
        },
      },
    ],
  },
];
