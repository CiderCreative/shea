"use client"

import { useState } from 'react';
import Image from 'next/image';
import FormComponent from '@/components/FormComponent';
import ButtonSelect from '@/components/ButtonSelect';
import arrow from '@/constants/icons/arrow.svg';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [shootDescription, setShootDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any other necessary form submission logic here

    // Validation checks
    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    if (selectedOption === '') {
      alert('Please select a photography type.');
      return;
    }

    if (shootDescription.trim() === '') {
      alert('Please enter the photo shoot description.');
      return;
    }

    setIsSubmitted(true);
    // Log all variables
    console.log('name:', name);
    console.log('email:', email);
    console.log('instagram:', instagram);
    console.log('selected:', selectedOption)
    console.log('shootDescription:', shootDescription);
  };



  return (
    <div className="pt-[50px] md:pt-[60px]">
      <h2 className="text-center text-black text-3xl md:text-4xl xl:text-5xl mt-20 mb-10">Contact me</h2>
      <form className="w-[80vw] md:w-[500px] 2xl:w-[700px] m-auto" onSubmit={handleSubmit}>

        <FormComponent
          label="What is your name?"
          sample="Enter your name here"
          input={name}
          setInput={setName}
        />

        <FormComponent
          label="What is your email?"
          sample="email@website.com"
          input={email}
          setInput={setEmail}
        />

        <FormComponent
          label="What is your Instagram? (Optional)"
          sample="@youraccount"
          input={instagram}
          setInput={setInstagram}
        />

        <ButtonSelect setSelectedOption={setSelectedOption} />

        <FormComponent
          label="Describe the photo shoot you have in mind."
          sample="Please enter details here"
          input={shootDescription}
          setInput={setShootDescription}
        />

        <button
          className={`w-full py-3 mt-10 mb-40 text-white text-xl drop-shadow-xl transform hover:scale-105 active:scale-95 duration-200 ${
            isSubmitted ? 'bg-[#BFBFBF] cursor-not-allowed' : 'bg-[#E89E63]'
          }`}
          type="submit"
          disabled={isSubmitted} //disable the button on submit
        >
          {isSubmitted ? 'Submitted!' : (
            <>
              Submit
              <Image src={arrow} className="aspect-square w-[12px] inline mb-1 ml-5" />
            </>
          )}
        </button>

      </form>
    </div>
  );
};

export default Contact;
