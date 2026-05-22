"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

const items = [
  {
    id: 1,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
    height: "h-[500px]",
    src: "/images/misty-forest.jpg",
    title: "Sanctuary",
    contain: true,
    meta: "July 2023, Suzhou",
  },
  {
    id: 2,
    span: "col-span-12 md:col-span-6 lg:col-span-8",
    height: "h-[500px]",
    src: "/images/mountain-peak.jpg",
    title: "Blue Pavilion",
    contain: true,
    meta: "April 2025, Wuyuan, Jiangxi",
  },
  {
    id: 3,
    span: "col-span-12 md:col-span-4",
    height: "h-[600px]",
    src: "/images/lake-reflection.jpg",
    title: "Spring Brew",
    contain: true,
    meta: "April 2023, Wuhan",
  },
  {
    id: 4,
    span: "col-span-12 md:col-span-4",
    height: "h-[600px]",
    src: "/images/rock-texture.jpg",
    title: "Harmony",
    contain: true,
    meta: "October 2023, West Lake, Hangzhou",
  },
  {
    id: 5,
    span: "col-span-12 md:col-span-4",
    height: "h-[600px]",
    src: "/images/fern-leaf.jpg",
    title: "Leaf Frame",
    contain: true,
    meta: "October 2024, Jingzhou, Hubei",
  },
  {
    id: 6,
    span: "col-span-12 md:col-span-6",
    height: "h-[500px]",
    src: "/images/stormy-ocean.jpg",
    title: "Sun Patch",
    contain: true,
    meta: "July 2023, Lushan, Jiangxi",
  },
  {
    id: 7,
    span: "col-span-12 md:col-span-6",
    height: "h-[500px]",
    src: "/images/sand-dunes.jpg",
    title: "Golden Hour",
    contain: true,
    meta: "March 2024, Shanghai",
  },
  {
    id: 8,
    span: "col-span-12 md:col-span-12 lg:col-span-12",
    height: "h-[700px]",
    src: "/images/starry-night.jpg",
    title: "Cosmos",
    meta: "October 2025, Wuhan University",
  },
]

export function ChaoticGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof items)[0] | null>(null)

  const closeModal = useCallback(() => {
    setSelectedImage(null)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage, closeModal])

  return (
    <section className="w-full px-4 md:px-12 py-24">
      <div className="grid grid-cols-12 gap-0 border-t border-l border-border">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`${item.span} relative group border-r border-b border-border overflow-hidden bg-secondary/10 transition-colors hover:bg-secondary/30 cursor-pointer`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onClick={() => setSelectedImage(item)}
          >
            <div className="w-full h-full p-4 md:p-8 flex flex-col">
              <div className={`relative w-full ${item.height} overflow-hidden mb-4 ${item.contain ? "bg-secondary/30" : ""}`}>
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className={`${item.contain ? "object-contain" : "object-cover"} transition-transform duration-[1.5s] ease-in-out group-hover:scale-105`}
                />

                <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              <div className="mt-auto flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">
                    0{item.id}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl italic">{item.title}</h3>
                </div>
                <div className="w-8 h-[1px] bg-primary/50 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-foreground/70 hover:text-primary transition-colors text-sm uppercase tracking-widest flex items-center gap-2"
                type="button"
              >
                <span>Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="relative w-auto h-auto max-w-[90vw] max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain"
                  priority
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-serif text-2xl italic text-primary">{selectedImage.title}</h3>
                {selectedImage.meta && (
                  <p className="text-sm text-muted-foreground mt-2 tracking-wide">{selectedImage.meta}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-24 mt-12 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border"></div>
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border rotate-12 origin-top"></div>
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-border -rotate-6 origin-bottom"></div>
      </div>
    </section>
  )
}
