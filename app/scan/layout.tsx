import PageLayout from '~/shared/layout/page-layout'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  )
}
