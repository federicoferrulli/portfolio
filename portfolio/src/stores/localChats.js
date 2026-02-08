import { defineStore } from 'pinia';
import { ref, reactive, onMounted, onUnmounted } from 'vue';


export const useLocalChatsStore = defineStore('localChats', () => {

    const chats = reactive([]);

    function addChat(){
        
    }

    return {
        chats
    };
},
    {
        persist: true
    });
