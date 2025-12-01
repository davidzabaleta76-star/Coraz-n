"use client"

import { useState, useRef, useEffect } from "react"

export function DynamicIslandPlayer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [iframeMounted, setIframeMounted] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const songTitle = "Golden Hour"
  const artist = "Piano Instrumental"
  const youtubeId = "ZkUQcn1DU5I"
  const songDuration = 106

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && !hasEnded) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / songDuration
          if (newProgress >= 100) {
            setIsPlaying(false)
            setHasEnded(true)
            return 100
          }
          return newProgress
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, hasEnded])

  const handlePlayPause = () => {
    if (!iframeMounted) {
      setIframeMounted(true)
    }
    if (hasEnded) {
      handleRestart()
      return
    }
    setIsPlaying(!isPlaying)
  }

  const handleRestart = () => {
    setProgress(0)
    setHasEnded(false)
    if (iframeRef.current && iframeMounted) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "seekTo", args: [0, true] }),
        "*",
      )
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*",
      )
    }
    setIsPlaying(true)
  }

  useEffect(() => {
    if (iframeRef.current && iframeMounted) {
      const command = isPlaying ? "playVideo" : "pauseVideo"
      iframeRef.current.contentWindow?.postMessage(JSON.stringify({ event: "command", func: command, args: [] }), "*")
    }
  }, [isPlaying, iframeMounted])

  return (
    <>
      <div
        className={`fixed top-6 left-6 z-50 bg-black rounded-[32px] cursor-pointer transition-all duration-500 ease-out shadow-xl shadow-black/40 ${
          isExpanded ? "w-[340px] h-[88px]" : "w-20 h-20"
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {!isExpanded ? (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        ) : (
          <div className="w-full h-full p-3 flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 flex-shrink-0 flex items-center justify-center overflow-hidden">
              <svg className="w-8 h-8 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-white text-sm font-medium truncate">{songTitle}</p>
                  <p className="text-gray-400 text-xs truncate">{artist}</p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(false)
                  }}
                  className="text-gray-400 hover:text-white ml-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-1.5 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-center gap-4 mt-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRestart()
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePlayPause()
                  }}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRestart()
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {iframeMounted && (
        <iframe
          ref={iframeRef}
          className="hidden"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}`}
          allow="autoplay"
          title="Background Music"
        />
      )}
    </>
  )
}
