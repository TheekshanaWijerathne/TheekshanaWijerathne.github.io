"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useTheme } from "next-themes"

function SimpleStars(props: any) {
  const ref = useRef<any>()
  const { theme } = useTheme()
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      const phi = Math.random() * Math.PI * 2
      const theta = Math.random() * Math.PI
      const radius = 4 + Math.random() * 6
      
      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = radius * Math.cos(theta)
    }
    return positions
  }, [])
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial 
          transparent 
          color={theme === "dark" ? "#3b82f6" : "#1e40af"}
          size={0.002} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  )
}

export default function Simple3DBackground() {
  return (
    <>
      <SimpleStars />
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={0.2} />
    </>
  )
}
