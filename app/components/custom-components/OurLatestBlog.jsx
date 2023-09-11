import React,{ useState } from 'react';
import {Link} from '@remix-run/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.css'

import data from '../../../JSON/db.json';

const OurLatestBlog = () => {

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
    <div className="blog_main_section mt-10 sm-only:px-3 px-10">
      <div className="flex justify-center relative items-center pb-4">
        <div className="blog-section-heading block ml-auto w-full text-center">
          <h1 className="text-4xl sm-only:text-2xl font-item">OUR LATEST BLOGS</h1>
        </div>
        <Link
          to="#"
          className="block absolute top-5 right-5 font-semibold ml-auto text-right cursor-pointer underline"
        >
          View All
        </Link>
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
          {data.blog.map((item) => (
            <SwiperSlide key={item.id}>
             <div className="flex flex-col items-center">
             <div className="Our_Blog_csrd relative w-full">
               <Link href={item.link} className="w-full" >
                 <img
                   src={item.imageSrc}
                   alt="Product"
                   className="w-full object-cover hover_image"
                 />
                 <div className="px-1 py-2 w-full">
                   <div className="OurBlog_card_text w-full">
                     <div className="font-bold text-sm mb-2">{item.date}</div>
                     <div className="font-semibold text-base mb-2">
                       {item.text}
                     </div>
                   </div>
                   <div className=" OurBlog_card_button w-1/3">
                     <button className="add_cart_button rounded text-sm block w-full bg-white-500 font-semibold text-black py-1.5 px-2 border border-solid border-gray-300">
                       {item.exploreBtn}
                     </button>
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

export default OurLatestBlog;