import React from 'react';

import CT1 from '../../asset/CT1.png';
import star5 from '../../asset/5star.png';

const CustomerTestimonial = () => {
  return (
    <div className="testimonial-section mt-10 xs-only:px-3 px-10">
      <div className="testimonial-section-heading">
        <h1 className="text-4xl text-center font-medium pb-4">
          CUSTOMER TESTIMONIALS
        </h1>
      </div>
      <div className="bg-white mt-2 lg:w-5/6 sm:w-full mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center           md:justify-between relative">
            <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
              <img src={CT1} alt="Testimonial" className="shadow-lg" />
            </div>

            <div className="md:w-1/2 md:ml-4">
              <div className="text-center md:text-left">
                <p className="text-black font-medium text-sm leading-5 lg:mb-4 sm:mx-2 lg:mr-8 md:text-left sm:text-left">
                    <span className="testimonial-logo-before" />
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text."
                    <span className="testimonial-logo-after" />
                </p>
                <div className="items-center justify-center md:justify-start absolute right-8 bottom-8">
                  <span className="text-gray-600 font-semibold">Name</span>
                  <span>
                    <img src={star5} alt="5 Star Rated" className="h-6 mr-2" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
