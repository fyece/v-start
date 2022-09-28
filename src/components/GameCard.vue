<script setup lang="ts">
import type { PlatformInfo } from "@/types/game";

interface Props {
  name: string;
  slug: string;
  image: string;
  metacritic: number;
  platforms: PlatformInfo[];
}

const props = defineProps<Props>();
</script>
<template>
  <RouterLink :to="'games/' + props.slug">
    <div
      class="max-w-md h-full md:max-w-sm rounded-xl bg-neutral-800 overflow-hidden"
    >
      <div class="h-56 flex items-center justify-center">
        <span v-if="!props.image" class="block text-center text-neutral-600"
          >No image</span
        >
        <img
          :src="props.image"
          :alt="props.name"
          v-if="props.image"
          class="block object-cover h-56 w-full"
        />
      </div>
      <div class="p-4 md:p-4 space-y-3 h-fit min-h-36">
        <h4 class="text-xl font-semibold">{{ props.name }}</h4>
        <div class="flex h-fit gap-2 justify-between items-center">
          <div class="flex space-x-1">
            {{ props.platforms.map((p) => `${p.platform.name}`).join(", ") }}
          </div>
          <span
            v-if="props.metacritic"
            class="block p-1 border w-7 h-7 text-center text-sm font-medium rounded"
            :class="{
              'text-red-400': props.metacritic <= 50,
              'border-red-400': props.metacritic <= 50,
              'text-orange-400':
                props.metacritic >= 60 && props.metacritic < 70,
              'border-orange-400':
                props.metacritic >= 60 && props.metacritic < 70,
              'text-yellow-400':
                props.metacritic >= 70 && props.metacritic < 80,
              'border-yellow-400':
                props.metacritic >= 70 && props.metacritic < 80,
              'text-green-400': props.metacritic >= 80,
              'border-green-400': props.metacritic >= 80,
            }"
            >{{ props.metacritic }}</span
          >
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped></style>
