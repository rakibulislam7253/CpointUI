export default class Cp_Log_Activity {
  constructor() {
    this.id = "";
    this.user_name = "";
    this.browser_details = "";
    this.host = "";
    this.local_ip = "";
    this.local_port = "";
    this.machine_id = "";
    this.make_dt = "";
    this.method = "";
    this.path = "";
    this.path_base = "";
    this.query_string = "";
    this.remote_ip = "";
    this.remote_port = "";
    this.status_code = "";
    this.status_message = "";
  }
  loadModel(logActivityData) {
    this.id = logActivityData.id;
    this.user_name = logActivityData.user_name;
    this.browser_details = logActivityData.browser_details;
    this.host = logActivityData.host;
    this.local_ip = logActivityData.local_ip;
    this.local_port = logActivityData.local_port;
    this.machine_id = logActivityData.machine_id;
    this.make_dt = logActivityData.make_dt;
    this.method = logActivityData.method;
    this.path = logActivityData.path;
    this.path_base = logActivityData.path_base;
    this.query_string = logActivityData.query_string;
    this.remote_ip = logActivityData.remote_ip;
    this.remote_port = logActivityData.remote_port;
    this.status_code = logActivityData.status_code;
    this.status_message = logActivityData.status_message;
  }
}
