import React from 'react';

const ProductQuality = ({ icon, title }) => {
    return (
        <div className="bg-[#2E4057] text-white rounded-md p-3 flex items-center">
            <div className="text-3xl mr-3">
                {icon}
            </div>
            <div className="font-medium">
                {title}
            </div>
        </div>
    );
};

export default ProductQuality;