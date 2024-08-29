'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { loginUser, registerUser } from './actions'
import FormButton from './formButton'
import FormField from './formField'
import FormAction from './formAction'
import FormMessage from './formMessage'

export default function LoginForm() {
  const [formStatus, setFormStatus] = useState()
  const [formMessage, setFormMessage] = useState()
  const [registering, setRegistering] = useState(false)
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect')

  useEffect(() => {
    switch (formStatus) {
      case 404:
        return setRegistering(true)
      case 401:
        setRegistering(false)
    }
  }, [formStatus])

  const handleRegistration = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const res = await registerUser(redirectUrl, formData)
    res && setFormStatus(res.status)
    res && setFormMessage(res.message)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const res = await loginUser(redirectUrl, formData)
    res && setFormStatus(res.status)
    res && setFormMessage(res.message)
  }

  const handleUsernameChange = (e) => {
    if (formStatus === 404) setRegistering(false) && setFormStatus(null)
    setFormStatus(null)
    setFormMessage(null)
  }

  const handlePasswordChange = (e) => {
    if (formStatus === 400) setFormStatus(null) && setFormMessage(null)
  }

  const handleModeChange = (e) => {
    e.preventDefault()
    setRegistering(r => !r)
    setFormStatus(null)
    setFormMessage(null)
  }

  return (
    <form className='max-w-sm mx-auto' onSubmit={registering ? handleRegistration : handleLogin}>
      <FormField id='username' type='text' label='Username' onChange={handleUsernameChange} />
      {formMessage && (formStatus === 404 || formStatus === 403) ? <FormMessage message={formMessage} /> : null}
      <FormField id='password' type='password' label='Password' onChange={handlePasswordChange} />
      {formMessage && formStatus === 401 ? <FormMessage message={formMessage} /> : null}
      {registering ? <FormField id='repeatPassword' type='password' label='Repeat password' onChange={handlePasswordChange} /> : null}
      {formMessage && formStatus === 400 ? <FormMessage message={formMessage} /> : null}
      <FormButton caption={registering ? 'Register' : 'Log in'} pendingCaption={registering ? 'Registering...' : 'Logging in...'} />
      <FormAction caption={registering ? 'or login' : 'or register'} onClick={handleModeChange} />
    </form>
  )
}
