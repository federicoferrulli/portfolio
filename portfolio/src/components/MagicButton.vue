<template>
    <button @click="fn" :disabled="loading" class="disabled:opacity-50">
        <div class="flex flex-row gap-2 flex-wrap">
            <span v-if="icon" class="material-symbols-outlined text-neutral-100">{{ icon }}</span>
            <span v-if="label" class="text-neutral-100">{{ label }}</span>
        </div>
    </button>
</template>
<script setup>

const props = defineProps({
    icon: {
        type: String
    },
    label: {
        type: String
    },
    fn: {
        type: Function
    },
    loading: {
        type: Boolean,
        default: false
    },
})
</script>