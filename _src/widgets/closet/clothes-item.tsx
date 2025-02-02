import Link from "next/link"

export function ClothesItem({ id }: { id: string }) {
  return (
    <Link className="border" href={`/${id}`}>
      <img src="https://placehold.jp/150x150.png" width={150} height={150} alt="" className="w-full" />
    </Link>
  )
}
