import React from 'react'
import data from '../../JSON/db.json';
import pdp_star_image from '../asset/pdp-star-img.svg';
import {AiFillStar} from 'react-icons/ai';
import {BiStar} from 'react-icons/bi';
import {MdVerified} from 'react-icons/md';


const CustomerReview = () => {
  return (
    <>
        <div className="px-11 sm-only:px-3 mt-16">
        <div className=" px-20 md-only:px-4 sm-only:px-2 bg-[#F5F5F5]">
          <div className="pt-3 pb-4 border-b border-[#D6D6D6]">
            <h1 className="text-[33px] font-semibold sm-only:text-[22px]">
              CUSTOMER REVIEW
            </h1>
          </div>
          <div className="grid grid-cols-6 pt-3 sm-only:grid-cols-1">
            <div className='"col-span-1 border-r border-[#D6D6D6] sm-only:border-r-0 '>
              <h1 className="text-[#424242] text-[13px] sm-only:hidden ">
                Customer Reviews
              </h1>
              <img className="w-[85px] mt-2" src={pdp_star_image} alt="" />
              <p className="text-[#424242] text-[13px] mt-2 xl-only:text-[11px] lg-only:text-[11px]">
                Based on 353 reviews
              </p>
            </div>
            <div className="col-span-4 sm-only:grid-cols-1 sm-only:pl-0 sm-only:mt-3 sm-only:border-t sm-only:border-[#D6D6D6] pl-3">
              <div className="flex items-baseline sm-only:mt-3">
                
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <div class="h-[12px] w-[115px] ml-[10px] bg-[#FFD500]"></div>
                <p className="text-[12px] ml-2">
                  {' '}
                  90% <span className="ml-2">(318)</span>
                </p>
              </div>
              <div className="flex items-baseline">
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <div className="w-[115px] ml-[10px]  border border-[#D6D6D6] flex">
                  <div className="h-[12px] w-[25px] bg-[#FFD500]"></div>
                  <div className="h-[12px] w-[65px] bg-[#F5F5F5]"></div>
                </div>
                <p className="text-[12px] ml-2">
                  {' '}
                  10% <span className="ml-2">(35)</span>
                </p>
              </div>
              <div className="flex items-baseline">
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <div className="w-[115px] ml-[10px] h-[15px] bg-[#F5F5F5] border border-[#D6D6D6]"></div>
                <p className="text-[12px] ml-2">
                  {' '}
                  0% <span className="ml-3">(0)</span>
                </p>
              </div>
              <div className="flex items-baseline">
                <AiFillStar className="text-[#FFD500]" />
                <AiFillStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <div className="w-[115px] ml-[10px] h-[15px] bg-[#F5F5F5] border border-[#D6D6D6]"></div>
                <p className="text-[12px] ml-2">
                  {' '}
                  0% <span className="ml-3">(0)</span>
                </p>
              </div>
              <div className="flex items-baseline">
                <AiFillStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <BiStar className="text-[#FFD500]" />
                <div className="w-[115px] ml-[10px] h-[15px] bg-[#F5F5F5] border border-[#D6D6D6]"></div>
                <p className="text-[12px] ml-2">
                  {' '}
                  0% <span className="ml-3">(0)</span>
                </p>
              </div>
            </div>

            <div className="relative  col-span-1 sm-only:border-b sm-only:border-[#D6D6D6] sm-only:col-span-0 top-[30px] sm-only:flex">
              <p className="bg-white pt-[10px] pb-[10px] text-[#606060] text-[12px] sm-only:mb-4 text-center sm-only:px-4 sm-only:py-2 border-[#D6D6D6]">
                Write a Review
              </p>
            </div>
          </div>

          
           <div>   
          {data.customer_review.map((item) => (
              <div
                
                className="grid grid-cols-6 mt-5 sm-only:mt-10 sm-only:grid-cols-1 bg-white px-5 py-5"
                key={item.id}
              >
                
                  <div
                    className={`col-span-1 border-r border-[#D6D6D6] sm-only:border-r-0 sm-only:border-b sm-only:border-[#D6D6D6]`}
                  >
                    <div className="flex md-only:contents xl-only:contents lg-only:contents">
                      <img className="w-[35px]" src={item.img} alt="" />
                      <div className="ml-[10px] md-only:ml-0 mr-[10px] xl-only:mx-0 lg-only:mx-0">
                        <p className="text-[13px] text-[#2D2C2E] font-semibold">
                          {item.name}
                        </p>
                        <p className="text-[14px] font-semibold text-[#2D2C2E]">
                          {item.date}
                        </p>
                      </div>
                      <p>
                        <MdVerified />
                      </p>
                    </div>
                    <div className="flex justify-center items-center xl-only:justify-start sm-only:justify-start ">
                      <img
                        className="w-[85px] mb-[25px] sm-only:ml-[45px]"
                        src={pdp_star_image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-span-5 sm-only:col-span-1 sm-only:mt-3 sm-only:pl-0 pl-6">
                    <div>
                      <p className="text-[#2D2C2E] text-[14px] font-bold">
                        {item.title}
                      </p>
                      <p className="text-[#2D2C2E] text-[13px]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                
              </div>
                ))}
            </div>

          <div className="py-6">
            <p className="flex justify-center items-center">
              <span className="font-bold"> 01</span>
              <span className="ml-4 text-[#777777]">02</span>
              <span className="ml-4 text-[#777777]">03</span>
              <span className="ml-4 text-[#777777]">04</span>
              <span className="ml-4 text-[#777777]">...</span>
              <span className="ml-4 text-[#777777]">07</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerReview