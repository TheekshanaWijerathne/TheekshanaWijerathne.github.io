"use client"

import dynamic from "next/dynamic"
import { Suspense, useState, useEffect } from "react"

// Dynamically import Canvas with no SSR
const ClientCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { 
  ssr: false 
})

// Dynamically import the simple 3D scene with no SSR
const Simple3DBackground = dynamic(() => import("@/components/simple-3d-background"), { 
  ssr: false 
})

export function Hero3DBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render anything on the server
  if (!isMounted) {
    return null
  }

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <ClientCanvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Simple3DBackground />
        </Suspense>
      </ClientCanvas>
    </div>
  )
}
