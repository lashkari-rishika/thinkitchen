import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 import '../../../node_modules/swiper/swiper-bundle.css'
 import '../../../node_modules/swiper/swiper-bundle.js'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import data from '../../../JSON/db.json';

const FeaturedIn = ({ images, text }) => {
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
        <div className="FeaturedIn_heading flex justify-center">
          <h1 className="text-4xl sm-only:text-2xl font-medium pb-4 uppercase">featuredin</h1>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={3} // Display 6 slides in larger screens
          breakpoints={{
            992: {
              slidesPerView: 6, // Display 4 slides in tab view
            },
            768: {
              slidesPerView: 5, // Display 4 slides in tab view
            },
            576: {
              slidesPerView: 4, // Display 4 slides in tab view
            },
            320: {
              slidesPerView: 3, // Display 4 slides in tab view
            }
          }}
          onSwiper={setSwiper}
        >
          {data.featuredin.map((item) => (
            <SwiperSlide key={item.id}>
               <div className="new_arrivel_card relative w-full">
                <img
                     src={item.imageSrc}
                     alt="Product"
                     className="w-full object-cover hover_image"
                   />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      <div className="flex justify-center text-4xl my-4 sm-only:hidden gap-6">
          <button className="flex justify-center" onClick={slidePrev}>
            <BsArrowLeft />
          </button>
          <button className="flex justify-center" onClick={slideNext}>
            <BsArrowRight />
          </button>
        </div>
    </div>
  );
};

export default FeaturedIn;