'use client'
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import Locomotive Scroll CSS

const ScrollComponent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this runs only on the client

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true, // Optional: get scroll direction
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <section data-scroll-section>
        {/* Your content here */}
      </section>
      <section data-scroll-section>
        {/* More content */}
      </section>
    </div>
  );
};

export default ScrollComponent;
