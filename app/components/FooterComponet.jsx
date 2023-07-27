import React from 'react';
import facebook_icon from '../asset/facebook.png';
import instagram_icon from '../asset/instagram.png';
import youtube_icon from '../asset/youtube.png';
import up_icon from '../asset/up-icon.png';

const FooterComponet = () => {
  return (
    <div>
      {/* POPULAR SEARCHES SECTION*/}
      <section>
        <div className="search-section mx-auto pt-6 pb-6 text-black border-b-2 border-gray-300">
          <div className="container mx-auto">
            <h2 className="font-medium mb-1">POPULAR SEARCHES</h2>
            <p className="leading-5 font-semibold">
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
          <div className="container mx-auto">
            <div className="">
              {' '}
              <h2 className=" mt-5 mb-7 text-center font-medium">
                SUBSCRIBE TO OUR NEWSLETTER
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                <div className="leading-5 font-semibold">
                  <p className="text-base mt-2">
                    Be the first to know our new collections, collaborations,
                    and more! Sign up here
                  </p>
                </div>
                <div className="flex ">
                  <input
                    className="pr-64 pt-0 pb-0 bg-whit text-sm md:w-auto w-full"
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
          <div className="container mx-auto">
            <div className="container mx-auto">
              <div className="follow-us-header flex justify-center w-full">
                <h2 className="pt-5.5 pb-7 text-right font-medium ">
                  FOLLOW US ON
                </h2>
                <div className="follow-us">
                  <div className="follow-us-icon mt-5 mb-7 ml-4 text-xl text-left font-medium flex items-center">
                    <div className="icon mr-5">
                      <img src={facebook_icon} alt="" />
                    </div>
                    <div className="icon mr-5">
                      <img src={instagram_icon} alt="" />
                    </div>
                    <div className="icon">
                      <img src={youtube_icon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="shop-section mx-auto">
              <div class="mx-auto w-full max-w-screen-xl">
                <div class="grid grid-cols-2 gap-8 pt-4 pb-16  md:grid-cols-4">
                  <div className="">
                    <h2 class="mb-4  font-semibold text-gray-900   dark:text-white">
                      Shop Now
                    </h2>
                    <p class="">
                      <a href="#" class=" ">
                        Prepware
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Drinkware
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Dineware
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Barware
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Storageware
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Homeware
                      </a>
                    </p>
                  </div>
                  <div className="mt-7">
                    <h2 class="mb-2 font-semibold text-gray-900 dark:text-white"></h2>
                    <p class="">
                      <a href="#" class=" ">
                        Tableware
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Bakeware
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Kids
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Cookware
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Bath
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Others
                      </a>
                    </p>
                  </div>
                  <div className="">
                    <h2 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Know Us
                    </h2>
                    <p class="">
                      <a href="#" class=" ">
                        About Us
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Career
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Blogs
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Connect
                      </a>
                    </p>
                  </div>
                  <div className="">
                    <h2 class="mb-4 font-semibold text-gray-900 dark:text-white">
                      Customer Service
                    </h2>
                    <p class="">
                      <a href="#" class=" ">
                        Privacy Policy
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Terms & Use
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Shipping & Delivery
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Returns & Exchanges
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Our Guarantee
                      </a>
                    </p>
                    <p class="">
                      <a href="#" class="">
                        Faq's
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BRANDS */}
          <div className="brands-section mx-auto bg-white text-black  border-b-2 border-gray-300">
          <div className="container mx-auto">
            <div class="grid  gap-8 pt-6 pb-6 md:grid-cols-6">
              <div className="">
                <h2 class="mb-6  font-semibold text-gray-900 dark:text-white">
                  Brands
                </h2>
                <p class="mb-2">
                  <a href="#" class=" ">
                    Amefa
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    BarCraf
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    BergHOFF
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Brabantia
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Burleigh
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" ">
                    Cole & Mason
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Dartington
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Denby
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Jamie Oliver
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Joseph Joseph
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" ">
                    John Beswick
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Kambukka
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Ken Hom
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Kilner
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Kitchen Craft
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" ">
                    La Cafetière
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    London Pottery
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Luigi Bormioli
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    MasterClass Mikasa
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" ">
                    Monno
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Richardson Sheffield
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Royal Brierley
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    The Kitchen Company
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Typhoon
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" ">
                    Zoku
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="">
                    Zyliss
                  </a>
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="relative mx-auto px-20  text-black border-b-2 border-gray-300">
            <div className="copy-right text-center mx-8 mt-16 mb-16">
              <p>© 2023 Seeba Industries Pvt Ltd.</p>
            </div>
            <div className="up-icon absolute right-1/2 border-2 border-white p-4 shadow-md">
              <img src={up_icon} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* description */}
      <section>
        <div className="description pt-6 pb-6 bg-white text-black">
        <div className="container mx-auto">
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
              Disclaimer - The information provided by Seeba Lifestyles Private
              Limited ("We/Our/Us") on this website is for informational
              purposes only. This information shall not be copied, reproduced,
              used and/or exploited in any manner by you or any other third
              party acting on your behalf, save and except as approved by Us in
              writing in advance. We make no representations or warranties
              regarding the accuracy or correctness of such information. We
              shall not be held liable for any losses, claims, damages,
              liabilities, penalties, costs arising out of your viewing of the
              website and/or reliance on the information stated herein. In no
              event shall you or any third party acting on your behalf use any
              of Our logos, trademarks and/or trade names for any reason
              whatsoever. You shall, at all times, be in strict compliance with
              the applicable laws and terms and conditions and privacy policy of
              Our website. Should there be any links on Our website which direct
              you to any third party website, we shall not be responsible for
              anything that you view on such third party websites. You shall, at
              all times, be in strict compliance with the terms and conditions
              and privacy policies of such third party website.
            </p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default FooterComponet;
