import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.css'
import '../../../node_modules/swiper/swiper-bundle.js'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import data from '../../../JSON/db.json';

const ShopByCategory = ({ images, text }) => {
  const [swiper, setSwiper] = useState(null);

  // const slidePrev = () => {
  //   if (swiper) {
  //     swiper.slidePrev();
  //   }
  // };

  // const slideNext = () => {
  //   if (swiper) {
  //     swiper.slideNext();
  //   }
  // };

  return (
    <div className="category_main_section mt-10 sm-only:px-3 px-10">
      <div className="text_center">
        <div className="category_heading flex justify-center">
          <h1 className="text-4xl sm-only:text-2xl font-medium pb-4 uppercase">shop by category</h1>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          breakpoints={{
            992: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 5,
            },
            576: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 2.5,
            }
          }}
          onSwiper={setSwiper}
        >
          {data.category.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="category_image_text">
                <img src={item.imageSrc} className="w-full " alt={item.imageSrc} />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">{item.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopByCategory;