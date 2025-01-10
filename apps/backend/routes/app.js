import { Hono } from 'hono';
import api from './api.js';
const app = new Hono()
    .route('/api', api);
export default app;
