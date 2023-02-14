<script setup>
</script>

<template>
  <div class="lobby">
    <div class="logo">
      Lobby
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lobby {
  background-color: powderblue;
  border: 1px solid firebrick;

  .logo {
    position: absolute;
    right: calc(50 / 1080 * (var(--basic-size) * 100));
    bottom: calc(100 / 1080 * (var(--basic-size) * 100));
    width: calc(240 / 1080 * (var(--basic-size) * 100));
    height: calc(120 / 1080 * (var(--basic-size) * 100));
    background-color: green;
  }
}
</style>
