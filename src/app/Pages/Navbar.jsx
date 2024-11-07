import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b">
            <div className="flex px-10">
                <div className="container flex h-16 items-center gap-4">
                    <a className="flex items-center gap-2 font-bold" href="#">
                       <Image src="/bms.png" alt="bms" width="180" height="10"/>
                    </a>
                    <div className="relative flex-1 max-w-xl">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-8" placeholder="Search for Movies, Events, Plays, Sports and Activities" type="search" />
                    </div>
                </div>
                <div className="flex h-16 items-center gap-4 px-4">
                    <Select defaultValue="hyderabad">
                        <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                        </SelectContent>
                    </Select>
                    <Link href={`/signin`}><Button size="sm"  className="bg-red-500">
                        Sign in
                    </Button></Link>
                    {/* <div className="rounded-lg">
                        <p>{user.name}</p>
                    </div> */}
                    {/* <Button className="md:hidden" size="icon" variant="ghost">
                        <MenuIcon className="h-6 w-6" />
                    </Button> */}
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
