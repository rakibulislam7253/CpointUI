export default class authorizedDecline {
  constructor() {
    this.primary_table_column = "";
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
    this.primary_table_flag = 0;
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
  }
  loadModel(authorized_data) {
    this.primary_table_column = authorized_data.primary_table_column;
    this.module_id = authorized_data.module_id;
    this.queue_id = authorized_data.queue_id;
    this.menu_id = authorized_data.menu_id;
    this.table_name = authorized_data.table_name;
    this.table_rowid = authorized_data.table_rowid;
    this.column_name = authorized_data.column_name;
    this.data_type = authorized_data.data_type;
    this.old_value = authorized_data.old_value;
    this.new_value = authorized_data.new_value;
    this.action_status = authorized_data.action_status;
    this.primary_table_flag = authorized_data.primary_table_flag;
    this.remarks = authorized_data.remarks;
    this.log_status = authorized_data.log_status;
    this.reason_decline = authorized_data.reason_decline;
    this.last_action = authorized_data.last_action;
    this.auth_status_id = authorized_data.auth_status_id;
    this.auth_1st_by = authorized_data.auth_1st_by;
    this.auth_1st_dt = authorized_data.auth_1st_dt;
    this.make_by = authorized_data.make_by;
    this.make_dt = authorized_data.make_dt;
    this.auth_2nd_by = authorized_data.auth_2nd_by;
    this.auth_2nd_dt = authorized_data.auth_2nd_dt;
  }
}
