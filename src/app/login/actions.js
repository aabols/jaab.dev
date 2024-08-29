'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const cookieKey = 'auth'
const users = {
  Janis: 'asdf'
}
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export async function loginUser(redirectUrl, formData) {
  const { username, password } = Object.fromEntries(formData)

  // await delay(1000)

  // USER DOESN'T EXIST
  if (!users[username]) return { status: 404, message: 'Username is available!' }

  // WRONG PASSWORD
  if (users[username] !== password) return { status: 401, message: 'Incorrect password!' }

  // VALID USER
  cookies().set(cookieKey, username)
  redirect(redirectUrl || '/')
}

export async function registerUser(redirectUrl, formData) {
  const { username, password, passwordRepeat } = Object.fromEntries(formData)

  // USERNAME NOT AVAILABLE
  if (users[username]) return { status: 403, message: 'Username is taken!' }

  // PASSWORDS DON'T MATCH
  if (password !== passwordRepeat) return { status: 400, message: 'Passwords don\'t match!' }

  // SUCCESS
  users[username] = password
  cookies().set(cookieKey, username)
  redirect(redirectUrl || '/')
}
