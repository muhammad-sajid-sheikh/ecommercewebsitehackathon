"use client"

import ProductCard from "../helper/productCard";
import { useState } from "react";
import { ourProduct } from "@/data/data";

const AllProduct= ()=>{
    const [products] = useState< null>(null);
    console.log(products)
    return(
        <div className="pt-16 pb-12">
            <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl">All Products</h1>
            
                <div className=" w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {ourProduct?.map((product)=>{
                        return<ProductCard key={product.id} product={product}/>
                    })}
                </div>
            <div className="flex items-center justify-center">
                <button className="m-16 font-semibold text-lg h-14 w-[50%] border border-orange-700  text-orange-700 md:w-[20%] md:text-3xl">Show More</button>
            </div>
        </div>
    )
}
export default AllProduct