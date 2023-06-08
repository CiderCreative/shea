import Slideshow from './Slideshow';

export default function TopArea({title, line1, line2, line3, context=''}){
  return(
    <div className="sm:flex justify-center py-5 md:py-20">
      <div className="m-auto sm:m-0 w-[70vw] sm:w-[60vw] md:w-[400px] lg:w-[500px]">
        <Slideshow context={context}/>
      </div>

      <div className="text-center sm:text-left sm:flex flex-col justify-center sm:ml-[5vw] mt-5 xl:ml-[7vw] text-black text-xl md:text-3xl 2xl:text-4xl">
        <div className="text-3xl md:text-5xl 2xl:text-6xl">{title}</div>
        <div>{line1}</div>
        <div>{line2}</div>
        <div>{line3}</div>
      </div>
    </div>
  );
}


