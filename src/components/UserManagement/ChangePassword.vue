<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <!-----------------------------Add modal -------------------------------->

            <div class="modal fade" id="modal-change_password">
              <div class="modal-dialog modal-lg">
                <div class="modal-content bg-default">
                  <div class="modal-header">
                    <h4 class="modal-title">Change Password</h4>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="card-body">
                        <div class="form-group">
                          <label for="OldPassword">Old Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="OldPassword"
                            placeholder="Old Password"
                            v-model="this.cp_change_password.old_password"
                          />
                        </div>
                        <div class="form-group">
                          <label for="NewPassword">New Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="NewPassword"
                            placeholder="New Password"
                            v-model="this.cp_change_password.new_password"
                          />
                        </div>
                        <div class="form-group">
                          <label for="ConfirmPassword">Confirm Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="ConfirmPassword"
                            placeholder="Confirm Password"
                            v-model="this.cp_change_password.confirm_password"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer justify-content-between">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="cleardata"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      data-dismiss="modal"
                      v-on:click.prevent="change_password"
                    >
                      Update
                    </button>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.listItem div {
  margin-bottom: 10px;
}
</style>
<script>
import sweet_alert from "@/common/sweet";
import cp_change_password from "@/models/cp_change_password";
import AccountService from "@/services/account.service";
export default {
  name: "Register",
  data() {
    return {
      user_info: null,
      cp_change_password: new cp_change_password(),
    };
  },

  methods: {
    async change_password() {
      this.function_change_password();
    },
    function_change_password() {
      this.cp_change_password.user_id = this.user_info.userId;
      this.loading = true;
      AccountService.changePassword(this.cp_change_password).then(
        (response) => {
          this.loading = false;
          console.log(response.data);
          if (response.data != null) {
            sweet_alert.confirmation_box(response);
          } else {
            sweet_alert.error_message("Change password - Response not found!");
          }
        }
      );
      this.designation_info = "";
      this.$emit("condition");
    },
    cleardata() {
      this.$emit("condition");
      this.cp_change_password.loadModel("");
    },
  },
  mounted() {
    this.user_info = JSON.parse(this.$store.state.auth.userLoginInfo);
  },
};
</script>

<style scoped>
header p {
  margin-bottom: -3px;
  margin-top: -9px;
  font-weight: 700;
}

.modal-header {
  background-image: url("../../assets/logo/Logo-Big.jpg");
  background-size: cover;
  background-position: center;
  min-height: 8vh;
}

.modal-title {
  font-size: 28px;
  color: #ececec;
  font-weight: 500;
}

/* th {
  color: #000000;
}

td {
  color: black;
}
.dataTables_filter {
  margin-left: 70%;
}

.flex-wrap {
  margin-top: 10px;
}

.card-body {
  margin-top: -18px;
}

#myinput {
  width: 150%;
  border: 2px solid rgb(159, 199, 231); 
}

.select_option select {
  display: inline-block;
  width: 100%;
  height: 35px;
  padding: 0px 15px;
  cursor: pointer;
  color: #7b7b7b;
  border: 1px solid #cccccc;
  border-radius: 0;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: all 0.2s ease;
}

.select_option select::-ms-expand {
  display: none;
}

.select_option select:hover,
.select_option select:focus {
  color: #000000;
  background: #fafafa;
  border-color: #000000;
  outline: none;
}

.select_arrow {
  position: absolute;
  top: calc(50% - 4px);
  right: 15px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-width: 8px 5px 0 5px;
  border-style: solid;
  border-color: #7b7b7b transparent transparent transparent;
}

.select_option select:hover + .select_arrow,
.select_option select:focus + .select_arrow {
  border-top-color: #000000;
} */
</style>
