export default class Authorization {
  constructor() {
    this.module_id = "";
    this.queue_id = "";
    this.menu_id = "";
    this.table_name = "";
    this.table_rowid = "";
    this.column_name = "";
    this.data_type = "";
    this.old_value = "";
    this.new_value = "";
    this.action_status = "";
    this.primary_table_flag = "";
    this.remarks = "";
    this.log_status = "";
    this.reason_decline = "";
    this.last_action = "";
    this.auth_status_id = "";
    this.auth_1st_by = "";
    this.auth_1st_dt = "";
    this.make_by = "";
    this.make_dt = "";
    this.auth_2nd_by = "";
    this.auth_2nd_dt = "";
    this.primary_table_column = "";
  }

  loadModel(infoData) {
    this.module_id = infoData.module_id;
    this.queue_id = infoData.queue_id;
    this.menu_id = infoData.menu_id;
    this.table_name = infoData.table_name;
    this.table_rowid = infoData.table_rowid;
    this.column_name = infoData.column_name;
    this.data_type = infoData.data_type;
    this.old_value = infoData.old_value;
    this.new_value = infoData.new_value;
    this.action_status = infoData.action_status;
    this.primary_table_flag = infoData.primary_table_flag;
    this.remarks = infoData.remarks;
    this.log_status = infoData.log_status;
    this.reason_decline = infoData.reason_decline;
    this.last_action = infoData.last_action;
    this.auth_status_id = infoData.auth_status_id;
    this.auth_1st_by = infoData.auth_1st_by;
    this.auth_1st_dt = infoData.auth_1st_dt;
    this.make_by = infoData.make_by;
    this.make_dt = infoData.make_dt;
    this.auth_2nd_by = infoData.auth_2nd_by;
    this.auth_2nd_dt = infoData.auth_2nd_dt;
    this.primary_table_column = infoData.primary_table_column;
  }
}
