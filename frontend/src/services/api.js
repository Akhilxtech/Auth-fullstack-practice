import axios from "axios"
import tokenStorage from "./localStorage.js"

const BASE_URL=import.meta.env.VITE_API_URL 

export const api=axios.create({
    baseURL:BASE_URL,
    withCredentials:true,
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

api.interceptors.response.use(
    (response)=>response,
    async (error)=>{
        if(
            error.response?.status===401 && 
            !error.config.url.includes("/api/auth/login") &&
            !error.config.url.includes("/api/auth/register") &&
            !error.config.url.includes("/api/auth/refresh")

        ){
            const refreshToken=tokenStorage.getRefresh();
            const response= await api.post("api/auth/refresh", {refreshToken});

            const {accessToken, newRefreshToken}=response.data;
            tokenStorage.set(accessToken,newRefreshToken);

            // retry
           
                error.config.headers.Authorization=`Bearer ${accessToken}`


            return api(error.config)
        }
        return Promise.reject(error)
    }
)