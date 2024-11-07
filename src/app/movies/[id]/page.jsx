"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import movies from "../../../../public/movies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Share2, User } from "lucide-react";

const MovieDetails = () => {
    const router = useRouter();
    const { id } = useParams();

    const movie = movies.find((m) => m.id === Number(id)); // replace with actual data fetch
    const showTimings = ["10:00 AM", "1:00 PM", "4:00 PM"]; // example timings

    return (
        <div>
            <div className="relative min-h-96 bg-black text-white">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-0" />
                <div className="relative z-10 container mx-auto px-4 py-6">
                    <ArrowLeft onClick={router.back} size={30} className="cursor-pointer hover:bg-white hover:text-black hover:rounded-2xl text-white bg-black mb-5" />
                    <div className="grid md:grid-cols-[300px,1fr] gap-8">
                        {/* Movie Poster */}
                        <Card className="relative group bg-transparent border-0">
                            <Image src={movie.image} alt={movie.movieName} width={300} height={450} className="rounded-lg object-cover w-full" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                                <Button variant="outline" className="gap-2">
                                    <Play className="w-4 h-4" /> Trailers (2)
                                </Button>
                            </div>
                            <div className="absolute bottom-2 left-2 text-sm text-white bg-black/50 px-2 py-1 rounded">In cinemas</div>
                        </Card>

                        {/* Movie Details */}
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h1 className="text-4xl font-bold mb-4">{movie.movieName}</h1>
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <Badge variant="secondary">2D</Badge>
                                        <Badge variant="secondary">IMAX 2D</Badge>
                                        <Badge variant="secondary">Telugu</Badge>
                                    </div>
                                    <div className="text-gray-300 space-x-2">
                                        <span>2h 24m</span>
                                        <span>•</span>
                                        <span>{movie.genre}</span>
                                        <span>•</span>
                                        <span>UA</span>
                                        <span>•</span>
                                        <span>1 Nov, 2024</span>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <Share2 className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-lg font-semibold">Add your rating & review</h2>
                                    <p className="text-sm text-gray-400">Your ratings matter</p>
                                </div>
                                <div className="flex gap-4">
                                    <Button variant="secondary" className="px-8">
                                        Rate now
                                    </Button>
                                    <Link href={`/movies/${id}/${encodeURIComponent('?')}`}>
                                        {" "}
                                        <Button className="bg-pink-500 hover:bg-pink-600 px-8">Book tickets</Button>
                                    </Link>
                                </div>
                                {/* <div>
                                {showTimings.map((time) => (
                                    <Link key={time} href={`/movies/${id}/${encodeURIComponent(time)}`}>
                                        <button className="p-2 m-2 bg-pink-500 text-white rounded">{time}</button>
                                    </Link>
                                ))}
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 mx-20 mr-32">
                <h1 className="text-2xl font-bold mb-5">About the movie</h1>
                <p className="text-gray-700 mb-5">
                    Abhinaya Vasudev, habitually reading others` letters, wakes with no memory in a high-security interrogation cell. A mysterious interrogator
                    uses a hypnotizing gadget to uncover his life, revealing all his roguish deeds.
                </p>
                <hr />
                <div>
                    <h1 className="text-2xl font-bold mb-5">Cast</h1>
                    <div className="flex gap-10">
                        <div>
                            <div className="rounded-full overflow-hidden w-32 h-32">
                                <Image src="/p5.jpg" alt="" width={128} height={128} className="object-cover" />
                            </div>
                            <p className="flex justify-center font-semibold mt-2">Pawan kalyan</p>
                            <p className="flex justify-center text-gray-500 ">Actor</p>
                        </div>
                        <div>
                            <div className="rounded-full overflow-hidden w-32 h-32">
                                <Image src="/p3.jpg" alt="" width={128} height={128} className="object-cover" />
                            </div>
                            <p className="flex justify-center mt-2 font-semibold">Teja</p>
                            <p className="flex justify-center text-gray-500 ">Actor</p>
                        </div>
                        <div>
                            <div className="rounded-full overflow-hidden w-32 h-32">
                                <Image src="/p2.jpg" alt="" width={128} height={128} className="object-cover" />
                            </div>
                            <p className="flex justify-center mt-2 font-semibold">Nani</p>
                            <p className="flex justify-center text-gray-500 ">Actor</p>
                        </div>
                        <div>
                            <div className="rounded-full overflow-hidden w-32 h-32">
                                <Image src="/p1.jpg" alt="" width={128} height={128} className="object-cover" />
                            </div>
                            <p className="flex justify-center mt-2 font-semibold">Sandeep</p>
                            <p className="flex justify-center text-gray-500 ">Actor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
