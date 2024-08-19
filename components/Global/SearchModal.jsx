// // components/SearchModal.jsx
// 'use client'
// import React, { useState } from 'react';

// const SearchModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;

//     const [search, setSearch] = useState('');

//     return (
//         <div className="fixed inset-0 z-50">
//             <div className="bg-white w-full max-w-3xl mx-auto rounded shadow-lg px-8 py-6 translate-y-10 relative z-50">
//                 <div className="flex justify-between items-center mb-4 border-b-2 pb-1.5">
//                     <h2 className="text-xl font-semibold">Search your box</h2>
//                     <button onClick={onClose} className="text-gray-900 text-2xl">
//                         <i className="ri-close-line"></i>
//                     </button>
//                 </div>
//                 <form className="flex pt-3">
//                     <input
//                         type="search"
//                         placeholder="I'm looking for ..."
//                         className="flex-grow p-2 border border-gray-300 rounded focus:outline-none"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                     {/* <button className="bg-gray-800 text-white p-2 rounded-r">
//                         Search
//                     </button> */}
//                 </form>
//             </div>
//             <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
//         </div>
//     );
// };

// export default SearchModal;
