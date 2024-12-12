export default [
  {
    path: "/module",
    name: "module",
    // redirect: { name: "branch" },
    component: () =>
      import(
        /* webpackChunkName: 'branch' */ "../../components/module/module.vue"
      ),
    meta: {
      title: "Module",
    },
    children: [
      {
        path: "",
        name: "module",
        component: () =>
          import(
            /* webpackChunkName: 'Dashboard' */ "../../components/module/module.vue"
          ),
        meta: {
          title: "module",
        },
      },
    ],
  },
];
