"use client"

import Image from "next/image"
import Link from "next/link"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import { Button } from "../ui/button"
  


type Props = {
    Shop:{
        id:number;
        image:string;
        title:string;
        discription:string;
        price:string;
        priceline:string;
        off:string;
    }
}

function ShopCard({Shop}:Props){

    return(
        <div className="pr-4 mt-2 items-center justify-center">
            <div className="bg-slate-100">
            {/* image */}

            <HoverCard>
            <HoverCardTrigger>
                
            <div>
                <div className="flex justify-end">
                <p className="absolute bg-red-500 rounded-full text-2xl p-3 m-4 text-white font-semibold ">{Shop.off}</p></div>
                <Image 
                src={Shop.image}
                alt={Shop.title}
                width={290}
                height={230}
            
                />
                
                </div>
                </HoverCardTrigger>
                <HoverCardContent className="bg-slate-400 bg-opacity-30">
                    <Button className="w-[100%] h-16 text-2xl">Add to Cart</Button>
                </HoverCardContent>
</HoverCard>



                <div className="flex justify-center">
                <div className=" w-[80%] p-4">
                {/* title */}
                <Link href={`/product/product-details/${Shop.id}`}>
                <h1 className=" text-2xl cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-bold">{Shop.title}</h1>
                </Link>
                <h1 className="text-gray-500 text-lg sm:w-full sm:truncate mt-2 font-semibold">{Shop.discription}</h1>
                {/* pricing */}
                <div className="flex mt-2 items-center space-x-6">
                    
                    <p className="text-black text-xl font-bold">Rp {Shop.price}</p>
                    <p className="text-gray-600 text-base line-through font-semibold">Rp {Shop.priceline}</p>
                </div>
                </div>
                </div>

                </div>
        </div>
    )
}
export default ShopCard