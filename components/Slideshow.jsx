"use client"

import {useState, useLayoutEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from './Footer.module.css'
import Image from 'next/image'


export default function Slideshow({width = 600, context = require.context("../constants/horizImgs/", false, /\.(png|jpe?g|svg)$/)}){
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(context);

  const winWidth = useSlide();
  return (
      <Carousel className={style.slideshow} showThumbs={false} autoPlay={true} width={(winWidth<1060) ? '100%' : '100%'} interval={3000} infiniteLoop={true} stopOnHover={true}>
        {images.map(imgLink => <Image src={imgLink} key={imgLink} alt="Slideshow showing example photography"/>)}
      </Carousel>)
}

function useSlide() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}




