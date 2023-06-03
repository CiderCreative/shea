"use client"

import {useState, useLayoutEffect} from 'react';
import { links } from '../constants/links'
import TitleAnimation from './TitleAnimation'
import style from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  const [burgerClicked, setBurgerClicked] = useBurger(false);

  return (
    <nav className="fixed z-20 block garamond bg-[#362417] md:py-2.5 inset-x-0 text-white md:h-[80px] w-full">
      <div className="flex items-center justify-between">

      {/* Link Div */}
        <ul className="hidden lg:flex flex-row lg:yeseva py-4 space-x-11 xl:space-x-20 pl-[30vw] relative text-lg">
          {links.map((link, i) => {
            if(link.title === "Shea Fortuna"){
              return (
                <li key={i}><Link href={link.id} className="absolute text-3xl leading-9 w-[350px] bottom-3.5 left-[30px]">
                    <TitleAnimation title={link.title}/>
                </Link></li>);}
            return (
              <li key={i} className={style.link}><Link href={link.id}>
                {link.title}
              </Link></li>);})}
        </ul>

        {/* Hamburger Menu */}
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-3 text-sm rounded-lg lg:hidden" aria-controls="navbar-sticky" aria-expanded="false" onClick={() =>  setBurgerClicked(!burgerClicked)}  onBlur={async() => {await sleep(10); setBurgerClicked(0)}}>
            <svg className="relative w-6 h-6 m-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        {/**Hamburger Menu pop-out menu */}
        <ul style={{display: (burgerClicked) ? 'flex' : 'none', flexDirection: 'column'}} className="absolute lg:yeseva bg-[#362417] top-[60px] border-white border-1 p-10 rounded">
          {
          links.map((link, i) => {
            if(link.title === "Shea Fortuna"){
              return (
                <li key={i} className="border-white border-1 hover:text-[#F87666] hover:border-[#F87666]"><Link href={link.id} className="text-md sm:text-xl">
                  <div className="w-[120px] xs:w-[100px] h-[30px] xs:h-[40px] flex justify-center items-center pb-[30px]">
                    home
                  </div>
                </Link></li>);}
            return (
              <li key={i} className="border-white border-1 hover:text-[#F87666] hover:border-[#F87666] "><Link href={link.id} className="text-md sm:text-xl">
                <div className="w-[120px] xs:w-[100px] h-[30px] xs:h-[40px] flex justify-center items-center py-[30px]">
                  {link.title}
                </div>
              </Link></li>);})}
        </ul>

        {/**Title for small screen */}
        <Link href="/" className="lg:hidden md:px-9 md:py-3 mr-5 text-sm xs:text-xl md:text-3xl align-middle center lg:yeseva text-center">Shea Fortuna</Link>
        {/* Book Button */}
        <a href="https://calendly.com/shealynphoto" target="_blank" rel="noreferrer">
          <button type="button" className="text-md px-6 xs:px-7 py-3 xs:py-2 top-5 right-5 mr-5 text-[10px] text-xs xs:text-xl lg:text-2xl flex-nowrap rounded red-button-gradient active:translate-y-1">Book Now</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

function useBurger(initialValue) {
  const [isOn, setisOn] = useState(initialValue);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 1130){
        setisOn(false)
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return [isOn,setisOn];
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}