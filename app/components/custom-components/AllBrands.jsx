import React, {useState} from 'react';
import {Link} from '@remix-run/react';

import BrandsBanner from '../../asset/BrandsBanner.png';
import data from '../../../JSON/db.json';

export const AllBrands = () => {
  const productsPerPage = 10; // Set the number of products per page
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const totalPages = Math.ceil(data.AllBrands.length / productsPerPage);
  const currentProducts = data.AllBrands.slice(firstIndex, lastIndex);

  return (
    <div className="mb-8">
      <div className="md-max:h-[25rem]">
        <img className="object-cover min-h-full min-w-full" src={BrandsBanner} />
      </div>
      <div className="my-5 mx-10 md-max:mx-3">
        <div className="flex justify-center text-xs py-2 ">
          <div className="text-gray-400 mr-1">Home |</div>
          <div className="text-black">Knives</div>
        </div>
        <div className="flex justify-center text-[40px] md-max:text-[26px]">
          All Brands
        </div>
        <div className="flex justify-center text-center text-base md-max:text-sm leading-5 font-normal">
          At thinKitchen, we want to encourage families to cook, eat and live a
          healthy and happy life. For us, the kitchen is the heart of{' '}
          <br className="lg-max:hidden" />
          the home – the hub of all activities where memories are made.
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-10 md-max:mx-3">
        {currentProducts.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center ${
              index % 2 === 0 ? '' : 'md:mt-12'
            } w-full md:w-[50%] px-2 sm-only:px-0`}
          >
            <div className="All_Brands_card w-full md-max:py-2.5">
              <Link href={item.link} className="w-full" target="_blank">
                <div className="relative">
                  <img
                    src={item.imageSrc}
                    alt="Product"
                    className="w-full object-cover hover_image"
                  />
                  <div className="flex justify-center absolute top-[40%] left-[37%] w-[30%]">
                    <img src={item.logoImg} />
                  </div>
                </div>
                <div className="px-1 py-2 w-full">
                  <div className="All_Brands_card_text w-full">
                    <div className="font-semibold text-3xl md-max:text-xl mb-2">
                      {item.Name}
                    </div>
                    <div className="font-normal text-base md-max:text-sm mb-2">
                      {item.text}
                    </div>
                  </div>
                  <div className=" All_Brands_card_button w-1/3 md-only:w-[40%] lg-max:max-w-max sm-only:[30%]">
                    <button className="add_cart_button text-sm block w-full min-w-max bg-white-500 font-normal text-black py-1.5 px-4 border border-solid border-gray-300">
                      {item.exploreBtn}
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            to={`/?page=${page}`}
            className={`mx-1 flex items-center ${
              currentPage === page ? ' text-black' : ' text-gray-500'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};
