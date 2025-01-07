import type { NextApiRequest, NextApiResponse } from 'next';
import {verify} from 'jsonwebtoken'
import { SECRET_KEY } from "@/app/lib/utils";

export default function profileHandler(req: NextApiRequest, res: NextApiResponse) {
    const {access_token} = req.cookies
    const user = verify(access_token as string, SECRET_KEY as string )
    console.log(user)
    return res.json(user)

}