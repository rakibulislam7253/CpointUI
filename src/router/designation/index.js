export default [
  {
    path: "/designation",
    name: "designation",
    // redirect: { name: "branch" },
    component: () =>
      import(
        /* webpackChunkName: 'branch' */ "../../components/designation/Designation.vue"
      ),
    meta: {
      title: "Designation",
    },
    children: [
      {
        path: "",
        name: "designation",
        component: () =>
          import(
            /* webpackChunkName: 'Dashboard' */ "../../components/designation/Designation.vue"
          ),
        meta: {
          title: "Designation",
        },
      },
    ],
  },
];
