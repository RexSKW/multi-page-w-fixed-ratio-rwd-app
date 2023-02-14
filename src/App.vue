<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="main">
    <div class="field">
      <header class="header">
        <RouterLink to="/">Login Page</RouterLink>
        <RouterLink to="/lobby">Lobby</RouterLink>
      </header>

      <RouterView class="router-view" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: black;

  @media (max-aspect-ratio: 16 / 9) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .field {
    position: relative;
    margin: 0 auto 0;
    width: calc(1920 / 1080 * (var(--basic-size) * 100));
    height: calc(1080 / 1080 * (var(--basic-size) * 100));

    .header {
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 40px;
      padding: 8px;
      background-color: gray;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      > * {
        margin-left: 16px;
      }
    }

    .router-view {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
