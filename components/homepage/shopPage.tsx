"use client"


import { useState } from "react";
import { ShopData } from "@/data/data";
import ShopCard from "../helper/shopCard";

const ShopPage= ()=>{
    const [shop] = useState< null>(null);
    console.log(shop)
    return(
        <div className="pt-16 pb-12">
            
                <div className=" w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {ShopData?.map((Shop)=>{
                        return<ShopCard key={Shop.id} Shop={Shop}/>
                    })}
                </div>
            <div className="flex items-center justify-center">
                <button className="m-16 font-semibold text-lg h-14 w-[50%] border border-orange-700  text-orange-700 md:w-[20%] md:text-3xl">Show More</button>
            </div>
        </div>
    )
}
export default ShopPage