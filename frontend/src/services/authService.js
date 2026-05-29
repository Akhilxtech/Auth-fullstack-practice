import { api } from "./api.js";
import tokenStorage from "./localStorage.js";

 const authService={
    register: async ({name, email, password})=>{
        const {data}=await api.post("/api/auth/register",{name,email,password})
        tokenStorage.set(data)
        return data

    },

    login: async ({email, password})=>{
        const {data}=await api.post("/api/auth/login",{email,password})
        tokenStorage.set(data)
        return data

    },

    logout:async ()=>{
        await api.post("/api/auth/logout")
        tokenStorage.clear()
    },


    profile: async ()=>{
        const {data}=await api.get("/api/user/profile")
        return data.user

    }

}

export default authService