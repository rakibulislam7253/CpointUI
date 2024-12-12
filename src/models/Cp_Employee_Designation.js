export default class Cp_Employee_Designation {
  constructor() {
    this.id = "";
    this.permission_id = "";
    this.user_id = "";
    this.designation_name = "";
    this.short_name = "";
    this.grade = 10;
    this.auth_status_id = "A";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
  }

  loadModel(cp_employee_designationData) {
    this.id = cp_employee_designationData.id;
    this.permission_id = cp_employee_designationData.permission_id;
    this.user_id = cp_employee_designationData.user_id;
    this.designation_name = cp_employee_designationData.designation_name;
    this.short_name = cp_employee_designationData.short_name;
    this.grade = cp_employee_designationData.grade;
    this.auth_status_id = cp_employee_designationData.auth_status_id;
    this.auth_1st_by = cp_employee_designationData.auth_1st_by;
    this.auth_1st_dt = cp_employee_designationData.auth_1st_dt;
    this.make_by = cp_employee_designationData.make_by;
    this.make_dt = cp_employee_designationData.make_dt;
    this.auth_2nd_by = cp_employee_designationData.auth_2nd_by;
    this.auth_2nd_dt = cp_employee_designationData.auth_2nd_dt;
  }
}
