import clsx from 'clsx'
import React from 'react'

export default function FormAction({ caption, onClick }) {
  return (
    <div
      onClick={onClick}
      className={clsx([
        'underline',
        'text-right',
        'me-2',
        'text-sm',
        'font-light',
        'text-gray-900',
        'dark:text-gray-300'
      ])}
    >
      {caption}
    </div>
  )
}
