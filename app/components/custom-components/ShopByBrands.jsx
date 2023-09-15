import React from 'react';
import {Link} from '@remix-run/react';
// import sb2 from '../../asset/sb2.png';
// import sb3 from '../../asset/sb3.png';
// import sb5 from '../../asset/sb5.png';
// import sb6 from '../../asset/sb6.png';
// import grazia from '../../asset/grazialogo.png';
import '../../styles/app.css';

import data from '../../../JSON/db.json'

// const item = [
//   {
//     id: 1,
//     imageSrc: sb2,
//     name: 'AMEFA',
//     tagName: 'BY THENKITCHEN',
//     imgSrc2: grazia,
//     link: 'https://www.google.com/',
//   },
//   {
//     id: 2,
//     imageSrc: sb3,
//     name: 'BERGHOFF',
//     tagName: 'BY THENKITCHEN',
//     imgSrc2: grazia,
//     link: 'https://www.google.com/',
//   },
//   {
//     id: 3,
//     imageSrc: sb5,
//     name: 'COLE&MASON',
//     tagName: 'BY THENKITCHEN',
//     imgSrc2: grazia,
//     link: 'https://www.google.com/',
//   },
//   {
//     id: 4,
//     imageSrc: sb6,
//     name: 'BRABANTIA',
//     tagName: 'BY THENKITCHEN',
//     imgSrc2: grazia,
//     link: 'https://www.google.com/',
//   },
//   {
//     id: 5,
//     imageSrc: sb2,
//     name: 'JAMIE OLIVER',
//     tagName: 'BY THENKITCHEN',
//     imgSrc2: grazia,
//     link: 'https://www.google.com/',
//   },
//   {
//     id: 6,
//     imageSrc: sb3,
//     name: 'ZYLISS',
//     tagName: 'BY THENKITCHEN',
//     imgSrc2: grazia,
//     link: 'https://www.google.com/',
//   },
// ];

const ShopByBrands = () => {
  return (
    <div className="brand-section mt-10 sm-only:px-3 px-10">
      <div className="brand-section-heading">
        <h1 className="text-4xl sm-only:text-2xl md-only:text-3xl text-center font-medium pb-4 uppercase">shop by brands</h1>
      </div>
      <div className="image_section">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2.5">
          {data.brands.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="all-brand-image">
                <Link
                  href="https://www.google.com/"
                  className="w-full"
                  target="_blank"
                >
                  <img
                    src={item.imageSrc}
                    className="w-full object-cover hover_image"
                  />
                  <div className="all_brand_text text-3xl md-only:text-base lg-only:text-2xl  text-white">
                    <h1> {item.name}</h1>{' '}
                  </div>
                  <div className="all-brand-hidden w-2/4 left-1/4 top-2/3">
                    <div className="flex justify-center">
                      <img src={item.imgSrc2} />
                    </div>
                    <div className="mt-2">
                      <h1 className="text-base flex justify-center">
                        {item.tagName}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-2 text-center">
        <button className="font-medium no-underline text-white py-1 px-4 bg-[#175C8A] ">View All Brands </button>
      </div>
    </div>
  );
};

export default ShopByBrands;
