import React, {useState, useEffect} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
const Banner = () => {
  const bannerData = [
    {
      id: 2,
      type: 'video',
      src: 'https://cdn.shopify.com/videos/c/o/v/1ee63878446b47c0a074e3278b859d7a.mp4',
      logo: 'https://cdn.shopify.com/s/files/1/0293/6448/6192/files/thinKitchen_banner_logo.png?v=1692177326',
      text1: 'EXPERIENCE THE ART OF',
      text2: 'COOKING IN OUR KITCHEN PRODUCTS',
    },
    {
      id: 1,
      type: 'image',
      src: 'https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Banner_img_ae228ff3-ffd1-4e14-99d3-82fbec82ab2c.png?v=1692177447',
      logo: 'https://cdn.shopify.com/s/files/1/0293/6448/6192/files/thinKitchen_banner_logo.png?v=1692177326',
      text1: 'EXPERIENCE THE ART OF',
      text2: 'COOKING IN OUR KITCHEN PRODUCTS',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Banner_img_ae228ff3-ffd1-4e14-99d3-82fbec82ab2c.png?v=1692177447',
      logo: 'https://cdn.shopify.com/s/files/1/0293/6448/6192/files/thinKitchen_banner_logo.png?v=1692177326',
      text1: 'EXPERIENCE THE ART OF',
      text2: 'COOKING IN OUR KITCHEN PRODUCTS',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === bannerData.length - 1 ? 0 : prevSlide + 1,
  //     );
  //   }, 5000); // Change the interval duration in milliseconds (5000ms = 5 seconds)

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const slide = bannerData[currentSlide];

  return (
    <div className="image_section 2xl:mt-[-65px] xl:mt-[-65px] lg:mt-[-65px] md:mt-[-65px]">
      <div className="slider">
        {slide.type === 'video' ? (
          <div className="banner-video relative h-[650px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[650px]">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src={slide.src} type="video/mp4" />
            </video>
            <div className="banner sm-only:hidden absolute  md-only:left-[37%] md-only:top-[55%] lg-only:top-[51%] lg-only:left-[32%]  xl-only:left-[28%] xl-only:top-[57%] 2xl-only:top-[75%] 2xl-only:left-[24%] transform -translate-x-1/2 text-white">
            <div className="banner-logo lg-only:w-[220px] md-only:w-[190px] md-only:h-[45px]">
                  <img src={slide.logo} alt="" />
                </div>
                <div className="banner-text font-marcellus 2xl-only:text-3xl  lg-only:text-[26px] lg-only:leading-9 md-only:text-[22px] xl-only:text-[26px]">
                  <h3 className="">
                    {slide.text1}
                  </h3>
                  <h3 className="">
                    {slide.text2}
                  </h3>
                </div>
              </div>
              <div className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden sm-only:absolute sm-only:top-[60%] font-marcellus sm-only:text-center w-[45%] sm-only:left-[30%]">
                <h1 className="sm-only:text-white sm-only:text-xl	">
                  EXPERIENCE THE ART OF COOKING IN OUR KITCHEN PRODUCTS
                </h1>
                <button className="sm-only:text-white sm-only:border sm-only:rounded-lg	 sm-only:border-white sm-only:p-1 sm-only:text-base	">
                  EXPLORE NOW
                </button>
              </div>
          </div>
        ) : (
          <div
            className="banner-img relative h-[700px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[650px]"
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="banner sm-only:hidden absolute  md-only:left-[37%] md-only:top-[55%] lg-only:top-[51%] lg-only:left-[32%]  xl-only:left-[28%] xl-only:top-[57%] 2xl-only:top-[75%] 2xl-only:left-[24%] transform -translate-x-1/2 text-white">
              <div className="banner-logo lg-only:w-[220px] md-only:w-[190px] md-only:h-[45px]">
                <img src={slide.logo} alt="" />
              </div>
              <div className="banner-text font-marcellus 2xl-only:text-3xl  lg-only:text-[26px] lg-only:leading-9 md-only:text-[22px] xl-only:text-[26px]">
                <h3 className="">{slide.text1}</h3>
                <h3 className="">{slide.text2}</h3>
              </div>
            </div>
            <div className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden sm-only:absolute sm-only:top-[50%] sm-only:font-marcellus sm-only:text-center sm-only:w-[45%] sm-only:left-[30%]">
              <h1 className="sm-only:text-white sm-only:text-xl 	">
                EXPERIENCE THE ART OF COOKING IN OUR KITCHEN PRODUCTS
              </h1>
              <button className="sm-only:text-white sm-only:border sm-only:rounded-lg	 sm-only:border-white sm-only:p-1 sm-only:text-base	">
                EXPLORE NOW
              </button>
            </div>
          </div>
        )}
        <div className="banner-controls absolute bottom-0 right-6 z-10 sm-only:hidden">
          <button
            className="bg-[#FFFFFF] px-4 py-4 border border-solid border-gray-300"
            onClick={() =>
              setCurrentSlide((prevSlide) =>
                prevSlide === 0 ? bannerData.length - 1 : prevSlide - 1,
              )
            }
          >
            <BsArrowLeft className='w-[40px] h-[30px]' />
          </button>
          <button
            className="bg-[#FFFFFF] px-4 py-4 border border-solid border-gray-300"
            onClick={() =>
              setCurrentSlide((prevSlide) =>
                prevSlide === bannerData.length - 1 ? 0 : prevSlide + 1,
              )
            }
          >
           <BsArrowRight className='w-[40px] h-[30px]' />
          </button>
        </div>
      </div>


    </div>

  );
};

export default Banner;
