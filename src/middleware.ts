import { jwtVerify } from "jose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface ExtendedNextApiRequest extends NextApiRequest {
    nextUrl: {
        pathname: string;
    };
    cookies: {
        get: any
    }
}

export async function middleware(req: ExtendedNextApiRequest) {
    const sToken = req.cookies.get("sToken");
    if (!sToken) return NextResponse.redirect(new URL("/login", req.url));

    try {
        const secret = process.env.SECRET;
        const { payload } = await jwtVerify(sToken, new TextEncoder().encode(secret));
        return NextResponse.next();
    } catch (error) {
        console.log('benji -> middleware -> error', error);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/']
}
