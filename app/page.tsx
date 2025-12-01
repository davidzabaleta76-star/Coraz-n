import { InteractiveEnvelope } from "@/components/interactive-envelope"
import { FloatingHearts } from "@/components/floating-hearts"
import { DynamicIslandPlayer } from "@/components/dynamic-island-player"

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DynamicIslandPlayer />

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-sky-600 to-red-600" />

        <div
          className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-cyan-500 rounded-full"
          style={{ filter: "blur(100px)" }}
        />

        <div
          className="absolute -bottom-20 -right-20 w-[550px] h-[550px] bg-red-600 rounded-full"
          style={{ filter: "blur(100px)" }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-sky-600/70 to-red-600/50 rounded-full"
          style={{ filter: "blur(140px)" }}
        />

        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-red-700/70 rounded-full"
          style={{ filter: "blur(100px)" }}
        />

        <div
          className="absolute top-1/4 right-1/3 w-72 h-72 bg-cyan-500/80 rounded-full"
          style={{ filter: "blur(90px)" }}
        />

        <div className="absolute top-10 right-20 w-48 h-48 bg-red-700 rounded-full" style={{ filter: "blur(80px)" }} />
        <div
          className="absolute bottom-10 left-20 w-52 h-52 bg-cyan-500 rounded-full"
          style={{ filter: "blur(80px)" }}
        />

        <div className="absolute top-1/2 right-10 w-40 h-40 bg-red-600 rounded-full" style={{ filter: "blur(70px)" }} />
        <div
          className="absolute bottom-1/3 left-10 w-44 h-44 bg-red-600 rounded-full"
          style={{ filter: "blur(70px)" }}
        />

        <div className="absolute top-20 left-1/3 w-60 h-60 bg-cyan-600 rounded-full" style={{ filter: "blur(90px)" }} />
        <div
          className="absolute bottom-20 right-1/3 w-56 h-56 bg-sky-500 rounded-full"
          style={{ filter: "blur(85px)" }}
        />
      </div>

      <FloatingHearts />

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Esquinas exteriores con curvas suaves */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 5 100 L 5 30 Q 5 5 30 5 L 100 5"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 0 5 L 70 5 Q 95 5 95 30 L 95 100"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 5 0 L 5 70 Q 5 95 30 95 L 100 95"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 0 95 L 70 95 Q 95 95 95 70 L 95 0"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Esquinas interiores más delicadas */}
        <div className="absolute top-4 left-4 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 10 100 L 10 35 Q 10 10 35 10 L 100 10"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-4 right-4 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 0 10 L 65 10 Q 90 10 90 35 L 90 100"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 10 0 L 10 65 Q 10 90 35 90 L 100 90"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-4 right-4 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 0 90 L 65 90 Q 90 90 90 65 L 90 0"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <InteractiveEnvelope />
    </main>
  )
}
