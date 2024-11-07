"use client";
import React, { useState } from "react";
import movies from "../../../public/movies.ts";
import Image from "next/image";
import Link from "next/link";

export const Newmovies = () => {

    const [visibleMovies, setVisibleMovies] = useState(5); // Initial number of movies displayed

    const loadMoreMovies = () => {
        setVisibleMovies((prev) => prev + 5); // Increase by 5 movies each time the button is clicked
    };
    
    return (
        <div className="mx-[60px]">
            <p className="text-2xl font-bold my-5 ">New Movies</p>
            {/* <div className="grid grid-cols-5 gap-5 mt-2 "> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
                {movies.slice(0, visibleMovies).map((data) => (
                    <Link key={data.id} href={`/movies/${data.id}`}>
                        <div className="hover:scale-105 hover:text-blue-500">
                         <div className="w-[230px] h-[330px] overflow-hidden rounded-lg">
                        <Image className="rounded-lg object-cover" src={data.image} width={400} height={300} alt="" />
                        </div>
                        <p className="text-lg font-semibold ">{data.movieName}</p>
                        <p className="text-base text-zinc-500 font-semibold">{data.genre}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {visibleMovies < movies.length && (
                <button
                    onClick={loadMoreMovies}
                    className="mt-4 flex items-center text-blue-500 font-semibold hover:underline"
                >
                    Show More &rarr;
                </button>
            )}
        </div>
    );
};
