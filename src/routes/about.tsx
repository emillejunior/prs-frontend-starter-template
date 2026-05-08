import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about")({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="space-y-4">
      <div className="border p-4 font-bold text-blue-600">About!</div>
    </div>
  )
}
