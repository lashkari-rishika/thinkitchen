import React, {useEffect, useState} from 'react';
import {Link} from '@remix-run/react';
import '../styles/app.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsHeartFill} from 'react-icons/bs';

import arrival1 from '../asset/arrival1.png';

const media = [
  {
    id: 1,
    imageSrc: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/arrival1_d2794317-8f6f-485a-9ffb-d41a4880eb94.png?v=1693223964",
    discountTag: '20% OFF',
    heart: 'AiOutlineHeart',
    productName: 'Amefa Austin Cutlery, Set of 24',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 2,
    imageSrc: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/arrival1_d2794317-8f6f-485a-9ffb-d41a4880eb94.png?v=1693223964",
    discountTag: '20% OFF',
    heart: 'AiOutlineHeart',
    productName: 'Amefa Austin Cutlery, Set of 24',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 3,
    imageSrc: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/arrival1_d2794317-8f6f-485a-9ffb-d41a4880eb94.png?v=1693223964",
    discountTag: '20% OFF',
    heart: 'AiOutlineHeart',
    productName: 'Amefa Austin Cutlery, Set of 24',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
];

const PdpYouLike = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="mt-10 sm-only:px-3 px-10">
      <div className="arrivel-section-heading">
        <h1 className="text-4xl text-center font-medium pb-4">
          YOU MAY ALSO LIKE
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2.5">
        {media.map((media, index) => (
          <div key={media.id} className="flex flex-col items-center">
            <div className="new_arrivel_card relative w-full">
              <Link href={media.link} className="w-full" target="_blank">
                <img
                  src={media.imageSrc}
                  alt="Product"
                  className="w-full object-cover hover_image"
                />
                <button
                  className="absolute top-2 right-2 p-2 rounded-full"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    backgroundColor:
                      hoveredIndex === index ? 'transparent' : 'white',
                  }}
                >
                  {hoveredIndex === index ? (
                    <BsHeartFill className="text-[#fa55d6]" />
                  ) : (
                    <AiOutlineHeart className="text-black" />
                  )}
                </button>

                <div className="discount_lable absolute p-2 md-only:text-sm md-only:p-[0.1rem] text-red-600 bg-white rounded-br-lg  font-xs">
                  {media.discountTag}
                </div>
                <div className="px-1 py-2 flex w-full">
                  <div className="product_card_text w-9/12">
                    <div className="font-semibold text-sm md-only:text-xs md-only:leading-4">
                      {media.productName}
                    </div>
                    <span className="font-xs text-gray-400 md-only:text-[12px] mb-1 gap-1">
                      {media.discountedPrice}
                    </span>
                    <span className="text-red-500 font-xs md-only:text-[12px] mb-1">
                      {media.price}
                    </span>
                  </div>
                  <div className=" product_card_button 4/12">
                    <button className="add_cart_button text-sm md-omly:text-[0.675rem] md-only:text-[0.65rem] md-only:leading-[1rem] block w-full bg-white-500 font-semibold text-black py-1 px-2 md-only:px-1 border border-solid border-gray-300 min-w-max">
                      {media.cartButton}
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdpYouLike;
