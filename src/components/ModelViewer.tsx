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
    <div className="flex justify-center items-center w-full">
      <model-viewer
        src="/models/xybar2.gltf"
        alt="3D model"
        auto-rotate
        camera-controls
        shadow-intensity="1"
        touch-action="pan-y"
        style={{ width: '500px', height: '500px', backgroundColor: '#f0f0f0' }}
        loading="eager"
        reveal="auto"
      >
        <div slot="poster" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
          Loading 3D model...
        </div>
      </model-viewer>
    </div>
  )
}