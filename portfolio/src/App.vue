<template>
  <div class="bg-neutral-950 h-screen">
    <div class="h-screen flex flex-row gap-3">
      <div class="w-84 bg-neutral-800">
        <SidebarContent></SidebarContent>
      </div>
      <div class="w-full">
        <MainContent></MainContent>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import MainContent from '@/views/MainContent.vue'
import SidebarContent from '@/views/Sidebar.vue'


</script>

<style scoped></style>