import React from 'react';
import { Link } from '@remix-run/react';

const ShopByCategory = ({ images }) => {
  return (
    <div className="text-center pb-4 px-10">
      <div>
        <h1 className="text-4xl pb-4">SHOP BY CATEGORY</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link href="https://www.google.com/" target="_blank">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </Link>
            <h2 className="mt-2">IMAGE {index + 1}</h2> {/* Replace 'Image Heading' with your actual headings */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
