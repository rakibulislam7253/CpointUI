export default class Cp_Department_Info {
  constructor() {
    this.id = "";
    this.permission_id = "";
    this.department_name = "";
    this.user_id = "";
    this.short_name = "";
    this.auth_status_id = "A";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
    this.email = "";
  }

  loadModel(cp_department_infoData) {
    this.id = cp_department_infoData.id;
    this.permission_id = cp_department_infoData.permission_id;
    this.department_name = cp_department_infoData.department_name;
    this.user_id = cp_department_infoData.user_id;
    this.short_name = cp_department_infoData.short_name;
    this.auth_status_id = cp_department_infoData.auth_status_id;
    this.auth_1st_by = cp_department_infoData.auth_1st_by;
    this.auth_1st_dt = cp_department_infoData.auth_1st_dt;
    this.make_by = cp_department_infoData.make_by;
    this.make_dt = cp_department_infoData.make_dt;
    this.auth_2nd_by = cp_department_infoData.auth_2nd_by;
    this.auth_2nd_dt = cp_department_infoData.auth_2nd_dt;
    this.email = cp_department_infoData.email;
  }
}
