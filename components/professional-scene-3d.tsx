"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei"
import { useTheme } from "next-themes"
import type * as THREE from "three"

// Professional 3D Grid Component
function ProfessionalGrid() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <meshStandardMaterial color="#1e293b" wireframe transparent opacity={0.1} />
    </mesh>
  )
}

// Professional Particle System
function ProfessionalParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const { theme } = useTheme()

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={theme === "dark" ? "#3b82f6" : "#1e40af"}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Professional Wave Geometry
function ProfessionalWaves() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry
      const positions = geometry.attributes.position.array as Float32Array

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        positions[i + 2] =
          Math.sin(x * 0.5 + state.clock.elapsedTime) * 0.3 + Math.cos(y * 0.5 + state.clock.elapsedTime * 0.7) * 0.2
      }

      geometry.attributes.position.needsUpdate = true
      geometry.computeVertexNormals()
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -8]} rotation={[-Math.PI / 4, 0, 0]}>
      <planeGeometry args={[15, 15, 30, 30]} />
      <meshStandardMaterial color="#1e293b" wireframe transparent opacity={0.08} />
    </mesh>
  )
}

// Professional 3D Scene
export default function ProfessionalScene3D() {
  const { theme } = useTheme()

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={false} />

      {/* Subtle ambient lighting */}
      <ambientLight intensity={theme === "dark" ? 0.2 : 0.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={theme === "dark" ? 0.3 : 0.4}
        color={theme === "dark" ? "#3b82f6" : "#1e40af"}
      />

      {/* Professional geometric elements */}
      <ProfessionalGrid />
      <ProfessionalParticles />
      <ProfessionalWaves />

      {/* Subtle stars for depth */}
      <Stars radius={50} depth={30} count={1000} factor={2} saturation={0} fade speed={0.5} />
    </>
  )
}
