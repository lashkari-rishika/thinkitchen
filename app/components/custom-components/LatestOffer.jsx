import React from 'react';
import {Link} from '@remix-run/react';

// import img from '../../asset/latestoffer1.png';
// import img2 from '../../asset/latestoffer2.png';

import data from '../../../JSON/db.json'

// const item = [
//   {
//     id: 1,
//     imageSrc: img ,
//     tag: 'SAVE 50% ON GLASSES' ,
//     name: 'DARTINGTON',
//     text1: 'Sale upto' ,
//     text2: '50% OFF',
//     cartBtn: 'Add To Cart',
//     link: 'https://www.google.com/',
//   },
//   {
//     id: 2,
//     imageSrc: img2 ,
//     tag: 'DINE ON FESTIVAL SETS' ,
//     name: 'DENBY',
//     text1: 'Festival season' ,
//     text2: '',
//     cartBtn: 'Add To Cart',
//     link: 'https://www.google.com/',
//   },
// ]

const LatestOffer = () => {
  return (
    <div className="latest-offer-section mt-10 sm-only:px-3 px-10">
      <div className="latest-offer-heading">
        <h1 className="text-4xl text-center font-medium pb-4 xs-only:text-2xl">
          LATEST OFFERS
        </h1>
      </div>
      <div className="image_section">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {data.offers.map((item)=> (
          <div key={item.id} className="flex flex-col items-center">
            <div className="relative">
              <Link
                href={item.link}
                className="w-full"
                target="_blank"
              >
                <img src={item.imageSrc} className="w-full object-cover" />
                <div className="leatestOffer_banner absolute left-1/2 transform -translate-x-1/2 lg:text-2xl bg-black bg-opacity-50 text-center text-white py-1 px-2 text-2xl md-only:text-sm sm-only:text-sm  xl:leading-7 lg-only:leading-6 md-only:leading-6 lg:bottom-24 lg-only:text-lg min-w-max sm-only:bottom-[86px] md-only:bottom-[5.25rem] ">
                  <h1>{item.tag}</h1>
                </div>
              </Link>
              <div className='flex px-4 py-6 sm:pt-2 sm:pb-4 justify-between bg-gray-50'>
                <div className='min-w-max'>
                    <div className=''><h1 className='text-xl lg:text-2xl font-bold'>{item.name}</h1>
                    </div>
                    <span className='text-xl lg-2xl font-medium leading-7'>{item.text1}</span>
                    <span className='text-xl lg-2xl font-bold leading-7'>{item.text2}</span>
                </div>
                <div className=' product_card_button 4/12 items-center flex'>
                    <button className="add_cart_button block w-full bg-white-500 text-xs font-medium text-black py-2 sm:pt-2 px-5 sm:px-3 border border-solid border-black uppercase min-w-max">
                    {item.cartBtn}
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










