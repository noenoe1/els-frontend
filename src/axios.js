import axios from "axios"

window.axios = axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080/api/'
axios.interceptors.request.use(function(config) {
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    }
    return config;
})