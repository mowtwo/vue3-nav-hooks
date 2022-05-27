<template>
  <h1>Home</h1>
</template>

<script lang="ts" setup>
import useNavHooks from "../hooks/HooksNav";

const navHooks = useNavHooks();

navHooks.show();
</script>

<style lang="scss"></style>
