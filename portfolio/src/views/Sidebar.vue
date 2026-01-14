<template>
    <div
        class="h-full sidebar-container p-4 gap-4 flex flex-col flex-nowrap text-left pt-8 transition-all duration-300">
        <template v-for="element of ListsSidebar">
            <div :class="{ 'flex justify-center': !layoutStore.isSidebarExpanded }">
                <component v-if="element.is !== 'div'" v-bind="element" :is="element.is"
                    :label="layoutStore.isSidebarExpanded ? element.label : ''"
                    :class="[element.class, !layoutStore.isSidebarExpanded ? '!w-fit !p-3' : '']">
                    {{ layoutStore.isSidebarExpanded ? element?.text : '' }}
                </component>
                <component v-else-if="layoutStore.isSidebarExpanded" v-bind="element" :is="element.is">
                    {{ element?.text }}
                </component>
            </div>
        </template>


    </div>
</template>
<script setup>
import { reactive } from 'vue'
import MagicButton from '@/components/MagicButton.vue';
import { useLayoutStore } from '@/stores/layout';

const layoutStore = useLayoutStore();

const ListsSidebar = reactive([
    {
        is: MagicButton,
        class: "bg-neutral-800 rounded-full hover:bg-neutral-700 p-3 w-full transition-all duration-300 flex items-center gap-2",
        icon: "add",
        label: "Nuova Chat",
        fn: function(){
            console.log("ciao")
        }
    },
    {
        is: "div",
        class: "text-neutral-100 mt-2 font-medium",
        text: "Chat"
    },
])


</script>