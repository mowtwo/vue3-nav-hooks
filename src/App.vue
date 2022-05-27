<template>
  <HooksNav :items="items">
    <router-view></router-view>
  </HooksNav>
</template>

<script lang="ts" setup>
import { routes } from "./router";
import HooksNav from "./components/HooksNav.vue";

const items = routes.map((item) => ({
  text: item.meta!.name as string,
  link: item!.path,
}));
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
