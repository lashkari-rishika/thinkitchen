import React, {useState} from 'react';
import {Link} from '@remix-run/react';
import {Swiper, SwiperSlide} from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.css';
import {FaInstagram} from 'react-icons/fa';

import data from '../../../JSON/db.json';

const SocialMedia = () => {
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
    <div className="social-media-section my-10 px-3 sm:px-0">
      <div className="social-section-heading">
        <h1 className="text-4xl sm-only:text-2xl text-center font-medium pb-4">
          JOIN US ON SOCIAL @THINKITCHEN
        </h1>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        breakpoints={{
          992: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2.5,
          },
        }}
        onSwiper={setSwiper}
      >
        {data.socialmedia.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center">
              <div className="social-brand-image w-full">
                <Link href={item.link} className="w-full" target="_blank">
                  <div className="image-text">
                    <img
                      src={item.imageSrc}
                      className="w-full object-cover hover_image"
                    />
                    <div className="social-hover-logo">
                      <FaInstagram color="white" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SocialMedia;
