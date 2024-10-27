export const metadata = {
  title: '3D Model Viewer',
  description: 'A 3D model viewer application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}