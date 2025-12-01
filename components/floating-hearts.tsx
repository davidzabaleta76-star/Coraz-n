"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  animationDuration: number
  animationDelay: number
  driftX: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Generar corazones iniciales
    const initialHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 16 + 8, // 8-24px
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
      animationDuration: Math.random() * 4 + 3, // 3-7s
      animationDelay: Math.random() * 2,
      driftX: (Math.random() - 0.5) * 40, // -20 a 20px drift
    }))
    setHearts(initialHearts)

    // Actualizar posiciones periódicamente
    const interval = setInterval(() => {
      setHearts((prev) =>
        prev.map((heart) => ({
          ...heart,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.3 + 0.1,
        })),
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute text-white transition-all duration-[3s] ease-in-out"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
            animation: `heartFloat ${heart.animationDuration}s ease-in-out infinite, heartPulse ${heart.animationDuration * 0.5}s ease-in-out infinite`,
            animationDelay: `${heart.animationDelay}s`,
            transform: `translateX(${heart.driftX}px)`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
    </div>
  )
}
