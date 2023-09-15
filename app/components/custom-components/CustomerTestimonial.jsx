import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.css';
import '../../../node_modules/swiper/swiper-bundle.js';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import data from '../../../JSON/db.json';

const CustomerTestimonial = () => {
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
    <div className="testimonial-section mt-10 mb-14 md-max:px-3 px-10">
      <div className="testimonial-section-heading">
        <h1 className="text-4xl sm-only:text-2xl md-only:text-3xl text-center font-medium pb-4 uppercase">
          customer testimonials
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        // scrollbar={isMobileView ? {draggable: true} : false}
        onSwiper={setSwiper}
      >
        {data.testimonial.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white mt-2 lg:w-5/6 md-max:w-full mx-auto">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between relative">
                  <div className="lg:w-1/2 lg:mr-4 mb-4 lg:mb-0">
                    <img
                      src={item.imageSrc}
                      alt="Testimonial"
                      className="shadow-lg"
                    />
                  </div>
                  <div className="lg:w-1/2 lg:ml-4">
                    <div className="text-center lg:text-left">
                      <div className="text-black font-medium text-sm leading-5 lg:mb-4 md-max:mx-2 lg:mr-8 lg:text-left md-max:text-left">
                        <p className="w-[15%] ">
                          <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/TT1.svg?v=1693472188" />
                        </p>
                        {item.text}
                        <p className="w-[15%] ml-auto">
                          <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/TT2.svg?v=1693472186" />
                        </p>
                      </div>
                      <div className="items-center justify-center lg:justify-start absolute right-8 bottom-4">
                        <span className="text-gray-600 font-semibold">
                          Name
                        </span>
                        <span>
                          <img
                            src={item.starimg}
                            alt="5 Star Rated"
                            className="h-6 mr-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center text-3xl sm-only:hidden gap-6 md-max:hidden absolute z-10 bottom-0 right-[47%] bg-white py-3 px-3">
          <button className="flex justify-center" onClick={slidePrev}>
            <BsArrowLeft />
          </button>
          <button className="flex justify-center" onClick={slideNext}>
            <BsArrowRight />
          </button>
        </div>
        </Swiper>
    </div>
  );
};

export default CustomerTestimonial;
