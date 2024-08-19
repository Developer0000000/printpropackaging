import React, { useState } from 'react';
import Popup from './Popup';

const Button = ({ text, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={openPopup}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center"
      >
        {icon} {text}
      </button>
      <Popup isOpen={isOpen} onClose={closePopup} />
    </>
  );
};

export default Button;
