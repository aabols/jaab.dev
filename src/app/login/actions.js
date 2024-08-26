'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const cookieKey = 'auth'
const users = {
  Janis: 'asdf'
}

export async function loginUser(redirectUrl, formData) {
  const username = formData.get('username')
  const password = formData.get('password')

  // const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  // await delay(1000)

  // VALIDATE USER
  if (users[username] === password) {
    cookies().set(cookieKey, username)
    redirect(redirectUrl)
  }
}
