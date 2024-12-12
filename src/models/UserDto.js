export default class UserDto {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.jwt = "";
  }

  loadModel(userDtoData) {
    this.firstName = userDtoData.firstName;
    this.lastName = userDtoData.lastName;
    this.jwt = userDtoData.jwt;
  }
}
