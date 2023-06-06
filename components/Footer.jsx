"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Footer() {
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
    <footer className="absolute inset-x-0 py-10 lg:px-20 bg-[#E89E63] text-white flex flex-col lg:flex-row items-center justify-between playfair text-xl space-y-10 [&>*]:drop">

      {/* Left Column */}
      <div className="flex flex-col w-[200px] sm:w-[275px]">
        <Link href="/" className="text-3xl">Shea Fortuna</Link>
        <p>Invest in quality photography!</p>
      </div>

      {/* Middle Column */}
      <ul className="hidden md:flex space-x-10 lg:space-x-0 lg:flex-col lg:space-y-5 [&>*]:underline underline-offset-4 decoration-dotted">
        <Link href="/Business">business </Link>
        <Link href="/Solos"   >solos    </Link>
        <Link href="/Couples" >couples  </Link>
        <Link href="/Families">families </Link>
        <Link href="/AboutMe" >about me </Link>
      </ul>

      {/* Right Column */}
      <div className="w-[200px] sm:w-[275px]">
        <h3 className="text-3xl">Email</h3>
        <p
          className="underline underline-offset-4 hover:cursor-pointer"
          onClick={handleCopyToClipboard}
        >
          imagebyshea@gmail.com
        </p>
        <p className={`absolute transition-opacity duration-300 ${isCopied ? "opacity-100": "opacity-0 disabled"} bg-white text-black py-2 px-3 `}>Copied to clipboard</p>

        <h3 className="text-3xl mt-10">Made & Maintained by</h3>
        <Link
          href="https://www.cidercreative.com/"
          target="_blank"
          className="underline underline-offset-4"
        >
          cidercreative.com
        </Link>
      </div>
    </footer>
    );
}


