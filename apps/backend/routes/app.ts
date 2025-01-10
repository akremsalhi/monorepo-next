import { Hono } from "hono";
import api from "./api";

export type Env = {
  Bindings: {
    TOKEN_SECRET: string
    PORT: string
  }
}
const app = new Hono<Env>()
.get('/', (c) => {
  return c.json({ message: 'Hello World' });
})
.route('/api', api);


export default app;

