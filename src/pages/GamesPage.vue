<script setup lang="ts">
import { useGamesStore } from "@/stores/games.store";
import { computed, onMounted } from "vue";
import GameCard from "../components/GameCard.vue";

const store = useGamesStore();
const games = computed(() => {
  return store.games;
});

onMounted(() => {
  store.fetchGames();
});

onMounted(() => store.fetchGames());
</script>
<template>
  <h1 class="font-semibold text-4xl mb-8 md:text-6xl md:mb-12">All games</h1>
  <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-3 justify-center">
    <GameCard
      v-for="game in games"
      :key="game.id"
      :name="game.name"
      :slug="game.slug"
      :image="game.background_image"
      :metacritic="game.metacritic"
      :platforms="game.platforms"
    />
  </div>
</template>
<style scoped></style>
