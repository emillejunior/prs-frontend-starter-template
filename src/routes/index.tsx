import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="space-y-4">
      <div className="border-foreground p-4 font-bold text-blue-700 dark:text-blue-200">
        Hello world!
      </div>

      {/* add more content to test scrolling */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="border-foreground rounded border p-2">
          Item {i + 1}
        </div>
      ))}
    </div>
  )
}
