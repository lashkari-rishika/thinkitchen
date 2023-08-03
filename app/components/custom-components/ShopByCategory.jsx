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

const media = [
  {
    id: 1,
    imageSrc: r1 ,
    name:'Pripware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 2,
    imageSrc: r2 ,
    name:'Drinkware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 3,
    imageSrc: r3 ,
    name:'Dineware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 4,
    imageSrc: r4 ,
    name:'Barware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 5,
    imageSrc: r5 ,
    name:'Storageware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 6,
    imageSrc: r6 ,
    name:'Homeware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 7,
    imageSrc: r1 ,
    name:'Tableware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 8,
    imageSrc: r2 ,
    name:'Bakeware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 9,
    imageSrc: r3 ,
    name:'Kids' ,
    link: 'https://www.google.com/',
  },
  {
    id: 10,
    imageSrc: r4 ,
    name:'Cookware' ,
    link: 'https://www.google.com/',
  },
  {
    id: 11,
    imageSrc: r5 ,
    name:'Bath' ,
    link: 'https://www.google.com/',
  },
  {
    id: 12,
    imageSrc: r6 ,
    name:'Other' ,
    link: 'https://www.google.com/',
  },
]

const ShopByCategory = ({images, text}) => {
  return (
    <div className="category_main_section mt-10 sm-only:px-3 px-10">
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
          {media.map((media) => (
          <SwiperSlide key={media.id}>
            <div className="category_image_text">
              <Link
                href={media.link}
                className="w-full"
                target="_blank"
              >
                <img src={media.imageSrc} className="w-full " />
                <div className="category_name">
                  <h2 className="mt-2 font-medium text-base">{media.name}</h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default ShopByCategory;

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
{/* </div> */}
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
  </Swiper> */
}
