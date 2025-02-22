'use client'

import type {
  CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  CheckboxProps as CheckboxPrimitiveProps,
  ValidationResult,
} from 'react-aria-components'
import { IconCheck, IconMinus } from 'justd-icons'
import {
  CheckboxGroup as CheckboxGroupPrimitive,
  Checkbox as CheckboxPrimitive,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '~/shared/utils/classes'
import { Description, FieldError, Label } from './field'
import { composeTailwindRenderProps } from './primitive'

interface CheckboxGroupProps extends CheckboxGroupPrimitiveProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
  return (
    <CheckboxGroupPrimitive
      {...props}
      className={composeTailwindRenderProps(className, 'flex flex-col gap-y-2')}
    >
      <Label>{props.label}</Label>
      {props.children as React.ReactNode}
      {props.description && <Description className="block">{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </CheckboxGroupPrimitive>
  )
}

const checkboxStyles = tv({
  base: 'group flex items-center gap-2 text-sm transition',
  variants: {
    isDisabled: {
      true: 'opacity-50',
    },
  },
})

const boxStyles = tv({
  base: 'flex size-6 shrink-0 items-center justify-center rounded-full border border-input text-bg transition *:data-[slot=icon]:size-3',
  variants: {
    isSelected: {
      false: 'bg-muted',
      true: [
        'border-primary bg-primary text-primary-fg',
        'group-data-invalid:border-primary/70 group-data-invalid:bg-primary group-data-invalid:text-primary-fg',
      ],
    },
    isFocused: {
      true: [
        'border-primary ring-4 ring-primary/20',
        'group-data-invalid:border-primary/70 group-data-invalid:text-primary-fg group-data-invalid:ring-primary/20',
      ],
    },
    isInvalid: {
      true: 'border-primary/70 bg-primary/20 text-primary-fg ring-primary/20',
    },
  },
})

interface CheckboxProps extends CheckboxPrimitiveProps {
  description?: string
  label?: string
}

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className }))}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <div className={cn('flex gap-x-2', props.description ? 'items-start' : 'items-center')}>
          <div
            className={boxStyles({
              ...renderProps,
              isSelected: isSelected || isIndeterminate,
            })}
          >
            {isIndeterminate ? <IconMinus /> : isSelected ? <IconCheck /> : null}
          </div>

          <div className="flex flex-col gap-1">
            <>
              {props.label
                ? (
                    <Label className={cn(props.description && 'text-sm/4')}>{props.label}</Label>
                  )
                : (
                    (props.children as React.ReactNode)
                  )}
              {props.description && <Description>{props.description}</Description>}
            </>
          </div>
        </div>
      )}
    </CheckboxPrimitive>
  )
}

export type { CheckboxGroupProps, CheckboxProps }
export { Checkbox, CheckboxGroup }
