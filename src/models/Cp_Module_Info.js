export default class Cp_Module_Info {
  constructor() {
    this.module_id = "";
    this.module_name = "";
    this.user_id = "";
    this.permission_id = "";
    this.module_short_name = "";
    this.module_ui_ip = "";
    this.module_api_ip = "";
    this.module_nevigation_link = "";
    this.module_user_id = "";
    this.module_password = "";
    this.module_order = "";
    this.module_image = "";
    this.module_color_class = "";
    this.module_font_awesome = "";
    this.module_i_class = "";
    this.auth_status_id = "A";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
    this.last_action = "";
  }

  loadModel(moduleData) {
    this.module_id = moduleData.module_id;
    this.module_name = moduleData.module_name;
    this.user_id = moduleData.user_id;
    this.permission_id = moduleData.permission_id;
    this.module_short_name = moduleData.module_short_name;
    this.module_ui_ip = moduleData.module_ui_ip;
    this.module_api_ip = moduleData.module_api_ip;
    this.module_nevigation_link = moduleData.module_nevigation_link;
    this.module_user_id = moduleData.module_user_id;
    this.module_password = moduleData.module_password;
    this.module_order = moduleData.module_order;
    this.module_image = moduleData.module_image;
    this.module_color_class = moduleData.module_color_class;
    this.module_font_awesome = moduleData.module_font_awesome;
    this.module_i_class = moduleData.module_i_class;
    this.auth_status_id = moduleData.auth_status_id;
    this.auth_1st_by = moduleData.auth_1st_by;
    this.auth_1st_dt = moduleData.auth_1st_dt;
    this.make_by = moduleData.make_by;
    this.make_dt = moduleData.make_dt;
    this.auth_2nd_by = moduleData.auth_2nd_by;
    this.auth_2nd_dt = moduleData.auth_2nd_dt;
    this.last_action = moduleData.last_action;
  }
}
