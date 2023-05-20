"use client"

import React, {useRef} from 'react';
import PriceBlock from '../../components/PriceBlock';
import { BrownBox, TopArea } from "../../components"
import { couples } from '../../constants/priceBlockInfo';

export default function Couples() {
  const refContainer = useRef();

  return (
    <div ref={refContainer} className="pt-[80px] business-gradient">

      <TopArea
        title="Couples"
        line1="Capture your love story!"
        line2="Engagements, Sessions, & More."
        context={require.context(`../../constants/couplesImgs/`, false, /\.(png|jpe?g|svg)$/)}      />

      <p className="mx-5 text-2xl sm:text-4xl xl:text-5xl text-center py-10 xl:py-20 text-white yeseva">What's included in a couples photo shoot?</p>

      <div className="w-full hidden md:grid xl:w-3/4 m-auto grid-cols-2">
      {couples.map( element => {
        return(
          <PriceBlock {...element}/>
        );})}
      </div>
      <div className="w-full md:hidden">
      {couples.map( element => {
        return(
          <PriceBlock {...element}/>
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
