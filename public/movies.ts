export type Newarrivals ={
  id: string | number;
  movieName: string;
  image: string;
  genre: string;
}

const movies: Newarrivals[] = [
    { id: 1, movieName: "Inception", image: "/p1.jpg", genre: "Sci-Fi" },
    { id: 2, movieName: "The Shawshank Redemption", image: "/p2.jpg", genre: "Drama" },
    { id: 3, movieName: "The Godfather", image: "/p3.jpg", genre: "Crime" },
    { id: 4, movieName: "The Dark Knight", image: "/p4.jpg", genre: "Action" },
    { id: 5, movieName: "Forrest Gump", image: "/p5.jpg", genre: "Drama" },
    { id: 6, movieName: "Pulp Fiction", image: "/p7.jpg", genre: "Crime" },
    { id: 7, movieName: "The Matrix", image: "/p8.jpg", genre: "Sci-Fi" },
    { id: 8, movieName: "Fight Club", image: "/p9.jpg", genre: "Drama" },
    // { id: 9, movieName: "Gladiator", image: "gladiator.jpg", genre: "Action" },
    // { id: 10, movieName: "Titanic", image: "titanic.jpg", genre: "Romance" },
    // { id: 11, movieName: "Avatar", image: "avatar.jpg", genre: "Sci-Fi" },
    // { id: 12, movieName: "The Lord of the Rings", image: "lotr.jpg", genre: "Fantasy" },
    // { id: 13, movieName: "Harry Potter", image: "harry_potter.jpg", genre: "Fantasy" },
    // { id: 14, movieName: "The Lion King", image: "lion_king.jpg", genre: "Animation" },
    // { id: 15, movieName: "Star Wars", image: "star_wars.jpg", genre: "Sci-Fi" },
    // { id: 16, movieName: "Jurassic Park", image: "jurassic_park.jpg", genre: "Adventure" },
    // { id: 17, movieName: "The Silence of the Lambs", image: "silence_lambs.jpg", genre: "Thriller" },
    // { id: 18, movieName: "Saving Private Ryan", image: "saving_ryan.jpg", genre: "War" },
    // { id: 19, movieName: "Schindler's List", image: "schindlers_list.jpg", genre: "Historical" },
    // { id: 20, movieName: "Back to the Future", image: "back_future.jpg", genre: "Sci-Fi" },
  ];
  
  export default movies;