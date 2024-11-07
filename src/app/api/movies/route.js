import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req) {

    const { moviename, image, genre } = await req.json();

    try{
        const movies = await prisma.movie.create({
            data:{
                moviename,
                image,
                genre
            },
        });
        return NextRequest.json(movies, { status: 201 });
    }catch(error){
        return NextRequest.json({ error: 'Failed to create movie' },{status:500});
    }
}

export async function GET(req) {
    try{
        const getMovies = await primsa.movie.findMany( );
        return NextRequest.json(movies, { status: 201 });
    }catch(error){
        return NextRequest.json({ error: 'Failed to get movie' },{status:500});
    }
}