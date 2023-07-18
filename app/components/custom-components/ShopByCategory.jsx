import React, { useRef, useState } from 'react';
import { Link } from '@remix-run/react';

const ShopByCategory = ({ images }) => {
  const containerRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setScrolling(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollX(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setScrolling(false);
  };

  const handleMouseMove = (e) => {
    if (!scrolling) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Increase the scrolling speed by adjusting the multiplier
    containerRef.current.scrollLeft = scrollX - walk;
  };

  return (
    <div className="text-center pb-4 px-10">
      <div>
        <h1 className="text-4xl pb-4">SHOP BY CATEGORY</h1>
      </div>
      <div
        className="flex overflow-x-auto whitespace-nowrap"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 mx-1">
            <Link href="https://www.google.com/" target="_blank">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </Link>
            <h2 className="mt-2">IMAGE {index + 1}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
