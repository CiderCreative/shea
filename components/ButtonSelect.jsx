"use client"

import { useState } from "react";

const buttonOptions = [
  { value: 'solo', label: 'Solo' },
  { value: 'couple', label: 'Couple' },
  { value: 'family', label: 'Family' },
  { value: 'business-shoot', label: 'Business Shoot' },
  { value: 'business-subscription', label: 'Business Subscription' },
];

const ButtonSelect = ({ setSelectedOption }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonValue, buttonLabel) => {
    setSelectedButton(buttonValue);
    setSelectedOption(buttonLabel);
  };

  return (
    <div className="w-full m-auto playfair text-black text-lg xl:text-xl py-7">
      <label className="block mb-5">What type of photography are you interested in?</label>
      <div className="flex xl:w-[500px] m-auto flex-wrap justify-center">
        {buttonOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`px-10 py-3 m-2 whitespace-nowrap drop-shadow-xl text-white transform hover:scale-110 active:scale-95 duration-200 ${
              selectedButton === option.value ? 'bg-[#4EA09D]' : 'bg-[#E89E63]'
            }`}
            onClick={() => handleButtonClick(option.value, option.label)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSelect;
