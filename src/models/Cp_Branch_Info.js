export default class Cp_Branch_Info {
  constructor() {
    this.branch_id = "";
    this.branch_name = "";
    this.permission_id = "";
    this.user_id = "";
    this.branch_short_name = "";
    this.branch_open_date = "";
    this.branch_closed_flag = 0;
    this.branch_closed_date = "";
    this.address1 = "";
    this.address2 = "";
    this.thana_id = "Abc";
    this.city_id = "";
    this.district_id = "";
    this.state_id = "";
    this.country_id = "";
    this.zip_code = "";
    this.mobile_no = "";
    this.phone_no = "";
    this.fax = "";
    this.email = "";
    this.auth_status_id = "A";
    this.make_by = "";
    this.make_dt = "";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
  }

  loadModel(cp_branch_infoData) {
    this.branch_id = cp_branch_infoData.branch_id;
    this.branch_name = cp_branch_infoData.branch_name;
    this.permission_id = cp_branch_infoData.permission_id;
    this.user_id = cp_branch_infoData.user_id;
    this.branch_short_name = cp_branch_infoData.branch_short_name;
    this.branch_open_date = cp_branch_infoData.branch_open_date;
    this.branch_closed_flag = cp_branch_infoData.branch_closed_flag;
    this.branch_closed_date = cp_branch_infoData.branch_closed_date;
    this.address1 = cp_branch_infoData.address1;
    this.address2 = cp_branch_infoData.address2;
    this.thana_id = cp_branch_infoData.thana_id;
    this.city_id = cp_branch_infoData.city_id;
    this.district_id = cp_branch_infoData.district_id;
    this.state_id = cp_branch_infoData.state_id;
    this.country_id = cp_branch_infoData.country_id;
    this.zip_code = cp_branch_infoData.zip_code;
    this.mobile_no = cp_branch_infoData.mobile_no;
    this.phone_no = cp_branch_infoData.phone_no;
    this.fax = cp_branch_infoData.fax;
    this.email = cp_branch_infoData.email;
    this.auth_status_id = cp_branch_infoData.auth_status_id;
    this.make_by = cp_branch_infoData.make_by;
    this.make_dt = cp_branch_infoData.make_dt;
    this.auth_1st_by = cp_branch_infoData.auth_1st_by;
    this.auth_1st_dt = cp_branch_infoData.auth_1st_dt;
    this.auth_2nd_by = cp_branch_infoData.auth_2nd_by;
    this.auth_2nd_dt = cp_branch_infoData.auth_2nd_dt;
  }
}
