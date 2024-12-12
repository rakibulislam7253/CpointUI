export default class cp_change_password {
  constructor() {
    this.user_id = "";
    this.old_password = "";
    this.new_password = "";
    this.confirm_password = "";
  }

  loadModel(_change_password) {
    this.user_id = _change_password.user_id;
    this.old_password = _change_password.old_password;
    this.new_password = _change_password.new_password;
    this.confirm_password = _change_password.confirm_password;
  }
}
