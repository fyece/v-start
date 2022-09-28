<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";
import { useGamesStore } from "@/stores/games.store";
import { useRoute } from "vue-router";

const store = useGamesStore();
let isLoading = ref(true);
const route = useRoute();
const slug = route.path.split("/")[2];
const gameDetails = computed(() => {
  return store.choosenGame;
});

onMounted(() => {
  isLoading.value = true;
  store.fetchGame(slug);
  isLoading.value = false;
  console.log(gameDetails.value);
});

onUpdated(() => {
  store.fetchGame(slug);
});
</script>
<template>
  <div class="flex items-center">
    <p v-if="isLoading">Loading</p>
    <div class="mx-auto w-full md:w-168 xl:w-200">
      <div class="grid gap-8 grid-cols-5">
        <div class="col-span-2">
          <div class="rounded-xl overflow-hidden w-fit">
            <img
              :src="gameDetails.background_image"
              :alt="gameDetails.name"
              class="lock object-cover h-96 w-64"
            />
          </div>
          <div></div>
        </div>
        <div class="col-span-3">
          <div>
            <h2 class="text-4xl font-bold">{{ gameDetails.name }}</h2>
          </div>
        </div>
      </div>

      <div>tags</div>
    </div>
  </div>
</template>
<style scoped></style>
