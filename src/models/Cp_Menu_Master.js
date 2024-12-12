export default class Cp_Menu_Master {
  constructor() {
    this.menu_id = "";
    this.menu_title = "";
    this.parent_menu_id = 0;
    this.navigate_url = "";
    this.menu_icon = "";
    this.menu_image_url = "";
    this.menu_order = 0;
    this.module_id = "";
    this.auth_status_id = "A";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "ADMIN";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
  }

  loadModel(cp_menu_master) {
    this.menu_id = cp_menu_master.menu_id;
    this.menu_title = cp_menu_master.menu_title;
    this.parent_menu_id = cp_menu_master.parent_menu_id;
    this.navigate_url = cp_menu_master.navigate_url;
    this.menu_icon = cp_menu_master.menu_icon;
    this.menu_image_url = cp_menu_master.menu_image_url;
    this.menu_order = cp_menu_master.menu_order;
    this.module_id = cp_menu_master.module_id;
    this.auth_status_id = cp_menu_master.auth_status_id;
    this.auth_1st_by = cp_menu_master.auth_1st_by;
    this.auth_1st_dt = cp_menu_master.auth_1st_dt;
    this.make_by = cp_menu_master.make_by;
    this.make_dt = cp_menu_master.make_dt;
    this.auth_2nd_by = cp_menu_master.auth_2nd_by;
    this.auth_2nd_dt = cp_menu_master.auth_2nd_dt;
  }
}
