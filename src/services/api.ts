import axios from "axios";
const api = axios.create({
    baseURL: 'https://reactapitest.pythonanywhere.com/api/v1'
})

export default api;