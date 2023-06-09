"use client"

import {useState, useLayoutEffect, useRef } from 'react';
import TitleAnimation from './TitleAnimation'
import Link from 'next/link'
import Image from 'next/image';
import menu from "../constants/icons/menu.svg"
import x from "../constants/icons/x.svg"

const Navbar = () => {
  const [burgerClicked, setBurgerClicked] = useBurger(false);
  const dropdownMenuRef = useRef(null);
  const xIconRef = useRef(null);

  // Func: handles external clicks for Mobile/Tablet Drop-Down Menu
  const handleOutsideClick = (event) => {
    if (dropdownMenuRef.current
      && !dropdownMenuRef.current.contains(event.target)
      && !xIconRef.current.contains(event.target)) {
      setBurgerClicked(false);
    }
  };

  useLayoutEffect(() => {
    if (burgerClicked) { document.addEventListener('mousedown', handleOutsideClick); }
    else { document.removeEventListener('mousedown', handleOutsideClick); }

    return () => { document.removeEventListener('mousedown', handleOutsideClick); };
  }, [burgerClicked]);

  return (
    <nav className="fixed inset-x-0 h-[50px] md:h-[60px] bg-[#E89E63] playfair text-white text-xl flex items-center justify-between lg:px-10 z-20 [&>*]:drop-shadow-md">

        {/* Brand Text (Large Screens +) */}
        <Link href="/" className="hidden lg:inline w-[300px]">
          <TitleAnimation title="Shea Fortuna"/>
        </Link>

        {/* Routing Links (Large Screens +) */}
        <ul className="hidden md:inline text-lg space-x-5 xl:space-x-10 2xl:space-x-24">
          <Link href="/Business"> business  </Link>
          <Link href="/Solos">    solos     </Link>
          <Link href="/Couples">  couples   </Link>
          <Link href="/Families"> families  </Link>
          <Link href="/AboutMe">  about me  </Link>
        </ul>

        {/* Button => "Get in touch" (Large Screens +) */}
        <Link
          href="https://www.instagram.com/shealynphoto/"
          type="button"
          target="_blank"
          className="hidden lg:inline text-black bg-[#F1EEE4] px-8 py-1 transform transition-transform hover:scale-105 active:scale-90 duration-200 ease-in-out">
            Get in touch
        </Link>

        {/* Menu Icon (Mobile & Tablet) */}
      <button
        onClick={() =>  setBurgerClicked(!burgerClicked)}
        className={`order-first lg:hidden aspect-square w-[20px] sm:w-[25px] mx-7 transition-transform duration-300 ease-in-out transform ${burgerClicked ? 'rotate-[270deg]' : ''}`}
      >
        <Image src={menu} alt="Menu" className={`${burgerClicked ? 'hidden' : ''}`} />
        <Image src={x} alt="Menu" className={`${burgerClicked ? '' : 'hidden'}`} ref={xIconRef} />
      </button>

      {/* Drop-Down Links (Mobile & Tablet) */}
      <ul
        ref={dropdownMenuRef}
        className={`fixed lg:hidden top-[55px] md:top-[65px] left-[5px] space-y-9 p-10 bg-[#E89E63] text-md transition-transform duration-300 ease-in-out transform flex flex-col ${burgerClicked ? "translate-x-0" : "-translate-x-96 disabled"
          }`}
      >
        <Link href="/Business"  onClick={() =>  setBurgerClicked(false)}>business</Link>
        <Link href="/Solos"     onClick={() =>  setBurgerClicked(false)}>solos</Link>
        <Link href="/Couples"   onClick={() =>  setBurgerClicked(false)}>couples</Link>
        <Link href="/Families"  onClick={() =>  setBurgerClicked(false)}>families</Link>
        <Link href="/AboutMe"   onClick={() =>  setBurgerClicked(false)}>about me</Link>
      </ul>

        {/* Brand Text (Mobile & Tablet) */}
        <Link href="/" className="lg:hidden text-2xl sm:text-3xl mx-7">
          Shea Fortuna
        </Link>
    </nav>
  );
}

export default Navbar;

function useBurger(initialValue) {
  const [isOn, setIsOn] = useState(initialValue);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 1130) {
        setIsOn(false);
      }
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return [isOn, setIsOn];
}
