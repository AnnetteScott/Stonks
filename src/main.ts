import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reactive } from 'vue';
import { MainData } from './types'

const defaultMainData = {
    years: {},
    presetTransactions: {},
    accounts: {}
}

export const mainData = reactive({...defaultMainData})

createApp(App).use(router).mount('#app')
