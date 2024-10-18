'use client'
import React, { useRef } from 'react'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Tawk = () => {

    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="fixed bottom-10 right-10 z-[999999999999]">
            <button onClick={handleMinimize}></button>

            <TawkMessengerReact
                propertyId={process.env.NEXT_PUBLIC_TWAK_PROPERTY_ID}
                widgetId={process.env.NEXT_PUBLIC_TWAK_WIDGET_ID}
                ref={tawkMessengerRef}/>
        </div>
    );
}

export default Tawk
