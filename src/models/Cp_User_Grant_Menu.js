export default class Cp_User_Grant_Menu {
  constructor() {
    this.auth_status_id = "";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
    this.grant_id = "";
    this.user_id = "";
    this.menu_id = "";
    this.active = "";
  }

  loadModel(cp_user_grant_menuData) {
    this.auth_status_id = cp_user_grant_menuData.auth_status_id;
    this.auth_1st_by = cp_user_grant_menuData.auth_1st_by;
    this.auth_1st_dt = cp_user_grant_menuData.auth_1st_dt;
    this.make_by = cp_user_grant_menuData.make_by;
    this.make_dt = cp_user_grant_menuData.make_dt;
    this.auth_2nd_by = cp_user_grant_menuData.auth_2nd_by;
    this.auth_2nd_dt = cp_user_grant_menuData.auth_2nd_dt;
    this.grant_id = cp_user_grant_menuData.grant_id;
    this.user_id = cp_user_grant_menuData.user_id;
    this.menu_id = cp_user_grant_menuData.menu_id;
    this.active = cp_user_grant_menuData.active;
  }
}
