"use client"

import React, {useRef} from 'react';
import PriceBlock from '../../components/PriceBlock';
import { BrownBox, TopArea } from "../../components"
import { couples } from '../../constants/priceBlockInfo';

export default function Couples() {
  const refContainer = useRef();

  return (
    <div ref={refContainer} className="pt-[80px]">

      <TopArea
        title="Couples"
        line1="Capture your love story!"
        line2="Engagements, Sessions, & More."
        context={require.context(`../../constants/couplesImgs/`, false, /\.(png|jpe?g|svg)$/)}
      />

      <p className="text-2xl sm:text-3xl lg:text-4xl text-center py-20 pb-20 text-black playfair px-5">What's included in a couples photo shoot?</p>

      <div className="flex flex-col items-center sm:grid grid-cols-2 place-items-center xl:mx-[10vw] 2xl:mx-[15vw]">
        {couples.map( element => {
            return(
              <PriceBlock {...element} color="#FF89A4"/>
            );})}
      </div>

      <BrownBox
        title="Special Moments"
        desc="Your love is unique and deserves to be captured in timeless photographs.
        Book a couples photography session with me today and create beautiful memories
        that you will cherish for years to come."
      />

    </div>
  );
}
