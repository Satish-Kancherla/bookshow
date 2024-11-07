import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
    try {
        const { firstname, surname, email, password } = await req.json();

        // Check if the user already exists
        const userExist = await prisma.user.findUnique({
            where: { email },
        });

        if (userExist) {
            // return res.status(400).json({ error: 'User already exists' });
            return NextResponse.json(userExist,{status:402})
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const newUser = await prisma.user.create({
            data: { firstname, surname, email, password: hashedPassword },
        });

        // Create a JWT token
        const accessToken = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
            // expiresIn: '1h',
        });

        return NextResponse.json({ accessToken });
    } catch (error) {
        // res.status(500).json({ error: error.message });
        return NextResponse.json(error,{status:500})
    }
}

// export async function GET() {
//     return  NextResponse.json({error:'hello'})
// }