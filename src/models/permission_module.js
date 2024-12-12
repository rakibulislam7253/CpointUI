export default class permission_module {
  constructor() {
    this.last_action = "";
    this.auth_status_id = "A";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
    this.module_id = "";
    this.module_name = "";
    this.user_id = "";
    this.permission_id = "";
    this.role_id = "";
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
  }

  loadModel(module) {
    this.last_action = module.last_action;
    this.auth_status_id = module.auth_status_id;
    this.auth_1st_by = module.auth_1st_by;
    this.auth_1st_dt = module.auth_1st_dt;
    this.role_id = module.role_id;
    this.make_by = module.make_by;
    this.make_dt = module.make_dt;
    this.auth_2nd_by = module.auth_2nd_by;
    this.auth_2nd_dt = module.auth_2nd_dt;
    this.module_id = module.module_id;
    this.module_name = module.module_name;
    this.user_id = module.user_id;
    this.permission_id = module.permission_id;
    this.module_short_name = module.module_short_name;
    this.module_ui_ip = module.module_ui_ip;
    this.module_api_ip = module.module_api_ip;
    this.module_nevigation_link = module.module_nevigation_link;
    this.module_user_id = module.module_user_id;
    this.module_password = module.module_password;
    this.module_order = module.module_order;
    this.module_image = module.module_image;
    this.module_color_class = module.module_color_class;
    this.module_font_awesome = module.module_font_awesome;
    this.module_i_class = module.module_i_class;
  }
}
