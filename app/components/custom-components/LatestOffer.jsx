import React from 'react';
import {Link} from '@remix-run/react';

import img from '../../asset/latestoffer1.png';
import img2 from '../../asset/latestoffer2.png';

const media = [
  {
    id: 1,
    imageSrc: img ,
    tag: 'SAVE 50% ON GLASSES' ,
    name: 'DARTINGTON',
    text1: 'Sale upto' ,
    text2: '50% OFF',
    cartBtn: 'Add To Cart',
    link: 'https://www.google.com/',
  },
  {
    id: 2,
    imageSrc: img2 ,
    tag: 'DINE ON FESTIVAL SETS' ,
    name: 'DENBY',
    text1: 'Festival season' ,
    text2: '',
    cartBtn: 'Add To Cart',
    link: 'https://www.google.com/',
  },
]

const LatestOffer = () => {
  return (
    <div className="latest-offer-section mt-10 xs-only:px-3 px-10">
      <div className="latest-offer-heading">
        <h1 className="text-4xl text-center font-medium pb-4 xs-only:text-2xl">
          LATEST OFFERS
        </h1>
      </div>
      <div className="image_section">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {media.map((media)=> (
          <div key={media.id} className="flex flex-col items-center">

            <div className="relative">
              <Link
                href={media.link}
                className="w-full"
                target="_blank"
              >
                <img src={media.imageSrc} className="w-full object-cover" />
                <div className="leatestOffer_banner lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:text-2xl xl:w-6/12 lg:w-6/12 md:w-3/6 sm:w-3/6 xs:w-3/6 lg:bg-black lg:bg-opacity-50 lg:text-center lg:py-2 lg:text-white absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center py-1 text-2xl md-only:text-sm sm-only:text-2xl xs-only:text-base">
                  <h1>{media.tag}</h1>
                </div>
              </Link>
              <div className='flex px-4 py-6 xs:pt-2 xs:pb-4 justify-between bg-gray-50'>
                <div className=''>
                    <div className=''><h1 className='text-2xl xs-only:text-xl font-bold'>{media.name}</h1>
                    </div>
                    <span className='text-2xl xs:text-xl font-medium leading-7'>{media.text1}</span>
                    <span className='text-2xl xs:text-xl font-bold leading-7'>{media.text2}</span>
                </div>
                <div className=' product_card_button 4/12 items-center flex'>
                    <button className="add_cart_button block w-full bg-white-500 text-xs font-medium text-black py-2 xs:pt-2 px-5 xs:px-3 border border-solid border-black uppercase">
                    {media.cartBtn}
                    </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default LatestOffer;






// import React from 'react';
// import {Link} from '@remix-run/react';
// import Swiper  from 'swiper';
// import { useEffect } from 'react';
// import { AiOutlineHeart } from 'react-icons/ai'
// import arrival1 from '../../asset/arrival1.png'

// import '../../styles/app.css'
// import img from '../../asset/latestoffer1.png';
// import img2 from '../../asset/latestoffer2.png';

// const ShopByBrand = () => {
//     useEffect(() => {
//         if (typeof document !== 'undefined') {
//           const swiper = new Swiper('.swiper', {
//             loop: true,
//             slidesPerView: 5,
//             centeredSlides: true,
//             autoplay: {
//               delay: 2000,
//             },
//           });
//         }
//       }, []);

//   return (
//     <div className="brand-section mt-10">
//       <div className="brand-section-heading">
//         <h1 className="text-3xl text-center font-normal pb-4">
//           ARRIVELS
//         </h1>
//       </div>
//       <div className="image_section">
//       <div className="myswiper">

// <div className="swiper">
//   <div className="swiper-wrapper">
//     <div className="swiper-slide">
//       <div className="card">
//         <div className="card__image">
//             <img src={img} alt=""/>
//           <h2 className="card__title">Slide 1</h2>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="swiper-button-prev"></div>
//   <div className="swiper-button-next"></div>
// </div>
// <div className="swiper-pagination"></div>
// </div>
//       </div>
//     </div>
//   );
// };










