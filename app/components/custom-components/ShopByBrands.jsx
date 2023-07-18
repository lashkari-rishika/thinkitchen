import React from 'react';
import { Link } from '@remix-run/react';

const ShopByBrands = ({ images }) => {
  return (
    <div className="text-center py-4 px-10">
      <div>
        <h1 className="text-4xl pb-4">SHOP BY BRANDS</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link href="https://www.google.com/" target="_blank">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-150 object-cover"
              />
            </Link>
          </div>   
        ))}
      </div>
      <div className='mt-4'>
          <h2>Viwe All Brands </h2>
      </div>
    </div>
  );
};

export default ShopByBrands