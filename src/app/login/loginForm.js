import React from 'react'
import FormField from './formField'
import clsx from 'clsx'

export default function LoginForm() {
  return (
    <form className='max-w-sm mx-auto'>
      <FormField id='username' type='text' label='Username' />
      <FormField id='password' type='password' label='Password' />

      <button
        type='submit'
        className={clsx([
          'bg-amber-700',
          'hover:bg-amber-800',
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
        ])}
      >
        Log in
      </button>
    </form>
  )
}
