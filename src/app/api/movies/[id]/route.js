import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const { id } = context.params; // Access params correctly from context

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    const movie = await prisma.movie.findUnique({
      where: { id: id },
    });
    if (movie) {
      return NextResponse.json(movie, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }
  } catch (error) {
    console.warn('Error fetching movie:', error);
    return NextResponse.json({ error: 'Failed to get movie' }, { status: 500 });
  }
}


export async function PUT(req, context) {
  const { id } = context.params;
  const { moviename, image, genre } = await req.json();
  try {
    const updatedMovie = await prisma.movie.update({
      where: { id:id },
      data: { moviename, image, genre },
    });
    return NextResponse.json(updatedMovie, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update movie' }, { status: 500 });
  }
}

export async function DELETE(req, context) {
  const { id } = context.params;
  try {
    await prisma.movie.delete({
      where: { id:id },
    });
    return NextResponse.json({ message: 'Movie deleted successfully' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete movie' }, { status: 500 });
  }
}
