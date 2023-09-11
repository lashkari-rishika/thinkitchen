import React, {useState} from 'react';
import mycart_order_img from '../asset/mycart_oreder_img.png';
import mycart_offer_img from '../asset/pdp-page-offer-img.png';
import noun_order_img from '../asset/noun-order-img.png';
import {RiDeleteBin6Line} from 'react-icons/ri';

const MyCart = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const decrement2 = () => {
    if (count2 > 1) {
      setCount2(count2 - 1);
    }
  };
  return (
    <div className="font-Ubuntu bg-white">
      <div className="text-center py-7 sm-only:pt-[35px] ">
        <p className="text-[#7B7B7B] text-[11px]">Home | Shopping cart</p>
        <h1 className="text-black text-[35px] "> My cart </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 colunm-2 sm-only:block gap-[25px]">
          <div className="col-span-2 ">
            <div className="pl-8 sm-only:px-4">
              <div className="border-t border-b border-[#D3D3D3]">
                <h1 className="px-4 py-3 text-[13px] font-semibold">
                  Products
                </h1>
              </div>
            </div>
            <div className="pl-8 sm-only:px-4 ">
              <div className="border-b border-[#D3D3D3] flex px-5 py-5">
                <img
                  className="w-[114px] h-[114px]"
                  src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/mycart_oreder_img.png?v=1693225257"
                  alt=""
                />
                <div className="pl-5">
                  <h1 className="text-[14px] font-semibold">
                    Amefa Austin Cutlery, Set of 24
                  </h1>
                  <p className="py-4">
                    {' '}
                    <span className="font-semibold text-[14px]">
                      ₹4,999
                    </span>{' '}
                    <span className="text-[#969696] text-[14px] line-through">
                      MRP. ₹ 5,999
                    </span>
                  </p>
                  <div className="flex items-center border border-gray-300 p-1 sm:w-24 md:w-28 lg:w-28 xl:w-28">
                    <button
                      className="text-lg px-2 md:px-4"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <p className="text-lg font-semibold px-2">{count}</p>
                    <button
                      className="text-lg px-2 md:px-4"
                      onClick={increment}
                    >
                      +
                    </button>
                    <div className="pl-6 items-center flex sm-only:hidden ">
                      <RiDeleteBin6Line />
                      <p className="pl-2 text-[12px]">Remove</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl-only:hidden xl-only:hidden md-only:hidden lg-only:hidden  sm-only:border-b sm-only:border-[#D3D3D3] sm-only:flex py-4">
                <RiDeleteBin6Line className="sm:only:ml-5" />
                <p className="pl-2 text-[12px]">Remove</p>
              </div>
            </div>
            <div className="pl-8 sm-only:px-4 ">
              <div className="flex px-5 py-5">
                <img
                  className="w-[114px] h-[114px]"
                  src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/mycart_oreder_img.png?v=1693225257"
                  alt=""
                />
                <div className="pl-5">
                  <h1 className="text-[14px] font-semibold">
                    Mikasa Reactive Blue Dinnerware
                  </h1>
                  <h1 className="text-[14px] font-semibold">Set, 12 pcs</h1>
                  <p className="py-4">
                    {' '}
                    <span className="font-semibold text-[14px]">
                      ₹4,999
                    </span>{' '}
                    <span className="text-[#969696] text-[14px] line-through">
                      MRP. ₹ 5,999
                    </span>
                  </p>
                  <div className="flex items-center border border-gray-300 p-1 sm:w-24 md:w-28 lg:w-28 xl:w-28">
                    <button
                      className="text-lg px-2 md:px-4"
                      onClick={decrement2}
                    >
                      -
                    </button>
                    <p className="text-lg font-semibold px-2">{count2}</p>
                    <button
                      className="text-lg px-2 md:px-4"
                      onClick={increment2}
                    >
                      +
                    </button>
                    <div className="pl-6 items-center flex sm-only:hidden">
                      <RiDeleteBin6Line />
                      <p className="pl-2 text-[12px]">Remove</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:onlypr-4">
                <div className="2xl-only:hidden xl-only:hidden md-only:hidden lg-only:hidden sm:only-px-4 sm-only:border-t sm-only:border-[#D3D3D3] sm-only:flex py-4">
                  <RiDeleteBin6Line className="sm:only:ml-5" />
                  <p className="pl-2 text-[12px]">Remove</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="pr-8 sm-only:px-2">
              <div className="border-t border-b border-[#D3D3D3] flex items-center">
                <img className="h-5 w-4" src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/noun-order-img.png?v=1693225327" alt="" />
                <h1 className="px-4 py-3 text-[13px] font-semibold">
                  Order Summary
                </h1>
              </div>
            </div>
            <div className="pr-8 sm-only:px-4">
              <div className="flex pl-5 pr-5 pt-5 md-only:pr-0">
                <p className="md-only:text-[12px]">Subtotal </p>
                <p className="absolute 2xl-only:right-[120px]  xl-only:right-[100px] lg-only:right-[40px] md-only:right-[40px] sm-only:right-[35px]  font-semibold"> ₹ 13,398</p>
              </div>
              <div className="border-b border-[#D3D3D3] flex pl-5 pr-5 pb-5 md-only:pr-0">
                <p className="md-only:text-[12px]">Discount on MRP </p>
                <p className="absolute 2xl-only:right-[120px]  xl-only:right-[100px] lg-only:right-[40px] md-only:right-[40px] sm-only:right-[35px]   font-semibold"> - ₹ 1,000</p>
              </div>
              <div className="flex pl-5 pr-5 py-5 sm-only:border-b border-[#D3D3D3] md-only:pr-0">
                <p className="md-only:text-[12px] font-semibold">Total </p>
                <p className="absolute 2xl-only:right-[120px]  xl-only:right-[100px] lg-only:right-[40px] md-only:right-[40px] sm-only:right-[35px] font-semibold">
                  {' '}
                  ₹ 13,398
                </p>
              </div>
              <div className="w-full px-5 sm-only:mt-3">
                <button className="w-full bg-[#175C8A] text-white py-[10px] text-[11px]">
                  Checkout
                </button>
              </div>
              <div className="color-section pt-4 sm-only:mt-3 sm-only:border-t border-[#D3D3D3] ">
                <div>
                  <p className="text-sm flex">
                    <span>
                      {' '}
                      <img className="pr-2 h-6" src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/noun-order-img.png?v=1693225327" alt="" />
                    </span>{' '}
                    Offer
                  </p>
                </div>
                <div className="grid pb-3 sm-only:overflow-x-scroll sm-only:gap-2 lg-only:grid-cols-2 md-only:grid-cols-1 grid-cols-3 gap-2 mt-2">
                  <div className="text-sm sm-only:w-[130%]  sm-only:bg-white border border-gray-300 rounded-lg shadow-md p-2.5">
                    <h5 className="font-semibold text-[13px] ">No Cost EMI</h5>
                    <p className="text-[11px] mt-[8px]">
                      Avail No Cost EMI on select cards for orders above ₹3000
                    </p>
                    <p className=" text-[#175C8A] mt-[8px]">1 offer </p>
                  </div>
                  <div className="text-sm sm-only:ml-[35px] sm-only:w-[130%]  sm-only:bg-white border border-gray-300 rounded-lg shadow-md p-2.5">
                    <h5 className="font-semibold text-[13px] ">Bank Offer</h5>
                    <p className="text-[11px] mt-[8px]">
                      Upto ₹1,750.00 discount on select Credit Cards,HDFC…
                    </p>
                    <p className=" text-[#175C8A] mt-[8px]">6 offer </p>
                  </div>
                  <div className="text-sm sm-only:w-[130%] sm-only:ml-[70px] sm-only:bg-white border border-gray-300 rounded-lg shadow-md p-2.5">
                    <h5 className="font-semibold text-[13px] ">Partner Offers</h5>
                    <p className="text-[11px] mt-[8px]">
                      Get GST invoice and save up to 28% on business purchases.
                    </p>
                    <p className=" text-[#175C8A] mt-[8px]">1 offer </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
