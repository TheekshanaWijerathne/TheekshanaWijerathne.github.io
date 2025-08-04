"use client"

import { useRef, useMemo, useState, useEffect, Suspense } from "react"
import { useTheme } from "next-themes"

// Safe fallback component
function SafeProfessionalGrid() {
  return null
}

function SafeProfessionalParticles() {
  return null  
}

function SafeProfessionalWaves() {
  return null
}

// Professional 3D Scene - Safe version
function ProfessionalScene3DInner() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Return minimal Three.js components that are safe
  return (
    <>
      <ambientLight intensity={theme === "dark" ? 0.2 : 0.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={theme === "dark" ? 0.3 : 0.4}
        color={theme === "dark" ? "#3b82f6" : "#1e40af"}
      />
      <SafeProfessionalGrid />
      <SafeProfessionalParticles />
      <SafeProfessionalWaves />
    </>
  )
}

export default function ProfessionalScene3D() {
  return (
    <Suspense fallback={null}>
      <ProfessionalScene3DInner />
    </Suspense>
  )
}
