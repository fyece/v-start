<script setup lang="ts">
import SearchInput from "./SearchInput.vue";
</script>

<template>
  <div class="grid grid-cols-3 py-4 items-center">
    <div class="justify-self-start">
      <span class="font-bold md:text-xl tracking-wide">GAMEBASE</span>
    </div>
    <div class="justify-self-center"><SearchInput /></div>
    <div class="justify-self-end">menu</div>
  </div>
</template>

<style scoped></style>
