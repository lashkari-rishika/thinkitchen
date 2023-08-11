import React, {useState} from 'react';
import product_image from '../asset/product-detail-page-image.png';

import '../../node_modules/swiper/swiper-bundle.css';

import {Link} from './Link';
import {BsHeart,BsHeartFill} from 'react-icons/bs';
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
import {MdDone} from 'react-icons/md';
import pdp_benner_img from '../asset/pdp-benner-img.png';
import PdpYouLike from './pdpYouLike';
import CustomerReview from './CustomerReview';
import pdp_share_facebook from '../asset/pdp_share_facebook.png';
import pdp_share_whatsapp from '../asset/pdp_share_whatsapp.png';
import pdp_share_link from '../asset/pdp_share_link.png';

const ProductDetailPage = () => {
  const TEXT_SLATE_300 = 'text-slate-300';

  const [count, setCount] = useState(1); // Initialize the count to 1
  const [isDiscriptionOpen, setIsDiscriptionOpen] = useState(false);
  const [isDimensionOpen, setIsDimensionOpen] = useState(false);
  const [isUseAndCareOpen, setIsUseAndCareOpen] = useState(false);
  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);
  const [shareIconVisible, setShareIconVisible] = useState(false);
  const reviewIds = [1, 2, 3];
  const initialShowMore = false;
  const [showMore, setShowMore] = useState(initialShowMore);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="pdp-section sm-only:mt-10 md-only:mt-10 bg-white sm-only:bg-[#FBFBFB]">
      <div className="px-11 sm-only:px-2">
        <div>
          <p className="text-xs font-semibold">
            <span className={TEXT_SLATE_300}>Home | Knives |</span>Amefa Austin
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
            <button className="text-xs absolute sm-only:right-[15px] right-11 pl-2 pr-2 rounded-none bg-indigo-800 text-white ">
              Bestseller
            </button>
          </div>
          <div className="flex pt-3">
            <h2 className="text-2xl sm-only:text-[15px] text-black font-medium">
              Amefa Austin Cutlery, Set of 24
            </h2>
            <div className="heart-icon md-only:ml-[115px] flex sm-only:pl-[160px] justify-end pl-24 md-only:pl-0 lg-only:pl-0">
            <a href="#" onClick={handleLikeClick}>
                {liked ? (
                    <BsHeartFill className="text-[#fa55d6]" />
                ) : (
                    <BsHeart className="text-black" />
                )}
            </a>
        </div>
          </div>
          {/* REVIEW SECTION */}
          <div className="review-section">
            <p className="flex text-xs pt-3 pb-5">
              <span className={TEXT_SLATE_300}>SKU:</span>TK123456789
              <span className="star-image pl-2 pr-2 flex">
                <img
                  className=" transition duration-300"
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
              durability
              {showMore ? (
                <>
                  {
                    ' Additional content you want to show when "Read More" is clicked. '
                  }
                  <span
                    className="text-[#969696] cursor-pointer "
                    onClick={toggleShowMore}
                  >
                    Read Less
                  </span>
                </>
              ) : (
                <span
                  className="text-[#969696] cursor-pointer "
                  onClick={toggleShowMore}
                >
                  ...Read More
                </span>
              )}
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
              <button className="w-6 h-6 bg-gray-100   focus:outline-none focus:ring   rounded-full"></button>
              <button className="ml-4 w-6 h-6 bg-gray-400  focus:outline-none focus:ring rounded-full"></button>
              <button className="ml-4 w-6 h-6 bg-gray-600  focus:outline-none focus:ring rounded-full"></button>
            </div>
          </div>

          <div className="product-counter-section relative flex pt-4 border-t border-gray-300">
            <div
              className={`share-icon ${
                shareIconVisible ? 'block' : 'hidden'
              } flex absolute right-[4%] bottom-[45px] bg-white shadow-md`}
            >
              <img className="p-[5px] w-10" src={pdp_share_facebook} alt="" />
              <img className="p-[5px] w-10" src={pdp_share_whatsapp} alt="" />
              <img className="p-[5px] w-10" src={pdp_share_link} alt="" />
            </div>
            <p className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden sm-only:mt-[5px] ">
              Qty:
            </p>
            <div className="product-counter flex w-36 sm-only:w-[105px] border border-[#E6E6E6] ">
              <button
                className="text-lg  px-7 sm-only:px-[15px] py-1"
                onClick={decrement}
              >
                -
              </button>
              <p className="flex text-lg font-semibold items-center">{count}</p>
              <button
                className="text-lg px-7 sm-only:px[15px] py-1"
                onClick={increment}
              >
                +
              </button>
            </div>
            <div className="flex absolute right-[5px] mt-3 sm-only:right-[25px] sm-only:mt-0 sm-only:items-center">
              <p className="text-xs">SHARE IT :</p>
              <a
                className="pl-1 sm-only:hidden sm-only-hidden cursor-pointer"
                onClick={() => setShareIconVisible(!shareIconVisible)}
              >
                <GrShare className="text-gray-400" />
              </a>
              <div
                className={`share-icon flex  shadow-md sm-only:shadow-none 2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden `}
              >
                <img className="p-[5px] w-10" src={pdp_share_facebook} alt="" />
                <img className="p-[5px] w-10" src={pdp_share_whatsapp} alt="" />
                <img className="p-[5px] w-10" src={pdp_share_link} alt="" />
              </div>
            </div>
          </div>
          <div className="sm-only:flex sm-only:grid-cols-2 gap-3 sm-only:pb-3 sm-only:border-b border-gray-300">
            <div className="pt-3 w-[100%]">
              <button class="text-white text-sm w-[100%] bg-[#175C8A] hover:bg-[#003354] py-2">
                ADD TO CART
              </button>
            </div>
            <div className="pt-3 w-[100%]">
              <button class="text-white w-[100%] text-sm bg-[#175C8A] hover:bg-[#003354]  py-2 ">
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
            <div className="grid pb-3 sm-only:overflow-x-scroll sm-only:gap-2 lg-only:grid-cols-2 md-only:grid-cols-1 grid-cols-3 gap-2 mt-2">
              <div className="text-sm sm-only:w-[130%]  sm-only:bg-white border border-gray-300 rounded-lg shadow-md p-2.5">
                <h5 className="font-semibold ">No Cost EMI</h5>
                <p className="text-[11px] mt-[8px]">
                  Avail No Cost EMI on select cards for orders above ₹3000
                </p>
                <p className=" text-[#175C8A] mt-[8px]">1 offer </p>
              </div>
              <div className="text-sm sm-only:ml-[35px] sm-only:w-[130%]  sm-only:bg-white border border-gray-300 rounded-lg shadow-md p-2.5">
                <h5 className="font-semibold ">Bank Offer</h5>
                <p className="text-[11px] mt-[8px]">
                  Upto ₹1,750.00 discount on select Credit Cards,HDFC…
                </p>
                <p className=" text-[#175C8A] mt-[8px]">6 offer </p>
              </div>
              <div className="text-sm sm-only:w-[130%] sm-only:ml-[70px] sm-only:bg-white border border-gray-300 rounded-lg shadow-md p-2.5">
                <h5 className="font-semibold ">Partner Offers</h5>
                <p className="text-[11px] mt-[8px]">
                  Get GST invoice and save up to 28% on business purchases.
                </p>
                <p className=" text-[#175C8A] mt-[8px]">1 offer </p>
              </div>
            </div>
          </div>
          <div className="color-section pt-4 border-t border-gray-300">
            <div className="grid grid-cols-4 lg-only:grid-cols-2 md-only:grid-cols-2 gap-0">
              <div className="border-r border-gray-300 pt-2 sm-only:border-0 ">
                <img
                  className="h-5 w-6 ml-[32px] md-only:ml-[20px]"
                  src={pdp_shopping_img}
                  alt=""
                />
                <p className="text-[10px] mt-1 md-only:text-center sm-only:text-center">
                  Free Shipping on Orders Above Rs 2000!
                </p>
              </div>
              <div className="border-r border-gray-300 p-2 sm-only:border-0 lg-only:border-0 md-only:border-0">
                <img
                  className="h-6 w-4 ml-[30px] md-only:ml-[20px]"
                  src={pdp_qulity_img}
                  alt=""
                />
                <p className="text-[10px] mt-1 md-only:text-center sm-only:text-center">
                  Premium Quality
                </p>
              </div>

              <div className="border-r border-gray-300 p-2 sm-only:border-0">
                <img
                  className="h-5 w-7 ml-[25px] md-only:ml-[20px]"
                  src={pdp_payment_img}
                  alt=""
                />
                <p className="text-[10px] mt-2 md-only:text-center sm-only:text-center">
                  Secure Payments
                </p>
              </div>
              <div className="p-2">
                <img
                  className="h-6 w-4 ml-[35px] md-only:ml-[20px]"
                  src={pdp_cup_img}
                  alt=""
                />
                <p className="text-[10px] mt-1 md-only:text-center sm-only:text-center">
                  Award Winning products
                </p>
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
            <p className="text-[11px] flex mt-2 md-only:text-[10px]">
              {' '}
              <img className="pr-2 w-6 h-4" src={pdp_email_img} alt="" />
              contact@seebagroup.com
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16 px-11 sm-only:px-2">
          <div className="bg-[#F5F5F5] sm-only:px-2 px-20 xl-only:px-14 lg-only:px-14 md-only:px-10 py-6">
            <div className="">
              <h1 className="font-ubuntu text-base font-semibold">
                FREQUENTLY BOUGHT TOGETHER
              </h1>
            </div>
            <div className="pt-4 flex sm-only:contents">
              <div className="sm-only:mt-3 sm-only:flex  sm-only:relative sm-only:items-center ">
                <div
                  className="w-4 h-4 border bg-white border-[1px solid #ECECEC] 2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden  cursor-pointer flex items-center justify-center"
                  onClick={handleFirstCheckBoxClick}
                >
                  {isFirstChecked && <MdDone className="text-black" />}
                </div>
                <img
                  className="w-[190px] sm-only:w-[130px] sm-only:ml-[10px]"
                  src={product_image}
                  alt=""
                />
                <div>
                  <p className="text-sm flex sm-only:pl-[10px] text-gray-500 2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">
                    Current items Amefa Austin Cutlery, Set of 24
                  </p>
                  <p className="text-sm flex sm-only:pl-[10px]  text-gray-500 2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">
                    {' '}
                    <span className="text-[#E91111] mr-2 text-[14px]">
                      ₹4,999
                    </span>{' '}
                    <span
                      className={`${TEXT_SLATE_300} text-xs line-through text-[10px]`}
                    >
                      MRP. ₹ 5,999{' '}
                    </span>{' '}
                  </p>
                </div>{' '}
                <p className="text-[14px] mt-2 sm-only:hidden">Amefa Austin </p>{' '}
                <p className="text-[14px] mt-2 sm-only:hidden">
                  Cutlery, Set of 24
                </p>
              </div>
              <div>
                <p className="flex items-center sm-only:ml-[75px] p-[32px] xl-only:p-[20px] sm-only:p-0 text-[30px]">
                  {' '}
                  +
                </p>
              </div>
              <div className="sm-only:mt-3 sm-only:flex  sm-only:relative sm-only:items-center ">
                <div
                  className="w-4 h-4 border bg-white border-[1px solid #ECECEC] 2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden   cursor-pointer flex items-center justify-center"
                  onClick={handleSecondCheckBoxClick}
                >
                  {isSecondChecked && <MdDone className="text-black" />}
                </div>
                <img
                  className="w-[190px] sm-only:w-[130px] sm-only:ml-[10px]"
                  src={product_image}
                  alt=""
                />
                <div>
                  <p className="text-sm flex sm-only:pl-[10px] text-gray-500 2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">
                    Mikasa Reactive Blue Dinnerware Set, 12 pcs
                  </p>
                  <p className="text-sm flex sm-only:pl-[10px]  text-gray-500 2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">
                    {' '}
                    <span className="text-[#E91111] mr-2 text-[14px]">
                      ₹ 8,399
                    </span>{' '}
                    <span
                      className={`${TEXT_SLATE_300} text-xs line-through text-[10px]`}
                    >
                      MRP. ₹ 9,999{' '}
                    </span>{' '}
                  </p>
                </div>

                <p className="text-[14px] mt-2 sm-only:hidden">
                  Mikasa Reactive Blue
                </p>
                <p className="text-[14px] mt-2 sm-only:hidden">
                  Dinnerware Set, 12 pcs
                </p>
              </div>
              <div className="pl-10 lg-only:pl-3 xl-only:pl-3 md-only:pl-3 sm-only:pl-0">
                <div className="sm-only:hidden">
                  <p className="text-sm flex">
                    <div
                      className="w-4 h-4 border bg-white border-[1px solid #ECECEC] sm-only:hidden    cursor-pointer flex items-center justify-center"
                      onClick={handleFirstCheckBoxClick}
                    >
                      {isFirstChecked && <MdDone className="text-black" />}
                    </div>
                    <span className=""> Current items</span>
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
                    <span
                      className={`${TEXT_SLATE_300} text-xs line-through text-[10px]`}
                    >
                      MRP. ₹ 5,999{' '}
                    </span>{' '}
                    <span className="ml-4 text-[14px] sm-only:hidden">
                      {' '}
                      20% OFF
                    </span>{' '}
                  </p>
                </div>
                <div className="pt-4 pb-4 border-b border-gray-200">
                  <p className="text-sm flex sm-only:hidden">
                    <div
                      className="w-4 h-4 border bg-white border-[1px solid #ECECEC]  cursor-pointer flex items-center justify-center "
                      onClick={handleSecondCheckBoxClick}
                    >
                      {isSecondChecked && <MdDone className="text-black" />}
                    </div>
                    <span className="pl-3 text-gray-500 ">
                      Mikasa Reactive Blue Dinnerware Set, 12 pcs
                    </span>
                  </p>
                  <p className="sm-only:hidden">
                    {' '}
                    <span className="text-[#E91111] text-[14px] mr-2">
                      ₹ 8,399
                    </span>{' '}
                    <span
                      className={`${TEXT_SLATE_300} text-xs line-through text-[10px]`}
                    >
                      MRP. ₹ 9,999{' '}
                    </span>{' '}
                    <span className="ml-4 text-[14px] sm-only:hidden">
                      {' '}
                      20% OFF
                    </span>{' '}
                  </p>
                </div>
                <div className="pt-4 flex md-only:ml-1">
                  <p className="flex items-center w-[100%] relative justify-center">
                    Total: ₹ 1,040
                  </p>
                  <button class=" text-white text-sm bg-[#003354] ml-4 py-2 w-[100%] ">
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

      <div className="mt-16  px-11 sm-only:px-3">
        <div>
          <img
            className="sm-only:w-[430px] sm-only:h-[320px]"
            src={pdp_benner_img}
            alt=""
          />
        </div>
      </div>

      <CustomerReview />

      <div className="pdp-footer md-only:grid-cols-1 md-only:flex sticky sm-only:px-1 flex shadow-[0px -5px 6px #0000000] sm-only:pt-0 pt-3 sm-only:pb-1  px-11 pb-3 bg-white bottom-0 grid grid-cols-2">
        <div className="flex sm-only:hidden">
          <h2 className="text-2xl text-black font-medium flex items-center md-only:text-[15px] lg-only:text-[15px]">
            Amefa Austin Cutlery, Set of 24
          </h2>
        </div>
        <div className="flex   ">
          <div>
            <p className="flex sm-only:px-2 items-center sm-only:hidden">
              <span className="text-[#969696] text-xs line-through lg-only:text-[11px]">
                MRP.₹5999
              </span>
              <span className="pl-2 pr-2 lg-only:text-[15px] text-xl text-[#E91111] font-semibold">
                ₹4,999
              </span>
              <span className="text-xs lg-only:text-[10px] bg-[#E91111] text-white p-2 rounded-2xl">
                20% OFF
              </span>
            </p>
            <p className="text-[#969696] text-xs sm-only:hidden sm-only:ml-[10px] sm-only:text-[10px]">
              (inclusive of all taxes)
            </p>
          </div>
          <div className="pl-3 lg-only:hidden md-only:hidden xl-only:hidden 2xl-only:hidden">
            <p className="flex items-center ">
              <span className="pl-2 pr-2 text-xl text-[#E91111] font-semibold sm-only:text-[15px]">
                ₹4,999
              </span>
              <span className="text-[#969696] text-xs line-through sm-only:pl-[10px]">
                MRP.₹5999
              </span>
            </p>
            <p className="text-[#969696] text-xs sm-only:ml-[10px] sm-only:text-[10px]">
              (inclusive of all taxes)
            </p>
          </div>

          <div className="pl-5  flex ">
            <div className=" product-counter h-[50px] sm-only:hidden flex w-36 border border-[#E6E6E6] ">
              <button className="text-base  px-7 " onClick={decrement}>
                -
              </button>
              <p className="flex text-lg font-semibold items-center">{count}</p>
              <button className="text-base px-7 " onClick={increment}>
                +
              </button>
            </div>
          </div>
          <button class=" sm-only:hidden ml-[15px] h-[50px] text-white w-[100%] text-[10px] bg-[#175C8A] hover:bg-[#003354] py-3">
            ADD TO CART
          </button>
        </div>
        <button class="lg-only:hidden md-only:hidden xl-only:hidden 2xl-only:hidden text-white text-[10px] bg-[#175C8A] hover:bg-[#003354] py-2 px-10">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
