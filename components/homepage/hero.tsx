import { Button } from "../ui/button"



function Hero(){
    return(
        <div
  className="w-full h-screen bg-cover bg-center md:bg-right pt-[50%] md:pt-[10%] md:pb-[20%] md:pl-[50%]"
  style={{ backgroundImage: "url('/images/image1.png')" }}
>
 
    <div className="w-[643] h-[443] bg-orange-100 flex justify-center ">
        <div className="w-[80%] mt-8 mb-8 space-y-3 md:space-y-10 md:pt-16 sm:h-[50%] md:h-[100%] xl:h-[80%] lg:h-[10%]">
            <h1 className="text-xl font-bold md:text-4xl">New Arrival</h1>
            <h1 className="text-2xl md:text-5xl font-bold text-orange-300">Discover Our New Collection</h1>
            <p className="md:text-2xl">Discover the perfect blend of style and functionality with our New Collection! From timeless designs to modern innovations, we’ve curated pieces that bring elegance and comfort to your space.</p>
            <div><Button className="md:w-[222px] md:h-[74px] md:text-3xl">Buy Now</Button></div>
        </div>
    </div>
</div>

    )
}
export default Hero