import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  return <div className="border p-4 font-bold text-blue-600">Hello World</div>
}
