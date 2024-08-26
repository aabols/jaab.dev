'use client'
import React from 'react'
import FormField from './formField'
import FormButton from './formButton'
import { loginUser } from './actions'

export default function LoginForm() {
  return (
    <form className='max-w-sm mx-auto'>
      <FormField id='username' type='text' label='Username' />
      <FormField id='password' type='password' label='Password' />
      <FormButton caption='Log in' pendingCaption='Logging in...' />
    </form>
  )
}
