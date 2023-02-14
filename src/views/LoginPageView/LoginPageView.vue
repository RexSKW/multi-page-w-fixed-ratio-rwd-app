<script setup>
</script>

<template>
  <div class="loginPage">
    <div class="logo">
      Login Page
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loginPage {
  background-color: pink;
  border: 1px solid red;

  .logo {
    position: absolute;
    left: calc(50 / 1080 * (var(--basic-size) * 100));
    top: calc(100 / 1080 * (var(--basic-size) * 100));
    width: calc(240 / 1080 * (var(--basic-size) * 100));
    height: calc(120 / 1080 * (var(--basic-size) * 100));
    background-color: white;
  }
}
</style>
