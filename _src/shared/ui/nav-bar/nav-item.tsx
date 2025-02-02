'use client'

import { IconArchive, IconArchiveFilled, IconHanger2, IconHanger2Filled } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavNames = '/' | '/tryon'

const navItems = [
  {
    name: '/',
    label: 'Closet',
    icon: IconArchive,
    activeIcon: IconArchiveFilled,
  },
  {
    name: '/tryon',
    label: 'Try On',
    icon: IconHanger2,
    activeIcon: IconHanger2Filled,
  },
] as const

export default function NavItem({ name }: { name: NavNames }) {
  const pathname = usePathname()

  const active = pathname === name
  const navItem = navItems.find(item => item.name === name)!
  const { label } = navItem

  if (active) {
    const ActiveIcon = navItem.activeIcon
    return (
      <span className='flex gap-2 items-center justify-center w-full'>
        {ActiveIcon ? <ActiveIcon size={30} /> : null}
        <span className='font-semibold'>{label}</span>
      </span>
    )
  }

  const Icon = navItem.icon
  return (
    <Link href={name} className='flex gap-2 items-center justify-center w-full'>
      {Icon ? <Icon size={30} stroke={1} /> : null}
      <span>{label}</span>
    </Link>
  )
}
