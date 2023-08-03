import footer_facebook_icon from '../asset/footer-facebook.png';
import footer_instagram_icon from '../asset/footer-instagram.png';
import footer_youtube_icon from '../asset/footer-youtube.png';
import up_icon from '../asset/up-icon.png';

import {FiChevronDown} from 'react-icons/fi';
import React, {useState} from 'react';
const FooterComponet = () => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const [isIconRotated, setIconRotated] = useState(true);
  const [isShopNowOpen, setShopNowOpen] = useState(false);
  const [isKnowUsOpen, setKnowUsOpen] = useState(false);
  const [isCustomerServiceOpen, setCustomerServiceOpen] = useState(false);
  const [isBrandsOpen, setBrandsOpen] = useState(false);
  // const toggleShopNow = () => setShopNowOpen((prevState) => !prevState);
  const toggleShopNow = () => {
    setShopNowOpen((prevState) => !prevState);
    setIconRotated((prevRotation) => !prevRotation); // Toggling icon rotation
  };
  const toggleKnowUs = () => {
    setKnowUsOpen((prevState) => !prevState);
    setIconRotated((prevRotation) => !prevRotation); // Toggling icon rotation
  };
  const toggleCustomerService = () => {
    setCustomerServiceOpen((prevState) => !prevState);
    setIconRotated((prevRotation) => !prevRotation);
  };

  const toggleBrands = () => {
    setBrandsOpen((prevState) => !prevState);
    setIconRotated((prevRotation) => !prevRotation);
  };

  const toggleDescription = () => {
    setDescriptionVisible((prevState) => !prevState);
  };
  return (
    <div>
      {/* POPULAR SEARCHES SECTION*/}
      <section>
        <div className="search-section mx-auto pt-6 pb-6 text-black border-b-2 border-gray-300">
          <div className="container mx-auto w-4/5">
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

      {/* SUBSCRIBE SECTION */}
      <section>
        <div className="subcribe-section border-b-2 border-gray-300 pb-6 mx-auto text-black">
          <div className="container mx-auto w-4/5">
            <div className="">
              {' '}
              <h2 className=" mt-5 mb-7 text-center font-medium">
                SUBSCRIBE TO OUR NEWSLETTER
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                <div className="leading-5 font-medium">
                  <p className="text-base mt-2">
                    Be the first to know our new collections, collaborations,
                    and more! Sign up here
                  </p>
                </div>
                <div className="flex ">
                  <input
                    className="pr-64 pt-0 pb-0 bg-whit text-sm sm:pr-12 w-full"
                    type="text"
                    placeholder="Email id"
                  />
                  <button class="border-black pl-8 pr-8 py-3.5 bg-black text-white text-sm  md:mt-0">
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOLLOW US SECTION */}
      <section>
        <div className="follow-us-section mx-auto pt-4 text-black">
          <div className="container mx-auto w-4/5">
            <div className="follow-us-header flex justify-center w-full">
              <h2 className="pt-5.5 pb-7  text-right font-medium ">
                FOLLOW US ON
              </h2>
              <div className="follow-us">
                <div className="follow-us-icon mt-5 mb-7 ml-4 text-xl text-left font-medium flex items-center">
                  <div className="icon mr-5">
                    <img src={footer_facebook_icon} alt="" />
                  </div>
                  <div className="icon mr-5">
                    <img src={footer_instagram_icon} alt="" />
                  </div>
                  <div className="icon">
                    <img src={footer_youtube_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-section mx-auto">
              <div className="grid sm:grid-cols-1 gap-8 sm-only:gap-0 pt-4 sm-only:pb-0 pb-12 md:grid-cols-2">
                <div className=" sm-only:border-b-2 border-gray-300 sm:pb-4">
                  <div className="shop-now-header ">
                    <h2 className=" sm:mb-0 font-medium text-gray-900 dark:text-white">
                      Shop Now
                    </h2>
                    <FiChevronDown
                      size={24}
                      className={`shop-now-down-icon sm:absolute sm:right-10 ${
                        isIconRotated ? 'rotate' : ''
                      }`}
                      onClick={toggleShopNow}
                    />
                  </div>
                  <ul
                    className={`shop-now-list  ${
                      isShopNowOpen ? 'block' : 'hidden'
                    } xl:block sm-only:grid-cols-2 pt-10 `}
                  >
                    <ul>
                      <li>
                        <a href="#">Prepware</a>
                      </li>
                      <li>
                        <a href="#">Drinkware</a>
                      </li>
                      <li>
                        <a href="#">Dineware</a>
                      </li>
                      <li>
                        <a href="#">Barware</a>
                      </li>
                      <li>
                        <a href="#">Storageware</a>
                      </li>
                      <li>
                        <a href="#">Homeware</a>
                      </li>
                    </ul>
                    <ul>
                      {/* <h2 className="mb-2 sm:mb-0 font-semibold text-gray-900 dark:text-white"></h2> */}
                      {/* <ul
                      className={`shop-now-list ${
                        isShopNowOpen ? 'block' : 'hidden'
                      } xl:block absolute mt-7 md:mt-0`}
                    > */}
                      <li>
                        <a href="#">Tableware</a>
                      </li>
                      <li>
                        <a href="#">Bakeware</a>
                      </li>
                      <li>
                        <a href="#">Kids</a>
                      </li>
                      <li>
                        <a href="#">Cookware</a>
                      </li>
                      <li>
                        <a href="#">Bath</a>
                      </li>
                      <li>
                        <a href="#">Others</a>
                      </li>
                    </ul>
                  </ul>
                  {/* </ul> */}
                </div>
                <div className="grid grid-cols-2 sm-only:grid-cols-1">
                  <div className="sm-only:border-b-2 border-gray-300 sm:pb-4 sm:pt-15">
                    <div className="know-us-header sm:pt-15">
                      <h2 className="mb-4 sm:mb-0 font-medium text-gray-900 dark:text-white">
                        Know Us
                      </h2>
                      <FiChevronDown
                        size={24}
                        className={`know-us-down-icon sm-only:absolute sm-only:right-10 ${
                          isIconRotated ? 'rotate' : ''
                        }`}
                        onClick={toggleKnowUs}
                      />
                    </div>

                    <ul
                      className={`know-us-list ${
                        isKnowUsOpen ? 'block' : 'hidden'
                      } xl:block sm-only:mt-7 md:mt-0 pt-4`}
                    >
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Blogs</a>
                      </li>
                      <li>
                        <a href="#">Connect</a>
                      </li>
                    </ul>
                  </div>

                  <div className=" sm-only:border-b-2 border-gray-300 sm-ony:pt-15 sm:pb-4">
                    <div className="customer-serive-header ">
                      <h2 className="mb-4 sm:mb-0 font-medium text-gray-900 dark:text-white">
                        Customer Service
                      </h2>
                      <FiChevronDown
                        size={24}
                        className={`customer-service-down-icon sm:absolute sm:right-10 ${
                          isIconRotated ? 'rotate' : ''
                        }`}
                        onClick={toggleCustomerService}
                      />
                    </div>
                    <ul
                      className={`customer-service-list ${
                        isCustomerServiceOpen ? 'block' : 'hidden'
                      } xl:block sm-only:mt-7 md:mt-0 pt-4`}
                    >
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms & Use</a>
                        </li>
                        <li>
                          <a href="#">Shipping & Delivery</a>
                        </li>
                        <li>
                          <a href="#">Returns & Exchanges</a>
                        </li>
                        <li>
                          <a href="#">Our Guarantee</a>
                        </li>
                        <li>
                          <a href="#">Faq's</a>
                        </li>
                      </ul>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BRANDS */}
          <div className="brands-section mx-auto sm-only:bg-gray-100 bg-white text-black border-b-2 border-gray-300 sm-only:border-b-0">
            <div className="container mx-auto w-4/5 pt-8 sm-only:pt-0 sm-ony:pt-15 sm-only:border-b-2 border-gray-300 sm:pb-4">
              <div className="brands-header">
                <h2 className=" mb-4  sm:mb-0  font-medium text-gray-900 dark:text-white">
                  Brands
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
                className={`brands-list ${
                  isBrandsOpen ? 'block' : 'hidden'
                } xl:block  md:mt-0 grid gap-8 pt-6 pb-6 md:grid-cols-2 sm:grid-cols-2`}
              >
                <ul>
                  <li>
                    <a href="#">Amefa</a>
                  </li>
                  <li>
                    <a href="#">BarCraf</a>
                  </li>
                  <li>
                    <a href="#">BergHOFF</a>
                  </li>
                  <li>
                    <a href="#">Brabantia</a>
                  </li>
                  <li>
                    <a href="#">Burleigh</a>
                  </li>
                </ul>

                <ul className="">
                  <li>
                    <a href="#">Cole & Mason</a>
                  </li>
                  <li>
                    <a href="#">Dartington</a>
                  </li>
                  <li>
                    <a href="#">Denby</a>
                  </li>
                  <li>
                    <a href="#">Jamie Oliver</a>
                  </li>
                  <li>
                    <a href="#">Joseph Joseph</a>
                  </li>
                </ul>
                <ul className="">
                  <li>
                    <a href="#">John Beswick</a>
                  </li>
                  <li>
                    <a href="#">Kambukka</a>
                  </li>
                  <li>
                    <a href="#">Ken Hom</a>
                  </li>
                  <li>
                    <a href="#">Kilner</a>
                  </li>
                  <li>
                    <a href="#">Kitchen Craft</a>
                  </li>
                </ul>
                <ul className="">
                  <li>
                    <a href="#">La Cafetière</a>
                  </li>
                  <li>
                    <a href="#">London Pottery</a>
                  </li>
                  <li>
                    <a href="#">Luigi Bormioli</a>
                  </li>
                  <li>
                    <a href="#">MasterClass</a>
                  </li>
                  <li>
                    <a href="#">Mikasa</a>
                  </li>
                </ul>
                <ul className="">
                  <li>
                    <a href="#">Monno</a>
                  </li>
                  <li>
                    <a href="#">Richardson Sheffield</a>
                  </li>
                  <li>
                    <a href="#">Royal Brierley</a>
                  </li>
                  <li>
                    <a href="#">The Kitchen Company</a>
                  </li>
                  <li>
                    <a href="#">Typhoon</a>
                  </li>
                </ul>
                <ul className="">
                  <li>
                    <a href="#">Zoku</a>
                  </li>
                  <li>
                    <a href="#">Zyliss</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative mx-auto px-20  text-black border-b-2 border-gray-300">
            <div className="copy-right text-center mx-8 mt-16 mb-16">
              <p>© 2023 Seeba Industries Pvt Ltd.</p>
            </div>
            <div
              className="up-icon absolute  right-1/2  border-white p-4 shadow-md"
              onClick={toggleDescription}
            >
              <img
                src={up_icon}
                alt=""
                className={`h-4 w-4 transform ${
                  isDescriptionVisible ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
        </div>
      </section>
      {/* description */}
      {isDescriptionVisible && (
        <section>
          <div className="description pt-6 pb-6 bg-white text-black">
            <div className="container mx-auto w-4/5">
              <div className="paragraph-one mt-4">
                <p>
                  ThinKitchen aims to empower and encourage families to cook,
                  eat and live healthy. This begins with your cookware and
                  kitchen utensils. From waterless cookware to beautiful and
                  functional kitchen utensil sets, thinKitchen has everything
                  you would need for a mindful and healthy kitchen.
                </p>
              </div>
              <div className="paragraph-one mt-4">
                <p>
                  Dining has never been more elegant and wonderful. Housing
                  beautiful stoneware and tableware sets, along with surgical
                  stainless steel cutlery sets, thinKitchen has everything you
                  require for casual dinners, intimate gatherings or
                  entertaining large parties.
                </p>
              </div>
              <div className="paragraph-one mt-4 mb-8">
                <p>
                  Disclaimer - The information provided by Seeba Lifestyles
                  Private Limited ("We/Our/Us") on this website is for
                  informational purposes only. This information shall not be
                  copied, reproduced, used and/or exploited in any manner by you
                  or any other third party acting on your behalf, save and
                  except as approved by Us in writing in advance. We make no
                  representations or warranties regarding the accuracy or
                  correctness of such information. We shall not be held liable
                  for any losses, claims, damages, liabilities, penalties, costs
                  arising out of your viewing of the website and/or reliance on
                  the information stated herein. In no event shall you or any
                  third party acting on your behalf use any of Our logos,
                  trademarks and/or trade names for any reason whatsoever. You
                  shall, at all times, be in strict compliance with the
                  applicable laws and terms and conditions and privacy policy of
                  Our website. Should there be any links on Our website which
                  direct you to any third party website, we shall not be
                  responsible for anything that you view on such third party
                  websites. You shall, at all times, be in strict compliance
                  with the terms and conditions and privacy policies of such
                  third party website.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FooterComponet;
