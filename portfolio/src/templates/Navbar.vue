<template>
    <div class="flex items-center p-4">
        <MagicButton icon="menu" :fn="layoutStore.toggleSidebar"
            class="p-2 text-white rounded-md hover:bg-neutral-700 transition-colors cursor-pointer" />
    </div>
</template>
<script setup>
import { useLayoutStore } from '@/stores/layout';
import MagicButton from '@/components/MagicButton.vue';

const layoutStore = useLayoutStore();
</script>