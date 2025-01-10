
import { serve } from '@hono/node-server';
import app from './routes/app';

serve({
  fetch: app.fetch,
  port: 3001,
});

console.log(`Server is running on http://localhost:${3001}`);

