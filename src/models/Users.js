export default class Users {
  constructor() {
    this.id = "";
    this.userName = "";
    this.normalizedUserName = "";
    this.email = "";
    this.normalizedEmail = "";
    this.emailConfirmed = "";
    this.passwordHash = "";
    this.securityStamp = "";
    this.concurrencyStamp = "";
    this.phoneNumber = "";
    this.phoneNumberConfirmed = "";
    this.twoFactorEnabled = "";
    this.lockoutEnd = "";
    this.lockoutEnabled = "";
    this.accessFailedCount = 0;
    this.firstName = "";
    this.lastName = "";
    this.makeBy = "";
    this.createdate = "";
  }

  loadModel(usersData) {
    this.id = usersData.id;
    this.userName = usersData.userName;
    this.normalizedUserName = usersData.normalizedUserName;
    this.email = usersData.email;
    this.normalizedEmail = usersData.normalizedEmail;
    this.emailConfirmed = usersData.emailConfirmed;
    this.passwordHash = usersData.passwordHash;
    this.securityStamp = usersData.securityStamp;
    this.concurrencyStamp = usersData.concurrencyStamp;
    this.phoneNumber = usersData.phoneNumber;
    this.phoneNumberConfirmed = usersData.phoneNumberConfirmed;
    this.twoFactorEnabled = usersData.twoFactorEnabled;
    this.lockoutEnd = usersData.lockoutEnd;
    this.lockoutEnabled = usersData.lockoutEnabled;
    this.accessFailedCount = usersData.accessFailedCount;
    this.firstName = usersData.firstName;
    this.lastName = usersData.lastName;
    this.makeBy = usersData.makeBy;
    this.createdate = usersData.createdate;
  }
}
