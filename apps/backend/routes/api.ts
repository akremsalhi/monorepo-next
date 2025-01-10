import { Hono } from 'hono';
import { cors } from 'hono/cors';

import authMiddleware from '../middlewares/authMiddleware';

// Group for protected routes
const protectedRoutes = new Hono()
.use('*', authMiddleware)
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
