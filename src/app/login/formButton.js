import React from 'react'
import { useFormStatus } from 'react-dom'
import { clsx } from 'clsx'

export default function FormButton({ caption, pendingCaption }) {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      disabled={pending}
      className={clsx([
        'bg-amber-700',
        'enabled:hover:bg-amber-800',
        'w-full',
        'sm:w-auto',
        'px-5',
        'py-2.5',
        'rounded',
        'text-white',
        'text-center',
        'text-sm',
        'font-medium',
        'dark:bg-amber-600',
        'dark:hover:bg-amber-700',
        'disabled:opacity-75',
      ])}
    >
      {pending ? pendingCaption : caption}
    </button>
  )
}
