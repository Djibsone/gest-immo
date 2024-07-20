import axios from "axios";
import { service } from "./service";

const Axios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
    // baseURL: 'http://127.0.0.1:8000/api/users'
});

// Intercepteur pour le token
Axios.interceptors.request.use(request => {
    if(service.isLogged()) {
        request.headers.Authorization = 'Bearer ' + service.getToken();
    }
    return request;
})

export default Axios;