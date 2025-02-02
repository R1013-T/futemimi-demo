'use client'

import { useState } from 'react'
import { Button } from '~/shared/ui/generated/button'

export default function ToggleButton() {
  const [state, setState] = useState(false)

  return (
    <div>
      <Button
        appearance="outline"
        onPress={() => setState(prev => !prev)}
      >
        Toggle State
      </Button>
      <p>
        state:
        {' '}
        {JSON.stringify(state)}
      </p>
    </div>
  )
}
