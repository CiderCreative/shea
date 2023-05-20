import Slideshow from './Slideshow';

export default function TopArea({title, line1, line2, line3, context=''}){
  return(

    <div>
      <div className="m-5 md:mx-40 md:my-[8vh] md:w-2/3">
        <Slideshow context={context}/>
    </div>

      <div className="md:absolute top-[300px] xl:top-[500px] md:pl-[65%] yeseva text-black text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl">{title}</h2>
        <p className="text-lg sm:text-xl xl:text-2xl [&>*]:leading-[30px] md:[&>*]:leading-[50px] md:leading-[3vw]">
          <div>{line1}</div>
          <div>{line2}</div>
          <div>{line3}</div>
        </p>
      </div>
    </div>
  );
}


