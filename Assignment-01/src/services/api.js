import axios from "axios"
import tokenStorage from "./localStorage.js"

const BASE_URL=import.meta.env.VITE_API_URL || "http://localhost:4000"

export const api=axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json",
    }
})

api.interceptors.request.use((config)=>{
    const token=tokenStorage.getAccess();
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
})