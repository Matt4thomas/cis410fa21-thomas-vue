<template>
  <div>
    <h1>Login</h1>
    <div v-if="this.$route.query.signupsucces" class="alert alert-susess">
      Thanks for signing up, please log in now.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
