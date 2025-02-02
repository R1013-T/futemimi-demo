import Footer from '~/shared/ui/footer'
import Header from '~/shared/ui/header'
import HomeMain from '~/widgets/home/main'

export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <HomeMain />
      <Footer />
    </div>
  )
}
