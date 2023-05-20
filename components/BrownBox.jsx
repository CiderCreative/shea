export default function BrownBox({title, desc, button="Book a Shoot!"}){
  return(
      <div>
        <div className="w-[90%] xl:w-[70%] bg-[#362417] mt-20 m-auto text-white">
          <h3 className="yeseva text-[6vw] pt-5 pl-10 md:text-[40px]">{title}</h3>
          <p className="m-[1.0rem] xs:pb-5 w-2/3 pl-7 inline-block text-[18px] sm:text-[22px] garamond">{desc}</p>
          <a href="https://calendly.com/shealynphoto" target="_blank" rel="noreferrer" className="relative sm:bottom-[0px] pr-5">
            <button type="button" className="garamond relative px-5 py-3 mb-10 sm:bottom-[60px] md:bottom-10 left-10 sm:left-0 lg:left-10 xl:left-40 sm:text-2xl drop-shadow-md rounded-lg red-button-gradient active:translate-y-1">{button}</button>
          </a>
        </div>
        <div className="h-20"></div>
      </div>
  )
}

