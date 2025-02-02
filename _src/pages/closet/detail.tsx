import { Button } from '~/shared/ui/generated'

export default function ClothesDetailPage({ id }: { id: string }) {
  return (
    <article className="max-w-xl overflow-x-hidden mx-auto pb-14">
      <img src="https://placehold.jp/700x700.png" width={600} height={600} alt="" />
      <div className="px-4">
        <div>
          id:
          {id}
        </div>
        <Button className="w-full">Send to FuTeMimi</Button>
      </div>
    </article>
  )
}
