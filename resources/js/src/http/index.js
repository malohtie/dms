import axios from 'axios'
import store from '@/store'
import router from "@/router";
axios.defaults.baseURL = '/api' //default base api url
axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
    return config;
});

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response.status === 401) {
            store.dispatch('auth/clear').then(() => router.push('/login'))
        }
        return Promise.reject(error)
    }
)

export default axios
