import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { isValidEmail } from "src/helpers";

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;

    if (isValidEmail(email) && password) {
        const urlService = process.env.URL_VINCO_SERVICE;

        try {
            const auth = await axios.post(`${urlService}/api/v1/auth`, { email, password });
            res.setHeader('set-cookie', auth.headers['set-cookie']);
            res.status(200).json({ message: 'Login success' });
        } catch (error) {
            res.status(500).send({ message: 'Invalid email or password' });
        }
    } else {
        res.status(500).send({ message: 'Invalid email or password' });
    }
}
