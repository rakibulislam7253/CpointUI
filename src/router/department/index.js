export default [
  {
    path: "/department",
    name: "department",
    // redirect: { name: "branch" },
    component: () =>
      import(
        /* webpackChunkName: 'branch' */ "../../components/department/Department.vue"
      ),
    meta: {
      title: "Department",
    },
    children: [
      {
        path: "",
        name: "department",
        component: () =>
          import(
            /* webpackChunkName: 'Dashboard' */ "../../components/department/Department.vue"
          ),
        meta: {
          title: "Department",
        },
      },
    ],
  },
];
