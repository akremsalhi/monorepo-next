import { Hono } from "hono";
import api from "./api";

const app = new Hono()
.get('/', (c) => {
  return c.json({ message: 'Hello World' });
})
.route('/api', api);


export default app;

