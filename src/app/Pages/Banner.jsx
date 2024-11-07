import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="mx-[60px]">
        <div className="bg-zinc-300 my-20 w-full h-20 flex items-center justify-center">
                <Image src="/bms2.png" alt="" width={50} height={20} color="blue" />
            </div>
    </div>
  )
}

export default Banner