"use client"

import './globals.css'
import { Slideshow } from "../components"
import hands from '../constants/vertImgs/hands.jpg';
import milk from '../constants/horizImgs/milk.jpg';
import Image from 'next/image';


const Home = () => {
  return (
    <div className="pt-[80px] home-gradient aspect-video">

    {/* Hero for Big screens*/}
    <div className="hidden lg:block max-w-full overflow-hidden">
      <div className="relative w-4/5 left-[50vw] top-20 pb-40">
        <Slideshow context={require.context(`../constants/homeImgs/`, false, /\.(png|jpe?g|svg)$/)}/>
      </div>
      <div className="absolute top-[240px] left-[6vw] xl:top-[300px] xl:left-[10vw] 2xl:top-[400px] 2xl:left-[20vw] text-black lg:yeseva space-y-5">
        <p className="text-5xl xl:text-7xl">Take photos!</p>
        <p className="text-[35px] pb-10">They last a lifetime.</p>
        <a href="https://calendly.com/shealynphoto" target="_blank" rel="noreferrer">
          <button type="button" className="text-md text-white px-7 py-4 drop-shadow-md md:text-2xl flex-nowrap rounded-lg red-button-gradient active:translate-y-1">Book a Shoot!</button>
        </a>
      </div>
    </div>

    {/* Hero section for Small screens */}
    <div className="lg:hidden">
      <div className="relative top-10 pb-[10vh]">
        <Slideshow />
      </div>
      <div className="relative text-center text-black lg:yeseva pb-10">
        <p className="text-3xl sm:text-5xl sm:mt-[-20px]">Take photos!</p>
        <p className="text-xl sm:text-2xl py-5">They last a lifetime.</p>
        <a href="https://calendly.com/shealynphoto" target="_blank" rel="noreferrer">
          <button
            type="button" className="text-white px-7 py-4 drop-shadow-md rounded-lg red-button-gradient active:translate-y-1">Book a Shoot!</button>
        </a>
      </div>
    </div>


    {/* Big Screen home screen (all absolute positioning) */}
    <div className="hidden lg:block mt-50">
      <div className="bg-[#362417] text-white w-1/2 pt-5 ml-10">
        <h3 className="lg:yeseva text-4xl pl-4 text-center">"Beyond the Frame"</h3>
        <p className="garamond text-2xl p-10">
          "Beyond the Frame" is my photography philosophy that goes beyond just capturing images.
          It's about capturing the essence of the moment and telling that story through photographs.
          It's about creating a connection with the moment and delivering photos that evoke emotions.
        </p>
      </div>

      <p className="text-black w-[40vw] text-2xl garamond xl:w-[30vw] relative left-20 xl:left-40 top-10 xl:top-20 2xl:top-[15vh]">
        Attention to detail is critical in creating exceptional images that tell a story. I focus
        on every aspect of a scene, from lighting to composition, resulting in a lasting memory
        for clients. I'm a photographer who prioritizes the details to elevate images from good to
        great, making great memories unforgettable.
      </p>

      <Image src={milk} className="relative left-[48vw] bottom-[140px] w-1/4 aspect-square object-cover" alt=""/>
      <Image src={hands} className="relative left-[26vw] bottom-[220px] w-1/4 aspect-square object-cover border-[15px] border-[#DFB08B]" alt=""/>

      <p className="text-black w-[200px] text-2xl garamond absolute top-[135vh] right-20 xl:top-[140vh] 2xl:top-[120vh] 2xl:right-[15vw]">
        Photography is an art form that should be accessible to all. That's why I offer personalized
        sessions for corporate, family, couples, and portraits. I take the time to
        understand your vision to create a unique experience. Browse my
        portfolio and let's capture your special moments together!
      </p>
    </div>

    {/* Small screen option */}
    <div className="lg:hidden">
      <div className="bg-[#362417] text-white w-4/5 pt-5 m-auto">
        <h3 className="lg:yeseva text-2xl sm:text-3xl text-center">"Beyond the Frame"</h3>
        <p className="garamond text-lg sm:text-xl p-5">
          "Beyond the Frame" is my photography philosophy that goes beyond just capturing images.
          It's about capturing the essence of the moment and telling that story through photographs.
          It's about creating a connection with the moment and delivering photos that evoke emotions.
        </p>
      </div>

      <Image src={milk} className="w-2/3 aspect-square mt-20 object-cover m-auto" alt=""/>

      <p className="text-black w-full p-10 text-lg sm:text-xl garamond">
      Attention to detail is critical in creating exceptional images that tell a story. I focus on every aspect of a scene, from lighting to composition, resulting in a lasting memory for clients. I'm a photographer who prioritizes the details to elevates images from good to great, making great memories unforgettable.
      </p>

      <Image src={hands} className="w-2/3 aspect-square object-cover m-auto border-[16px] border-[#DFB08B]" alt=""/>

      <p className="text-black w-full p-10 text-lg sm:text-xl garamond">
      Photography is an art form that should be accessible to all. That's why I offer personalized photography services for corporate, family, couples, and portraits. I take the time to understand your vision to create a unique experience that exceeds expectations. Browse my portfolio and let's capture your special moments together!
      </p>
    </div>
    </div>
  );
}

export default Home;