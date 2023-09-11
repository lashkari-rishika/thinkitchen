import React from 'react';
import {GrClose, GrCheckmark} from 'react-icons/gr';

import a from '../../../app/asset/arrival1.png';

const data = [
  {
    title: 'Item added to your cart',
    name: 'Amefa Austin Cutlery, Set of 24',
    price: '₹4,999',
    buttons: ['View My Cart (2)', 'Checkout', 'Continue Shopping'],
  },
];

const AddToCartPopUp = () => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[23%] md-max:w-full border border-[#E1E1E1] py-4 mx-4 "
        >
          <div className="flex items-center justify-between pl-7 pr-3">
            <div className="flex items-center gap-1 text-sm">
              <span>
                <GrCheckmark />
              </span>
              <span>{item.title}</span>
            </div>
            <div className="">
              <GrClose />
            </div>
          </div>
          <div className="px-7">
            <div className="flex mt-5 mb-7 gap-4">
              <div className="max-w-[4.5rem]">
                <img src={a}></img>
              </div>
              <div className=" text-base">
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            </div>
            {item.buttons.map((buttonText) => (
              <div key={buttonText} className="grid items-center text-sm">
                <button className="py-2.5 mb-2 items-center border border-[E1E1E1] hover:bg-[#175C8A] hover:text-white">
                  {buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddToCartPopUp;
