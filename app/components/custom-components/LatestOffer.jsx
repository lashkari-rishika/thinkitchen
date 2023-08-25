import React from 'react';
import {Link} from '@remix-run/react';

import data from '../../../JSON/db.json';

const LatestOffer = () => {
  return (
    <div className="latest-offer-section sm-only:px-3 px-10">
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
                <Link href={item.link} className="w-full relative" target="_blank">
                  <img src={item.imageSrc} className="w-full object-cover" />
                  <div className="leatestOffer_banner absolute left-1/2 transform -translate-x-1/2 lg:text-2xl bg-black bg-opacity-50 text-center text-white py-1 px-2 text-2xl md-max:text-sm  xl:leading-7 md-only:leading-6 lg-only:text-lg min-w-max bottom-1.5 ">
                    <h1>{item.tag}</h1>
                  </div>
                </Link>
                <div className="flex px-4 md-only:px-2 py-6 sm:pt-2 sm:pb-4 justify-between bg-[#F9F9FC]">
                  <div className="lg:min-w-max text-xl md:text-base lg:text-2xl ">
                    <div className="">
                      <h1 className="font-bold">
                        {item.name}
                      </h1>
                    </div>
                    <span className="font-medium leading-7">
                      {item.text1}
                    </span>
                    <span className="font-bold leading-7">
                      {item.text2}
                    </span>
                  </div>
                  <div className=" product_card_button items-center flex min-w-max">
                    <button className="add_cart_button block w-full bg-white-500 text-xs font-medium text-black py-2 px-5 md-only:px-1.5 border border-solid border-black uppercase min-w-max">
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
