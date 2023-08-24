import React from 'react';
import {GoDotFill} from 'react-icons/go';

const EmailComponent = () => {
  return (
    <div className=" bg-white font-ubuntu">
      <div className="px-[22%] sm-only:px-0 sm-only:mt-[34px] md-only:mt-[34px]  lg-only:pl-[16%] lg-only:pr-[16%] md-only:pl-[12%] md-only:pr-[12%]">
        <div className="border-[#00000014] flex items-center justify-center h-[81px] shadow-md">
          <img
            src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Email_Thinkitchen_img.png?v=1692775427"
            alt=""
          />
        </div>
        <div className="bg-[#FBFBFB] p-[35px] sm-only:p-[15px] md-only:p-[25px]">
          <div className="bg-white">
            <div className="p-8 sm-only:p-4 md-only:p-5">
              <h1 className="text-base font-semibold flex items-center sm-only:items-start md-only:items-start  ">
                <span>
                  <img
                    className="pr-[10px] sm-only:mt-[5px] sm-only:w-[30px] md-only:mt-[5px] "
                    src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/email_verifed_img.png?v=1692780338"
                    alt=""
                  />
                </span>
                Thank you for your order. It has been confirmed
              </h1>
              <p className="mt-[20px] font-semibold text-base	">
                {' '}
                Hello Jayesh,
              </p>
              <p className="mt-[10px] text-sm	text-[#272727]">
                Thank you for placing an order with us and choosing us to make
                you feel better. We are prepping your bag of joy containing the
                products chosen by you.
              </p>
              <div className="mt-[30px] flex gap-[80px]">
                <div>
                  <button className="bg-[#175C8A] text-sm  text-white w-[140%] h-[45px]">
                    View your order
                  </button>
                </div>
                <div>
                  <button className="bg-[#175C8A] text-sm text-white w-[140%] h-[45px]">
                    Visit our store
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-[10px]">
            <div className="p-8 sm-only:p-4 md-only:p-5">
              <h1 className="text-lg font-semibold mb-[15px] ">
                Quick Details
              </h1>
              <div className=" border-[#D3D3D3] border-t border-b py-[6px] 2xl-only:flex xl-only:flex lg-only:flex md-only:flex 2xl-only:justify-between xl-only:justify-between lg-only:justify-between md-only:justify-between">
                <div>
                  <p className="text-[#707070] text-xs	">Order Number:</p>
                  <p className="mt-[4px] text-[#262626] text-lg ">
                    #TKSS25646151
                  </p>
                </div>
                <div>
                  <p className="mt-[4px] text-[#707070] text-xs text-end sm-only:text-start	">
                    Date:
                  </p>
                  <p className="text-[#262626] text-lg">
                    14 Dec 2022 - 10:10AM
                  </p>
                </div>
              </div>
              <div className=" border-[#D3D3D3] border-b py-[15px] flex">
                <img
                  className="h-[110px] w-[110px]"
                  src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/email_product_img_1.png?v=1692785012"
                  alt=""
                />
                <div className="ml-[18px]">
                  <p className="font-sm">Amefa Austin Cutlery, Set of 24</p>
                  <p className="mt-2 font-semibold font-sm">QTY: 1</p>
                  <p className="mt-2 font-semibold font-sm">₹ 4,999</p>
                </div>
              </div>
              <div className=" border-[#D3D3D3] border-b py-[15px] flex">
                <img
                  className="h-[110px] w-[110px]"
                  src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/email_product_img-2.png?v=1692785015"
                  alt=""
                />
                <div className="ml-[18px]">
                  <p className="font-sm">
                    Mikasa Reactive Blue Dinnerware Set, 12 pcs
                  </p>
                  <p className="mt-2 font-semibold font-sm">QTY: 1</p>
                  <p className="mt-2 font-semibold font-sm">₹ 8,399</p>
                </div>
              </div>
              <div className="text-end ">
                <p className="mt-[10px] ">
                  <span className="text-[#5B5B5B] mr-[20px] ">Subtotal:</span>{' '}
                  <span className="font-semibold">₹ 13,398</span>{' '}
                </p>
                <p className="mt-[10px] ">
                  <span className="text-[#5B5B5B] mr-[50px] ">
                    {' '}
                    Shipping (Standard):
                  </span>{' '}
                  <span className="font-semibold"> ₹ 00</span>{' '}
                </p>
                <p className="mt-[10px] mb-[10px] ">
                  <span className="text-[#5B5B5B] mr-[25px]">
                    Tax (IGST 18%):
                  </span>{' '}
                  <span className="font-semibold"> ₹ 1,000</span>{' '}
                </p>
              </div>
              <div className="border-[#D3D3D3] border-b float-right lg-only:w-[60%] w-[50%] md-only:w-[65%] sm-only:w-[90%]"></div>
              <div className="text-end py-5 border-[#D3D3D3] border-b">
                <p>
                  {' '}
                  <span className="text-[#272727] font-semibold ">
                    Amount to pay:
                  </span>{' '}
                  <span className="[text-[#000000] font-extrabold		">
                    ₹ 14,398
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-2 mt-[15px] mb-[15px] md-only:grid-cols-1 sm-only:grid-cols-1">
                <div className="border-[#D3D3D3] border-r md:border-r-0 sm:border-r-0 pr-5 py-5">
                  <h1 className="text-[#272727] mb-[10px] text-lg font-semibold ">
                    Billing Address
                  </h1>

                  <div >
                    <h2 className="text-[#000000] font-sm py-4 border-[#D3D3D3] border-t">
                      Jayesh Khagram
                    </h2>
                    <table className="border-collapse ">
                      <tbody>
                        <tr className="">
                          <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                            Address<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                          </td>
                          <td className="py-2 pl-4 text-sm text-[#000000]">
                            <span className="sm-only:hidden">:</span>{' '}
                            <span className="ml-[10px]">Mumbai, MH 400078</span>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                            City<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                          </td>
                          <td className="py-2 pl-4 text-sm text-[#000000]">
                            <span className="sm-only:hidden">:</span>{' '}
                            <span className="ml-[10px] lg-only:ml-0">Mumbai</span>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                            State<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                          </td>
                          <td className="py-2 pl-4 text-sm text-[#000000]">
                            <span className="sm-only:hidden">:</span>{' '}
                            <span className="ml-[10px] lg-only:ml-0">Maharashtra</span>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                            Pincode<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                          </td>
                          <td className="py-2 pl-4 text-sm text-[#000000]">
                            <span className="sm-only:hidden">:</span>{' '}
                            <span className="ml-[10px] lg-only:ml-0">400078</span>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                            Country<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                          </td>
                          <td className="py-2 pl-4 text-sm text-[#000000]">
                            <span className="sm-only:hidden">:</span>{' '}
                            <span className="ml-[10px] lg-only:ml-0">India</span>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                            Phone<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                          </td>
                          <td className="py-2 pl-4 text-sm text-[#000000]">
                            <span className="sm-only:hidden">:</span>{' '}
                            <span className="ml-[10px] lg-only:ml-0">+91 123456789</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="p-5 sm-only:pl-0 md-only:pl-0 lg-only:pr-0">
                  <h1 className="text-[#272727] mb-[10px] text-lg font-semibold">
                    Shipping Address
                  </h1>

                  <h2 className="text-[#000000] font-sm py-4 border-[#D3D3D3] border-t">
                    Jayesh Khagram
                  </h2>
                  <table className="border-collapse ">
                    <tbody>
                      <tr className="">
                        <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                          Address<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                        </td>
                        <td className="py-2 pl-4 text-sm text-[#000000]">
                          <span className="sm-only:hidden">:</span>{' '}
                          <span className="ml-[10px] lg-only:ml-0">Mumbai, MH 400078</span>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="py-2  text-sm text-[#5B5B5B]">
                          City<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                        </td>
                        <td className="py-2 pl-4 text-sm text-[#000000]">
                          <span className="sm-only:hidden">:</span>{' '}
                          <span className="ml-[10px] lg-only:ml-0">Mumbai</span>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                          State<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                        </td>
                        <td className="py-2 pl-4 text-sm text-[#000000]">
                          <span className="sm-only:hidden">:</span>{' '}
                          <span className="ml-[10px] lg-only:ml-0">Maharashtra</span>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                          Pincode<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                        </td>
                        <td className="py-2 pl-4 text-sm text-[#000000]">
                          <span className="sm-only:hidden">:</span>{' '}
                          <span className="ml-[10px] lg-only:ml-0">400078</span>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="py-2 pr-4 text-sm text-[#5B5B5B]">
                          Country <span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                        </td>
                        <td className="py-2 pl-4 text-sm text-[#000000]">
                          <span className="sm-only:hidden">:</span>{' '}
                          <span className="ml-[10px] lg-only:ml-0">India</span>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="py-2 pr-4 text-sm text-[rgb(91,91,91)]">
                          Phone<span className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden">:</span>
                        </td>
                        <td className="py-2 pl-4 text-sm text-[#000000]">
                          <span className="sm-only:hidden">:</span>{' '}
                          <span className="ml-[10px] lg-only:ml-0">+91 123456789</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="border-[#D3D3D3] border-t ">
                <p className="mt-[10px] text-sm text-[#0C0F26]">
                  {' '}
                  Shipping method Generic Shipping : ₹ 00.00
                </p>
                <p className="mt-[10px] text-sm text-[#0C0F26]">
                  Product cancellation is subject to{' '}
                  <span className="underline">terms and conditions.</span>Please
                  refer our cancellation policy
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <img
              className="h-[159px] w-[100%]"
              src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/email_page_img.png?v=1692794720"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#262626] text-[#FFFFFF] mt-[20px] py-6 px-6">
          <div className="mb-[15px]">
            <p className="mt-[20px] text-center text-sm">
              If you have any questions, get in touch with us
            </p>
            <div className="mt-[15px] text-center text-sm  2xl:flex xl:flex lg:flex md:flex justify-center">
              
              <p className="text-center text-sm">
              us : +91 704522 3344{' '}
              </p>
             
              <p className="text-white px-3 sm-only:hidden">
                <GoDotFill  />
              </p>
              <p className="text-center text-sm sm-only:mt-[15px] ">
              Email: contact@seebagroup.com
              </p>
            </div>
          </div>
          <div className="mt-[15px] border-[#CCCCCC] border-t ">
            <p className="flex text-sm justify-center mt-[15px]">
              {' '}
              Follow Us
              <span>
                <img
                  className="h-[22px] w-[22px] ml-3"
                  src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/email_facebook_img.png?v=1692797138"
                  alt=""
                />
              </span>
              <span>
                <img
                  className="h-[22px] w-[22px] ml-3"
                  src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/email_imstagram_img.png?v=1692797142"
                  alt=""
                />
              </span>
              <span>
                <img
                  className="h-[22px] w-[22px] ml-3"
                  src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/email_box_img.png?v=1692797158"
                  alt=""
                />
              </span>
            </p>
            <p className="mt-[20px] text-sm text-center">
              © 2022 Seeba Industries Pvt Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailComponent;
