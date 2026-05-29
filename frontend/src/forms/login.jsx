import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import authService from '../services/authService.js'
import {useNavigate} from "@tanstack/react-router"
export const Login= () => {
    const [serverError, setServerError]=useState("")

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful, isSubmitting},
        getValues
    }= useForm({mode: "onTouched"})

    const navigate=useNavigate();

   async function submit(data){
        try {
            await authService.login(data);

            navigate({to: "/page"})
            
        } catch (error) {
            const message=error.response?.data?.message || "Something went wrong"
            setServerError(message)
            throw error

            
        }
   }


  if(isSubmitSuccessful){
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-6 text-zinc-100">
            <div className="w-full max-w-md rounded-2xl border border-emerald-400/30 bg-zinc-900/90 p-10 text-center shadow-2xl shadow-emerald-950/40">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-3xl text-emerald-300">
                    ✓
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-emerald-300">Login successful</h1>
                <p className="mt-3 text-base text-zinc-400">Welcome back to your workspace.</p>
            </div>
        </div>
    )
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 py-12 text-zinc-100">

        {/* Doodle scribbles in background */}
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-cyan-400/20 opacity-60 select-none pointer-events-none"></div>
        <div className="absolute bottom-12 right-12 h-32 w-32 rounded-full border border-violet-400/20 opacity-60 select-none pointer-events-none"></div>
        <div className="absolute right-1/4 top-24 h-px w-40 bg-cyan-400/20 select-none pointer-events-none"></div>

        <div className="relative w-full max-w-md rounded-2xl border border-cyan-400/20 bg-zinc-900/90 p-10 shadow-2xl shadow-cyan-950/30">

            {/* Title */}
            <h1 className="text-center text-4xl font-bold tracking-tight text-white">
                Login
            </h1>
            <p className="mb-8 mt-3 text-center text-sm text-zinc-400">
                Access your developer workspace
            </p>

            <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-7">
                {serverError && (
                    <p className='rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200'>{serverError}</p>
                )}

                {/* Email field */}
                <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-semibold text-cyan-200">Email</span>
                    <input className="rounded-lg border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30" placeholder="your@email.com" {...register("email",{required:"email is required"})} />
                    {errors.email && <span className="text-sm font-medium text-red-300">{errors.email.message}</span>}
                </label>

                {/* Password field */}
                <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-semibold text-cyan-200">Password</span>
                    <input className="rounded-lg border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30" type="password" placeholder="shhh... secret" {...register("password",{required:"password is required"})} />
                    {errors.password && <span className="text-sm font-medium text-red-300">{errors.password.message}</span>}
                </label>

                {/* Submit button */}
                <div className="flex justify-center mt-2">
                    <button className="w-full rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting} >
                        {isSubmitting ? "Scribbling...." : "→ Sign In"}
                    </button>
                </div>
            </form>

            {/* Bottom doodle */}
            <p className="mt-8 text-center text-xs uppercase tracking-[0.24em] text-zinc-500">
                Secure JWT session
            </p>
        </div>

    </div>
  )
}
