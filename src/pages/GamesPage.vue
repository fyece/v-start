<script setup lang="ts">
import { useGamesStore } from "@/stores/games.store";
import { computed, onMounted, onUpdated, ref } from "vue";
import GameCard from "../components/GameCard.vue";
import { onWindowBottom } from "../utils";

const store = useGamesStore();
let isLoading = ref(true);
let orderBy = ref("-added");
let games = computed(() => {
  return store.games;
});
const next = computed(() => {
  return store.nextPage;
});

function onChangeOrderBy() {
  store.fetchGames({ page: 1, page_size: 36, ordering: orderBy.value });
}

onMounted(() => {
  isLoading.value = true;
  store.fetchGames();
  isLoading.value = false;
});

onUpdated(() => {
  isLoading.value = true;
  onWindowBottom(() => store.fetchNext(next.value));
  isLoading.value = false;
});
</script>
<template>
  <div class="flex flex-col gap-6 md:gap-8">
    <h1 class="font-bold text-4xl md:text-7xl">All games</h1>

    <div class="flex gap-3">
      <select
        v-model="orderBy"
        @change="onChangeOrderBy"
        class="border w-fit mb-6 text-sm rounded-lg block p-2.5 bg-neutral-700 border-neutral-600 placeholder-neutral-400 text-white"
      >
        <option value="-added" selected>Order by</option>
        <option value="-added">Popularity</option>
        <option value="name">Name</option>
        <option value="released">Release date</option>
        <option value="-metacritic">Rating</option>
      </select>
    </div>

    <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
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
    <div :if="isLoading" class="flex px-12 py-8 items-center justify-center">
      <svg
        aria-hidden="true"
        role="status"
        class="inline mr-3 w-4 h-4 text-white animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>
<style scoped></style>
