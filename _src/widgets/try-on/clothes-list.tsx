'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import { buttonStyles } from '~/shared/ui/generated'
import { cn } from '~/shared/utils/classes'
import { TryOnClothesItem } from './clothes-item'

export default function TryOnClothesList() {
  const [selectedClothes, setSelectedClothes] = useState<string[]>([])

  const toggleSelection = useCallback((id: string) => {
    setSelectedClothes(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    )
  }, [])

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3">
      {
        Array.from({ length: 15 }).map((_, index) => (
          <TryOnClothesItem key={index} id={String(index)} isSelected={selectedClothes.includes(String(index))} toggleSelection={toggleSelection} />
        ))
      }

      {selectedClothes.length > 0 && <Link className={cn(buttonStyles(), 'fixed bottom-15 right-1/2 translate-x-1/2 z-10')} href="/tryon/run">Start Try On</Link>}
    </div>
  )
}
