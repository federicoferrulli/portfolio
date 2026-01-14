<template>
  <div class="bg-neutral-950 h-screen relative flex overflow-hidden">

    <div v-if="layoutStore.isSidebarExpanded" @click="layoutStore.toggleSidebar()" class="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"></div>
    <div :class="[
      'bg-neutral-800 transition-all duration-300 ease-in-out',
      'fixed inset-y-0 left-0 z-30 h-full',
      'md:relative md:translate-x-0',
      layoutStore.isSidebarExpanded ? 'translate-x-0 w-84' : '-translate-x-full md:translate-x-0 md:w-20'
    ]">
      <SidebarContent></SidebarContent>
    </div>

    <!-- Main Content -->
    <div class="flex-1 h-full w-full relative">
      <MainContent></MainContent>
    </div>

  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import MainContent from '@/views/MainContent.vue'
import SidebarContent from '@/views/Sidebar.vue'
import { useLayoutStore } from '@/stores/layout';

const layoutStore = useLayoutStore();

onMounted(() => {
  layoutStore.initListener();
});

onUnmounted(() => {
  layoutStore.removeListener();
});


</script>

<style scoped></style>