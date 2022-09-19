<script setup lang="ts">
import { useGamesStore } from "@/stores/games";
import { computed, onMounted } from "vue";

const store = useGamesStore();

const getGames = computed(() => {
  return store.getGames;
});
const games = computed(() => {
  return store.games;
});

onMounted(() => {
  store.fetchGames();
});

function log() {
  console.log(getGames);
}

onMounted(() => store.fetchGames());
</script>
<template>
  <div>
    <button @click="log">log</button>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
  </div>
</template>
<style scoped></style>
