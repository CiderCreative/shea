"use client"

import { useState, useEffect } from "react"
import { BrownBox } from "../../components"
import Image from 'next/image'
import field from "../../constants/sheaImgs/field.jpg"
import hat from "../../constants/sheaImgs/hat.jpg"
import Link from "next/link"

const AboutMe = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText('imagebyshea@gmail.com')
    .then( () => {
      setIsCopied(true);
    })
    .catch((error) => {
      console.error('Error copying to clipboard:', error);
    });
  };

  return (

    <div className="pt-[80px]">
      {/* Top Area */}
      <div className="sm:flex justify-center py-5 md:pt-20 md:pb-40">
        <div className="m-auto sm:m-0 w-[70vw] sm:w-[60vw] md:w-[400px] lg:w-[500px]">
          <Image src={hat} alt="" className="aspect-square object-cover"/>
        </div>

        <div className="text-center sm:text-left sm:flex flex-col justify-center sm:ml-[5vw] mt-5 xl:ml-[7vw] text-black text-xl md:text-3xl 2xl:text-4xl">
          <div className="text-3xl md:text-5xl 2xl:text-6xl">About me!</div>
          <div>I love people.</div>
          <div>I love creating.</div>
          <div>Let me tell you a bit about it.</div>
        </div>
      </div>

      <div className="sm:grid grid-cols-2 my-20">
        <div className="space-y-5 mx-20 text-md sm:text-lg lg:text-xl">
          <p>
            Ever since I was little, I loved snapping photos of plants, bugs, stars, sports...
            whatever was in front of me! Unfortunately, the busyness of life got in the way and my camera was sold.
          </p>
          <p>
            Years later, when I got in behind of a camera again, something sparked, reigniting that childhood passion
            and sense of wonder. I got a camera again and was back snapping photos!
          </p>
          <Image src={field} alt="" className="sm:hidden aspect-square w-[60vw] object-cover m-auto"/>
          <p>
            I found that when I’m creating, I am dedicated to capturing the beauty of the moment. From the way light
            falls to curating a purpose-filled frame, I work to capture and share a sense of awe and appreciation
            for the world we live in.
          </p>
          <p>
            If you’re looking for a photographer who is passionate about capturing the moment, I would be honored to
            work with you! I would love to help you capture important moments in time. Please don’t hesitate to contact
            me to discuss your photography needs! Let’s create something beautiful together!
          </p>
          <p className="pb-5">Email me at<p
          className="underline underline-offset-4 hover:cursor-pointer"
          onClick={handleCopyToClipboard}
        >
          imagebyshea@gmail.com
        </p>
        <p className={`absolute transition-opacity duration-300 ${isCopied ? "opacity-100": "opacity-0 disabled"} bg-[#E89E63] text-white py-2 px-3 `}>Copied to clipboard</p>
        </p>

        </div>
        <Image src={field} alt="" className="hidden sm:block aspect-square my-10 w-[300px] lg:w-[500px] object-cover m-auto"/>
      </div>

    </div>

  );
}

export default AboutMe;