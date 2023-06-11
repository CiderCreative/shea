"use client"

import { BrownBox, TopArea } from '../../components';
import PriceBlock, { PriceBlockSubscription } from '../../components/PriceBlock';
import { businessesNormal, businessesSubscription } from '../../constants/priceBlockInfo';

const Business = () => {
  return (
    <div className="pt-[80px]">

      <TopArea
        title="Business"
        line1="All business? Let's talk!"
        line2="Get recurring customers"
        line3="via high quality content"
        context={require.context(`../../constants/businessImgs/`, false, /\.(png|jpe?g|svg)$/)}
      />
      <p className="text-2xl sm:text-3xl lg:text-4xl text-center py-20 pb-20 text-black playfair px-5 drop-shadow-xl">What's included in a business shoot?</p>

      {/* Pricing Section */}
      <div className="sm:grid grid-cols-2 text-black playfair xl:mx-[10vw] 2xl:mx-[15vw] overflow-hidden drop-shadow-xl">

        {/* Column 1 (Individual Sessions)*/}
        <div className="flex flex-col items-center">
          <h3 className="playfair text-2xl sm:text-3xl lg:text-4xl text-center px-5 underline underline-offset-8 decoration-1">Individual Sessions</h3>
          <p className="garamond text-md md:text-lg xl:text-xl mx-10 md:mx-20 lg:mx-40 mt-3 h-[100px] sm:mb-10">Great as a personalized and tailored source of content, showing off your brand’s essence. Check it out!</p>
          {businessesNormal.map( element => {return( <PriceBlock {...element}/> );})}
        </div>

        {/* Column 2 (Subscription)*/}
        <div className="flex flex-col items-center mt-20 sm:mt-0">
          <h3 className="playfair text-2xl sm:text-3xl lg:text-4xl text-center px-5 underline underline-offset-8 decoration-1">Subscription Offers</h3>
          <p className="garamond text-md md:text-lg xl:text-xl mx-10 md:mx-20 lg:mx-40 mt-3 h-[100px] sm:mb-10">Perfect as a consistent, reliable, and abundant source of content and advertisement. Look no further!</p>
          {businessesSubscription.map( element => {return( <PriceBlockSubscription {...element}/> );})}
        </div>

      </div>
      {/* End of Pricing Section */}

      <BrownBox
        title="Marketing Philosophy"
        desc="Your brand is unique and deserves to be showcased with
        high-quality photography. Book a marketing photography
        session with me today and let's create content that
        will engage and attract your target audience, building
        a customer base that will be with you for years to come."
      />

    </div>
  );
}

export default Business;