import { Hono } from 'hono';
import { cors } from 'hono/cors';

import authMiddleware from '../middlewares/authMiddleware';
import { Env } from './app';

// Group for protected routes
const protectedRoutes = new Hono<Env>()
.use('*', authMiddleware)
.get('/private', (c) => {
  return c.json({ message: 'Hello from a protected route!' });
});
 
const api = new Hono<Env>()
.use(cors())
.get('/public', (c) => {
  return c.json({ message: 'Hello World' });
})
.route('', protectedRoutes)



export default api;
