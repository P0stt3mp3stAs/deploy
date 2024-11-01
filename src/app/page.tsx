'use client'

import dynamic from 'next/dynamic'

const Bar = dynamic(() => import('../components/Bar'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function Page() {
  return (
    <div>
      <Bar />
    </div>
  )
}

// import Bar from '@/components/Bar'

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center p-8">
//       <h1 className="mb-8">Hello world I&apos;m here to welcome you to my new app</h1>
//       <Bar />
//     </main>
//   )
// }