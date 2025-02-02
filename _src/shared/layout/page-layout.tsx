export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="max-w-xl overflow-x-hidden mx-auto px-4 pb-14">
      {children}
    </div>
  )
}
