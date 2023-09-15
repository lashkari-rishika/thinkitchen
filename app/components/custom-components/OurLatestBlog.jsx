import React,{ useState, useEffect } from 'react';
import {Link} from '@remix-run/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowUpRight } from 'react-icons/bs'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.css'

import data from '../../../JSON/db.json';

const OurLatestBlog = () => {

  const [swiper, setSwiper] = useState(null);
  // const [isMobileView, setIsMobileView] = useState(false);

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

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileView(window.innerWidth <= 768);
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div className="blog_main_section mt-10 sm-only:px-3 px-10">
      <div className="flex justify-center relative items-center pb-4">
        <div className="blog-section-heading block ml-auto w-full text-center">
          <h1 className="text-4xl sm-only:text-2xl md-only:text-3xl text-center font-medium pb-4 uppercase">our latest blog</h1>
        </div>
        <Link
          to="#"
          className="block absolute top-5 right-5 font-semibold ml-auto text-right cursor-pointer underline sm-max:hidden"
        >
          View All
        </Link>
      </div>
      <Swiper
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          // scrollbar={isMobileView ? { draggable: true } : false}
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2.5,
            },
            576: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1.5,
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
                     <div className="font-normal text-base mb-2">
                       {item.text}
                     </div>
                   </div>
                   <div className=" OurBlog_card_button max-w-max">
                     <button className="flex items-center gap-3 text-white add_cart_button rounded text-sm w-full bg-white-500 font-normal py-1.5 px-3 border border-solid border-gray-300 uppercase bg-[#175C8A] ">
                       {item.exploreBtn}
                       <BsArrowUpRight/>
                     </button>
                   </div>
                 </div>
               </Link>
             </div>
           </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Link
          to="#"
          className="flex justify-center font-semibold cursor-pointer underline md:hidden"
        >
          View All
        </Link>    </div>
  );
};

export default OurLatestBlog;