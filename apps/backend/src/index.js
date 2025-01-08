import { serve } from '@hono/node-server';
// import app from './routes/app.js';
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
const port = 3001;
console.log(`Server is running on http://localhost:${port}`);
const app = new Hono();
const route = app.post('/posts', zValidator('form', z.object({
    title: z.string(),
    body: z.string(),
})), (c) => {
    // ...
    return c.json({
        ok: true,
        message: 'Created!',
    }, 201);
});
serve({
    fetch: app.fetch,
    port
});
