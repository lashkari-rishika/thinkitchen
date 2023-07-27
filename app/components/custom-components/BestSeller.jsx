import React from 'react';
import {Link} from '@remix-run/react';
import '../../styles/app.css';

import {AiOutlineHeart} from 'react-icons/ai';

import arrival1 from '../../asset/arrival1.png';

const media = [
  {
    id: 1,
    imageSrc: arrival1,
    discountTag: '20% OFF',
    heart: AiOutlineHeart,
    productName: 'Amefa Austin Cutlery, Set of 24',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 2,
    imageSrc: arrival1,
    discountTag: '20% OFF',
    heart: AiOutlineHeart,
    productName: 'Amefa Austin Cutlery, Set of 24',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 3,
    imageSrc: arrival1,
    discountTag: '20% OFF',
    heart: AiOutlineHeart,
    productName: 'Amefa Austin Cutlery, Set of 24',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
];

const BestSeller = () => {
  return (
    <div className="bestseller_main_section mt-10 xs-only:px-3 px-10">
      <div className="bestseller-section-heading">
        <h1 className="text-4xl text-center font-medium pb-4">BEST SELLERS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2.5">
        {media.map((media) => (
          <div key={media.id} className="flex flex-col items-center">
            <div className="new_arrivel_card relative w-full">
              <Link href={media.link} className="w-full" target="_blank">
                <img
                  src={media.imageSrc}
                  alt="Product"
                  className="w-full object-cover hover_image"
                />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full ">
                  <AiOutlineHeart/>
                </button>
                <div className="discount_lable absolute p-2 text-red-600 bg-white rounded-br-lg  font-xs">
                  {media.discountTag}
                </div>
                <div className="px-1 py-2 flex w-full">
                  <div className="product_card_text w-9/12">
                    <div className="font-semibold text-sm mb-2">
                      {media.productName}
                    </div>
                    <span className="font-xs text-gray-400 mb-1 gap-1">
                      {media.discountedPrice}
                    </span>
                    <span className="text-red-500 font-xs mb-1">
                      {media.price}
                    </span>
                  </div>
                  <div className=" product_card_button 4/12">
                    <button className="add_cart_button text-sm block w-full bg-white-500 font-semibold text-black py-1 px-2 border border-solid border-gray-300">
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

export default BestSeller;
