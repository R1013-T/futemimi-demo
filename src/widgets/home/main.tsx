import { Button } from '~/shared/ui/generated/button'
import { ThemeSwitcher } from '~/shared/ui/theme-switcher'
import ToggleButton from '../../shared/ui/toggle-button'

export default function HomeMain() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <ThemeSwitcher />
      <Button>
        Primary Button
      </Button>
      <Button intent="secondary">Secondary Button</Button>
      <Button intent="warning">Warning Button</Button>
      <Button intent="danger">Danger Button</Button>
      <Button isDisabled>Disabled Button</Button>
      <ToggleButton />
    </main>
  )
}
