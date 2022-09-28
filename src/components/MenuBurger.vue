<script setup lang="ts">
import { ref } from "vue";

let isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
  <div class="lg:hidden relative justify-self-end">
    <button @click="toggleMenu">
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
    </button>

    <div
      v-if="isMenuOpen"
      @focusout="toggleMenu"
			tabindex="0"
      class="absolute top-8 right-0 bg-neutral-700 p-2 rounded-lg"
    >
      content
    </div>
  </div>
</template>
<style scoped></style>
