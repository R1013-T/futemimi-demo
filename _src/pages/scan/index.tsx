import Link from 'next/link'
import { Button } from '~/shared/ui/generated/button'

export default function ScanPage() {
  return (
    <div>

      <Button appearance="outline">
        <Link href="/">Back</Link>
      </Button>
    </div>
  )
}
