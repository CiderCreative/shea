"use client"

import PriceBlock from '../../components/PriceBlock';
import { families } from '../../constants/priceBlockInfo';
import child from '../../constants/familiesImgs/child.jpg';
import fam from '../../constants/familiesImgs/fam.jpg';
import dog from '../../constants/familiesImgs/dog.jpg';
import { TopArea, BrownBox } from "../../components"
import Image from 'next/image'

const Families = () => {
  return (
    <div className="pt-[80px] text-white family-gradient">

      <TopArea
        title="Family"
        line1="Capture sweet moments with"
        line2="professional photos,"
        line3="so you never miss a detail!"
        context={require.context(`../../constants/familiesImgs/`, false, /\.(png|jpe?g|svg)$/)}
      />

      <div className="hidden md:grid grid-cols-3 w-full place-items-center m-auto">
        <Image src={child}  className="my-10 w-2/3 border-4 border-white" alt="Happy family with daughter"/>
        <Image src={dog}    className="my-10 w-2/3 border-4 border-white" alt="Modern portrait of man, woman, and dog"/>
        <Image src={fam}    className="my-10 w-2/3 border-4 border-white" alt="Sunny portrait of a happy family"/>
      </div>

      <Image src={fam} className="w-2/3 md:hidden border-4 border-white m-auto mt-20" alt="Sunny portrait of a happy family"/>

      <p className="text-2xl sm:text-4xl xl:text-5xl text-center py-14 xl:py-20 px-5 lg:yeseva">What’s included in a family shoot?</p>

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