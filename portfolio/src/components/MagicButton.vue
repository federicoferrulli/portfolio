<template>
    <button @click="handleClick" :disabled="loading" class="relative overflow-hidden disabled:opacity-50">
        <div class="flex flex-row gap-2 flex-wrap relative z-10">
            <span v-if="icon" class="material-symbols-outlined text-neutral-100">{{ icon }}</span>
            <span v-if="label" class="text-neutral-100">{{ label }}</span>
        </div>
        <span v-for="ripple in ripples" :key="ripple.id"
            class="ripple absolute bg-neutral-100/30 rounded-full pointer-events-none" :style="{
                left: ripple.x + 'px',
                top: ripple.y + 'px',
                width: ripple.size + 'px',
                height: ripple.size + 'px'
            }"></span>
    </button>
</template>
<script setup>
import { ref } from 'vue';

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
    disableRipple: {
        type: Boolean,
        default: false
    }
})

const ripples = ref([]);

const handleClick = (event) => {
    if (!props.disableRipple) {
        createRipple(event);
    }
    if (props.fn) {
        props.fn(event);
    }
}

const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const id = Date.now();
    ripples.value.push({ x, y, size, id });

    setTimeout(() => {
        ripples.value = ripples.value.filter(r => r.id !== id);
    }, 600);
}
</script>

<style scoped>
.ripple {
    transform: scale(0);
    animation: ripple 0.6s linear;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
</style>