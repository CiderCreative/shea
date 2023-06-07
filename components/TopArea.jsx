import Slideshow from './Slideshow';

export default function TopArea({title, line1, line2, line3, context=''}){
  return(
    <div className="md:grid md:grid-cols-3 md:my-10 sm:mx-10 md:mx-20">
    <div className="col-span-2 mx-10 md:mx-20 xl:mx-20 xl:px-20 2xl:px-[12vw]">
      <Slideshow context={context}/>
    </div>
    <div className="py-10 flex flex-col text-center md:text-left justify-center text-black playfair text-xl lg:text-2xl xl:text-3xl 2xl:relative right-40 md:min-w-[500px]">
      <div className="text-3xl lg:text-4xl xl:text-5xl my-5">{title}</div>
      <div>{line1}</div>
      <div>{line2}</div>
      <div>{line3}</div>
    </div>
  </div>
  );
}


