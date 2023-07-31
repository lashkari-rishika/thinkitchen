import React from 'react';
import product_image from '../asset/Rectangle-6004.png';
import {Link} from './Link';
import {BsHeart} from 'react-icons/bs';
import {FaStar} from 'react-icons/Fa';
import pdp_star_image from '../asset/pdp-star-image.png'

const PdpSection = () => {
  return (
    <div className="pdp-section">
      <div className="px-11">
        <div>
          <p className="text-xs font-semibold">
            <span className="text-slate-300	">Home | Knives |</span>Amefa Austin
            Cutlery, Set of 24
          </p>
        </div>
      </div>
      <div className="product-deatil-section px-11 pt-3 columns-3">
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
        <div className="product-contant">
          <div>
            <Link className="underline font-semibold text-sm" to="">
              Amefa
            </Link>
            <button className="text-xs absolute right-11 pl-2 pr-2 rounded-none bg-indigo-800 text-white ">
              Bestseller
            </button>
            </div>
            <div className="flex pt-3">
                <h2 className="text-2xl text-black font-medium">
                    Amefa Austin Cutlery, Set of 24
                </h2>
                <div className="heart-icon flex justify-end pl-24">
                    <a href="">
                        <BsHeart />
                    </a>
                </div>
            </div>
            {/* REVIEW SECTION */}
            <div className='review-section'> 
              <p className="flex text-xs pt-3 pb-5">
                <span className="text-slate-300">SKU:</span>TK123456789
                <span className='star-image pl-2 pr-2 flex'>
                   
                <img src={pdp_star_image} alt="" />
                </span>
                <span className="underline">400 review</span>
              </p>
            </div>
          <div className="pt-4 mb-4  border-t border-gray-300">
            <p className='text-xs'>Refined and elegant design with a contemporary feel, the Austin pattern has perfect lines and elegant shapes. Made of high-quality stainless steel this cutlery set is designed for superior durability <span className='text-slate-300'>...Read More</span></p>
          </div>
          <div className="pt-4 border-t border-gray-300">
            <p className='flex items-center'>
              <span className='text-slate-300 text-xs line-through'>MRP.₹5999</span>
              <span className='pl-2 pr-2 text-xl text-red-500 font-semibold'>₹4,999</span>  
              <span className='text-xs bg-red-500 text-white p-2 rounded-2xl'>20% OFF</span>
            </p>
            <p className='text-slate-300 text-xs'>(inclusive of all taxes)</p>
          </div>
          <div className="pt-4 border-t border-gray-300">
            <p className='text-sm	font-semibold'>Select Colour: silver</p>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdpSection;
