import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export default function profileHandler(req: NextApiRequest, res: NextApiResponse) {
    const { sToken } = req.cookies;

    if (sToken) {
        const secret = process.env.SECRET;
        verify(sToken, secret, (err, decoded) => {
            if (err) {
                res.status(500).send({ message: 'Invalid token' });
            } else {
                res.status(200).json({ message: 'Profile success', data: decoded });
            }
        });
    } else {
        res.status(500).send({ message: 'Invalid token' });
    }
}
