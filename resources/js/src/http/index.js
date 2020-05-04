import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = ''
axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
    return config;
});

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            store.dispatch('auth/logout')
        }
        return Promise.reject(error)
    }
)

export default axios
