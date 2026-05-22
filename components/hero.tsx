"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 md:px-12 pt-24 pb-12">
      <div className="z-10 w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
        <motion.div
          className="col-span-1 md:col-span-8 md:col-start-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="font-serif text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter text-primary mix-blend-difference">
            TIRAGARDE'S <br />
            <span className="italic font-light ml-[10vw] md:ml-[15vw]">COLORFUL WORLD</span>
          </h1>
        </motion.div>

        <motion.div
          className="col-span-1 md:col-span-3 md:col-start-9 mt-8 md:mt-0 flex flex-col gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base font-light text-muted-foreground max-w-[200px] leading-relaxed">
            A curated collection of photography: the vibrancy of life and travel.
          </p>
          <div className="h-[1px] w-32 bg-primary/30"></div>
          <p className="text-xs uppercase tracking-widest text-primary/60">2023 — 2025</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-primary"></div>
      </motion.div>
    </section>
  )
}
