import ky, { KyRequest } from "ky";
import { hc } from 'hono/client'
import { AppType } from "@/app/api/[...route]/route";

const client = hc<AppType>('http://localhost:3000')
// const api = ky.create({
//   credentials: 'include',

//   prefixUrl: process.env.NEXT_PUBLIC_API_URL,
//   hooks: {
//     beforeRequest: [
//       async (request: KyRequest) => {
//         // request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
//       }
//     ],
//   }
// })

export default client.api
