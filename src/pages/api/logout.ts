import { NextApiRequest, NextApiResponse } from 'next';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch('http://localhost:5241/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${req.cookies.token}`
            }
        })
        res.setHeader('Set-Cookie', [
            'access_token=; Max-Age=0; Path=/; HttpOnly'
        ]);

        res.status(200).json({ message: 'Logout successful' })
        console.log("logout succesfull" + response)
    } catch (error) {
        res.status(500).json({ message: 'Logout failed', error: error})
    }
}