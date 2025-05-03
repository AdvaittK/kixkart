"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Types for our floating elements
type FloatingElement = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "circuit" | "hex" | "grid" | "data"
  opacity: number
  rotation: number
}

export default function CyberpunkElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  // Generate random floating elements on component mount
  useEffect(() => {
    const generatedElements: FloatingElement[] = []
    
    // Create 15 random elements
    for (let i = 0; i < 15; i++) {
      generatedElements.push({
        id: i,
        x: Math.random() * 100, // random position across screen width
        y: Math.random() * 100, // random position across screen height
        size: Math.random() * 60 + 20, // size between 20-80
        duration: Math.random() * 40 + 20, // animation duration 20-60s
        delay: Math.random() * 10, // random delay for animation start
        type: ["circuit", "hex", "grid", "data"][Math.floor(Math.random() * 4)] as any,
        opacity: Math.random() * 0.15 + 0.05, // opacity between 0.05-0.2
        rotation: Math.random() * 360, // initial rotation
      })
    }
    
    setElements(generatedElements)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          initial={{
            x: `${el.x}vw`,
            y: `${el.y}vh`,
            rotate: el.rotation,
            opacity: 0,
          }}
          animate={{
            x: [`${el.x}vw`, `${(el.x + 10) % 100}vw`, `${(el.x - 5) % 100}vw`, `${el.x}vw`],
            y: [`${el.y}vh`, `${(el.y - 15) % 100}vh`, `${(el.y + 10) % 100}vh`, `${el.y}vh`],
            rotate: [el.rotation, el.rotation + 180, el.rotation + 270, el.rotation + 360],
            opacity: [0, el.opacity, el.opacity, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
            times: [0, 0.3, 0.7, 1],
          }}
        >
          {el.type === "circuit" && (
            <div 
              className="border border-primary/30" 
              style={{ 
                width: `${el.size}px`, 
                height: `${el.size}px`,
                backgroundImage: "radial-gradient(circle, transparent 60%, rgba(255, 0, 60, 0.1) 60%, transparent 70%)",
                backgroundSize: "10px 10px"
              }}
            >
              <div className="w-full h-full border-t border-l border-primary/20 relative">
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          )}

          {el.type === "hex" && (
            <div 
              className="relative" 
              style={{ 
                width: `${el.size}px`, 
                height: `${el.size * 0.866}px` // height of a hexagon
              }}
            >
              <div className="absolute inset-0 border border-primary/20 clip-hex"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border border-primary/30 clip-hex transform rotate-45"></div>
              </div>
            </div>
          )}

          {el.type === "grid" && (
            <div 
              className="border border-primary/20" 
              style={{ 
                width: `${el.size}px`, 
                height: `${el.size}px`,
                backgroundImage: 
                  `linear-gradient(to right, rgba(255, 0, 60, 0.1) 1px, transparent 1px),
                   linear-gradient(to bottom, rgba(255, 0, 60, 0.1) 1px, transparent 1px)`,
                backgroundSize: '8px 8px',
              }}
            ></div>
          )}

          {el.type === "data" && (
            <div 
              className="overflow-hidden" 
              style={{ 
                width: `${el.size}px`, 
                height: `${el.size * 0.5}px`,
                fontSize: "4px",
                fontFamily: "monospace",
                color: "rgba(255, 0, 60, 0.3)",
                lineHeight: "1",
                textShadow: "0 0 2px rgba(255, 0, 60, 0.4)"
              }}
            >
              {Array(Math.floor(el.size * 0.5 / 4))
                .fill(0)
                .map((_, i) => (
                  <div key={i}>
                    {Math.random().toString(36).substring(2, 2 + Math.floor(el.size / 4))}
                  </div>
                ))
              }
            </div>
          )}
        </motion.div>
      ))}

      {/* Glowing lines in the background */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
    </div>
  )
}