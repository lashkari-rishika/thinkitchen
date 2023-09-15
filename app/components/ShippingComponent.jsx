import React from 'react';
import shipping_img from '../asset/footer_shipping_img.png';
import quality_img from '../asset/footer_quality_img.png';
import payment_img from '../asset/footer_payment_img.png';
import award_img from '../asset/footer_award_img.png';

const ShippingComponent = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-10 w-4/5 sm-only:py-6 sm-only:w-[84%]">
        <div className="grid grid-cols-1 sm-only:px-0 sm-only:gap-0 sm-only:grid-cols-4 md-only:grid-cols-4 lg-only:grid-cols-4 xl-only:grid-cols-4 2xl-only:grid-cols-4   xl-only:gap-16 2xl-only:gap-16 px-5">
          {/* first */}
          <div className="p-4 sm-only:p-0">
            <div className="flex justify-center">
              <img
                className="h-12 w-12 sm-only:h-8 sm-only:w-8"
                src={shipping_img}
                alt=""
              />
            </div>
            <p className="text-[#000716] text-[15px] sm-only:text-[10px] font-semibold text-center mt-2 sm:mt-3">
              FREE SHIPPING ON ORDERS ABOVE RS 2000!
            </p>
          </div>
          {/* second */}
          <div className="p-4 sm-only:p-0">
            <div className="flex justify-center">
              <img
                className="h-12 w-8 sm-only:h-8 sm-only:w-8"
                src={quality_img}
                alt=""
              />
            </div>
            <p className="text-[#000716] text-[15px] sm-only:text-[10px] font-semibold text-center mt-2 sm:mt-3">
              PREMIUM QUALITY
            </p>
          </div>
          {/* third */}
          <div className="p-4 sm-only:p-0">
            <div className="flex justify-center">
              <img
                className="h-12 w-16 sm-only:h-8 sm-only:w-8"
                src={payment_img}
                alt=""
              />
            </div>
            <p className="text-[#000716] text-[15px] sm-only:text-[10px] font-semibold text-center mt-2 sm:mt-3">
              SECURE PAYMENTS
            </p>
          </div>
          {/* forth */}
          <div className="p-4 sm-only:p-0">
            <div className="flex justify-center">
              <img
                className="h-12 w-10 sm-only:h-8 sm-only:w-8"
                src={award_img}
                alt=""
              />
            </div>
            <p className="text-[#000716] text-[15px] sm-only:text-[10px] font-semibold text-center mt-2 sm:mt-3">
              AWARD WINNING PRODUCTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingComponent;
