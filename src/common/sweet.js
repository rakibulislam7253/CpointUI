import Swal from "sweetalert2";
import accountService from "@/services/account.service";
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "api/";
import axios from "axios";
class sweet {
  confirmation_box(response_data) {
    console.log("sweet  :", response_data.data.status_code);
    if (response_data.data.status_code == 1) {
      Swal.fire({
        icon: "success",
        title: "Successfull Insert",
        showConfirmButton: false,
        toast: true,
        position: "top-right",
        timer: 2500,
      });
    } else if (response_data.data.status_code == "2") {
      Swal.fire({
        icon: "success",
        title: "Successfull update",
        showConfirmButton: false,
        toast: true,
        position: "top-right",
        timer: 2500,
      });
    } else if (response_data.data.status_code == "3") {
      Swal.fire({
        icon: "success",
        title: "Delete Successfull",
        showConfirmButton: false,
        toast: true,
        position: "top-right",
        timer: 2500,
      });
    } else if (response_data.data != null) {
      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        toast: true,
        text: response_data.data,
        position: "top-right",
        timer: 2500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        toast: true,
        position: "top-right",
        text: response_data.data.error_msg,
        showConfirmButton: false,
        timer: 4000,
      });
    }
  }
  Login_confirmation_box(response_data) {
    console.log(response_data);
    if (response_data.status == "200") {
      Swal.fire({
        icon: "success",
        title: "Welcome!! - CZB - Control Center.",
        showConfirmButton: false,
        toast: true,
        position: "top-right",
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        toast: true,
        position: "top-right",
        text: response_data,
        showConfirmButton: false,
        timer: 4500,
      });
    }
  }
  error_message(message) {
    console.log(message);
    Swal.fire({
      icon: "error",
      title: "Error! ",
      toast: true,
      position: "top-right",
      text: message,
      showConfirmButton: false,
      timer: 5500,
    });
  }
  userLock(user_id, full_name) {
    Swal.fire({
      title: "Are you sure?",
      text: full_name + "- lock this account!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Lock it!",
    }).then((result) => {
      if (result.isConfirmed) {
        accountService.lockUser(user_id);
        Swal.fire({
          icon: "success",
          title: full_name + " Account is Locked ",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }
  userUnlock(user_id, full_name) {
    Swal.fire({
      title: "Are you sure?",
      text: full_name + "- unlock this account!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Unlock it!",
    }).then((result) => {
      if (result.isConfirmed) {
        accountService.unlockUser(user_id);
        Swal.fire({
          icon: "success",
          title: full_name + " Account is Unlocked ",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }
  delete_box(id, deleteApi) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(API_URL + deleteApi + `?id=${id}`);
        // this.modules_list.splice(index, 1);

        Swal.fire({
          icon: "success",
          title: "Department Deleted",
          showConfirmButton: false,
          timer: 1400,
        });
      }
    });
  }
  delete_box_user_module(moduleId, user_id, role_id, permission_id, deleteApi) {
    console.log(moduleId);
    console.log(user_id);
    console.log(role_id);
    console.log(permission_id);
    console.log(deleteApi);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(
          API_URL +
            deleteApi +
            `?id=${permission_id}&_user_id=${user_id}&_module_id=${moduleId}&_role_id=${role_id}`
        );
        // this.modules_list.splice(index, 1);

        Swal.fire({
          icon: "success",
          title: "Department Deleted",
          showConfirmButton: false,
          timer: 1400,
        });
      }
    });
  }
  adminRole_box(response) {
    if (response) {
      Swal.fire({
        icon: "success",
        // title: "Successfull Update",
        showConfirmButton: false,
        text: response.data,
        toast: true,
        position: "top-right",
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        showConfirmButton: false,
        // text: response,
        toast: true,
        position: "top-right",
        timer: 2000,
      });
    }
  }
}
export default new sweet();
