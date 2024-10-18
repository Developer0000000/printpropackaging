import React from 'react';
import MainForm from './form/MainForm';

const Popup = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <>
            {isOpen &&
                <div className={`fixed inset-0 flex items-center justify-center z-[999999999999999999] transition-all duration-500 pop__up`}>
                    <div className="form_bg px-3 py-5 md:p-8 rounded-lg shadow-lg w-full max-w-2xl relative z-[999999] overflow-auto h-[70vh] md:h-[85vh] quote_box">
                        <div className="flex justify-between items-center mb-4 p-2 dark_primary_bg rounded-md text-white w-full">
                            <h2 className="font-semibold text-white text-center uppercase">Get a Free Quote</h2>
                            <button onClick={onClose} className="text-white">
                                <i className="ri-close-large-fill text-2xl"></i>
                            </button>
                        </div>
                        <MainForm />
                    </div>
                    <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                </div>
            }
        </>
    );

};

export default Popup;