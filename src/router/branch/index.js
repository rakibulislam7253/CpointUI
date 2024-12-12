export default [
  {
    path: "/branch",
    name: "branch",
    // redirect: { name: "branch" },
    component: () =>
      import(
        /* webpackChunkName: 'branch' */ "../../components/branch/Branch.vue"
      ),
    meta: {
      title: "Branch",
    },
    children: [
      {
        path: "",
        name: "branch",
        component: () =>
          import(
            /* webpackChunkName: 'Dashboard' */ "../../components/branch/Branch.vue"
          ),
        meta: {
          title: "Branch",
        },
      },
    ],
  },
];
