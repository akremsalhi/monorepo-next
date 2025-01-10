import { bearerAuth } from "hono/bearer-auth";
import { createMiddleware } from "hono/factory";
import { env } from "hono/adapter";


const authMiddleware = createMiddleware((c, next) => {
  const { TOKEN_SECRET } = env(c, 'node')
  
  const bearer = bearerAuth({ token: TOKEN_SECRET, invalidAuthenticationHeaderMessage: {
    message: 'Unauthorized'
  }, noAuthenticationHeaderMessage: {
    message: 'Unauthorized'
  }, invalidTokenMessage: {
    message: 'Unauthorized'
  } })
  return bearer(c, next)
})

export default authMiddleware
