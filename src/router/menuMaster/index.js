export default [
  {
    path: "/menu",
    name: "menu",
    // redirect: { name: "branch" },
    component: () =>
      import(
        /* webpackChunkName: 'branch' */ "../../components/menuMaster/menuMaster.vue"
      ),
    meta: {
      title: "Menu",
    },
    children: [
      {
        path: "",
        name: "menu",
        component: () =>
          import(
            /* webpackChunkName: 'Dashboard' */ "../../components/menuMaster/menuMaster.vue"
          ),
        meta: {
          title: "Menu",
        },
      },
    ],
  },
];
