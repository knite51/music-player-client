<template>
  <v-container>
    <v-layout class="loginBox">
      <v-flex xs12 sm6 offset-sm3>
        <div class="white levation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-form>
              <v-text-field prepend-icon="person" label="Username / Email" v-model="identifier"></v-text-field>
              <v-text-field prepend-icon="lock" label="Password" v-model="password" type="password"></v-text-field>
            </v-form>
            <!-- <br>
            <div class="error" v-html="error"></div>-->
            <v-btn class="cyan" dark @click="login">Login</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Swal from "sweetalert2";
import { userServices } from "@/services";

const { loginUser } = userServices;
export default {
  data() {
    return {
      identifier: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        await loginUser({
          identifier: this.identifier,
          password: this.password
        });
        Swal.fire({
          type: "success",
          position: "top-end",
          title: "Signup Successful",
          toast: true,
          showConfirmButton: false,
          timer: 3000
        });
      } catch (error) {
        this.error = error.message;
        Swal.fire({
          title: `${error.message}`,
          type: "error",
          position: "top-end",
          toast: true,
          showConfirmButton: false,
          timer: 3000
        });
      }
    }
  }
};
</script>
<style scoped>
.loginBox {
  margin-top: 5em;
}
</style>
