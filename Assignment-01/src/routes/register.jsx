import { createFileRoute } from '@tanstack/react-router'
import { Register } from '../forms/register.jsx'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <Register />
    </>
  )
}
