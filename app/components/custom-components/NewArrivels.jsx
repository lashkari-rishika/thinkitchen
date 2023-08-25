import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.css'
import {AiOutlineHeart} from 'react-icons/ai';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import data from '../../../JSON/db.json';

const NewArrivels = ({ images, text }) => {
  const [swiper, setSwiper] = useState(null);

  const slidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="category_main_section mt-10 sm-only:px-3 px-10">
      <div className="text_center">
        <div className="New_Arrivels_heading flex justify-center">
          <h1 className="text-4xl sm-only:text-2xl font-medium pb-4 uppercase">new arrivels</h1>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={3} // Display 6 slides in larger screens
          breakpoints={{
            992: {
              slidesPerView: 3, // Display 4 slides in tab view
            },
            768: {
              slidesPerView: 2.5, // Display 4 slides in tab view
            },
            576: {
              slidesPerView: 2, // Display 4 slides in tab view
            },
            320: {
              slidesPerView: 1.5, // Display 4 slides in tab view
            }
          }}
          onSwiper={setSwiper}
        >
          {data.products.map((item) => (
            <SwiperSlide key={item.id}>
             <div className="new_arrivel_card relative w-full">
                  <img
                    src={item.imageSrc}
                    alt="Product"
                    className="w-full object-cover hover_image"
                  />
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full ">
                    <AiOutlineHeart />
                  </button>
                  <div className="discount_lable absolute p-2 md-only:text-sm md-only:p-[0.1rem] text-red-600 bg-white rounded-br-lg  font-xs">
                    {item.discountTag}
                  </div>
                  <div className="px-1 py-2 flex w-full">
                    <div className="product_card_text w-9/12">
                      <div className="font-semibold text-sm md-only:text-xs md-only:leading-4">
                        {item.productName}
                      </div>
                      <span className="font-xs text-gray-400 md-only:text-[12px] mb-1 gap-1">
                        {item.discountedPrice}
                      </span>
                      <spzan className="text-red-500 font-xs md-only:text-[12px] mb-1">
                        {item.price}
                      </spzan>
                    </div>
                    <div className=" product_card_button 4/12">
                      <button className="add_cart_button text-sm md-omly:text-[0.675rem] md-only:text-[0.65rem] md-only:leading-[1rem] block w-full bg-white-500 font-semibold text-black py-1 px-2 md-only:px-1 border border-solid border-gray-300 min-w-max">
                        {item.cartButton}
                      </button>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
        <div className="flex justify-center text-4xl my-4 sm-only:hidden gap-6">
          <button className="flex justify-center" onClick={slidePrev}>
            <BsArrowLeft />
          </button>
          <button className="flex justify-center" onClick={ slideNext}>
            <BsArrowRight />
          </button>
        </div>
    </div>
  );
};

export default NewArrivels;