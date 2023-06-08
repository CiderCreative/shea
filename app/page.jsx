"use client"

import './globals.css'
import { Slideshow } from "../components"
import wedding from "../constants/couplesImgs/wedding.jpg"
import blaze from "../constants/solosImgs/blaze.jpg"
import feast from "../constants/businessImgs/feast.jpg"
import Image from 'next/image';
import Link from 'next/link'


const Home = () => {
  return (
    <div className="pt-[50px] md:pt-[60px] overflow-hidden">

      {/* Hero */}
      <div className="flex flex-col sm:flex-row justify-center py-5 md:py-20">
        <div className="text-center sm:text-left sm:flex flex-col justify-center sm:mr-[5vw] xl:mr-[7vw] my-5 text-black text-xl md:text-3xl 2xl:text-4xl playfair space-y-3">
          <h1 className="text-4xl lg:text-6xl drop-shadow-md">Take photos!</h1>
          <h2 className="text-2xl lg:text-4xl drop-shadow-md">They last a lifetime.</h2>
        <div>
          <Link
            href="https://www.instagram.com/shealynphoto/"
            target="_blank"
            className="text-black bg-[#89D8C4] px-8 py-1 drop-shadow-md">
              Get in touch
          </Link>
        </div>
        </div>
        <div className="m-auto sm:m-0 w-[70vw] sm:w-[60vw] md:w-[400px] lg:w-[500px]">
          <Slideshow context={require.context(`../constants/homeImgs/`, false, /\.(png|jpe?g|svg)$/)}/>
        </div>
      </div>
      {/* End of Hero */}


      <div className="flex flex-col sm:flex-row justify-center items-center mx-5 lg:mx-20 sm:space-x-10 lg:space-x-20 my-20">
        <Image src={ wedding } alt="" className="sm:w-[300px] lg:w-[500px]"/>
        <div className="order-first sm:order-last bg-[#89D8C4] py-8 px-10 xl:w-[1000px]">
          <h3 className="playfair text-2xl xl:text-4xl mb-5 underline underline-offset-8 decoration-1">Beyond the frame</h3>
          <p className="garamond text-md md:text-lg xl:text-xl">
            “Beyond the frame” is my photography philosophy that goes beyond just capturing images. It’s about capturing
            the essence of the moment and telling that story through photographs. It’s about creating a connection with
            the moment and delivering photos that evoke emotions.
          </p>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row justify-center items-center mx-5 lg:mx-20 sm:space-x-10 lg:space-x-20 my-20">
        <div className="bg-[#E89E63] py-8 px-10 xl:w-[1000px]">
          <h3 className="playfair text-2xl xl:text-4xl mb-5 underline underline-offset-8 decoration-1">Attention to detail</h3>
          <p className="garamond text-md md:text-lg xl:text-xl">
          Attention to detail is critical in creating exceptional images that tell a story. I focus on every aspect of a
          scene, from lighting to composition, resulting in a lasting memory for clients. I'm a photographer who prioritizes
          the details to elevate images from good to great, making great memories unforgettable.
          </p>
        </div>
        <Image src={ blaze } alt="" className="sm:w-[300px] lg:w-[500px]"/>
      </div>


      <div className="flex flex-col sm:flex-row justify-center items-center mx-5 lg:mx-20 sm:space-x-10 lg:space-x-20 my-20">
        <Image src={ feast } alt="" className="sm:w-[300px] lg:w-[500px]"/>
        <div className="order-first sm:order-last bg-[#FF89A4] py-8 px-10 sm:w-[1000px]">
          <h3 className="playfair text-2xl xl:text-4xl mb-5 underline underline-offset-8 decoration-1">Personalized shoots</h3>
          <p className="garamond text-md md:text-lg xl:text-xl">
          Photography is an art form that should be accessible to all. That's why I offer personalized sessions for corporate,
          family, couples, and portraits. I take the time to understand your vision to create a unique experience. Browse my
          portfolio and let's capture your special moments together!
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;