import Link from 'next/link'
import { links } from '../constants/links'

export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-[auto] leading-10 pt-4 pb-5 lg:yeseva bg-[#362417] text-white flex flex-wrap flex-col justify-items-center justify-center">

      <Link href="/" className="text-2xl pb-3 w-full text-center">Shea Fortuna</Link>

      <div className="text-center text-xs sm:text-lg w-full">
        {links.map((link,i) => {
          if(link.title === "Shea Fortuna"){return <div key={i+20}/>}
          return <Link href={link.id} className="mx-2 sm:mx-10 xl:mx-20 hover:text-gray-500 " key={i+20}>{link.title}</Link>
        })}
      </div>

      <p className="mt-3 text-center text-[12px]">
        imagebyshea@gmail.com
      </p>

    </footer>
    );
}


