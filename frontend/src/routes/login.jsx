import { createFileRoute } from '@tanstack/react-router'
import { Login } from '../forms/login.jsx'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Login />
  </div>
}
