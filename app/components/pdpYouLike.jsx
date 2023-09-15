import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ProductCard, Section} from '~/components';
import {  Scrollbar, A11y } from 'swiper/modules';


const mockProducts = {
  nodes: new Array(12).fill(''),
};

export function PdpYouLike({
  title = 'YOU MAY ALSO LIKE',
  recommended = recommended,
  products = mockProducts,
  count = 12,
  ...props 
}) {

  const [Swiper, setSwiper] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);


  

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
    <Section className="mt-10 sm-only:px-3 px-10" heading={title} padding="y" {...props}>
      <Swiper
       modules={[ Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
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
          className="!overflow-hidden swimlane hiddenScroll"
          >
      <div>
        {products.nodes.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              key={product.id}
              className="snap-start w-80"
              />
          </SwiperSlide>
        ))}
      </div>
      </Swiper>
      {/* <div className="flex justify-center text-3xl mb-4 sm-only:hidden gap-6">
           <button className="flex justify-center" onClick={slidePrev}>
            <BsArrowLeft />
          </button>
          <button className="flex justify-center" onClick={slideNext}>
            <BsArrowRight />
          </button>
        </div> */}
    </Section>
  );
}

