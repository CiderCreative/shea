import Link from "next/link"

export default function BrownBox({title, desc, button="Book a Shoot!", color="#4EA09D"}){
  return(
    <div style={{background: color}} className={`text-white px-8 sm:px-20 py-5 sm:py-10 m-auto my-20 w-[90vw] sm:w-[600px] md:w-[700px] xl:w-[1000px] 2xl:w-[1300px] drop-shadow-xlt`}>

      {/* Title & Desc */}
      <h3 className="playfair  text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-5">{title}</h3>
      <p className="garamond text-md md:text-lg xl:text-xl 2xl:text-2xl">{desc}</p>

      {/* Button */}
      <div className="text-center mt-7 mb-2 sm:mb-0 drop-shadow-md transform transition-transform hover:scale-105 active:scale-90 duration-200 ease-in-out">
        <Link
        href="https://www.instagram.com/shealynphoto/" target="_blank"
        className="text-black bg-[#F1EEE4] px-4 sm:px-8 py-2 drop-shadow-md text-xl garamond"
        >
          {button}
        </Link>
      </div>

    </div>
  )
}

