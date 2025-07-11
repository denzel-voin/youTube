import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useOptionsStore = defineStore('theme', () => {
    const savedTheme = localStorage.getItem('themeState')
    const themeState = ref(savedTheme || 'Использовать тему устройства')

    watch(themeState, (newValue) => {
        localStorage.setItem('themeState', newValue)
    })

    const savedLanguage = localStorage.getItem('languageState');
    const languageState = ref(savedLanguage || 'Русский');

    watch(languageState, (newValue) => {
        localStorage.setItem('languageState', newValue)
    })

    const savedLocation = localStorage.getItem('locationState');
    const locationState = ref(savedLocation || 'Россия');

    watch(languageState, (newValue) => {
        localStorage.setItem('locationState', newValue)
    })

    const savedRestricted = localStorage.getItem('restrictedState');
    const restrictedState = ref(savedRestricted || 'выкл')

    watch(restrictedState, (newValue) => {
        localStorage.setItem('restrictedState', newValue)
    })

    return { themeState, languageState, locationState, restrictedState }
})
