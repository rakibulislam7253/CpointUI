export default [
  {
    path: "/RoleMenuPermission",
    name: "role",
    // redirect: { name: "role" },
    component: () =>
      import(
        /* webpackChunkName: 'role' */ "../../components/RoleMenuPermission/RoleMenuPermission.vue"
      ),
    meta: {
      title: "MenuPermission",
    },
    children: [
      {
        path: "",
        name: "role",
        component: () =>
          import(
            /* webpackChunkName: 'role' */ "../../components/RoleMenuPermission/RoleMenuPermission.vue"
          ),
        meta: {
          title: "MenuPermission",
        },
      },
    ],
  },
];
