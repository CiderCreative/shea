'use client'

const FormComponent = ({label, sample, input,  setInput}) => {
  const setState = (event) => { setInput(event.target.value); }

  return (
    <div className="w-full m-auto playfair text-black text-lg xl:text-xl py-7">
      <label htmlFor={label}>{label}</label>
      <input className="opacity-80 w-full py-1 bg-transparent border-transparent stroke-transparent focus:outline-none" type="text" autoComplete="off" id="name" placeholder={sample} value={input} onChange={setState} />
      <div className="h-[1px] bg-[#00000030]" /></div>
  )
}

export default FormComponent