import React from 'react';
import { Link } from '@remix-run/react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import r1 from '../../asset/Rectangle-6003.png'
import r2 from '../../asset/Rectangle-6004.png'
import r3 from '../../asset/Rectangle-6005.png'
import r4 from '../../asset/Rectangle-6006.png'
import r5 from '../../asset/Rectangle-6007.png'
import r6 from '../../asset/Rectangle-6008.png'

const ShopByCategory = ({ images, text }) => {
 
  return (
    <div className='category_section mt-10'>
      <div className="text-center">
          <div className=''>
            <h1 className="text-3xl font-normal pb-4">SHOP BY CATEGORY</h1>
          </div>

          {/* <Swiper 
           style={{display:"flex"}}
            className=''
            spaceBetween={10}
            slidesPerView={6} // Display 6 slides in one row
            loop={true} // Enable looping
            loopedSlides={6}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src={r1} alt="Image 1" />
              <h1>dfv</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img src={r2}alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={r3} alt="Image 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={r4} alt="Image 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={r5} alt="Image 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={r6} alt="Image 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={r1} alt="Image 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={r2} alt="Image 8" />
            </SwiperSlide>
      ...
    </Swiper> */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1"
        style={{ overflowY: 'auto' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <Link href="https://www.google.com/" className='w-full' target="_blank">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full "
              />
              <div></div>
            </Link>
            <h2 className="mt-2 font-medium text-base">IMAGE {index + 1}</h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShopByCategory;

