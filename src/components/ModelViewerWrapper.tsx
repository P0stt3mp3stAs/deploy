'use client'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<any, any>
    }
  }
}

export default function ModelViewer() {
  return (
    <model-viewer
      src="/models/xybar2.gltf"
      alt="3D model"
      auto-rotate
      camera-controls
      style={{ width: '100%', height: '400px' }}
    ></model-viewer>
  )
}