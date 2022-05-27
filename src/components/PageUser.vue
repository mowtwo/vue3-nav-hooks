<template>
  <h1>User</h1>
  <div>
    <a href="javascript:void 0;" @click.prevent="router.back()">返回</a>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import useNavHooks from "../hooks/HooksNav";

const navHooks = useNavHooks();

const router = useRouter();

navHooks.hide();
</script>

<style lang="scss"></style>
