export default class module_setting {
  constructor() {
    this.auth_status_id = "";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
    this.module_id = "";
    this.ftp_location = "";
    this.ftp_folder_nm = "";
    this.save_filepath = "";
    this.ftp_user_nm = "";
    this.ftp_password = "";
    this.encrypt_flag = "";
    this.local_decrypt_filepath = "";
    this.local_filepath = "";
    this.ftp_flag = "";
  }
  loadModel(moduleSetting) {
    this.module_id = moduleSetting.module_id;
    this.ftp_location = moduleSetting.ftp_location;
    this.ftp_folder_nm = moduleSetting.ftp_folder_nm;
    this.save_filepath = moduleSetting.save_filepath;
    this.ftp_user_nm = moduleSetting.ftp_user_nm;
    this.ftp_password = moduleSetting.ftp_password;
    this.encrypt_flag = moduleSetting.encrypt_flag;
    this.local_decrypt_filepath = moduleSetting.local_decrypt_filepath;
    this.local_filepath = moduleSetting.local_filepath;
    this.ftp_flag = moduleSetting.ftp_flag;
    this.auth_status_id = moduleSetting.auth_status_id;
    this.auth_1st_by = moduleSetting.auth_1st_by;
    this.auth_1st_dt = moduleSetting.auth_1st_dt;
    this.make_by = moduleSetting.make_by;
    this.make_dt = moduleSetting.make_dt;
    this.auth_2nd_by = moduleSetting.auth_2nd_by;
    this.auth_2nd_dt = moduleSetting.auth_2nd_dt;
  }
}
