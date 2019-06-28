<template>
  <v-container>
    <v-layout class="loginBox">
      <v-flex xs12 sm6 offset-sm3>
        <my-awesome-panel title="Login">
          <form name="register-form" autocomplete="off">
            <v-text-field prepend-icon="person" label="Username / Email" v-model="identifier"></v-text-field>
            <v-text-field
              prepend-icon="lock"
              autocomplete="new-password"
              label="Password"
              v-model="password"
              type="password"
            ></v-text-field>
          </form>

          <v-btn class="cyan" dark @click="login">Login</v-btn>
        </my-awesome-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Swal from "sweetalert2";
import MyAwesomePanel from "@/components/Common/Panel";
import { setAuthorizationHeaderToken } from "@/utils";
import { userServices } from "@/services";

const { loginUser } = userServices;
export default {
  components: {
    MyAwesomePanel
  },
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
        const response = await loginUser({
          identifier: this.identifier,
          password: this.password
        });

        this.$store.dispatch("handleSetToken", response.data.token);
        this.$store.dispatch("handleSetUser", response.data);
        setAuthorizationHeaderToken(response.data.token);
        this.$router.push({ name: "songs" });

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
