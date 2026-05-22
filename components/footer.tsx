"use client"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full px-4 md:px-12 py-12 border-t border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-6">
          <h2 className="font-serif text-4xl mb-4">Let's Create</h2>
          <p className="text-muted-foreground max-w-xs">
            Chasing light, framing moments. A love for photography that grows with every shot.
          </p>
        </div>

        <div className="col-span-1 md:col-span-4 md:col-start-9 flex flex-col gap-2 items-start md:items-end">
          <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Contact</span>
          <span className="text-lg">
            18761421879@163.com
          </span>
          <span className="text-lg">
            (+86) 18761421879
          </span>
        </div>
      </div>

      <div className="mt-24 flex justify-between items-end">
        <span className="text-[10vw] font-serif leading-none opacity-5 select-none pointer-events-none">STUDIO</span>
        <div className="flex flex-col items-end gap-4">
          <button
            onClick={scrollToTop}
            className="text-xs uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
            type="button"
          >
            Back to Top ↑
          </button>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
