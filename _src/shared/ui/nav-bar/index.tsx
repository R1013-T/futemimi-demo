import NavItem from './nav-item'
import ScanNav from './scan-nav'

export default function NavBar() {
  return (
    <nav className="fixed z-10 bottom-0 max-w-xl w-full right-1/2 translate-x-1/2 px-3 flex justify-between items-center backdrop-blur-sm">
      <NavItem name="/" />
      <ScanNav />
      <NavItem name="/tryon" />
    </nav>
  )
}
