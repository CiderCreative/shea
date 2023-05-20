"use client"

import shea from '../../constants/vertImgs/shea.jpeg';
import throne from '../../constants/vertImgs/throne.jpg';
import active1 from '../../constants/vertImgs/active1.jpg';
import { BrownBox } from "../components"
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className="pt-[80px] aboutme-gradient">

      {/* Large & XL Screen top */}
      <div className="hidden md:block">
        <Image src={shea} className="w-1/3 m-[6em] ml-40 aspect-square object-cover shadow-lg" alt="Shea, the photographer, in the sunshine."/>
        <div className="absolute top-[270px] xl:top-[400px] pl-[50%] yeseva text-black text-center md:text-left">
          <h2 className="text-6xl">About me!</h2>
          <p className="text-2xl leading-[40px] xl:leading-[50px]">
            <div>I love people.</div>
            <div>I love creating.</div>
            <div>Let me tell you a bit about it.</div>
          </p>
        </div>
      </div>

      {/* Small & Medium top */}
      <div className="md:hidden">
        <Image src={shea} className="w-3/4 m-auto aspect-square object-cover shadow-lg" alt="Shea, the photographer, in the sunshine."/>
        <div className="yeseva text-black text-center pt-5">
          <h2 className="text-3xl md:text-6xl">About me!</h2>
          <p className="text-xl sm:text-2xl leading-[10vw] sm:leading-[5vw] garamond">
            <div>I love people.</div>
            <div>I love creating.</div>
            <div>Let me tell you a bit about it.</div>
          </p>
        </div>
      </div>

      {/* Medium, Large, & XL content */}
        <div className="hidden sm:grid grid-cols-2 mt-20 md:mt-40">
          <div className="garamond [&>*]:pb-[100px] w-[95%] [&>*]:text-2xl m-[20px] lg:pl-20 xl:pl-[15vw]">
              <p>Ever since I was little, I loved snapping photos of plants, bugs, stars, sports... whatever was in front of me! Unfortunately, the busyness of life got in the way and my camera was sold.</p>
              <p>Years later, when I got behind a camera again, something sparked, reigniting that childhood passion and sense of wonder. I got a camera again and was back snapping photos!</p>
              <p>I found that when I’m creating, I am dedicated to capturing the beauty of the moment. From the way light falls to curating a purpose-filled frame, I work to capture and share a sense of awe and appreciation for the world we live in.</p>
              <p>If you’re looking for a photographer who is passionate about capturing the moment, I would be honored to work with you! I would love to help you capture important moments in time. Please don’t hesitate to contact me to discuss your photography needs! Let’s create something beautiful together!</p>
              <p>You can either book a call or send me an email!</p>
          </div>
          <div className="relative bottom-[100px] m-auto">
            <Image src={active1} className="w-3/4 lg:w-1/2 aspect-[3/4] m-5 my-40 ml-10 md:m-[6em] md:ml-40 object-cover shadow-lg" alt="Shea, the photographer, in the sunshine."/>
            <Image src={throne} className="w-3/4 xl:hidden lg:w-1/2 aspect-[3/4] m-5 my-40 ml-10 md:m-[6em] md:ml-40 object-cover shadow-lg" alt="Shea, the photographer, in the sunshine."/>
          </div>
        </div>

        {/* Small content area */}
        <div className="sm:hidden mt-20 garamond [&>*]:mb-[80px] w-[75%] m-auto [&>*]:text-xl">
          <p>Ever since I was little, I loved snapping photos of plants, bugs, stars, sports...whatever was in front of me! Unfortunately, the busyness of life got in the way and my camera was sold.</p>
          <Image src={active1} className="w-3/4 aspect-[3/4] m-auto object-cover shadow-lg" alt="Shea, the photographer, in the sunshine."/>
          <p>Years later, when I got behind a camera again, something sparked, reigniting that childhood passion and sense of wonder. I got a camera again and was back snapping photos!</p>
          <p>I found that when I’m creating, I am dedicated to capturing the beauty of the moment. From the way light falls to curating a purpose-filled frame, I work to capture and share a sense of awe and appreciation for the world we live in.</p>
          <Image src={throne} className="w-3/4 aspect-[3/4] m-auto object-cover shadow-lg"  alt="Shea, the photographer, in the sunshine."/>
          <p>If you’re looking for a photographer who is passionate about capturing the moment, I would be honored to work with you! I would love to help you capture important moments in time. Please don’t hesitate to contact me to discuss your photography needs! Let’s create something beautiful together!</p>
          <p>You can either book a call or send me an email!</p>
        </div>

      {/* BrownBox (all sizes)*/}
      <div className="relative sm:bottom-20 my-[-40px]">
        <BrownBox
        title="Get in touch!"
        desc="Whether you're looking to schedule a photo shoot, need professional marketing content, or are needing photography for a project, I'd love to hear from you!
        Contact me today and let's make something happen!"
        button="Schedule a Call"
        />
      </div>


    </div>

  );
}

export default AboutMe;