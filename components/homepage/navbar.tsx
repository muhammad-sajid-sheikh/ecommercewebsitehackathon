
import { FaUserEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";



function NavBar(){
    return(
        <div className="flex md:w-[1440px] md:h-[100px] justify-center bg-slate-100 sticky top-0 md:sticky md:top-0">
            <div className="flex w-[75%] justify-between m-4 sm:m-10">
                <div className="text-2xl sm:text-5xl font-bold">Furniro</div>
                <div>
                    <ul className="hidden md:block">
                        <div className="flex space-x-24 mt-4">
                        <Link href={"/home"}>
                        <li className="text-xl font-semibold">Home</li>
                        </Link>
                        <Link href={"/shop"}
                         className="text-xl font-semibold">Shop
                        </Link>
                        <li className="text-xl font-semibold">About</li>
                        <li className="text-xl font-semibold">Contact</li>
                        </div>
                    </ul>
                </div>
                <div className="flex gap-3 sm:space-x-2 sm:mt-4">
                <FaUserEdit size={20} cursor={"pointer"}/>
                <CiSearch size={20} cursor={"pointer"}/>
                <FaRegHeart size={20} cursor={"pointer"}/>
                <HiOutlineShoppingCart size={20} cursor={"pointer"}/>
                <IoMdMenu size={20} cursor={"pointer"} className="block sm:hidden"/>

                </div>
            </div>
        </div>
    )
}
export default NavBar