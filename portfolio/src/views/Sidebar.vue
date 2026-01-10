<template>
    <div class="h-full sidebar-container p-4 gap-4 flex flex-col flex-nowrap text-left">
        <template v-for="element of ListsSidebar">
            <div>
                <component v-bind="element" :is="element.is"></component>
            </div>
        </template>


    </div>
</template>
<script setup>
import { ref } from 'vue'
import MagicButton from '@/components/MagicButton.vue';

const ListsSidebar = [
    {
        is: MagicButton,
        class: "bg-neutral-800 rounded-full hover:bg-neutral-700 p-3 w-68",
        icon: "add",
        label: "Nuova Chat",
    },
    {},
    {},
    {}
]


</script>