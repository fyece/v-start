<script setup lang="ts">
import type { Platform } from "@/types/game";

interface Props {
  name: string;
  slug: string;
  image: string;
  metacritic: number;
  platforms: Platform[];
}

const props = defineProps<Props>();
</script>
<template>
  <RouterLink to="/games123">
    <div class="max-w-md md:max-w-sm rounded-xl bg-neutral-800 overflow-hidden">
      <div class="h-56">
        <img
          :src="props.image"
          :alt="props.name"
          class="block object-cover h-56 w-full"
        />
      </div>
      <div class="p-4 md:p-4 space-y-3 h-fit min-h-36">
        <h4 class="text-xl font-semibold">{{ props.name }}</h4>
        <div class="flex h-fit justify-between items-center">
          <div class="flex space-x-1">platforms</div>
          <span
            class="block p-1 text-green-400 border border-green-400 w-7 h-7 text-center text-sm rounded"
            >{{ props.metacritic }}</span
          >
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped></style>
