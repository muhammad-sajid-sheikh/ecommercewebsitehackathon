import React from 'react';
import Image from 'next/image';
import { HiOutlineAdjustments } from "react-icons/hi";
import { PiDotsSixBold } from "react-icons/pi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import ShopPage from '@/components/homepage/shopPage';

function ShopHomePage() {
    return (
        <div className="relative">
            {/* Image Container */}
            <div className="relative w-full h-[20vh] md:h-[35vh]">
                <Image
                    src="/images/2p1.png"
                    alt="Shop Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                {/* Centered Text */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-bold">Shop</h1>
                </div>
            </div>

            {/* Filter and Sorting Section */}
            <div className="w-full bg-orange-100 border-t border-gray-500 px-4 py-3 md:py-5">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section: Filter and Results */}
                    <div className="flex items-center space-x-3 md:space-x-4 text-sm md:text-base">
                        <HiOutlineAdjustments className="text-gray-700 text-lg md:text-xl" />
                        <h1 className="font-medium text-gray-800 cursor-pointer">Filter</h1>
                        <PiDotsSixBold className="text-gray-500 text-lg" />
                        <MdOutlineCheckBoxOutlineBlank className="text-gray-500 text-lg" />
                        <LiaGripLinesVerticalSolid className="text-gray-500 text-lg" />
                        <h1 className="text-gray-600">Showing 1-16 of 32 results</h1>
                    </div>

                    {/* Right Section: Show and Sort */}
                    <div className="flex items-center space-x-3 mt-3 md:mt-0">
                        <h1 className="font-medium text-gray-800">Show</h1>
                        <input
                            type="number"
                            className="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm"
                            placeholder="16"
                        />
                        <h1 className="font-medium text-gray-800">Sort by</h1>
                        <select
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                            defaultValue="Relevance"
                        >
                            <option value="Relevance">Relevance</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                            <option value="Rating">Rating</option>
                            <option value="Newest">Newest</option>
                        </select>
                    </div>
                </div>
            </div>






<ShopPage/>

<div className="w-full bg-orange-100 border-t border-gray-500 px-4 py-3">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        <Image src="/images/hq.png" alt="HQ" width={200} height={200} className="object-contain" />
        <Image src="/images/wp.png" alt="WP" width={200} height={200} className="object-contain" />
        <Image src="/images/fs.png" alt="FS" width={200} height={200} className="object-contain" />
        <Image src="/images/sup.png" alt="Sup" width={200} height={200} className="object-contain" />
    </div>
</div>
</div>
    );
}

export default ShopHomePage;
