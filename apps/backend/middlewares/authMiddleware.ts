import { bearerAuth } from "hono/bearer-auth";
import { createFactory } from "hono/factory";
import { env } from "hono/adapter";

const factory = createFactory()

const authMiddleware = factory.createMiddleware((c, next) => {
  const { TOKEN_SECRET } = env<{TOKEN_SECRET: string}>(c)

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
