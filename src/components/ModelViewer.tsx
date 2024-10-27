'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, OrbitControls } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/xybar2.gltf')
  return <primitive object={scene} />
}

export default function ModelViewer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <Stage environment="city" intensity={0.6}>
          <Model />
        </Stage>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/xybar2.gltf')