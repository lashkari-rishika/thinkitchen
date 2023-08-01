import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import SlideImage from '../asset/slide.jpg';
import banner_logo from '../asset/thinKitchen_Option_16072021white01.png';
import banner from '../asset/Banner_img.png'
import thinkitchen_video from '../asset/thinkitchen_video.mp4'
// import Swiper from 'swiper';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import {  Autoplay } from 'swiper/modules';
const Banner = () => {
  // const headerHeight = '655px'; // Set the height value
  // const headerStyle = {
  //   backgroundImage: `url(${SlideImage})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: headerHeight, // Use the variable to set the height
  // };

  return (
    <div className="main-banner-section">
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
        <video autoPlay loop muted>
        <source src={thinkitchen_video} type="video/mp4" />
            <div className="banner absolute md:top xl:top-[83%] xl:left-[8%] lg:left-[33%] lg:top-[83%] transform -translate-x-1/2 -translate-y-1/2 text-white">
              <div className="banner-logo">
                <img src={banner_logo} alt="" />
              </div>
              <div className="banner-text font-marcellus">
                <h3 className="text-3xl md:text-4xl lg:text-5xl">
                  EXPERIENCE THE ART OF
                </h3>
                <h3 className="text-3xl md:text-4xl lg:text-5xl">
                  COOKING IN OUR KITCHEN PRODUCTS
                </h3>
              </div>
            </div>
            </video>
        </SwiperSlide> */}

         <SwiperSlide>
          <div
            className="banner-img "
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '700px',
              width:"110rem"
            }}
          >
            <div className="banner absolute md:top xl:top-[83%] xl:left-[8%] lg:left-[33%] lg:top-[83%] transform -translate-x-1/2 -translate-y-1/2 text-white">
              <div className="banner-logo">
                <img src={banner_logo} alt="" />
              </div>
              <div className="banner-text font-marcellus">
                <h3 className="text-3xl md:text-4xl lg:text-5xl">
                  EXPERIENCE THE ART OF
                </h3>
                <h3 className="text-3xl md:text-4xl lg:text-5xl">
                  COOKING IN OUR KITCHEN PRODUCTS
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide> 
        {/* third */}
        {/* <SwiperSlide>
          <div
            className="banner-img "
            style={{
              backgroundImage: `url(${SlideImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '700px',
              width:"110rem"
            }}
          >
            <div className="banner absolute md:top xl:top-[83%] xl:left-[8%] lg:left-[33%] lg:top-[83%] transform -translate-x-1/2 -translate-y-1/2 text-white">
              <div className="banner-logo">
                <img src={banner_logo} alt="" />
              </div>
              <div className="banner-text font-marcellus">
                <h3 className="text-3xl md:text-4xl lg:text-5xl">
                  EXPERIENCE THE ART OF
                </h3>
                <h3 className="text-3xl md:text-4xl lg:text-5xl">
                  COOKING IN OUR KITCHEN PRODUCTS
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>  */}
      </Swiper>
    </div>
  );
};

export default Banner;
