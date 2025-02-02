import { ClothesItem } from './clothes-item'

export default function ClothesList() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4">
      {
        Array.from({ length: 30 }).map((_, index) => (
          <ClothesItem key={index} id={String(index)} />
        ))
      }
    </div>
  )
}
