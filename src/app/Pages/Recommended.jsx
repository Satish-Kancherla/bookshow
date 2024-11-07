import Image from "next/image";
import React from "react";

export const Recommended = () => {
    return (
        <div className="mx-[60px]">
            <div className="text-2xl font-bold">Recommended Movies</div>
            <div className="grid grid-cols-5 gap-5 mt-2">
                <div className="mb-5">
                    <Image className="rounded-lg object-cover" src="/p1.jpg" alt="" width={400} height={300} />
                    <p className="text-lg font-semibold">Maajaka</p>
                    <p className="text-base text-zinc-500 font-semibold ">Comedy/horror</p>
                </div>
                <div>
                    <Image className="rounded-lg object-cover" src="/p2.jpg" alt="" width={400} height={300} />
                    <p className="text-lg font-semibold">Hit-3</p>
                    <p className="text-base text-zinc-500 font-semibold">Comedy/horror</p>
                </div>
                <div>
                    <Image className="rounded-lg object-cover" src="/p8.jpg" alt="" width={400} height={300} />
                    <p className="text-lg font-semibold">Aakasam lo Oka Tara</p>
                    <p className="text-base text-zinc-500 font-semibold">Comedy/horror</p>
                </div>
                <div >
                    <Image className="rounded-lg object-cover" src="/p7.jpg" alt="" width={400} height={300} />
                    <p className="text-lg font-semibold">Mowgli</p>
                    <p className="text-base text-zinc-500 font-semibold ">Comedy/horror</p>
                </div>
                <div>
                    <Image className="rounded-lg object-cover" src="/p9.jpg" alt="" width={400} height={300} />
                    <p className="text-lg font-semibold">Thammudu</p>
                    <p className="text-base text-zinc-500 font-semibold">Comedy/horror</p>
                </div>
            </div>
            
        </div>
    );
};
