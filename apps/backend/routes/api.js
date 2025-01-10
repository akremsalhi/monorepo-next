import { Hono } from 'hono';
import { cors } from 'hono/cors';
const api = new Hono()
    .use('*', cors())
    .get('/', (c) => {
    return c.json({
        version: '1.0.0',
    });
});
export default api;
