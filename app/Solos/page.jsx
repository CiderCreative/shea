"use client"

import PriceBlock from '../../components/PriceBlock';
import { BrownBox, TopArea } from "../../components"
import { solos } from '../../constants/priceBlockInfo';

const Solos = () => {
  return (
    <div className="pt-[80px] text-white solos-gradient">

      <TopArea
        title="Solos"
        line1="How you present yourself matters."
        line2="Make strong impressions with"
        line3="outstanding portrait photography"
        context={require.context(`../../constants/solosImgs/`, false, /\.(png|jpe?g|svg)$/)}
      />

      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center py-[4rem] xs:py-[6rem] xl:py-20 lg:lg:yeseva">What's included in a solo portrait shoot?</p>

      <div className="w-full hidden md:grid xl:w-3/4 m-auto grid-cols-2">
        {solos.map( element => {
          return(
            <PriceBlock {...element}/>
          );})}
      </div>

      <div className="w-full md:hidden">
        {solos.map( element => {
          return(
            <PriceBlock {...element}/>
          );})}
      </div>

      <BrownBox
        title="Digital Impact Theory"
        desc="Your digital presence can greatly influence your real-life
        opportunities and interactions (job opportunities, relationships,
        and even self-image). Investing in portraits can make a real impact!"
      />

    </div>
  );
}

export default Solos;