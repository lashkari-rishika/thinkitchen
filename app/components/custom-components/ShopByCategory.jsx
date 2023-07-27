import React from 'react';
import {Link} from '@remix-run/react';
import {Swiper, SwiperSlide} from 'swiper/react';

import r1 from '../../asset/Rectangle-6003.png';
import r2 from '../../asset/Rectangle-6004.png';
import r3 from '../../asset/Rectangle-6005.png';
import r4 from '../../asset/Rectangle-6006.png';
import r5 from '../../asset/Rectangle-6007.png';
import r6 from '../../asset/Rectangle-6008.png';
import '../../styles/app.css';

const ShopByCategory = ({images, text}) => {
  return (
    <div className="category_main_section mt-10 xs-only:px-3 px-10">
      <div className="text-center">
        <div className="category_heading">
          <h1 className="text-4xl font-medium pb-4">SHOP BY CATEGORY</h1>
        </div>

        <Swiper
          spaceBetween={8}
          slidesPerView={6} // Display 6 slides in one row
          // loop={true} // Enable looping
          // loopedSlides={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="category_image_text">
              <Link
                href="https://www.google.com/"
                className="w-full"
                target="_blank"
              >
                <img src={r1} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">Prepware</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category_image_text">
              <Link
                href="https://www.google.com/"
                className="w-full"
                target="_blank"
              >
                <img src={r2} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">Drinkware</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category_image_text">
              <Link
                href="https://www.google.com/"
                className="w-full"
                target="_blank"
              >
                <img src={r3} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">Dineware</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category_image_text">
              <Link
                href="https://www.google.com/"
                className="w-full"
                target="_blank"
              >
                <img src={r4} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">Barware</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category_image_text">
              <Link
                href="https://www.google.com/"
                className="w-full"
                target="_blank"
              >
                <img src={r5} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">Storageware</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category_image_text">
              <Link
                href="https://www.google.com/"
                className="w-full"
                target="_blank"
              >
                <img src={r6} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">Homeware</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category_image_text">
              <Link
                href="https://www.google.com/"
                className="w-full"
                target="_blank"
              >
                <img src={r1} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">Prepware</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category_image_text">
              <Link
                href="https://www.google.com/"
                className="w-full"
                target="_blank"
              >
                <img src={r2} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">Drinkware</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1"
    style={{ overflowY: 'auto' }}
  > */}
        {/* <div className="flex flex-col items-center">
              <div className='category_image_text'>
                <Link href="https://www.google.com/" className='w-full' target="_blank">
                  <img
                    src={r1}
                    className="w-full "
                  />
                  <div className='category_name'>
                    <h2 className="mt-2 font-medium text-base">Prepware</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className='category_image_text'>
                <Link href="https://www.google.com/" className='w-full' target="_blank">
                  <img
                    src={r2}
                    className="w-full "
                  />
                  <div className='category_name'>
                    <h2 className="mt-2 font-medium text-base">Drinkware</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className='category_image_text'>
                <Link href="https://www.google.com/" className='w-full' target="_blank">
                  <img
                    src={r3}
                    className="w-full "
                  />
                  <div className='category_name'>
                    <h2 className="mt-2 font-medium text-base">Dineware</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className='category_image_text'>
                <Link href="https://www.google.com/" className='w-full' target="_blank">
                  <img
                    src={r4}
                    className="w-full "
                  />
                  <div className='category_name'>
                    <h2 className="mt-2 font-medium text-base">Barware</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className='category_image_text'>
                <Link href="https://www.google.com/" className='w-full' target="_blank">
                  <img
                    src={r5}
                    className="w-full "
                  />
                  <div className='category_name'>
                    <h2 className="mt-2 font-medium text-base">Storageware</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className='category_image_text'>
                <Link href="https://www.google.com/" className='w-full' target="_blank">
                  <img
                    src={r6}
                    className="w-full "
                  />
                  <div className='category_name'>
                    <h2 className="mt-2 font-medium text-base">Homeware</h2>
                  </div>
                </Link>
              </div>
            </div> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default ShopByCategory;

{
  /* <Swiper 
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
  </Swiper> */
}
