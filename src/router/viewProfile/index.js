export default [
  {
    path: "/viewprofile",
    name: "viewprofile",
    component: () =>
      import(
        /* webpackChunkName: 'PassThroughPanel' */ "../../components/userCreate/ViewProfile.vue"
      ),
    meta: {
      title: "view profile",
    },
  },
];
