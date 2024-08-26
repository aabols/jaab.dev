'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import FormField from './formField'
import FormButton from './formButton'
import { loginUser } from './actions'

export default function LoginForm() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect') || '/'
  const loginWithRedirect = loginUser.bind(null, redirectUrl)

  return (
    <form className='max-w-sm mx-auto' action={loginWithRedirect}>
      <FormField id='username' type='text' label='Username' />
      <FormField id='password' type='password' label='Password' />
      <FormButton caption='Log in' pendingCaption='Logging in...' />
    </form>
  )
}
