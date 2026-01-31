import { defineStore } from 'pinia';
import { ref, reactive, onMounted, onUnmounted } from 'vue';


export const useLocalChatsStore = defineStore('localChats', () => {

    const chats = reactive([]);



    return {
        chats
    };
},
    {
        persist: true
    });
