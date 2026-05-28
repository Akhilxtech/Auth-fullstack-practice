import React from 'react'
import {useForm} from 'react-hook-form'

export const Login= () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful, isSubmitting},
        getValues
    }= useForm({mode: "onTouched"})

    function submit(data) {
    return new Promise((res) => {
        console.log("submitted", data);
        res()
    });
  }

  if(isSubmitSuccessful){
    return (
        <div className="paper-bg min-h-screen flex items-center justify-center">
            <div className="sketch-border sketch-asterisk sketch-star relative p-10 bg-[var(--color-paper)] shadow-lg">
                <h1 className="sketch-success text-5xl text-center">✓ Login successfull</h1>
                <p className="font-hand text-[var(--color-ink-light)] text-center text-lg mt-3">Welcome back, friend!</p>
            </div>
        </div>
    )
  }


  return (
    <div className="paper-bg min-h-screen flex items-center justify-center px-4 py-12">

        {/* Doodle scribbles in background */}
        <div className="absolute top-8 left-12 font-sketch text-6xl text-[var(--color-pencil)] opacity-20 rotate-[-12deg] select-none pointer-events-none">~</div>
        <div className="absolute bottom-16 right-16 font-sketch text-5xl text-[var(--color-pencil)] opacity-15 rotate-[8deg] select-none pointer-events-none">✶</div>
        <div className="absolute top-24 right-24 font-sketch text-4xl text-[var(--color-sketch-accent)] opacity-10 rotate-[-5deg] select-none pointer-events-none">☆</div>

        <div className="sketch-border sketch-asterisk sketch-star relative bg-[var(--color-paper)] p-10 w-full max-w-md shadow-lg">

            {/* Title */}
            <h1 className="font-sketch text-5xl font-bold text-[var(--color-ink)] text-center mb-2 tracking-wide">
                Login
            </h1>
            <p className="font-hand text-[var(--color-pencil)] text-center text-lg mb-8 italic">
                ← scribble your credentials here →
            </p>

            <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-7">

                {/* Email field */}
                <label className="flex flex-col gap-1.5">
                    <span className="font-sketch text-xl font-semibold text-[var(--color-ink)]">✎ Email</span>
                    <input className="sketch-input" placeholder="your@email.com" {...register("email",{required:"email is required"})} />
                    {errors.email && <span className="sketch-error">{errors.email.message}</span>}
                </label>

                {/* Password field */}
                <label className="flex flex-col gap-1.5">
                    <span className="font-sketch text-xl font-semibold text-[var(--color-ink)]">✎ Password</span>
                    <input className="sketch-input" type="password" placeholder="shhh... secret" {...register("password",{required:"password is required"})} />
                    {errors.password && <span className="sketch-error">{errors.password.message}</span>}
                </label>

                {/* Submit button */}
                <div className="flex justify-center mt-2">
                    <button className="sketch-btn" type="submit" disabled={isSubmitting} >
                        {isSubmitting ? "Scribbling...." : "→ Sign In"}
                    </button>
                </div>
            </form>

            {/* Bottom doodle */}
            <p className="font-sketch text-[var(--color-pencil)] text-center text-base mt-8 opacity-60">
                — drawn with ♥ —
            </p>
        </div>

    </div>
  )
}
