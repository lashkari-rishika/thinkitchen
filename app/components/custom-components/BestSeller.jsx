import React from 'react';
import {Link} from '@remix-run/react';
import '../../styles/app.css';

import {AiOutlineHeart} from 'react-icons/ai';

import arrival1 from '../../asset/arrival1.png';

const BestSeller = () => {
  return (
    <div className="bestseller_main_section mt-10 xs-only:px-3 px-10">
      <div className="bestseller-section-heading">
        <h1 className="text-4xl text-center font-medium pb-4">BEST SELLERS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2.5">
        <div className="flex flex-col items-center">
          <div className="new_arrivel_card relative w-full">
            <Link
              href="https://www.google.com/"
              className="w-full"
              target="_blank"
            >
              <img
                src={arrival1}
                alt="Product"
                className="w-full object-cover hover_image"
              />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full ">
                <AiOutlineHeart />
              </button>
              <div className="discount_lable absolute p-2 text-red-600 bg-white rounded-br-lg  font-xs">
                20% OFF
              </div>
              <div className="px-1 py-2 flex w-full">
                <div className="product_card_text w-9/12">
                  <div className="font-semibold text-sm mb-2">
                    Amefa Austin Cutlery, Set of 24
                  </div>
                  <span className="font-xs text-gray-400 mb-1 gap-1">
                    MRP. ₹ 5,999
                  </span>
                  <span className="text-red-500 font-xs mb-1">₹ 4,999</span>
                </div>
                <div className=" product_card_button 4/12">
                  <button className="add_cart_button text-sm block w-full bg-white-500 font-semibold text-black py-1 px-2 border border-solid border-gray-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="new_arrivel_card relative w-full">
            <Link
              href="https://www.google.com/"
              className="w-full"
              target="_blank"
            >
              <img
                src={arrival1}
                alt="Product"
                className="w-full object-cover hover_image"
              />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full ">
                <AiOutlineHeart />
              </button>
              <div className="discount_lable absolute p-2 text-red-600 bg-white rounded-br-lg  font-xs">
                20% OFF
              </div>
              <div className="px-1 py-2 flex">
                <div className="product_card_text w-9/12">
                  <div className="font-semibold text-sm mb-2">
                    Amefa Austin Cutlery, Set of 24
                  </div>
                  <span className="font-xs text-gray-400 mb-1 gap-1">
                    MRP. ₹ 5,999
                  </span>
                  <span className="text-red-500 font-xs mb-1">₹ 4,999</span>
                </div>
                <div className=" product_card_button 4/12">
                  <button className="add_cart_button text-sm block w-full bg-white-500 font-semibold text-black py-1 px-2 border border-solid border-gray-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="new_arrivel_card relative w-full">
            <Link
              href="https://www.google.com/"
              className="w-full"
              target="_blank"
            >
              <img
                src={arrival1}
                alt="Product"
                className="w-full object-cover hover_image"
              />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full ">
                <AiOutlineHeart />
              </button>
              <div className="discount_lable absolute p-2 text-red-600 bg-white rounded-br-lg  font-xs">
                20% OFF
              </div>
              <div className="px-1 py-2 flex">
                <div className="product_card_text w-9/12">
                  <div className="font-semibold text-sm mb-2">
                    Amefa Austin Cutlery, Set of 24
                  </div>
                  <span className="font-xs text-gray-400 mb-1 gap-1">
                    MRP. ₹ 5,999
                  </span>
                  <span className="text-red-500 font-xs mb-1">₹ 4,999</span>
                </div>
                <div className=" product_card_button 4/12">
                  <button className="add_cart_button text-sm block w-full bg-white-500 font-semibold text-black py-1 px-2 border border-solid border-gray-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className='brand-section mt-10'>
//   <div className='brand-section-heading'>
//     <h1 className='text-3xl text-center font-normal pb-4'>NEW ARRIVELS</h1>
//   </div>
//   <div className='image_section'>
//     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1">
//       <div className="flex flex-col items-center">
//         <div className='all-brand-image'>
//           <Link href="https://www.google.com/" className='w-full' target="_blank">
//             <img
//               src={arrival1}
//               className="w-full object-cover hover_image"
//             />
//             <div>
//                 <div>   </div>
//             </div>
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col items-center">
//         <div className='all-brand-image'>
//           <Link href="https://www.google.com/" className='w-full' target="_blank">
//             <img
//               src={arrival1}
//               className="w-full object-cover hover_image"
//             />
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col items-center">
//         <div className='all-brand-image'>
//           <Link href="https://www.google.com/" className='w-full' target="_blank">
//             <img
//               src={arrival1}
//               className="w-full object-cover"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

export default BestSeller;
