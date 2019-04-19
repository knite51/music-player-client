<template>
  <v-container>
    <v-layout class="registerBox">
      <v-flex xs12 sm6 offset-sm3>
        <div class="white levation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-form>
              <v-text-field prepend-icon="person" label="Username" v-model="username"></v-text-field>
              <v-text-field prepend-icon="email" label="Email" v-model="email"></v-text-field>
              <v-text-field prepend-icon="lock" label="Password" v-model="password" type="password"></v-text-field>
            </v-form>
            <!-- <br>
            <div class="error" v-html="error"></div>-->
            <v-btn class="cyan" dark @click="register">Register</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import { userServices } from "@/services";

const { registerUser } = userServices;

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await registerUser({
          username: this.username,
          email: this.email,
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
  },
  watch: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}

.registerBox {
  margin-top: 5em;
}
</style>
