export default class Ad_From_User {
  constructor() {
    this.sid = "";
    this.guid = "";
    this.userName = "";
    this.displayName = "";
    this.firstName = "";
    this.lastName = "";
    this.fullName = "";
    this.email = "";
    this.logInName = "";
    this.distinguishedName = "";
    this.phoneNumber = "";
    this.member = "";
    this.designation = "";
    this.department = "";
  }

  loadModel(ad_from_user) {
    this.sid = ad_from_user.sid;
    this.guid = ad_from_user.guid;
    this.userName = ad_from_user.userName;
    this.displayName = ad_from_user.displayName;
    this.firstName = ad_from_user.firstName;
    this.lastName = ad_from_user.lastName;
    this.fullName = ad_from_user.fullName;
    this.email = ad_from_user.email;
    this.logInName = ad_from_user.logInName;
    this.distinguishedName = ad_from_user.distinguishedName;
    this.phoneNumber = ad_from_user.phoneNumber;
    this.member = ad_from_user.member;
    this.designation = ad_from_user.designation;
    this.department = ad_from_user.department;
  }
}
