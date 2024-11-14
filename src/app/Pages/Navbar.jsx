"use client";
import { CirclePlus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Newmovies } from "./Newmovies";
import { Nav2 } from "./Nav2";

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <header className="border-b">
            <div className="flex flex-col md:flex-row px-4 md:px-10">
                <div className="container flex h-16 items-center gap-4">
                    <a className="flex items-center gap-2 font-bold" href="#">
                        <Image src="/bms.png" alt="bms" width="150" height="10" className="w-[120px] sm:w-[150px] lg:w-[180px]"/>
                    </a>
                    <div className="relative flex-1 max-w-full md:max-w-xl mt-2 md:mt-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            className="pl-8 w-full md:w-auto"
                            placeholder="Search for Movies"
                            type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex h-16 items-center gap-4 md:gap-4 px-0 md:px-4 mt-2 md:mt-0">
                    <Select defaultValue="hyderabad">
                        <SelectTrigger className="w-[100px] sm:w-[120px] md:w-[130px]">
                            <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                        </SelectContent>
                    </Select>
                    <Link href={"/addmovie"}>
                        <CirclePlus size={24} className="text-pink-500 cursor-pointer" />
                    </Link>
                    <Link href={`/signin`}>
                        <Button size="sm" className="bg-red-500">
                            Sign in
                        </Button>
                    </Link>
                    {/* <div className="rounded-lg">
                        <p>{user.name}</p>
                    </div> */}
                    {/* <Button className="md:hidden" size="icon" variant="ghost">
                        <MenuIcon className="h-6 w-6" />
                    </Button> */}
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="py-2 md:py-3 text-gray-100 md:text-black">
                    <Nav2 />
                </div>
                <hr />
                <div className="mt-5 ">
                <Newmovies searchTerm={searchTerm} />
                </div>
            </div>
        </header>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}
