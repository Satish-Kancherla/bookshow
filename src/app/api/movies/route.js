    // api/movies/route.js
    import prisma from "@/lib/prisma";
    import { NextResponse } from "next/server";

    export async function POST(req) {

        const { moviename, image, genre } = await req.json();

        try{
            const newMovie  = await prisma.movie.create({
                data:{
                    moviename,
                    image,
                    genre
                },
            });
            return NextResponse.json(newMovie , { status: 201 });
        }catch(error){
            return NextResponse.json({ error: 'Failed to create movie' },{status:500});
        }
    }

    export async function GET(req) {
        try {
            const movies = await prisma.movie.findMany(); 
            return NextResponse.json(movies, { status: 200 });
        } catch (error) {
            console.warn('Error fetching movies:', error);
            return NextResponse.json({ error: 'Failed to get movies' }, { status: 500 });
        }
    }

// export async function GET(req, { params }) {
//     const { id } = params; // Extracting id from params
//     try {
//         const movie = await prisma.movie.findUnique({
//             where: { id: parseInt(id, 10) }, // Convert id to integer if necessary
//         });

//         if (movie) {
//             return NextResponse.json(movie, { status: 200 });
//         } else {
//             return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
//         }
//     } catch (error) {
//         console.warn('Error fetching movie:', error);
//         return NextResponse.json({ error: 'Failed to get movie' }, { status: 500 });
//     }
// }
