export default class UserLogin {
  constructor() {
    this.userName = null;
    this.password = null;
  }

  loadModel(profileData) {
    this.userName = profileData.userName;
    this.password = profileData.password;
  }
}
