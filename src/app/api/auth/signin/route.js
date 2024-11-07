import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req){

    const { email, password } = await req.json();

    try {
        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 402 });
        }

        // console.log("Entered password:", password);
        // console.log("Stored hashed password:", user.password);

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 403 });
        }

        // Generate JWT token
        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
            // expiresIn: '1h',
        });
        return NextResponse.json({ accessToken });

    } catch (error) {
        console.warn("Server error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}

// export async function GET(){
//     return NextResponse.json({error:'Hello'});
// }