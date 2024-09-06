'use server'
import { compare } from 'bcrypt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { sign } from '@/app/utils'
import { User } from '@/../db/models'

export async function loginUser(redirectUrl, formData) {
  try {
    const { username, password } = Object.fromEntries(formData)
    const user = await User.scope('auth').findOne({ where: { username } })
    if (!user) throw { status: 404, message: 'Username is available!' }

    const passwordsMatch = await compare(password, user.password)
    if (!passwordsMatch) throw { status: 401, message: 'Incorrect password!' }

    const token = await sign({ username }, process.env.JWT_KEY)
    cookies().set(process.env.AUTH_COOKIE_NAME, token)
    redirect(redirectUrl || '/')
  } catch (err) {
    if (isRedirectError(err)) { throw err }
    const { status, message } = err
    return { status: status || 500, message: message || 'Something went wrong' }
  }
}

export async function registerUser(redirectUrl, formData) {
  console.log('registerUser')
  try {
    const { username, password, passwordRepeat } = Object.fromEntries(formData)

    if (password !== passwordRepeat) throw { status: 400, message: 'Passwords don\'t match!' }

    const [user, created] = await User.findOrCreate({
      where: { username },
      defaults: { password }
    })

    if (!created) throw { status: 403, message: 'Username is taken!' }

    const token = await sign({ username }, process.env.JWT_KEY)
    cookies().set(process.env.AUTH_COOKIE_NAME, token)
    redirect(redirectUrl || '/')
  } catch (err) {
    if (isRedirectError(err)) { throw err }
    const { status, message } = err
    return { status: status || 500, message: message || 'Something went wrong' }
  }
}
