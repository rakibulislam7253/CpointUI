export default class RegisterDto {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.userName = "";
    this.email = "";
    this.password = "123456";
    this.departmentId = "";
    this.roleId = "";
    this.designationId = "";
    this.moduleId = "";
    this.branchId = "";
    this.isAdUser = 1;
  }
  loadModel(registerDtoData) {
    this.firstName = registerDtoData.firstName;
    this.lastName = registerDtoData.lastName;
    this.userName = registerDtoData.userName;
    this.email = registerDtoData.email;
    this.password = registerDtoData.password;
    this.departmentId = registerDtoData.departmentId;
    this.roleId = registerDtoData.roleId;
    this.designationId = registerDtoData.designationId;
    this.moduleId = registerDtoData.moduleId;
    this.branchId = registerDtoData.branchId;
    this.isAdUser = registerDtoData.isAdUser;
  }
}
