import React, {useState, useEffect} from 'react';
import {Link} from '@remix-run/react';
import '../../styles/app.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';

import {SortBy} from '../custom-components/SortBy';
import {FilterC} from '../custom-components/FilterC';
import {Accordian} from '../custom-components/Accordian';
// import {faqData} from '../custom-components/Accordian'
import {accordian} from '../../../JSON/db.json';
import arrival1 from '../../asset/arrival1.png';
import { PlpFilterUI } from './PlpFilterUI';

import {GrClose} from 'react-icons/gr';


import {SortFilter} from './../SortFilter';
const productsPerPage = 6;

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
    productName: 'Rudra',
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
    productName: 'Rishika',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 4,
    imageSrc: arrival1,
    discountTag: '20% OFF',
    heart: AiOutlineHeart,
    productName: 'D',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
    imageSrc: arrival1,
    discountTag: '20% OFF',
    heart: AiOutlineHeart,
    productName: 'Keval',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 8,
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
    id: 9,
    imageSrc: arrival1,
    discountTag: '20% OFF',
    heart: AiOutlineHeart,
    productName: 'e Austin Cutlery, Set of 24',
    price: '₹ 4,999',
    discountedPrice: '₹ 5,999',
    cartButton: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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

const Plp = () => {
  const [data, setData] = useState(accordian);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [isFilterUIVisible, setIsFilterUIVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState('');

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const totalPages = Math.ceil(media.length / productsPerPage);
  const currentRangeStart = firstIndex + 1;
  const currentRangeEnd = Math.min(lastIndex, media.length);

  const filteredProducts =
  searchQuery.trim() === ''
  ? media
  : media.filter((product) =>
  product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  const handleFilterIconClick = () => {
    setIsFilterUIVisible(!isFilterUIVisible); // Toggle the visibility of PlpFilterUI on icon click
  };
  const handleDropDownIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the visibility of PlpFilterUI on icon click
  };

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    // Reset currentPage to 1 when the search query changes
    setCurrentPage(1);
  }, [searchQuery]);

  const handleOptionSelect = (option) => {
    console.log("🚀 ~ file: Plp.jsx:246 ~ handleOptionSelect ~ option:", option)
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
    <div>
      {/* --------------------------Mobile view search------------------------- */}
      <div className=" lg:hidden bg-[#F6F6F6] relative w-full">
        <input
          className="bg-[#F6F6F6] text-sm border-0 w-full"
          type="text"
          value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          onChange={handleSearchChange}

          placeholder="Search products"
          />
        <FiSearch className="absolute right-2.5 top-[0.7rem]" />
      </div>
      {/* --------------------------Mobile view search end------------------------- */}

      {/* ------------------------Mobile view sort and filter----------------------- */}
      {isFilterUIVisible && <PlpFilterUI />}
      <div className='lg:hidden fixed bottom-0 left-0 w-full bg-black text-white z-[100]'>
          <div className='flex justify-between py-4'>
            <div onClick={handleFilterIconClick}
              className='flex justify-center items-center w-1/2'>FILTER BY
            </div>
            <div onClick={() => {handleDropDownIconClick();} }
              className='flex justify-center items-center w-1/2'>SORT BY
            </div>
          </div>
        </div>
        {/* {isDropdownOpen && <SortBy/>} */}
        {isDropdownOpen && (
          <div className='plp_filter_main'>
          <div className="lg:hidden bg-white p-2 mt-1 rounded shadow-lg w-[75%] min-w-max fixed bottom-12 right-0 z-10">
            <div className='flex justify-between items-center text-black font-semibold py-5 px-1.5 border-b'>
              <div>SORT BY</div>
              <div onClick={handleDropDownIconClick} className=''><GrClose/></div>
            </div>
            <div className='pt-4 pb-6 px-6'>
              <label className="mb-[2px] hover:bg-gray-200 py-1.5 rounded cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="sortingOption"
                  value="Bestselling"
                  checked={selectedOption === 'Bestselling'}
                  onChange={() => handleOptionSelect('Bestselling')}
                  className="hidden"
                />
                <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                  <span className={`w-2 h-2 rounded-full ${selectedOption === 'Bestselling' ? 'bg-blue-500' : 'bg-white'}`}></span>
                </span>
                <span className="text-sm">Bestselling</span>
              </label>
              <label className="mb-[2px] hover:bg-gray-200 py-1.5 rounded cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="sortingOption"
                  value="New Arrival"
                  checked={selectedOption === 'New Arrival'}
                  onClick={() => handleOptionSelect('New Arrival')}
                  className="hidden"
                />
                <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                  <span className={`w-2 h-2 rounded-full ${selectedOption === 'New Arrival' ? 'bg-blue-500' : 'bg-white'}`}></span>
                </span>
                <span className="text-sm">New Arrival</span>
              </label>
              <label className="mb-[2px] hover:bg-gray-200 py-1.5 rounded cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="sortingOption"
                  value="Price (low - high)"
                  checked={selectedOption === 'Price (low - high)'}
                  onClick={() => handleOptionSelect('Price (low - high)')}
                  className="hidden"
                />
                <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                  <span className={`w-2 h-2 rounded-full ${selectedOption === 'Price (low - high)' ? 'bg-blue-500' : 'bg-white'}`}></span>
                </span>
                <span className="text-sm">Price (low - high)</span>
              </label>
              <label className="mb-[2px] hover:bg-gray-200 py-1.5 rounded cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="sortingOption"
                  value="Price (high - low)"
                  checked={selectedOption === 'Price (high - low)'}
                  onClick={() => handleOptionSelect('Price (high - low)')}
                  className="hidden"
                />
                <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                  <span className={`w-2 h-2 rounded-full ${selectedOption === 'Price (high - low)' ? 'bg-blue-500' : 'bg-white'}`}></span>
                </span>
                <span className="text-sm">Price (high - low)</span>
              </label>
            </div>
          </div>
        </div>
        )}
      {/* ----------------------Mobile view sort and filter end--------------------- */}

      <div className="bg-[#FBFBFB] plp_main_section sm-only:px-3 px-10 relative">
        <div className="flex md-max:justify-center text-xs py-2 ">
          <div className="text-gray-400 mr-1">Home |</div>
          <div className="text-black">Knives</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-1 mr-5 font-notmal text-sm md-max:hidden ">
            <div>{media.length} Items</div>
          </div>

          <div className="flex-1 text-center">
            <div className="plp-section-heading">
              <h1 className="text-3xl md-max:text-2xl text-[2rem] font-medium pb-1.5">
                KNIVES
              </h1>
            </div>
          </div>

          <div className="flex-1 flex justify-end items-center text-sm font-normal md-max:hidden">
            {/* <SortFilter /> */}
            <SortBy />
            <FilterC />
          </div>
        </div>

        <div className="text-center text-sm md-max:text-[0.7rem] mb-5 leading-5 font-normal">
          Elevate Your Culinary Experience with a Kitchen Designed <br />
          for Extraordinary Taste; Creating Flavors, Crafting Memories: The
          Epicenter of Culinary Excellence!
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2.5">
          {currentProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="new_arrivel_card relative w-full">
                <Link href={product.link} className="w-full" target="_blank">
                  <img
                    src={product.imageSrc}
                    alt="Product"
                    className="w-full object-cover hover_image"
                    />
                  <button className="absolute top-2 md-max:top-1 md-max:right-1 right-2 p-1 bg-white rounded-full ">
                    <AiOutlineHeart />
                  </button>
                  <div className="discount_lable absolute p-1 text-xs md-only:text-sm md-only:p-[0.1rem] text-red-600 bg-white rounded-br-lg">
                    {product.discountTag}
                  </div>
                  <div className="px-1 py-2 flex w-full md-max:flow-root">
                    <div className="product_card_text w-9/12 md-max:w-full">
                      <div className="font-medium text-base sm-only:text-base md-only:text-xs leading-5 md-only:leading-4">
                        {product.productName}
                      </div>
                      <span className="text-sm text-gray-400 md-only:text-[12px] mb-1 gap-1">
                        {product.discountedPrice}
                      </span>
                      <span className="text-red-500 text-base md-max:text-sm mb-1">
                        {product.price}
                      </span>
                    </div>
                    <div className=" product_card_button 4/12 md-max:w-[50%]">
                      <button className="add_cart_button text-sm md-omly:text-[0.675rem] md-only:text-[0.65rem] md-only:leading-[1rem] block w-full bg-white-500 font-medium text-black py-1 px-2 md-only:px-1 border border-solid border-gray-300 min-w-max">
                        {product.cartButton}
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

        <div className="faq-section my-10 bg-white ">
          <div className="lg:px-20 sm:px-2 lg:py-6 sm:py-2">
            <h2 className="faq-title font-bold py-2 text-xl">
              Faq on thinkitchen products
            </h2>
            {data.map((curData) => {
              const {id} = curData;
              return <Accordian key={id} {...curData} />;
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Plp;
