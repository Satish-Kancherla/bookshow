import Banner from "./Pages/Banner";
import { Nav2 } from "./Pages/Nav2";
import Navbar from "./Pages/Navbar";
import { Newmovies } from "./Pages/Newmovies";
import { Recommended } from "./Pages/Recommended";

export default function Home() {
    return (
        <div className="w-full ">
            <Navbar />
            <div className="bg-gray-100">

                <div className="py-3 text-gray-100 md:text-black">
                    <Nav2 />
                </div>
                    <hr />
                <div className="mt-5 ">
                  <Newmovies />
                </div>
                <Banner />
                <div>
                    <Recommended />
                </div>
            </div>
        </div>
    );
}
