export default [
  {
    path: "/dms",
    name: "dms",
    // redirect: { name: "branch" },
    component: () =>
      import(
        /* webpackChunkName: 'branch' */ "../../components/dms_userCreation/dmsUserCreation.vue"
      ),
    meta: {
      title: "DMS",
    },
    children: [
      {
        path: "",
        name: "dms",
        // redirect: { name: "branch" },
        component: () =>
          import(
            /* webpackChunkName: 'branch' */ "../../components/dms_userCreation/dmsUserCreation.vue"
          ),
        meta: {
          title: "DMS",
        },
      },
    ],
  },
];
