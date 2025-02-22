export default function Title({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <h1 className="text-2xl font-bold my-2">
      {children}
    </h1>
  )
}
