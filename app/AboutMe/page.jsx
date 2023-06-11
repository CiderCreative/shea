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
      <div className="sm:flex justify-center py-5 md:pt-20 lg:pb-40">
        <div className="m-auto sm:m-0 w-[70vw] sm:w-[60vw] md:w-[400px] lg:w-[500px]">
          <Image src={hat} alt="" className="aspect-square object-cover drop-shadow-xl"/>
        </div>

        <div className="text-center sm:text-left sm:flex flex-col justify-center sm:ml-[5vw] mt-5 xl:ml-[7vw] text-black text-xl md:text-3xl 2xl:text-4xl drop-shadow-xl">
          <div className="text-3xl md:text-5xl 2xl:text-6xl">About me!</div>
          <div>I love people.</div>
          <div>I love creating.</div>
          <div>Let me tell you a bit about it.</div>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 items-center my-20 2xl:mx-[15vw]">
        <div className="[&>*]:my-5 mx-20 text-md sm:text-lg lg:text-xl drop-shadow-xl">
          <p>Ever since I was little, I loved snapping photos of plants, bugs, stars, sports...whatever was in front of me! Unfortunately, the busyness of life got in the way and my camera was sold.</p>
          <p>Years later, when I got in behind of a camera again, something sparked, reigniting that childhood passion and sense of wonder. I got a camera again and was back snapping photos!</p>
          <Image src={field} alt="" className="lg:hidden aspect-square w-[60vw] my-10 object-cover m-auto"/>
          <p>I found that when I’m creating, I am dedicated to capturing the beauty of the moment. From the way light falls to curating a purpose-filled frame, I work to capture and share a sense of awe and appreciation for the world we live in.</p>
          <p>If you’re looking for a photographer who is passionate about capturing the moment, I would be honored to work with you! I would love to help you capture important moments in time. Please don’t hesitate to contact
            me to discuss your photography needs! Let’s create something beautiful together!
          </p>
          <div className="transform hover:scale-105 active:scale-95 duration-200 bg-[#89D8C4] px-8 py-1 text-center w-[175px]">
            <Link href="/Contact" className="text-black w-[100%]">
                Get in touch
            </Link>
          </div>

        </div>
        <Image src={field} alt="" className="hidden lg:block aspect-square my-10 w-[500px] object-cover m-auto drop-shadow-xl"/>
      </div>

    </div>

  );
}

export default AboutMe;