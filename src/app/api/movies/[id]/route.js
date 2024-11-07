// pages/api/movies/[id].js

import prisma from "@/lib/prisma";


export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const { moviename, image, genre } = req.body;
      const updatedMovie = await prisma.movie.update({
        where: { id },
        data: { moviename, image, genre },
      });
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update movie' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.movie.delete({
        where: { id },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete movie' });
    }
  }
  
}
