import { bearerAuth } from 'hono/bearer-auth'
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const token = 'secret token';

const middleware = bearerAuth({ token, noAuthenticationHeaderMessage: {
  message: 'Unauthorized',
}, invalidAuthenticationHeaderMessage: {
  message: 'Unauthorized',
}, invalidTokenMessage: {
  message: 'Unauthorized',
}})
// Group for protected routes
const protectedRoutes = new Hono()
.use('*', middleware)
.get('/private', (c) => {
  return c.json({ message: 'Hello from a protected route!' });
}) ;

const api = new Hono()
.use(cors())
.get('/public', (c) => {
  return c.json({ message: 'Hello World' });
})
.route('', protectedRoutes)



export default api;
