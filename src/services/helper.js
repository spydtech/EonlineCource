import axios from "axios"

export const BASE_URL='http://localhost:3465';

export const myAxios=axios.create({
    baseURL:BASE_URL
})