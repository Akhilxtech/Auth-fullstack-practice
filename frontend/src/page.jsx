import {useState} from "react"
import authService from "./services/authService.js"
import {useNavigate } from "@tanstack/react-router"
function Page() {
  const [serverError, setServerError]=useState("");
  const [getMe, setMe]=useState(false)
  const [profileData, setProfileData]=useState(null)
  const [profileError, setProfileError]=useState("");
  const [logoutSuccess, setLogoutSuccess]=useState(false)
  const navigate=useNavigate();

  async function getProfile(){
    try {
      const data=await authService.profile();
      console.log("profile fetch successfully...",data);
      setProfileData(data)
      setMe(true)
      setProfileError("")
      
    } catch (error) {
      const message=error.response?.data?.message || "error fetching profile"
      setProfileError(message)
      
    }
  }
 
  async function logout(){
    try {
      await authService.logout();
      console.log("logout success");
      setLogoutSuccess(true)
      setTimeout(() => {
       navigate({to:"/login"})

     }, 2000);

      
    } catch (error) {
      const message=error.response?.data?.message || "Something went wrong"
      setServerError(message)
      throw error
      
    }
  }





  if(logoutSuccess){
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-6 text-zinc-100">
            <div className="w-full max-w-md animate-[fadeIn_.45s_ease-out] rounded-2xl border border-emerald-400/30 bg-zinc-900/90 p-10 text-center shadow-2xl shadow-emerald-950/40">
                <div className="mx-auto mb-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-3xl text-emerald-300 shadow-lg shadow-emerald-500/20">
                    ✓
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-emerald-300">Logout success</h1>
                <p className="mt-3 text-base text-zinc-400">See you soon, friend. Redirecting to login...</p>
            </div>
        </div>
    )
  }

  return (
    <>
      <div className="min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_34%)]"></div>
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30"></div>

        <header className="sticky top-0 z-10 border-b border-cyan-300/15 bg-zinc-950/75 px-6 py-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-zinc-900 text-lg font-black text-cyan-200 shadow-lg shadow-cyan-950/40 transition hover:scale-105 hover:border-cyan-200/60">
              <span className="absolute inset-0 rounded-2xl bg-cyan-300/10 blur-md"></span>
              <span className="relative">TW</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Secure Console</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight">Tech Workspace</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-lg shadow-black/20">
            <button
              onClick={getProfile}
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white hover:shadow-lg hover:shadow-cyan-950/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              Get Profile
            </button>

            <button
              onClick={logout}
              className="rounded-xl border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-200 transition duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-500/20 hover:text-white hover:shadow-lg hover:shadow-red-950/40 focus:outline-none focus:ring-2 focus:ring-red-400/60"
            >
              Logout
            </button>
          </div>
          </div>
        </header>

        <main className="relative mx-auto grid max-w-6xl animate-[fadeIn_.5s_ease-out] gap-6 px-6 py-10 md:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-2xl border border-cyan-400/20 bg-zinc-900/80 p-8 shadow-2xl shadow-cyan-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-cyan-950/40">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></div>
              <p className="text-sm font-medium text-zinc-400">System online</p>
            </div>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-white">
              Welcome to your developer dashboard
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
              Monitor your session, build your next feature, and keep your app flow clean from one focused workspace.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-700 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                <p className="text-sm text-zinc-500">Auth</p>
                <p className="mt-2 text-xl font-semibold text-emerald-300">Active</p>
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                <p className="text-sm text-zinc-500">API</p>
                <p className="mt-2 text-xl font-semibold text-cyan-300">Connected</p>
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                <p className="text-sm text-zinc-500">Mode</p>
                <p className="mt-2 text-xl font-semibold text-violet-300">Secure</p>
              </div>
            </div>
          </section>

          <aside className="rounded-2xl border border-violet-400/20 bg-zinc-900/80 p-6 shadow-2xl shadow-violet-950/20 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-violet-950/40">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">Session</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-zinc-950/70 p-4 transition duration-300 hover:bg-zinc-950">
                <p className="text-sm text-zinc-500">Access status</p>
                <p className="mt-1 font-semibold text-zinc-100">Authenticated</p>
              </div>
              <div className="rounded-xl bg-zinc-950/70 p-4 transition duration-300 hover:bg-zinc-950">
                <p className="text-sm text-zinc-500">Storage</p>
                <p className="mt-1 font-semibold text-zinc-100">Local token active</p>
              </div>
              <div className="rounded-xl bg-zinc-950/70 p-4 transition duration-300 hover:bg-zinc-950">
                <p className="text-sm text-zinc-500">Action</p>
                <p className="mt-1 font-semibold text-zinc-100">Fetch profile or end session</p>
              </div>
            </div>
          </aside>

          {getMe && profileData && (
            <section className="animate-[fadeIn_.35s_ease-out] rounded-2xl border border-emerald-400/20 bg-zinc-900/80 p-6 shadow-2xl shadow-emerald-950/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 md:col-span-2">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">Profile</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">User Details</h3>
                </div>
                <div className="animate-pulse rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                  Verified Session
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-zinc-700 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <p className="text-sm text-zinc-500">Name</p>
                  <p className="mt-2 text-lg font-semibold text-zinc-100">{profileData.name || "Not available"}</p>
                </div>
                <div className="rounded-xl border border-zinc-700 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="mt-2 break-all text-lg font-semibold text-cyan-200">{profileData.email || "Not available"}</p>
                </div>
                <div className="rounded-xl border border-zinc-700 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                  <p className="text-sm text-zinc-500">User ID</p>
                  <p className="mt-2 text-lg font-semibold text-violet-200">{profileData.id || "Not available"}</p>
                </div>
              </div>
            </section>
          )}
        </main>

        {serverError && ( 
            <p className='mx-auto max-w-6xl px-6 text-sm font-medium text-red-300'>{serverError}</p>
        ) }

        {profileError && ( 
            <p className='mx-auto max-w-6xl px-6 text-sm font-medium text-red-300'>{profileError}</p>
        ) }
      </div>
    </>
  )
}

export default Page
