import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const saved = localStorage.getItem('themeState')
    const themeState = ref(saved || 'Использовать тему устройства')

    watch(themeState, (newValue) => {
        localStorage.setItem('themeState', newValue)
    })

    return { themeState }
})
