<script setup lang="ts">
import MenuSectionComponent from "./MenuSection.vue";
import { reactive } from "vue";
import type { MenuSection } from "@/types/type";

const sections: MenuSection[] = reactive([
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Reviews",
    url: "/reviews",
  },
  {
    title: "All Games",
    url: "/games",
  },
  {
    title: "Browse",
    url: "/games",
    subSections: [
      { title: "Platforms", url: "Platforms" },
      { title: "Stores", url: "Stores" },
      { title: "Collections", url: "Collections" },
      { title: "Reviews", url: "Reviews" },
      { title: "Genres", url: "Genres" },
      { title: "Creators", url: "Creators" },
      { title: "Tags", url: "Tags" },
      { title: "Developers", url: "Developers" },
      { title: "Publishers", url: "Publishers" },
    ],
  },
  {
    title: "Platforms",
    url: "/platforms",
    subSections: [
      { title: "PC", url: "PC" },
      { title: "PlayStation", url: "PlayStation" },
      { title: "Xbox", url: "Xbox" },
      { title: "Nintendo Switch", url: "Switch" },
      { title: "iOS", url: "iOS" },
      { title: "Android", url: "Android" },
    ],
  },
  {
    title: "Genres",
    url: "/genres",
    subSections: [
      {
        title: "Action",
        url: "action",
      },
      {
        title: "Strategy",
        url: "games/strategy",
      },
      {
        title: "RPG",
        url: "games/rpg",
      },
      {
        title: "Shooter",
        url: "games/shooter",
      },
      {
        title: "Adventure",
        url: "games/adventure",
      },
      {
        title: "Puzzle",
        url: "games/puzzle",
      },
      {
        title: "Racing",
        url: "games/racing",
      },
      {
        title: "Sports",
        url: "games/sports",
      },
    ],
  },
]);
</script>
<template>
  <aside>
    <nav>
      <ul class="space-y-6">
        <li
          v-for="section in sections"
          :key="section.title"
          class="font-medium text-2xl"
        >
          <MenuSectionComponent
            :title="section.title"
            :url="section.url"
            :subSections="section.subSections"
          />
        </li>
      </ul>
    </nav>
  </aside>
</template>
<style scoped></style>
