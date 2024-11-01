'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

function ModelLoader() {
  const { scene } = useGLTF('/xwall.glb')
  return <primitive object={scene} />
}

export default function Bar() {
  return (
    <div style={{ width: '100%', height: '900px' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ModelLoader />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the model outside the component
useGLTF.preload('/xwall.glb')