export default class applicationRole {
  constructor() {
    this.role_id = "";
    this.module_id = "";
    this.module_name = "";
    this.role_name = "";
    this.api_access_role = "";
    this.last_action = "";
    this.auth_status_id = "";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
  }
  loadModel(applicationRole) {
    this.role_id = applicationRole.role_id;
    this.module_id = applicationRole.module_id;
    this.module_name = applicationRole.module_name;
    this.role_name = applicationRole.role_name;
    this.api_access_role = applicationRole.api_access_role;
    this.auth_status_id = applicationRole.auth_status_id;
    this.auth_1st_by = applicationRole.auth_1st_by;
    this.auth_1st_dt = applicationRole.auth_1st_dt;
    this.make_by = applicationRole.make_by;
    this.make_dt = applicationRole.make_dt;
    this.auth_2nd_by = applicationRole.auth_2nd_by;
    this.auth_2nd_dt = applicationRole.auth_2nd_dt;
  }
}
