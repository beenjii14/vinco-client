import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function logoutHandler(req: NextApiRequest, res: NextApiResponse) {
    const { sToken } = req.cookies;

    if (!sToken) return res.status(500).send({ message: 'Invalid token' });

    try {
        const urlService = process.env.URL_VINCO_SERVICE;
        const auth = await axios.delete(`${urlService}/api/v1/auth`);
        res.setHeader('set-cookie', auth.headers['set-cookie']);
        res.status(200).json({ message: 'Logout success' });
    } catch (error) {
        res.status(500).send({ message: 'Invalid token' });
    }
}
