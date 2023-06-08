"use client"

import PriceBlock from '../../components/PriceBlock';
import { families } from '../../constants/priceBlockInfo';
import { TopArea, BrownBox } from "../../components"
import Image from 'next/image'

const Families = () => {
  return (
    <div className="pt-[80px] text-white">

      <TopArea
        title="Family"
        line1="Capture sweet moments"
        line2="with professional photos,"
        line3="so you never miss a detail!"
        context={require.context(`../../constants/familiesImgs/`, false, /\.(png|jpe?g|svg)$/)}
      />

      <p className="text-2xl sm:text-3xl lg:text-4xl text-center py-20 pb-20 text-black playfair px-5">What's included in a family photo shoot?</p>


      <div className="flex flex-col items-center sm:grid grid-cols-2 place-items-center xl:mx-[10vw] 2xl:mx-[15vw]">
        {families.map( element => {
            return(
              <PriceBlock {...element}/>
            );})}
      </div>

      <BrownBox
        title="Precious Memories"
        color="#FF89A4"
        desc="Kids grow up fast, but family memories can last a lifetime. Capture those
        sweet moments with family photography that preserves the joy, laughter,
        and love that make your family unique. Book your session today. Let's
        create memories that will last a lifetime."
      />

    </div>
  );
}

export default Families;