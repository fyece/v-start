<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import SideNav from "./components/SideNav.vue";
</script>

<template>
  <div class="min-h-screen bg-neutral-900 text-white">
    <div class="px-2 md:px-8 pb-16 xl:px-6">
      <div class="grid gap-8">
        <TopBar />
        <div class="flex lg:grid lg:grid-cols-12">
          <div class="hidden lg:block lg:col-span-2">
            <SideNav />
          </div>
          <div class="w-full lg:col-span-10">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
