<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import SideNav from "./components/SideNav.vue";
</script>

<template>
  <div class="min-h-screen bg-neutral-900 text-white">
    <div class="px-2 xl:px-6">
      <div class="grid gap-8">
        <TopBar />
        <div class="grid grid-cols-12">
          <div class="col-span-2">
            <SideNav />
          </div>
          <div class="col-span-10">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
