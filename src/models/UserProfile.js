export default class UserProfile {
  constructor() {
    this.user_id = "";
    this.user_name = "";
    this.full_name = "";
    this.permanent_address = "";
    this.present_address = "";
    this.phone_number = "";
    this.fathers_name = "";
    this.mothers_name = "";
    this.spouse_name = "";
    this.emergency_contact_number = "";
    this.blood_group = "";
    this.nid = "";
    this.email = "";
    this.employee_id = "";
    this.department_onfo = "";
    this.employee_designation = "";
    this.auth_status_id = "A";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = null;
    this.auth_2nd_dt = null;
  }

  loadModel(profileData) {
    this.user_id = profileData.user_id;
    this.user_name = profileData.user_name;
    this.full_name = profileData.full_name;
    this.permanent_address = profileData.permanent_address;
    this.present_address = profileData.present_address;
    this.phone_number = profileData.phone_number;
    this.fathers_name = profileData.fathers_name;
    this.mothers_name = profileData.mothers_name;
    this.spouse_name = profileData.spouse_name;
    this.emergency_contact_number = profileData.emergency_contact_number;
    this.blood_group = profileData.blood_group;
    this.email = profileData.email;
    this.nid = profileData.nid;
    this.employee_id = profileData.employee_id;
    this.department_onfo = profileData.department_onfo;
    this.employee_designation = profileData.employee_designation;
    this.auth_status_id = profileData.auth_status_id;
    this.auth_1st_by = profileData.auth_1st_by;
    this.auth_1st_dt = profileData.auth_1st_dt;
    this.make_by = profileData.make_by;
    this.make_dt = profileData.make_dt;
    this.auth_2nd_by = profileData.auth_2nd_by;
    this.auth_2nd_dt = profileData.auth_2nd_dt;
  }
}
