import React, { useState, useEffect } from 'react';

const Banner = () => {
  const bannerData = [
    {
      id: 2,
      type: 'video',
      src: 'https://cdn.shopify.com/videos/c/o/v/b74bab76c1054ff593df562a00aa219b.mp4',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === bannerData.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change the interval duration in milliseconds (5000ms = 5 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slide = bannerData[currentSlide];

  return (
    <div className="image_section 2xl:mt-[-65px] xl:mt-[-65px] lg:mt-[-65px] md:mt-[-65px]">
      <div className="slider">
        {slide.type === 'video' ? (
          <div

            className="banner-video relative h-[700px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]"

          >
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src={slide.src} type="video/mp4" />
              <div className="banner sm-only:hidden absolute sm:top-1/4 md:top-1/3 lg:top-1/3 xl:top-1/4 2xl:top-1/3 left-1/2 transform -translate-x-1/2 text-white">
                <div className="banner-logo">
                  <img src={slide.logo} alt="" />
                </div>
                <div className="banner-text font-marcellus">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    {slide.text1}
                  </h3>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    {slide.text2}
                  </h3>
                </div>
              </div>
              <div className='2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden sm-only:absolute sm-only:top-[60%] font-marcellus sm-only:text-center w-[45%] sm-only:left-[30%]'>
                <h1 className='sm-only:text-white sm-only:text-xl	'>EXPERIENCE THE ART OF COOKING IN OUR KITCHEN PRODUCTS</h1>
                <button className='sm-only:text-white sm-only:border sm-only:rounded-lg	 sm-only:border-white sm-only:p-1 sm-only:text-base	'>EXPLORE NOW</button>
              </div>
            </video>
          </div>

        ) : (

          <div
            className="banner-img relative h-[700px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]"
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',


            }}
          >
            <div className="banner sm-only:hidden absolute sm:top-1/4 md:top-1/3 lg:top-1/3 xl:top-1/4 2xl:top-1/3 left-1/2 transform -translate-x-1/2 text-white">
              <div className="banner-logo">
                <img src={slide.logo} alt="" />
              </div>
              <div className="banner-text font-marcellus">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {slide.text1}
                </h3>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {slide.text2}
                </h3>
              </div>
            </div>
            <div className='2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden sm-only:absolute sm-only:top-[60%] sm-only:font-marcellus sm-only:text-center sm-only:w-[45%] sm-only:left-[30%]'>
                <h1 className='sm-only:text-white sm-only:text-xl	'>EXPERIENCE THE ART OF COOKING IN OUR KITCHEN PRODUCTS</h1>
                <button className='sm-only:text-white sm-only:border sm-only:rounded-lg	 sm-only:border-white sm-only:p-1 sm-only:text-base	'>EXPLORE NOW</button>
              </div>
          </div>

        )}
      </div>

    </div>
  );
};

export default Banner;
