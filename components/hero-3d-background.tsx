"use client"

import dynamic from "next/dynamic"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

// Dynamically import ProfessionalScene3D to ensure client-side rendering
const ProfessionalScene3D = dynamic(() => import("@/components/professional-scene-3d"), { ssr: false })

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <Canvas>
        <Suspense fallback={null}>
          <ProfessionalScene3D />
        </Suspense>
      </Canvas>
    </div>
  )
}
