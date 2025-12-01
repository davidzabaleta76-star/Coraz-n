"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function InteractiveEnvelope() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasDropped, setHasDropped] = useState(false)

  const paperText = `...Corazón,...

...Marianita, te escribo esta carta para darte las gracias por todos los momentos lindos y recocheros que compartimos. Aunque fueron en poco tiempo, para mí fueron suficientes para quedarme con recuerdos que llevaré siempre en el alma. También quería decirte que te quiero… pero lejos de mí, pa' que no te creas mucho, jajajaja. Mentiras, ya tú sabes que en serio te quiero harto, y no cualquiera se gana mi confianza así de fácil. Pero tú sí, tú te la ganaste como si nada, con tu forma de ser toda tierna y toda cansona al mismo tiempo. Por eso te doy este detalle, pa' que sepas que te aprecio, que te pienso, y que eres especial, aunque yo me haga el bobo. Att: el más lindo del pedazo 👅👅`

  useEffect(() => {
    const timer = setTimeout(() => setHasDropped(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center">
      <div
        className={cn(
          "flex flex-col items-center transition-all duration-[1.5s] ease-out",
          hasDropped ? "translate-y-0 opacity-100" : "-translate-y-[100vh] opacity-0",
        )}
      >
        <div className="relative flex flex-col items-center">
          <svg width="40" height="180" viewBox="0 0 40 180" className="drop-shadow-lg">
            <defs>
              <linearGradient id="ropeMainThick" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6B5344" />
                <stop offset="25%" stopColor="#8B7355" />
                <stop offset="50%" stopColor="#A68B5B" />
                <stop offset="75%" stopColor="#8B7355" />
                <stop offset="100%" stopColor="#6B5344" />
              </linearGradient>
              <linearGradient id="ropeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="40%" stopColor="#C4A86C" />
                <stop offset="60%" stopColor="#C4A86C" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {Array.from({ length: 20 }).map((_, i) => (
              <g key={i}>
                <ellipse
                  cx={20 + Math.sin(i * 0.8) * 4}
                  cy={i * 9 + 5}
                  rx="10"
                  ry="6"
                  fill="url(#ropeMainThick)"
                  stroke="#5A4334"
                  strokeWidth="1"
                />
                <ellipse
                  cx={20 + Math.sin(i * 0.8) * 4}
                  cy={i * 9 + 3}
                  rx="5"
                  ry="2"
                  fill="url(#ropeHighlight)"
                  opacity="0.4"
                />
              </g>
            ))}
          </svg>

          <svg width="120" height="100" viewBox="0 0 120 100" className="-mt-4 drop-shadow-xl">
            <defs>
              <linearGradient id="heartRopeLarge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A68B5B" />
                <stop offset="50%" stopColor="#8B7355" />
                <stop offset="100%" stopColor="#6B5344" />
              </linearGradient>
              <linearGradient id="heartRopeInner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4A86C" />
                <stop offset="100%" stopColor="#A68B5B" />
              </linearGradient>
            </defs>
            <path
              d="M 60 90 
                 C 25 65 5 40 18 22 
                 C 31 4 60 15 60 32 
                 C 60 15 89 4 102 22 
                 C 115 40 95 65 60 90"
              fill="none"
              stroke="#3A2A1A"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.3"
              transform="translate(2, 3)"
            />
            <path
              d="M 60 90 
                 C 25 65 5 40 18 22 
                 C 31 4 60 15 60 32 
                 C 60 15 89 4 102 22 
                 C 115 40 95 65 60 90"
              fill="none"
              stroke="url(#heartRopeLarge)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 60 90 
                 C 25 65 5 40 18 22 
                 C 31 4 60 15 60 32 
                 C 60 15 89 4 102 22 
                 C 115 40 95 65 60 90"
              fill="none"
              stroke="#D4BC84"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="4 8"
            />
            <path
              d="M 60 85 
                 C 28 62 10 40 20 24 
                 C 30 8 60 17 60 32 
                 C 60 17 90 8 100 24 
                 C 110 40 92 62 60 85"
              fill="none"
              stroke="#5A4334"
              strokeWidth="2"
              opacity="0.4"
            />
            <path
              d="M 28 28 Q 35 20 42 28"
              fill="none"
              stroke="#E8D8B0"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M 78 28 Q 85 20 92 28"
              fill="none"
              stroke="#E8D8B0"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          <svg width="30" height="30" viewBox="0 0 30 30" className="-mt-3 drop-shadow-md">
            {Array.from({ length: 4 }).map((_, i) => (
              <g key={i}>
                <ellipse
                  cx={15 + Math.sin(i * 1) * 2}
                  cy={i * 7 + 4}
                  rx="7"
                  ry="4.5"
                  fill="url(#ropeMainThick)"
                  stroke="#5A4334"
                  strokeWidth="0.8"
                />
              </g>
            ))}
          </svg>
        </div>

        <div
          className={cn(
            "relative cursor-pointer select-none transition-transform duration-300 -mt-2",
            "hover:scale-105 active:scale-95",
          )}
          onClick={handleClick}
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-44 h-28 md:w-52 md:h-36">
            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 w-[85%] transition-all duration-700 ease-out",
                isOpen ? "top-[-140px] md:top-[-160px] opacity-100 z-50" : "top-[20%] opacity-0 z-10",
              )}
              style={{
                background: "linear-gradient(180deg, #FFFFF8 0%, #FBF8F0 50%, #F5F0E5 100%)",
                boxShadow: isOpen ? "0 8px 32px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)" : "none",
                border: "1px solid #D8D0C0",
                borderRadius: "4px",
              }}
            >
              <div className="w-full h-2.5 bg-gradient-to-b from-[#FFFFF8] to-[#F8F4E8] rounded-t border-b border-[#E8E0D0]" />
              <div
                className="p-3 h-40 md:h-44 overflow-y-auto"
                style={{
                  background: "repeating-linear-gradient(transparent, transparent 18px, #E0D8C8 19px)",
                }}
              >
                <p className="text-gray-700 text-[10px] md:text-xs leading-[19px] font-serif italic whitespace-pre-line">
                  {paperText}
                </p>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 w-full h-full rounded-md overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #E8D4B8 0%, #DCCA9C 30%, #D4BC8A 70%, #C8B080 100%)",
                boxShadow: "0 8px 24px rgba(150, 120, 80, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
                border: "2px solid #A89060",
              }}
            >
              <svg viewBox="0 0 50 100" className="absolute left-0 top-0 w-1/2 h-full" preserveAspectRatio="none">
                <polygon points="0,0 50,50 0,100" fill="url(#leftTriangle)" />
                <defs>
                  <linearGradient id="leftTriangle" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#D8C8A0" />
                    <stop offset="100%" stopColor="#C8B080" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="0" x2="50" y2="50" stroke="#B8A070" strokeWidth="1.5" />
              </svg>

              <svg viewBox="0 0 50 100" className="absolute right-0 top-0 w-1/2 h-full" preserveAspectRatio="none">
                <polygon points="50,0 0,50 50,100" fill="url(#rightTriangle)" />
                <defs>
                  <linearGradient id="rightTriangle" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#D8C8A0" />
                    <stop offset="100%" stopColor="#C8B080" />
                  </linearGradient>
                </defs>
                <line x1="50" y1="0" x2="0" y2="50" stroke="#B8A070" strokeWidth="1.5" />
              </svg>

              <svg viewBox="0 0 100 50" className="absolute bottom-0 left-0 w-full h-1/2" preserveAspectRatio="none">
                <polygon points="0,50 50,0 100,50" fill="url(#bottomTriangle)" />
                <defs>
                  <linearGradient id="bottomTriangle" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#D0B888" />
                    <stop offset="100%" stopColor="#C8B080" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="50" x2="50" y2="0" stroke="#B8A070" strokeWidth="1" opacity="0.6" />
                <line x1="100" y1="50" x2="50" y2="0" stroke="#B8A070" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>

            <div
              className={cn(
                "absolute top-0 left-0 w-full h-[55%] origin-top transition-transform duration-700 ease-out",
                isOpen ? "[transform:rotateX(-180deg)]" : "[transform:rotateX(0deg)]",
              )}
              style={{
                transformStyle: "preserve-3d",
                zIndex: isOpen ? 5 : 40,
              }}
            >
              <svg viewBox="0 0 100 55" className="w-full h-full drop-shadow-md" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="flapGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#E8D8B8" />
                    <stop offset="50%" stopColor="#DCC8A0" />
                    <stop offset="100%" stopColor="#D0BC90" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 100,0 50,55" fill="url(#flapGradient)" stroke="#A89060" strokeWidth="2" />
                <line x1="0" y1="0" x2="50" y2="52" stroke="#C0A878" strokeWidth="1" opacity="0.5" />
                <line x1="100" y1="0" x2="50" y2="52" stroke="#C0A878" strokeWidth="1" opacity="0.5" />
              </svg>

              <div
                className="absolute left-1/2 -translate-x-1/2 top-[86%] -translate-y-1/2 w-7 h-7 md:w-9 md:h-9 rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #D32F2F, #B71C1C 50%, #7B0000 100%)",
                  boxShadow:
                    "0 3px 10px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,150,150,0.3), inset 0 -2px 4px rgba(0,0,0,0.4)",
                  border: "2px solid #5D0000",
                }}
              >
                <div className="absolute inset-1 rounded-full border border-[#8B0000]/50" />
                <div
                  className="absolute -bottom-1 left-1/4 w-1 h-1.5 rounded-full"
                  style={{ background: "radial-gradient(circle at 50% 30%, #C62828, #8B0000)" }}
                />
              </div>
            </div>
          </div>

          <p className="text-center mt-4 text-white/90 text-xs font-medium tracking-wide animate-pulse drop-shadow-lg">
            {isOpen ? "Click para cerrar" : "Click para abrir"}
          </p>
        </div>
      </div>
    </div>
  )
}
