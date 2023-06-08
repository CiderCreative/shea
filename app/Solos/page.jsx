"use client"

import PriceBlock from '../../components/PriceBlock';
import { BrownBox, TopArea } from "../../components"
import { solos } from '../../constants/priceBlockInfo';

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

    <div className="flex flex-col items-center sm:grid grid-cols-2 place-items-center xl:mx-[10vw] 2xl:mx-[15vw]">
      {solos.map( element => {
          return(
            <PriceBlock {...element}/>
          );})}
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