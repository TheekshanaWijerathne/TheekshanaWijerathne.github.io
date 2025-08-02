"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import Canvas to ensure it only renders on the client side
const ClientCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false })

// Import ProfessionalScene3D normally, as it's already a client component
import ProfessionalScene3D from "@/components/professional-scene-3d"

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <ClientCanvas>
        <Suspense fallback={null}>
          <ProfessionalScene3D />
        </Suspense>
      </ClientCanvas>
    </div>
  )
}
