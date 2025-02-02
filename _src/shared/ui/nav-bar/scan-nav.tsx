'use client'

import { IconObjectScan } from '@tabler/icons-react'
import Link from 'next/link'
import { cn } from '~/shared/utils/classes'
import { buttonStyles } from '../generated/button'

export default function ScanNav() {
  return (
    <Link className={cn(buttonStyles(), 'rounded-b-none py-6 px-7')} href="/scan">
      <IconObjectScan size={34} stroke={1.5} />
    </Link>
  )
}
