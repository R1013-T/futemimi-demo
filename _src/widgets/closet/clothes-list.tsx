import { ClothesItem } from './clothes-item'

export default function ClothesList() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3">
      {
        Array.from({ length: 15 }).map((_, index) => (
          <ClothesItem key={index} id={String(index)} />
        ))
      }
    </div>
  )
}
