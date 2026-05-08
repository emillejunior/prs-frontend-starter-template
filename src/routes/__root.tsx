import { Link, Outlet, createRootRoute } from "@tanstack/react-router"

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    /*
      Root container:
      - h-screen makes the layout fill the entire viewport height
      - flex + flex-col stacks children vertically
      - the page is divided into:
          1. fixed-height outer header
          2. flexible main area that fills the remaining height
    */
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background text-foreground flex h-screen flex-col">
        {/*
        OUTER HEADER

        - h-16 gives the header a fixed height
        - shrink-0 prevents the header from shrinking when space is tight
        - because this header has a fixed height,
          the <main> below can safely use flex-1
          to occupy the remaining viewport height
      */}
        <header className="bg-background flex h-16 shrink-0 items-center justify-between border-b p-8">
          <Link to="/" className="text-foreground text-2xl font-bold">
            PRS
          </Link>
          <ModeToggle />
        </header>

        {/*
        MAIN CONTENT AREA

        - flex-1 makes this area take all remaining height
          after the outer header

        - flex-col creates another vertical layout:
            1. inner header
            2. scrollable content
            3. inner footer

        - min-h-0 is IMPORTANT:
          it allows the scrollable content area to shrink properly
          inside a flex container so overflow scrolling works correctly
      */}
        <main className="bg-foreground/10 flex min-h-0 flex-1 flex-col">
          {/*
          INNER HEADER

          - fixed height inside the main area
          - shrink-0 keeps it from collapsing
          - always visible at the top of the main section
        */}
          <div className="flex h-12 shrink-0 items-center border-b px-4">
            Inner Header
          </div>

          {/*
          SCROLLABLE CONTENT AREA

          - flex-1 makes this section consume all remaining space
            between the inner header and inner footer

          - overflow-y-auto enables vertical scrolling
            ONLY when content exceeds available height

          - when content is small:
              this area still stretches to fill remaining space

          - when content is large:
              only this section scrolls,
              while headers and footers stay fixed
        */}
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <Outlet />
          </div>

          {/*
          INNER FOOTER

          - fixed height footer inside the main area
          - because the scrollable content uses flex-1,
            this footer is pushed to the bottom automatically

          - shrink-0 prevents the footer from shrinking
        */}
          <div className="flex h-12 shrink-0 items-center border-t px-4">
            Inner Footer
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
