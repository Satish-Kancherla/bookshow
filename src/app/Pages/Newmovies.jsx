"use client";
import React, { useEffect, useState } from "react";
// import movies from "../../../public/movies.ts";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export const Newmovies = ({ searchTerm }) => {
    const [movies, setMovies] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(5); // Initial number of movies displayed
    const [loading, setLoading] = useState(true);

    const loadMoreMovies = () => {
        setVisibleMovies((prev) => prev + 5); // Increase by 5 movies each time the button is clicked
    };

    const fetchData = async () => {
        try {
            const res = await axios.get("/api/movies");
            setMovies(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredMovies = movies.filter((movie) =>
        movie.moviename.toLowerCase().includes(searchTerm)
    );
    // const filteredMovies = movies.filter((movie) =>
    //     movie.moviename && movie.moviename.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // const filteredMovies = movies.filter((movie) =>
    //     movie && movie.moviename && movie.moviename.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    

    return (
        <div className="mx-[60px]">
            <p className="text-2xl font-bold my-5 ">New Movies</p>
            {/* <div className="grid grid-cols-5 gap-5 mt-2 "> */}
            {loading ? (
                <p className="text-center text-blue-500">Loading...</p>
            ) : (
                <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
                {filteredMovies.slice(0, visibleMovies).map((data) => (
                    <Link key={data.id} href={`/movies/${data.id}`}>
                        <div className="hover:scale-105 hover:text-blue-500">
                            <div className="w-full h-[290px] overflow-hidden rounded-lg">
                                {data.image ? (
                                    <Image
                                        className="rounded-lg object-cover"
                                        src={data.image || "image"}
                                        width={400}
                                        height={300}
                                        alt={data.movieName || "Movie poster"}
                                    />
                                ) : null}
                            </div>
                            <p className="text-lg font-semibold  ">{data.moviename}</p>
                            <p className="text-base text-zinc-500 font-semibold">{data.genre}</p>
                        </div>
                    </Link>
                ))}
            </div>
        
            {visibleMovies < movies.length && (
                <button onClick={loadMoreMovies} className="mt-4 flex items-center text-blue-500 font-semibold hover:underline">
                    Show More &rarr;
                </button>
            )}
           </div>
            )}
        </div>
    );
};
