<script setup lang="ts">
import SearchInput from "./SearchInput.vue";
</script>

<template>
  <div class="grid grid-cols-3 py-4">
    <div class="justify-self-start">
      <span class="font-bold text-xl tracking-wide">GAMEBASE</span>
    </div>
    <div class="justify-self-center"><SearchInput /></div>
    <div class="justify-self-end">some menu</div>
  </div>
</template>

<style scoped></style>
