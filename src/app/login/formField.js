import React from 'react'
import clsx from 'clsx'

export default function FormField({ id, label, type, placeholder }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className={clsx([
          'block',
          'mb-2',
          'text-sm',
          'font-medium',
          'text-gray-900',
          'dark:text-white'
        ])}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={clsx([
          'bg-gray-50',
          'border',
          'border-gray-300',
          'text-gray-900',
          'text-sm',
          'rounded',
          'block',
          'w-full',
          'p-2.5',
          'dark:bg-gray-700',
          'dark:border-gray-600',
          'dark:placeholder-gray-400',
          'dark:text-white'
        ])}
      />
    </div>
  )
}
