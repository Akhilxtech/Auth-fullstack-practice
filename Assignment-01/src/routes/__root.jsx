import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <nav className="bg-[var(--color-paper)] px-6 py-4 flex items-center gap-6">
      <Link to="/register" className="sketch-nav-link [&.active]:text-[var(--color-sketch-accent)] [&.active]:border-b-2 [&.active]:border-dashed [&.active]:border-[var(--color-sketch-accent)]">
        Register
      </Link>{' '}
      <Link to="/login" className="sketch-nav-link [&.active]:text-[var(--color-sketch-accent)] [&.active]:border-b-2 [&.active]:border-dashed [&.active]:border-[var(--color-sketch-accent)]">
        Login
      </Link>
    </nav>
    <hr className="sketch-divider" />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })