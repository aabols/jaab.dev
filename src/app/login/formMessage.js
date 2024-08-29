import clsx from 'clsx'
import React from 'react'

export default function FormMessage({ message }) {
  return (
    <div
      className={clsx([
        '-mt-4',
        'mb-3',
        'ms-2',
        'text-sm',
        'font-medium',
        'text-gray-900',
        'dark:text-gray-300'
      ])}
    >
      {message}
    </div>
  )
}
