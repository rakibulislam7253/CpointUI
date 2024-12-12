export default class Cp_Users_AllProfile {
  constructor() {
    this.user_id = "";
    this.user_name = "";
    (this.first_name = ""),
      (this.last_name = ""),
      (this.permanent_address = "");
    this.present_address = "";
    this.fathers_name = "";
    this.mothers_name = "";
    this.spouse_name = "";
    this.blood_group = "";
    this.phone_number = "";
    this.emergency_contact_number = "";
    this.nid = "";
    this.employee_id = "";
    this.employee_designation = "";
    this.department_onfo = "";
    this.auth_status_id = "A";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = null;
    this.auth_2nd_dt = null;
  }

  loadModel(AllprofileData) {
    this.user_id = AllprofileData.user_id;
    this.user_name = AllprofileData.user_name;
    this.first_name = AllprofileData.first_name;
    this.last_name = AllprofileData.last_name;
    this.permanent_address = AllprofileData.permanent_address;
    this.present_address = AllprofileData.present_address;
    this.phone_number = AllprofileData.phone_number;
    this.fathers_name = AllprofileData.fathers_name;
    this.mothers_name = AllprofileData.mothers_name;
    this.spouse_name = AllprofileData.spouse_name;
    this.emergency_contact_number = AllprofileData.emergency_contact_number;
    this.blood_group = AllprofileData.blood_group;
    this.nid = AllprofileData.nid;
    this.employee_id = AllprofileData.employee_id;
    this.department_onfo = AllprofileData.department_onfo;
    this.employee_designation = AllprofileData.employee_designation;
    this.auth_status_id = AllprofileData.auth_status_id;
    this.auth_1st_by = AllprofileData.auth_1st_by;
    this.auth_1st_dt = AllprofileData.auth_1st_dt;
    this.make_by = AllprofileData.make_by;
    this.make_dt = AllprofileData.make_dt;
    this.auth_2nd_by = AllprofileData.auth_2nd_by;
    this.auth_2nd_dt = AllprofileData.auth_2nd_dt;
  }
}
