import { createRootRoute, Link, Outlet, useRouterState,createFileRoute, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const showAuthNav = pathname === '/login' || pathname === '/register'

  return (
  <>
    {showAuthNav && <nav className="sticky top-0 z-20 border-b border-cyan-300/15 bg-zinc-950/85 px-6 py-4 text-zinc-100 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-lg shadow-cyan-950/40">
            TW
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Secure Console</span>
            <span className="block text-lg font-bold tracking-tight text-white">Tech Workspace</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-lg shadow-black/20">
          <Link
            to="/register"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-cyan-400/10 hover:text-cyan-100 [&.active]:bg-cyan-400/15 [&.active]:text-cyan-100"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-violet-400/10 hover:text-violet-100 [&.active]:bg-violet-400/15 [&.active]:text-violet-100"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>}
    <Outlet />
    <TanStackRouterDevtools />
  </>
  )
}

export const Route = createRootRoute({ component: RootLayout })

