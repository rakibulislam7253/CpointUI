export default class grant_menu_roleId {
  constructor() {
    this.role_id = "";
    this.menu_id = "";
    this.module_id = "";
    this.last_action = "";
    this.auth_status_id = "";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
    this.grant_id = "";
    this.grant_type = "";
    this.active = 0;
  }
  loadModel(grantMenuData) {
    this.role_id = grantMenuData.role_id;
    this.menu_id = grantMenuData.menu_id;
    this.module_id = grantMenuData.module_id;
    this.last_action = grantMenuData.last_action;
    this.auth_status_id = grantMenuData.auth_status_id;
    this.auth_1st_by = grantMenuData.auth_1st_by;
    this.auth_1st_dt = grantMenuData.auth_1st_dt;
    this.make_by = grantMenuData.make_by;
    this.make_dt = grantMenuData.make_dt;
    this.auth_2nd_by = grantMenuData.auth_2nd_by;
    this.auth_2nd_dt = grantMenuData.auth_2nd_dt;
    this.grant_id = grantMenuData.grant_id;
    this.grant_type = grantMenuData.grant_type;
    this.active = grantMenuData.active;
  }
}
