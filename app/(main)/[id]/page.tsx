import React from 'react'
import ClothesDetailPage from '~/pages/closet/detail'

export default async function ClothesDetail({ params }: { params: { id: string } }) {
  const { id } = await params
  return <ClothesDetailPage id={id} />
}
