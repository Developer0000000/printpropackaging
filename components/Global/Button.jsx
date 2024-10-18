import React, { useState } from 'react';
import Popup from './Popup';

const Button = ({ text, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true)
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={openPopup}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded text-sm px-3 py-1.5 flex items-center"
      >
        {icon} {text}
      </button>
      <Popup isOpen={isOpen} onClose={closePopup} />
    </>
  );
};

export default Button;

