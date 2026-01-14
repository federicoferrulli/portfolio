import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
    const isSidebarExpanded = ref(true);
    const isMobile = ref(false);

    function toggleSidebar() {
        isSidebarExpanded.value = !isSidebarExpanded.value;
    }

    function checkResponsive() {
        const width = window.innerWidth;
        const wasMobile = isMobile.value;
        const nowMobile = width < 768;

        isMobile.value = nowMobile;

        if (!wasMobile && nowMobile) {
            isSidebarExpanded.value = false;
        } else if (wasMobile && !nowMobile) {
            isSidebarExpanded.value = true; 
        }
    }

    function initListener() {
        checkResponsive();
        isSidebarExpanded.value = window.innerWidth >= 768;
        window.addEventListener('resize', checkResponsive);
    }

    function removeListener() {
        window.removeEventListener('resize', checkResponsive);
    }

    return {
        isSidebarExpanded,
        isMobile,
        toggleSidebar,
        initListener,
        removeListener
    };
});
