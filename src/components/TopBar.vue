<script setup lang="ts">
import SearchInput from "./SearchInput.vue";
import MenuBurger from "./MenuBurger.vue";
</script>

<template>
  <div
    class="flex justify-between gap-6 sm:grid sm:grid-cols-3 py-4 items-center"
  >
    <div class="justify-self-start">
      <span class="font-bold text-lg md:text-xl tracking-wide">GAMEBASE</span>
    </div>
    <div class="justify-self-center"><SearchInput /></div>
    <MenuBurger />
  </div>
</template>

<style scoped></style>
