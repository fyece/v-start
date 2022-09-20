<script setup lang="ts">
import SearchInput from "./SearchInput.vue";
</script>

<template>
  <div
    class="grid grid-flow-col-dense grid-cols-3 grid-rows-1 py-4 items-center"
  >
    <div class="justify-self-start">
      <span class="font-bold md:text-xl tracking-wide">GAMEBASE</span>
    </div>
    <div class="justify-self-center"><SearchInput /></div>
    <div class="justify-self-end">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.8h16M1 9h16M1 16.2h16"
          stroke-width="2"
          stroke="#FFF"
          fill="none"
          stroke-linecap="round"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
