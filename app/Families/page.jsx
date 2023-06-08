"use client"

import PriceBlock from '../../components/PriceBlock';
import { families } from '../../constants/priceBlockInfo';
import { TopArea, BrownBox } from "../../components"
import Image from 'next/image'

const Families = () => {
  return (
    <div className="pt-[80px] text-white family-gradient">

      <TopArea
        title="Family"
        line1="Capture sweet moments"
        line2="with professional photos,"
        line3="so you never miss a detail!"
        context={require.context(`../../constants/familiesImgs/`, false, /\.(png|jpe?g|svg)$/)}
      />

      <div className="hidden md:grid grid-cols-3 w-full place-items-center m-auto">
      </div>


      <p className="text-2xl sm:text-4xl xl:text-5xl text-center py-14 xl:py-20 px-5 yeseva">What’s included in a family shoot?</p>

      <div className="w-full xl:w-3/4 m-auto hidden md:grid grid-cols-2">
        {families.map( element => {
          return(
            <PriceBlock {...element}/>
          );})}
      </div>

      <div className="w-full md:hidden">
        {families.map( element => {
          return(
            <PriceBlock {...element}/>
          );})}
      </div>

      <BrownBox
        title="Precious Memories"
        desc="Kids grow up fast, but family memories can last a lifetime. Capture those
        sweet moments with family photography that preserves the joy, laughter,
        and love that make your family unique. Book your session today. Let's
        create memories that will last a lifetime."
      />

    </div>
  );
}

export default Families;