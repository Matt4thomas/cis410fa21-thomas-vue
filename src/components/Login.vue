<template>
  <div>
    <h1>Login</h1>
    <div v-if="this.$route.query.signupsucces" class="alert alert-susess">
      Thanks for signing up, please log in now.
    </div>

    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="email-input" class="form-label">Password</label
        ><input
          type="email"
          class="form-control"
          id="email-input"
          required=""
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="password-input" class="form-label">Password</label
        ><input
          type="password"
          class="form-control"
          id="password-input"
          placeholder="Password"
          required=""
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      <p v-if="credentialsError" class="form-text text-danger">
        Invalid credentials
      </p>

      <p v-if="loginError" class="form-text text-danger">
        Could not log you in, please try again later
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginError: false,
      credentialsError: false,
    };
  },

  methods: {
    onSubmit() {
      let myFormData = {
        email: this.email,
        password: this.password,
      };

      // console.log("the form data", myFormData);

      axios
        .post("/customers/login", myFormData)
        .then((myResponse) => {
          // console.log("the response", myResponse);

          this.$store.commit("storeTokenInApp", myResponse.data.token);
          this.$store.commit("storeUserInApp", myResponse.data.user);

          this.$router.replace("/account");
        })
        .catch((myError) => {
          console.log("error in /customers/login", myError);

          if (myError.response.status == 401) {
            this.credentialsError = true;
          } else {
            this.loginError = true;
          }
        });
    },
  },
};
</script>

<style></style>
