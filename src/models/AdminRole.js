export default class AdminRole {
  constructor() {
    this.id = "";
    this.name = "";
    this.normalizedName = "";
  }
  loadModel(admin_roleData) {
    this.id = admin_roleData.id;
    this.name = admin_roleData.name;
    this.normalizedName = admin_roleData.normalizedName;
  }
}
