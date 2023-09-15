import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 import '../../../node_modules/swiper/swiper-bundle.css'
 import '../../../node_modules/swiper/swiper-bundle.js'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import data from '../../../JSON/db.json';

const FeaturedIn = ({ images, text }) => {
  const [swiper, setSwiper] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

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
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="featured_in_main mt-10 sm-only:px-3 px-10">
      <div className="text_center">
        <div className="FeaturedIn_heading flex justify-center">
          <h1 className="text-4xl sm-only:text-2xl md-only:text-3xl text-center font-medium pb-4 uppercase">featuredin</h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          scrollbar={isMobileView ? { draggable: true } : false}
          breakpoints={{
            992: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 4,
            },
            576: {
              slidesPerView: 4,
            },
            320: {
              slidesPerView: 3,
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
      <div className="flex justify-center text-3xl mb-4 sm-only:hidden gap-6">
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