import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const route = new Hono()
  .basePath('/api')
  .get('/posts', (c) => {
    return c.json({
      message: 'Hello from Hono!'
    })
  })
  .post('/client', (c) => {
    return c.json({
      message: 'Hello from Hono!'
    })
  })

export type AppType = typeof route

export const GET = handle(route)
