import React, {useState} from 'react';
import product_image from '../asset/product-detail-page-image.png';

import {Link} from './Link';
import {BsHeart} from 'react-icons/bs';
import {GrShare} from 'react-icons/gr';
import pdp_star_image from '../asset/pdp-star-img.svg';
import {FiChevronDown} from 'react-icons/fi';
import pdp_offer_img from '../asset/pdp-page-offer-img.png';
import pdp_shopping_img from '../asset/pdp-shoping-img.png';
import pdp_qulity_img from '../asset/pdp-qulity-img.png';
import pdp_payment_img from '../asset/pdp-payment-img.png';
import pdp_cup_img from '../asset/pdp-cup-img.png';
import pdp_whatsapp_img from '../asset/pdp-whatsapp-img.png';
import pdp_email_img from '../asset/pdp-email-img.png';
import pdp_Amefa_Austin from '../asset/pdp-Amefa Austin-img.png';
import pdp_Mikasa_Reactive_Blue from '../asset/pdp-Mikasa Reactive Blue-img.png';
import {AiFillStar} from 'react-icons/ai';
import {BiStar} from 'react-icons/bi';
import {MdVerified} from 'react-icons/md';
import {MdDone} from 'react-icons/md';
import pdp_benner_img from '../asset/pdp-benner-img.png';
import first_customer from '../asset/first-customer.png';
import second_customer from '../asset/second-customer.png';
import third_customer from '../asset/third-customer.png';
import pdpYouLike from './pdpYouLike';
import NewArrivels from './custom-components/NewArrivels';
import PdpYouLike from './pdpYouLike';

const ProductDetailPage = () => {
  const [count, setCount] = useState(1); // Initialize the count to 1
  const [isDiscriptionOpen, setIsDiscriptionOpen] = useState(false);
  const [isDimensionOpen, setIsDimensionOpen] = useState(false);
  const [isUseAndCareOpen, setIsUseAndCareOpen] = useState(false);
  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const toggleDiscription = () => {
    setIsDiscriptionOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleDimension = () => {
    setIsDimensionOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleUseAndCare = () => {
    setIsUseAndCareOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleAdditionalInfo = () => {
    setIsAdditionalInfoOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleFirstCheckBoxClick = () => {
    setIsFirstChecked(!isFirstChecked);
  };
  const handleSecondCheckBoxClick = () => {
    setIsSecondChecked(!isSecondChecked);
  };

  return (
    <div className="pdp-section sm-only:mt-10 md-only:mt-10 bg-white sm-only:bg-[#FBFBFB]">
      <div className="px-11 sm-only:px-2">
        <div>
          <p className="text-xs font-semibold">
            <span className="text-slate-300	">Home | Knives |</span>Amefa Austin
            Cutlery, Set of 24
          </p>
        </div>
      </div>
      <div className="product-deatil-section grid grid-cols-3 sm-only:px-3  sm-only:grid-cols-1 gap-1 px-11 pt-3 sm-only:columns-1  columns-3">
        
        <div className="product-image-1">
          <div>
            <img src={product_image} alt="" />
          </div>
          <div className="pt-2">
            <img src={product_image} alt="" />
          </div>
        </div>
        <div className="product-image-2">
          <div>
            <img src={product_image} alt="" />
          </div>
          <div className="pt-2">
            <img src={product_image} alt="" />
          </div>
        </div>
        
        <div className="product-contant pl-3">
          <div>
            <Link className="underline  font-semibold text-sm" to="">
              Amefa
            </Link>
            <button className="text-xs absolute right-11 pl-2 pr-2 rounded-none bg-indigo-800 text-white ">
              Bestseller
            </button>
          </div>
          <div className="flex pt-3">
            <h2 className="text-2xl sm-only:text-[15px] text-black font-medium">
              Amefa Austin Cutlery, Set of 24
            </h2>
            <div className="heart-icon flex justify-end pl-24">
              <a href="">
                <BsHeart />
              </a>
            </div>
          </div>
          {/* REVIEW SECTION */}
          <div className="review-section">
            <p className="flex text-xs pt-3 pb-5">
              <span className="text-slate-300">SKU:</span>TK123456789
              <span className="star-image pl-2 pr-2 flex">
                <img
                  className="hover:bg-[#fa55d6]"
                  src={pdp_star_image}
                  alt=""
                />
              </span>
              <span className="underline">400 review</span>
            </p>
          </div>
          <div className="pt-4 mb-4  border-t border-gray-300">
            <p className="text-xs">
              Refined and elegant design with a contemporary feel, the Austin
              pattern has perfect lines and elegant shapes. Made of high-quality
              stainless steel this cutlery set is designed for superior
              durability <span className="text-slate-300">...Read More</span>
            </p>
          </div>
          <div className="pt-4 border-t border-gray-300">
            <p className="flex items-center">
              <span className="text-[#969696] text-xs line-through">
                MRP.₹5999
              </span>
              <span className="pl-2 pr-2 text-xl text-[#E91111] font-semibold">
                ₹4,999
              </span>
              <span className="text-xs bg-[#E91111] text-white p-2 rounded-2xl">
                20% OFF
              </span>
            </p>
            <p className="text-[#969696] text-xs">(inclusive of all taxes)</p>
          </div>
          <div className="sm-only:hidden color-section pt-4 border-t border-gray-300">
            <p className="text-sm	font-semibold">Select Colour: silver</p>
            <div className="mr-3 pt-3">
              <button className="w-6 h-6 bg-gray-100 focus:outline-none focus:ring   rounded-full"></button>
              <button className="ml-4 w-6 h-6 bg-gray-400  focus:outline-none focus:ring rounded-full"></button>
              <button className="ml-4 w-6 h-6 bg-gray-600  focus:outline-none focus:ring rounded-full"></button>
            </div>
          </div>
          <div className="product-counter-section flex pt-4 border-t border-gray-300">
            <div className="product-counter flex w-36 border border-[#E6E6E6] ">
              <p className="hidden md-only:">Qty:</p>
              <button className="text-lg  px-7 py-1" onClick={decrement}>
                -
              </button>
              <p className="flex text-lg font-semibold items-center">{count}</p>
              <button className="text-lg px-7 py-1" onClick={increment}>
                +
              </button>
            </div>
            <div className="flex absolute right-14 mt-3">
              <p className="text-xs">SHARE IT :</p>
              <a className="pl-1" href="">
                <GrShare className="text-gray-400" />
              </a>
            </div>
          </div>
          <div className="sm-only:flex sm-only:grid-cols-2 gap-3 sm-only:pb-3 sm-only:border-b border-gray-300">
            <div className="pt-3">
              <button class="text-white text-sm bg-[#175C8A] hover:bg-[#003354] py-2 px-10 sm-only:px-12 lg:px-36">
                ADD TO CART
              </button>
            </div>
            <div className="pt-3">
              <button class="text-white text-sm bg-[#175C8A] hover:bg-[#003354] sm-only:px-12 py-2 px-12 lg:px-40">
                BUY NOW
              </button>
            </div>
          </div>

          <div className="color-section pt-2  flex items-center justify-between cursor-pointer">
            <h3 className="text-sm font-semibold">Description</h3>
            <FiChevronDown
              size={24}
              className={`transition-transform ${
                isDiscriptionOpen ? 'rotate-180' : ''
              }`}
              onClick={toggleDiscription}
            />
          </div>
          {isDiscriptionOpen && (
            <div>
              <p className="text-sm">
                Refined and elegant design with a contemporary feel, the Austin
                pattern has perfect lines and elegant shapes. Made of
                high-quality stainless steel this cutlery set is designed for
                superior durability. Each piece in Amefa's flatware set has
                delicate and simple design elements on them that will never go
                out of style no matter how often you use them. Set Includes: 6x
                Dinner Forks, 6x Dinner Spoons, 6x Dinner Knives, 6x Dessert
                Spoons
              </p>
            </div>
          )}

          <div className=" pb-2 border-b border-gray-300"></div>
          <div className="color-section pt-2  flex items-center justify-between cursor-pointer">
            <h3 className="text-sm font-semibold">Size & Dimension</h3>
            <FiChevronDown
              size={24}
              className={`transition-transform ${
                isDimensionOpen ? 'rotate-180' : ''
              }`}
              onClick={toggleDimension}
            />
          </div>
          {isDimensionOpen && (
            <div>
              <p className="text-sm">
                Refined and elegant design with a contemporary feel, the Austin
                pattern has perfect lines and elegant shapes. Made of
                high-quality stainless steel this cutlery set is designed for
                superior durability. Each piece in Amefa's flatware set has
                delicate and simple design elements on them that will never go
                out of style no matter how often you use them. Set Includes: 6x
                Dinner Forks, 6x Dinner Spoons, 6x Dinner Knives, 6x Dessert
                Spoons
              </p>
            </div>
          )}
          <div className=" pb-2 border-b border-gray-300"></div>

          <div className="color-section pt-2  flex items-center justify-between cursor-pointer">
            <h3 className="text-sm font-semibold">Use & Care</h3>
            <FiChevronDown
              size={24}
              className={`transition-transform ${
                isUseAndCareOpen ? 'rotate-180' : ''
              }`}
              onClick={toggleUseAndCare}
            />
          </div>
          {isUseAndCareOpen && (
            <div>
              <p className="text-sm">
                Refined and elegant design with a contemporary feel, the Austin
                pattern has perfect lines and elegant shapes. Made of
                high-quality stainless steel this cutlery set is designed for
                superior durability. Each piece in Amefa's flatware set has
                delicate and simple design elements on them that will never go
                out of style no matter how often you use them. Set Includes: 6x
                Dinner Forks, 6x Dinner Spoons, 6x Dinner Knives, 6x Dessert
                Spoons
              </p>
            </div>
          )}
          <div className=" pb-2 border-b border-gray-300"></div>

          <div className="color-section pt-2  flex items-center justify-between cursor-pointer">
            <h3 className="text-sm font-semibold">Additional Info</h3>
            <FiChevronDown
              size={24}
              className={`transition-transform ${
                isAdditionalInfoOpen ? 'rotate-180' : ''
              }`}
              onClick={toggleAdditionalInfo}
            />
          </div>
          {isAdditionalInfoOpen && (
            <div>
              <p className="text-sm">
                Refined and elegant design with a contemporary feel, the Austin
                pattern has perfect lines and elegant shapes. Made of
                high-quality stainless steel this cutlery set is designed for
                superior durability. Each piece in Amefa's flatware set has
                delicate and simple design elements on them that will never go
                out of style no matter how often you use them. Set Includes: 6x
                Dinner Forks, 6x Dinner Spoons, 6x Dinner Knives, 6x Dessert
                Spoons
              </p>
            </div>
          )}
          <div className=" pb-2 border-b border-gray-300"></div>
          <div className="color-section pt-4 ">
            <div>
              <p className="text-sm flex">
                <span>
                  {' '}
                  <img className="pr-2 h-6" src={pdp_offer_img} alt="" />
                </span>{' '}
                Offer
              </p>
            </div>
            <div className="grid pb-3 grid-cols-3 gap-2 mt-2">
              <div className="text-sm border border-gray-300 rounded-lg shadow-md p-2.5">
                <h5 className="font-semibold ">No Cost EMI</h5>
                <p className="text-[11px] mt-[8px]">
                  Avail No Cost EMI on select cards for orders above ₹3000
                </p>
                <p className=" text-[#175C8A] mt-[8px]">1 offer </p>
              </div>
              <div className="text-sm border border-gray-300 rounded-lg shadow-md p-2.5">
                <h5 className="font-semibold ">Bank Offer</h5>
                <p className="text-[11px] mt-[8px]">
                  Upto ₹1,750.00 discount on select Credit Cards,HDFC…
                </p>
                <p className=" text-[#175C8A] mt-[8px]">6 offer </p>
              </div>
              <div className="text-sm border border-gray-300 rounded-lg shadow-md p-2.5">
                <h5 className="font-semibold ">Partner Offers</h5>
                <p className="text-[11px] mt-[8px]">
                  Get GST invoice and save up to 28% on business purchases.
                </p>
                <p className=" text-[#175C8A] mt-[8px]">1 offer </p>
              </div>
            </div>
          </div>
          <div className="color-section pt-4 border-t border-gray-300">
            <div className="grid grid-cols-4 gap-0">
              <div className="border-r border-gray-300 pt-2 ">
                <img
                  className="h-5 w-6 ml-[32px]"
                  src={pdp_shopping_img}
                  alt=""
                />
                <p className="text-[10px] mt-1">
                  Free Shipping on Orders Above Rs 2000!
                </p>
              </div>
              <div className="border-r border-gray-300 p-2 ">
                <img
                  className="h-6 w-4 ml-[30px]"
                  src={pdp_qulity_img}
                  alt=""
                />
                <p className="text-[10px] mt-1">Premium Quality</p>
              </div>
              <div className="border-r border-gray-300 p-2 ">
                <img
                  className="h-5 w-7 ml-[25px]"
                  src={pdp_payment_img}
                  alt=""
                />
                <p className="text-[10px] mt-2">Secure Payments</p>
              </div>
              <div className="p-2">
                <img className="h-6 w-4 ml-[35px]" src={pdp_cup_img} alt="" />
                <p className="text-[10px] mt-1">Award Winning products</p>
              </div>
            </div>
          </div>
          <div className="color-section mt-3 p-2 bg-[#F5F9FA]">
            <h5 className="font-semibold">Want to know more? Get in touch.</h5>
            <p className="text-[11px]">(Monday - Friday - 10am to 6pm)</p>
            <p className="text-[11px] flex mt-3">
              {' '}
              <img className="pr-2 w-6 h-4" src={pdp_whatsapp_img} alt="" /> +91
              704522 3344
            </p>
            <p className="text-[11px] flex mt-2">
              {' '}
              <img className="pr-2 w-6 h-4" src={pdp_email_img} alt="" />
              contact@seebagroup.com
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16 px-11">
          <div className="bg-[#F5F5F5] px-20 py-6">
            <div className="">
              <h1 className="font-ubuntu text-base font-semibold">
                FREQUENTLY BOUGHT TOGETHER
              </h1>
            </div>
            <div className="pt-4 flex">
              <div>
                <img className="w-[190px]" src={product_image} alt="" />
                <p className="text-[14px] mt-2">Amefa Austin </p>
                <p className="text-[14px] mt-2">Cutlery, Set of 24</p>
              </div>
              <div>
                <p className="flex items-center p-[32px] text-[30px]"> +</p>
              </div>
              <div>
                <img className="w-[190px]" src={product_image} alt="" />
                <p className="text-[14px] mt-2">Mikasa Reactive Blue</p>
                <p className="text-[14px] mt-2">Dinnerware Set, 12 pcs</p>
              </div>
              <div className="pl-10">
                <div>
                  <p className="text-sm flex">
                    <div
                      className="w-4 h-4 border bg-white border-[1px solid #ECECEC]  cursor-pointer flex items-center justify-center"
                      onClick={handleFirstCheckBoxClick}
                    >
                      {isFirstChecked && <MdDone className="text-black" />}
                    </div>
                    <span className="pl-3 pr-1">Current items</span>
                    <span className="text-gray-500">
                      {' '}
                      Amefa Austin Cutlery, Set of 24
                    </span>
                  </p>
                  <p>
                    {' '}
                    <span className="text-[#E91111] mr-2 text-[14px]">
                      ₹4,999
                    </span>{' '}
                    <span className="text-slate-300 text-xs line-through text-[10px]">
                      MRP. ₹ 5,999{' '}
                    </span>{' '}
                    <span className="ml-4 text-[14px]"> 20% OFF</span>{' '}
                  </p>
                </div>
                <div className="pt-4 pb-4 border-b border-gray-200">
                  <p className="text-sm flex">
                    <div
                      className="w-4 h-4 border bg-white border-[1px solid #ECECEC]  cursor-pointer flex items-center justify-center"
                      onClick={handleSecondCheckBoxClick}
                    >
                      {isSecondChecked && <MdDone className="text-black" />}
                    </div>
                    <span className="pl-3 text-gray-500">
                      Mikasa Reactive Blue Dinnerware Set, 12 pcs
                    </span>
                  </p>
                  <p>
                    {' '}
                    <span className="text-[#E91111] text-[14px] mr-2">
                      ₹ 8,399
                    </span>{' '}
                    <span className="text-slate-300 text-xs line-through text-[10px]">
                      MRP. ₹ 9,999{' '}
                    </span>{' '}
                    <span className="ml-4 text-[14px]"> 20% OFF</span>{' '}
                  </p>
                </div>
                <div className="ml-8 pt-4 flex">
                  <p className="flex items-center">Total: ₹ 1,040</p>
                  <button class=" text-white text-sm bg-[#003354] ml-4 py-2 pl-5 pr-5 ">
                    Add Both to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <PdpYouLike />
        {/* <NewArrivels/> */}
      </div>

      <div className="mt-16  px-11">
        <div>
          <img src={pdp_benner_img} alt="" />
        </div>
      </div>
      <div className="px-11 sm-only:px-3 mt-16">
        <div className=" px-20 md-only:px-4 sm-only:px-2 bg-[#F5F5F5]">
          <div className="pt-3 pb-4 border-b border-[#D6D6D6]">
            <h1 className="text-[33px] font-semibold sm-only:text-[25px]">CUSTOMER REVIEW</h1>
          </div>
          <div className="grid grid-cols-6 pt-3 sm-only:grid-cols-1">
            <div className='"col-span-1 border-r border-[#D6D6D6] sm-only:border-r-0 '>
              <h1 className="text-[#424242] text-[13px] sm-only:hidden ">
                Customer Reviews
              </h1>
              <img className="w-[85px] mt-2" src={pdp_star_image} alt="" />
              <p className="text-[#424242] text-[13px] mt-2">
                Based on 353 reviews
              </p>
            </div>
            <div className="col-span-4 sm-only:grid-cols-1 sm-only:pl-0 sm-only:mt-3 sm-only:border-t sm-only:border-[#D6D6D6] pl-3">
              <div className="flex items-baseline sm-only:mt-3">
                {/* <img className='w-[85px] mt-2' src={pdp_star_image} alt="" /> */}
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <div class="h-[12px] w-[115px] ml-[10px] bg-[#FFD500]"></div>
                <p className="text-[12px] ml-2">
                  {' '}
                  90% <span className="ml-2">(318)</span>
                </p>
              </div>
              <div className="flex items-baseline">
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <div className="w-[115px] ml-[10px]  border border-[#D6D6D6] flex">
                  <div className="h-[12px] w-[25px] bg-[#FFD500]"></div>
                  <div className="h-[12px] w-[65px] bg-[#F5F5F5]"></div>
                </div>
                <p className="text-[12px] ml-2">
                  {' '}
                  10% <span className="ml-2">(35)</span>
                </p>
              </div>
              <div className="flex items-baseline">
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <div className="w-[115px] ml-[10px] h-[15px] bg-[#F5F5F5] border border-[#D6D6D6]"></div>
                <p className="text-[12px] ml-2">
                  {' '}
                  0% <span className="ml-3">(0)</span>
                </p>
              </div>
              <div className="flex items-baseline">
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <div className="w-[115px] ml-[10px] h-[15px] bg-[#F5F5F5] border border-[#D6D6D6]"></div>
                <p className="text-[12px] ml-2">
                  {' '}
                  0% <span className="ml-3">(0)</span>
                </p>
              </div>
              <div className="flex items-baseline">
                <AiFillStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <div className="w-[115px] ml-[10px] h-[15px] bg-[#F5F5F5] border border-[#D6D6D6]"></div>
                <p className="text-[12px] ml-2">
                  {' '}
                  0% <span className="ml-3">(0)</span>
                </p>
              </div>
            </div>

            <div className="relative  col-span-1 sm-only:border-b sm-only:border-[#D6D6D6] sm-only:col-span-0 top-[30px] sm-only:flex">
              <p className="bg-white pt-[10px] pb-[10px] text-[#606060] text-[12px] sm-only:mb-4 text-center sm-only:px-4 sm-only:py-2 border-[#D6D6D6]">
                Write a Review
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 mt-5 sm-only:mt-10 sm-only:grid-cols-1 bg-white px-5 py-5">
            <div className='"col-span-1 border-r border-[#D6D6D6] sm-only:border-r-0 sm-only:border-b sm-only:border-[#D6D6D6]'>
              <div className="flex md-only:contents">
                <img className="w-[35px]" src={first_customer} alt="" />
                <div className="ml-[10px] md-only:ml-0 mr-[10px]">
                  <p className="text-[14px] text-[#2D2C2E] font-semibold">
                    Pankaj Saini
                  </p>
                  <p className="text-[14px] font-semibold text-[#2D2C2E]">
                    25/6/2022
                  </p>
                </div>
                <p>
                  {' '}
                  <MdVerified />
                </p>
              </div>
              <div className="flex justify-center items-center sm-only:justify-start ">
                <img
                  className="w-[85px] mb-[25px] sm-only:ml-[45px]"
                  src={pdp_star_image}
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-5 sm-only:col-span-1 sm-only:mt-3 sm-only:pl-0 pl-6">
              <div>
                <p className="text-[#2D2C2E] text-[14px] font-bold	">
                  It is a good product for good health
                </p>
                <p className="text-[#2D2C2E] text-[13px]">
                  Iam using this product from last 60days. It is very good
                  product.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 mt-5 sm-only:mt-10 sm-only:grid-cols-1 bg-white px-5 py-5">
            <div className='"col-span-1 border-r border-[#D6D6D6] sm-only:border-r-0 sm-only:border-b sm-only:border-[#D6D6D6]'>
              <div className="flex">
                <img className="w-[35px]" src={second_customer} alt="" />
                <div className="ml-[10px] mr-[10px]">
                  <p className="text-[14px] text-[#2D2C2E] font-semibold">DP</p>
                  <p className="text-[14px] font-semibold text-[#2D2C2E]">
                    15/6/2022
                  </p>
                </div>
                <p>
                  {' '}
                  
                </p>
              </div>
              <div className="flex justify-center items-center sm-only:justify-start ">
                <img
                  className="w-[85px] mt-2 mb-[25px] sm-only:ml-[45px]"
                  src={pdp_star_image}
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-5 sm-only:col-span-1 sm-only:mt-3 sm-only:pl-0 pl-6">
              <div>
                <p className="text-[#2D2C2E] text-[14px] font-bold	">
                  The best product requires perfect health
                </p>
                <p className="text-[#2D2C2E] text-[13px]">looks good</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 mt-5 sm-only:mt-10 sm-only:grid-cols-1 bg-white px-5 py-5">
            <div className='"col-span-1 border-r border-[#D6D6D6] sm-only:border-r-0 sm-only:border-b sm-only:border-[#D6D6D6]'>
              <div className="flex">
                <img className="w-[35px]" src={third_customer} alt="" />
                <div className="ml-[10px] mr-[10px]">
                  <p className="text-[13px] text-[#2D2C2E] font-semibold">
                    Amlan Jyoti Das
                  </p>
                  <p className="text-[14px] font-semibold text-[#2D2C2E]">
                    10/6/2022
                  </p>
                </div>
                <p>
                  {' '}
                  <MdVerified />
                </p>
              </div>
              <div className="flex justify-center items-center sm-only:justify-start ">
                <img
                  className="w-[85px] mb-[25px] sm-only:ml-[45px]"
                  src={pdp_star_image}
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-5 sm-only:col-span-1 sm-only:mt-3 sm-only:pl-0 pl-6">
              <div>
                <p className="text-[#2D2C2E] text-[14px] font-bold	">
                  A healthy body makes for a good product
                </p>
                <p className="text-[#2D2C2E] text-[13px]">
                  Iam using this product from last 60days. It is very good
                  product.
                </p>
              </div>
            </div>
          </div>

          <div className="py-6">
            <p className="flex justify-center items-center">
              <span className="font-bold"> 01</span>
              <span className="ml-4 text-[#777777]">02</span>
              <span className="ml-4 text-[#777777]">03</span>
              <span className="ml-4 text-[#777777]">04</span>
              <span className="ml-4 text-[#777777]">...</span>
              <span className="ml-4 text-[#777777]">07</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pdp-footer sticky sm-only:col-span-1 shadow-[0px -5px 6px #0000000] pt-3 px-4 md:px-11 pb-3 bg-white bottom-0 grid md:grid-cols-2">
        <div className="flex md-only:hidden sm-only:hidden">
          <h2 className="text-2xl text-black font-medium flex items-center">
            Amefa Austin Cutlery, Set of 24
          </h2>
        </div>
        <div className="flex md-only:flex md-only:ml-4 mt-3 md-only:mt-0 md-only:items-end">
          <div className="md:pl-5">
            <p className="flex items-center">
              <span className="text-[#969696] text-xs line-through">
                MRP.₹5999
              </span>
              <span className="pl-2 pr-2 text-xl text-[#E91111] font-semibold">
                ₹4,999
              </span>
              <span className="text-xs bg-[#E91111] text-white p-2 rounded-2xl">
                20% OFF
              </span>
            </p>
            <p className="text-[#969696] text-xs">(inclusive of all taxes)</p>
          </div>
          <div className="mt-3 md:mt-4">
            <div className="flex">
              <div className="md-only:hidden product-counter flex w-36 border border-[#E6E6E6] ">
                <button className="text-base px-4" onClick={decrement}>
                  -
                </button>
                <p className="flex text-lg font-semibold items-center">
                  {count}
                </p>
                <button className="text-base px-4" onClick={increment}>
                  +
                </button>
              </div>
              <div className="ml-4 mt-2">
                <button class=" text-white text-[10px] bg-[#175C8A] hover:bg-[#003354] py-2 px-4">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
