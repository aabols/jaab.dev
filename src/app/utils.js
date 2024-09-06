import { jwtVerify, SignJWT } from 'jose'

export const shuffleArray = (arr) => arr
  .map(v => ({ v, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ v }) => v)

export const sign = async (payload, secret) => {
  const now = Math.floor(Date.now() / 1000)
  const exp = now + 60 * 60 * 24 * 7

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(now)
    .setNotBefore(now)
    .sign(new TextEncoder().encode(secret))
}

export const verify = async (token, secret) => {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret))

  return payload
}
