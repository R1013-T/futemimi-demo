'use client'

import { memo, useCallback } from 'react'
import { Checkbox } from '~/shared/ui/generated'

function TryOnClothesItemComponent({
  id,
  isSelected,
  toggleSelection,
}: {
  id: string
  isSelected: boolean
  toggleSelection: (id: string) => void
}) {
  const handleClick = useCallback(() => {
    toggleSelection(id)
  }, [toggleSelection, id])

  return (
    <div className="border relative cursor-pointer" onClick={handleClick}>
      <img src="https://placehold.jp/150x150.png" width={150} height={150} alt="" className="w-full" />
      <Checkbox className="absolute bottom-2 right-0 z-10" isSelected={isSelected} onChange={handleClick} />
    </div>
  )
}

export const TryOnClothesItem = memo(
  TryOnClothesItemComponent,
  (prevProps, nextProps) => prevProps.isSelected === nextProps.isSelected,
)
