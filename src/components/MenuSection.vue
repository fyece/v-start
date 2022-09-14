<script setup lang="ts">
import { computed, ref } from "vue";
import type { MenuSubsection } from "../types/type";

interface Props {
  title: string;
  url: string;
  subSections?: MenuSubsection[];
}

const props = defineProps<Props>();
let isCollapsed = ref(true);
let shownSubSections = computed(() => {
  if (isCollapsed.value) {
    return props.subSections?.slice(0, 3);
  } else {
    return props.subSections;
  }
});

function toggleShow() {
  isCollapsed.value = !isCollapsed.value;
}
</script>
<template>
  <RouterLink :to="props.url">
    <h3 class="font-semibold text-2xl mb-3">{{ props.title }}</h3>
  </RouterLink>
  <ul v-if="subSections" class="space-y-2 text-lg text-neutral-50 ml-4">
    <li v-for="section in shownSubSections" :key="section.title">
      <RouterLink :to="section.url"
        ><span>{{ section.title }}</span></RouterLink
      >
    </li>
    <li v-if="props.subSections && props.subSections?.length > 3">
      <button @click="toggleShow" class="text-neutral-500">
        {{ isCollapsed ? "Show all" : "Hide" }}
      </button>
    </li>
  </ul>
</template>
<style scoped></style>
