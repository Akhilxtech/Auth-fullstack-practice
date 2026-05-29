import { createFileRoute } from '@tanstack/react-router'
import Page from "../page.jsx"

export const Route = createFileRoute('/page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <Page />
  </>
}
