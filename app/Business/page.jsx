"use client"

import { BrownBox, TopArea } from '../../components';
import PriceBlock, { PriceBlockSubscription } from '../../components/PriceBlock';
import { businessesNormal, businessesSubscription } from '../../constants/priceBlockInfo';

const Business = () => {
  return (
    <div className="pt-[80px] business-gradient">

      <TopArea
        title="Business"
        line1="All business? Let's talk!"
        line2="Get recurring customers"
        line3="via high quality content"
        context={require.context(`../../constants/businessImgs/`, false, /\.(png|jpe?g|svg)$/)}
      />

      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center py-20 pb-20 text-white yeseva px-5">What's included in a business shoot?</p>

    {/* Large screen pricing */}
    <div className="hidden md:grid xl:w-3/4 m-auto md:grid-cols-2 garamond text-white">

      <span className="py-10">
        <p className="yeseva text-4xl underline text-center">Individual Sessions</p>
        <p className="text-2xl mx-20 garamond">
          Great as a personalized and tailored source of content,
          showing off your brand’s essence. Check it out!
        </p>
      </span>

      <span className="py-10">
        <p className="yeseva text-4xl underline text-center">Subscription Options</p>
        <p className="text-2xl mx-20 garamond">
        Perfect as a consistent, reliable, and abundant source
        of content and advertisement. Look no further!
        </p>
      </span>

      <div className="w-full">
        {businessesNormal.map( element => {
          return(
            <PriceBlock {...element}/>
        );})}
      </div>
        <div className="w-full col-span-1">
          {businessesSubscription.map( element => {
            return(
              <PriceBlockSubscription {...element}/>
            );})}
        </div>
    </div>


    {/* Small & medium screen pricing */}
    <div className="md:hidden w-full ">
      <span className="py-10 text-white">
        <p className="yeseva mb-2 text-3xl underline text-center">Individual Sessions</p>
        <p className="text-xl sm:text-2xl mx-8 sm:mx-20 garamond pl-5">
          Great as a personalized and tailored source of content,
          showing off your brand’s essence. Check it out!
        </p>
      </span>
      {businessesNormal.map( element => {
        return(
          <PriceBlock {...element}/>
      );})}
    </div>

    <div className="md:hidden w-full">
      <span className="py-10 text-white">
        <p className="mt-10 mb-2 yeseva text-3xl underline text-center">Subscription Options</p>
        <p className="text-xl sm:text-2xl mx-8 garamond pl-5">
        Perfect as a consistent, reliable, and abundant source
        of content and advertisement. Look no further!
        </p>
      </span>
      {businessesSubscription.map( element => {
        return(
          <PriceBlockSubscription {...element}/>
        );})}
    </div>

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