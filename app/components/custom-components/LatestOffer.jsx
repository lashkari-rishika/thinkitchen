import React, {useState} from 'react';
import {Link} from '@remix-run/react';
import {BsBag} from 'react-icons/bs';

import data from '../../../JSON/db.json';

const LatestOffer = () => {
  // const [hovered, setHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setHovered(false);
  // };
  return (
    <div className="latest-offer-section sm-only:px-3 pt-10 px-10">
      <div className="latest-offer-heading">
        <h1 className="text-4xl sm-only:text-2xl text-center font-medium pb-4 xs-only:text-2xl">
          LATEST OFFERS
        </h1>
      </div>
      <div className="image_section">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {data.offers.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-full">
                <Link
                  href={item.link}
                  className="w-full relative"
                  target="_blank"
                >
                  <img src={item.imageSrc} className="w-full object-cover" />
                  <div className="leatestOffer_banner absolute left-1/2 transform -translate-x-1/2 lg:text-2xl bg-black bg-opacity-50 text-center text-white py-1 px-2 text-2xl md-max:text-sm  xl:leading-7 md-only:leading-6 lg-only:text-lg min-w-max bottom-1.5 ">
                    <h1>{item.tag}</h1>
                  </div>
                </Link>
                <div className="flex px-4 md-only:px-2 py-4 justify-between bg-[#dbdbe6]">
                  <div className="lg:min-w-max text-xl md:text-base lg:text-2xl lg:leading-6 ">
                    <div className="">
                      <h1 className="font-bold">{item.name}</h1>
                    </div>
                    <span className="font-medium leading-7">{item.text1}</span>
                    <span className="font-bold leading-7">{item.text2}</span>
                  </div>
                  <div className=" product_card_button items-center flex min-w-max">
                    <button className="add_cart_button bg-[#175C8A] block w-full bg-white-500 text-xs font-medium text-white py-2.5 px-5 md-only:px-1.5 border border-solid uppercase min-w-max relative overflow-hidden">
                      <span className="logo1 absolute inset-y-0 left-0 flex items-center pl-2">
                        <img src='https://cdn.shopify.com/s/files/1/0293/6448/6192/files/bag_r.png' alt=''/>
                      </span>
                      <span className="text1">buy now</span>
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
