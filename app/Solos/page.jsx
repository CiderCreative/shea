"use client"

import PriceBlock from '../../components/PriceBlock';
import { BrownBox, TopArea } from "../../components"
import { solos } from '../../constants/priceBlockInfo';
import facing from "../../constants/solosImgs/facing.jpg"
import flowers from "../../constants/solosImgs/flowers.jpg"
import Image from 'next/image';

const Solos = () => {
  return (
    <div className="pt-[80px] text-black overflow-hidden">

      <TopArea
        title="Solos"
        line1="How you present yourself matters."
        line2="Make strong impressions with"
        line3="outstanding portrait photography"
        context={require.context(`../../constants/solosImgs/`, false, /\.(png|jpe?g|svg)$/)}
      />

      <p className="text-2xl sm:text-3xl lg:text-4xl text-center py-20 pb-20 text-black playfair px-5">What's included in a solo portrait shoot?</p>


      <div className="flex flex-col items-center sm:grid grid-cols-2 place-items-center 2xl:mx-[15vw] drop-shadow-xl">
        {/* First "row" */}
        <div className="flex flex-col items-center mt-10">
          <PriceBlock time="30-MINUTE" cost="120" numPhotos='20' timeRange="2 days"/>
          <PriceBlock time="1 HOUR" cost="150" numPhotos='30' timeRange="3 days"/>
        </div>
        <Image src={ flowers } alt="" className="hidden sm:inline sm:w-[275px] md:w-[350px] lg:w-[500px]"/>

        {/* Second "row" */}
        <Image src={ facing } alt="" className="hidden sm:inline sm:w-[275px] md:w-[350px] lg:w-[500px]"/>
        <div className="flex flex-col items-center mt-10">
          <PriceBlock time="1.5-HOUR" cost="200" numPhotos='40' timeRange="5 days"/>
          <PriceBlock time="2-HOUR" cost="300" numPhotos='60' timeRange="1 week"/>
        </div>
      </div>


      <BrownBox
        title="Digital Impact Theory"
        color="#FF89A4"
        desc="Your digital presence can greatly influence your real-life
        opportunities and interactions (job opportunities, relationships,
        and even self-image). Investing in portraits can make a real impact!"
      />

    </div>
  );
}

export default Solos;