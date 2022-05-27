<template>
  <div class="nav">
    <div class="main">
      <slot></slot>
    </div>
    <div class="items" v-show="showItems">
      <div
        class="item"
        :class="{
          active: route.path === item.link,
        }"
        v-for="(item, id) of items"
        :key="id"
      >
        <router-link :to="item.link">{{ item.text }}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import { useRoute } from "vue-router";

interface Props {
  items: Array<{ text: string; link: string }>;
}

defineProps<Props>();

const showItems = ref(true);

provide("$$navConfig", {
  hide() {
    showItems.value = false;
  },
  show() {
    showItems.value = true;
  },
  toggle() {
    showItems.value = !showItems.value;
  },
});

const route = useRoute();
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    height: 60px;
    .item {
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
      border-radius: 0.5rem;
      height: 100%;
      &.active {
        ::v-deep(a) {
          color: #000;
          text-decoration: underline;
        }
      }
      ::v-deep(a) {
        display: block;
        height: 100%;
        color: #aaa;
        text-decoration: none;
      }
    }
  }
}
</style>
