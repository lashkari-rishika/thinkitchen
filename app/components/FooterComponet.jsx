import footer_facebook_icon from '../asset/footer-facebook.png';
import footer_instagram_icon from '../asset/footer-instagram.png';
import footer_youtube_icon from '../asset/footer-youtube.png';
import up_icon from '../asset/up-icon.png';

import {FiChevronDown} from 'react-icons/fi';
import React, {useState} from 'react';

import ShippingComponent from './ShippingComponent';
import {Link} from './Link';
const FooterComponet = ({menu}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const [isIconRotated, setIconRotated] = useState(true);
  // const [isShopNowOpen, setShopNowOpen] = useState(false);
  const [isKnowUsOpen, setKnowUsOpen] = useState(false);
  const [isCustomerServiceOpen, setCustomerServiceOpen] = useState(false);
  const [isBrandsOpen, setBrandsOpen] = useState(false);
  // const toggleShopNow = () => setShopNowOpen((prevState) => !prevState);
  const [isShopNowOpen, setIsShopNowOpen] = useState(null);

  const toggleShopNow = (itemId) => {
    setIsShopNowOpen((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  const toggleCustomerService = () => {
    setCustomerServiceOpen((prevState) => !prevState);
    setIconRotated((prevRotation) => !prevRotation);
  };

  const toggleBrands = () => {
    setBrandsOpen((prevState) => !prevState);
    setIconRotated((prevRotation) => !prevRotation);
  };

  // const toggleDescription = () => {
  //   setDescriptionVisible((prevState) => !prevState);
  // };

  // const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);

    // Scroll to the top of the page when the icon is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling animation
    });
  };
  return (
    <div>
      {/* POPULAR SEARCHES SECTION*/}
      <section>
        <ShippingComponent />

        <div className="search-section mx-auto pt-6 pb-6 text-black border-b-2 border-gray-300">
          <div className="container mx-auto w-[82%] sm-only:w-[87%]">
            <h2 className="font-medium mb-1">POPULAR SEARCHES</h2>
            <p className="leading-5 font-medium">
              Air Tight Dry Fruit Jar | Luxury Cutlery | Bathroom Set |
              Potpourri | Hand Wash Bottle | Black Coffee Mug | Luxury Tea Set |
              Vintage Mirror | Cane Wall Mirror | Modern Cutlery Set | Metal
              Candle Holder | Vera Black Plates | baking Dish For Oven |
              Doraemon Keychain | Table Cover | House Plant Pots | Bohemain Rug
              | Wall Hanging Organiser | Elephant Showpiece | Scoop Spoon |
            </p>
          </div>
        </div>
      </section>

      

      {/* FOLLOW US SECTION */}
      <section>
        <div className="follow-us-section mx-auto pt-4 text-black">
          

          <div className="container mx-auto w-[82%] sm-only:w-[87%]">
            <div className="shop-section mx-auto">
              <div className="grid grid-cols-4 md-only:grid-cols-2 pb-12  sm-only:hidden ">
                {(menu?.items || []).map((item, index) => (
                  <>
                    {index !== 3 ? (
                      <div
                        key={item.id}
                        className="w-[13rem]  lg-only:w-[9rem] sm-only:border-b-2 sm-only:pt-3 border-gray-300 sm:pb-4"
                      >
                        <div className="shop-now-header ">
                          <Link className="font-semibold text-gray-900  dark:text-white">
                            {item.title}
                          </Link>
                        </div>
                        <ul
                          className={`  ${
                            isShopNowOpen ? 'block' : ''
                          } xl:block sm-only:grid-cols-2 pt-10 `}
                        >
                          {item?.items?.length > 0 ? (
                            <ul className="flex_column flex max-h-[180px]">
                              {item.items.map((subItem) => (
                                <li className='2xl-only:w-[50%]' key={subItem.id}>
                                  <a href="#">{subItem.title}</a>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </ul>
                      </div>
                    ) : (
                      ''
                    )}
                  </>
                ))}
                <div className="max-w-max lg-only:w-[114%] xl-only:w-[114%] sm-only:w-[19rem]">
                  <h2 className="mb-4 text-left font-[16px]">
                    SUBSCRIBE TO OUR NEWSLETTER
                  </h2>
                  <div className="flex flex-row mb-4 sm-only:flex-row">
                    <input
                      className=" sm-omly:mb-0 pr-0 lg-only:w-[150%] xl-only:w-[150%] lg-only:text-[12px] lg-only:pl-[5px]  pt-0 pb-0 bg-white text-sm"
                      type="text"
                      placeholder="Email id"
                    />
                    <button className="w-[100%] lg-only:text-[10px] lg-only:h-[32px] sm-only:w-auto h-[40px] bg-[#175C8A] text-[#FFFFFF] text-[12px] md:mt-0">
                      SIGN UP
                    </button>
                  </div>
                  <h2 className="pt-5.5 pb-[10px] text-left font-medium">
                    FOLLOW US ON
                  </h2>
                  <div className="follow-us">
                    <div className="follow-us-icon mb-7 text-xl text-left font-medium flex items-center">
                      <div className="icon mr-5">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/footer-facebook.png?v=1693223836"
                          alt=""
                        />
                      </div>
                      <div className="icon mr-5">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/footer-instagram.png?v=1693223841"
                          alt=""
                        />
                      </div>
                      <div className="icon">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/footer-youtube.png?v=1693223850"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden sm-only:grid-cols-1 sm-only:gap-0  sm-only:pb-0 ">
                <h2 className="mb-4 text-left font-[16px]">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h2>
                <div className="flex flex-row mb-4 sm-only:flex-row">
                  <input
                    className=" sm-omly:mb-0 pr-0  pt-0 pb-0 bg-white text-sm sm-only:w-[135%]"
                    type="text"
                    placeholder="Email id"
                  />
                  <button className="w-[100%] sm-only:w-[100%] h-[44px] bg-[#175C8A] text-[#FFFFFF] text-[12px] md:mt-0">
                    SIGN UP
                  </button>
                </div>
                {(menu?.items || []).map((item, index) => (
                  <div
                    className="sm-only:w-[100%] w-64 sm-only:border-b-2 sm-only:pt-3 border-gray-300 sm:pb-4"
                    key={index}
                  >
                    <div className="shop-now-header">
                      <button
                        className="sm:mb-0 font-semibold	 text-gray-900 dark:text-white"
                        onClick={() => toggleShopNow(item.id)}
                      >
                        {item.title}
                      </button>
                      <FiChevronDown
                        size={24}
                        className={`shop-now-down-icon sm:absolute sm:right-10 ${
                          isIconRotated && isShopNowOpen === item.id
                            ? 'rotate'
                            : ''
                        }`}
                        onClick={() => toggleShopNow(item.id)}
                      />
                    </div>
                    <ul
                      className={`${
                        isShopNowOpen === item.id ? 'block' : 'hidden'
                      } xl:block sm-only:grid-cols-2 pt-10`}
                    >
                      {item?.items?.length > 0 ? (
                        <ul className="flex_column flex max-h-[160px]">
                          {item.items.map((subItem) => (
                            <li className='sm-only' key={subItem.id}>
                              <a href="#">{subItem.title}</a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </ul>
                  </div>
                ))}

                <div className='sm-only:border-b-2 border-gray-300 mt-[20px]'>
                  <h2 className="pt-5.5 pb-[15px] text-left font-medium">
                    FOLLOW US ON
                  </h2>
                  <div className="follow-us">
                    <div className="follow-us-icon mb-7 text-xl text-left font-medium flex items-center">
                      <div className="icon mr-5">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/footer-facebook.png?v=1693223836"
                          alt=""
                        />
                      </div>
                      <div className="icon mr-5">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/footer-instagram.png?v=1693223841"
                          alt=""
                        />
                      </div>
                      <div className="icon">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/footer-youtube.png?v=1693223850"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BRANDS */}
          <div className="border-t brands-section sm-only:hidden mx-auto sm-only:bg-gray-100 bg-white text-black border-b-2 border-gray-300 sm-only:border-b-0 sm-only:border-t-0">
            {(menu?.items || []).map((item) => (
              <>
                {item.title == 'Brands' ? (
                  <div
                    key={item.id}
                    className="container mx-auto w-[82%] sm-only:w-[87%] pt-8 sm-only:pt-0 sm-ony:pt-15 sm-only:border-b-2 border-gray-300 sm:pb-4"
                  >
                    <div className="brands-header">
                      <h2 className=" mb-4  sm:mb-0  font-semibold	 text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                      <FiChevronDown
                        size={24}
                        className={`brands-down-icon sm:absolute sm:right-10 ${
                          isIconRotated ? 'rotate' : ''
                        }`}
                        onClick={toggleBrands}
                      />
                    </div>
                    <div
                      className={` ${
                        isBrandsOpen ? 'block' : ''
                      } xl:block  md:mt-0 grid gap-8 pt-6 pb-6 `}
                    >
                      {item?.items?.length > 0 ? (
                        <ul className="flex_column flex max-h-[160px]">
                          {item.items.map((subItem) => (
                            <li key={subItem.id}>
                              <a href="#">{subItem.title}</a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </>
            ))}
          </div>

          <div className="relative mx-auto px-20  text-black border-b-2 border-gray-300">
            <div className="copy-right text-center  mt-16 mb-16 sm-only:mt-6 sm-only:mb-10">
              <p>© 2023 Seeba Industries Pvt Ltd.</p>
            </div>
            <div
              className="up-icon absolute sm-only:right-[45%] right-1/2  border-white p-4 shadow-md"
              onClick={toggleDescription}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/up-icon_699bad98-102f-4260-83f0-b749241255bb.png?v=1693223276"
                alt=""
                className={`h-4 w-4 transform ${
                  isDescriptionVisible ? '' : ''
                }`}
                onClick={toggleDescription}
              />
            </div>
          </div>
        </div>
      </section>
      {/* description */}

      <section>
        <div className="description pt-6 pb-6 bg-white text-black">
          <div className="container mx-auto w-[82%] sm-only:w-[87%]">
            <div className="paragraph-one mt-4">
              <p>
                ThinKitchen aims to empower and encourage families to cook, eat
                and live healthy. This begins with your cookware and kitchen
                utensils. From waterless cookware to beautiful and functional
                kitchen utensil sets, thinKitchen has everything you would need
                for a mindful and healthy kitchen.
              </p>
            </div>
            <div className="paragraph-one mt-4">
              <p>
                Dining has never been more elegant and wonderful. Housing
                beautiful stoneware and tableware sets, along with surgical
                stainless steel cutlery sets, thinKitchen has everything you
                require for casual dinners, intimate gatherings or entertaining
                large parties.
              </p>
            </div>
            <div className="paragraph-one mt-4 mb-8">
              <p>
                Disclaimer - The information provided by Seeba Lifestyles
                Private Limited ("We/Our/Us") on this website is for
                informational purposes only. This information shall not be
                copied, reproduced, used and/or exploited in any manner by you
                or any other third party acting on your behalf, save and except
                as approved by Us in writing in advance. We make no
                representations or warranties regarding the accuracy or
                correctness of such information. We shall not be held liable for
                any losses, claims, damages, liabilities, penalties, costs
                arising out of your viewing of the website and/or reliance on
                the information stated herein. In no event shall you or any
                third party acting on your behalf use any of Our logos,
                trademarks and/or trade names for any reason whatsoever. You
                shall, at all times, be in strict compliance with the applicable
                laws and terms and conditions and privacy policy of Our website.
                Should there be any links on Our website which direct you to any
                third party website, we shall not be responsible for anything
                that you view on such third party websites. You shall, at all
                times, be in strict compliance with the terms and conditions and
                privacy policies of such third party website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterComponet;
