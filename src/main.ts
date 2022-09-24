import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reactive } from 'vue';
import { MainData } from './types'

const defaultMainData = {
    transactions: {},
    presetTransactions: {},
    accounts: {
        Main: {
            startingAmount: 191,
            adjustment: 0
        },
        Trip: {
            startingAmount: 260,
            adjustment: 0
        },
        Reserve: {
            startingAmount: 2000,
            adjustment: 0
        }
    }
} as MainData

export const mainData = reactive({...defaultMainData})

createApp(App).use(router).mount('#app')
