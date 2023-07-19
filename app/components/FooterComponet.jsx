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
        <div className="mx-auto px-20 pb-7 text-black border-b-2 border-gray-300">
          <h3 className="text-xl font-medium mb-1">POPULAR SEARCHES</h3>
          <p className="text-sm">
            Air Tight Dry Fruit Jar | Luxury Cutlery | Bathroom Set | Potpourri
            | Hand Wash Bottle | Black Coffee Mug | Luxury Tea Set | Vintage
            Mirror | Cane Wall Mirror | Modern Cutlery Set | Metal Candle Holder
            | Vera Black Plates | baking Dish For Oven | Doraemon Keychain |
            Table Cover | House Plant Pots | Bohemain Rug | Wall Hanging
            Organiser | Elephant Showpiece | Scoop Spoon |
          </p>
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section>
        <div className="border-b-2 border-gray-300 pb-7 mx-auto px-20  text-black">
          <h3 className=" mt-7 mb-7 text-xl text-center font-medium mb-1">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 mb-5">
            <div className="text-sm">
              <p>
                Be the first to know our new collections, collaborations, and
                more! Sign up here
              </p>
            </div>
            <div className="flex">
              <input
                className="border-black px-4 py-2.5 pr-60 bg-white text-black text-sm md:w-auto w-full"
                type="text"
                placeholder="Email id"
              />
              <button class="border-black pl-8 pr-8 py-3.5 bg-black text-white text-sm mt-4 md:mt-0">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOLLOW US SECTION */}
      <section>
        <div className="mx-auto px-20 pb-7 text-black border-b-2 border-gray-300">
          <div className="container mx-auto">
            <div className="follow-us-header flex justify-center w-full">
              <h3 className="mt-7 mb-7 text-xl text-right font-medium mb-1">
                FOLLOW US ON
              </h3>
              <div className="follow-us">
                <div className="follow-us-icon mt-7 mb-7 ml-4 text-xl text-left font-medium mb-1 flex items-center">
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
          <div class="mx-auto">
            <div class="mx-auto w-full max-w-screen-xl">
              <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div className="">
                  <h2 class="mb-2 text-xl font-semibold text-gray-900  uppercase dark:text-white">
                    Shop Now
                  </h2>
                  <p class="">
                    <a href="#" class=" hover:underline">
                      Prepware
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Drinkware
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Dineware
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Barware
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Storageware
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Homeware
                    </a>
                  </p>
                </div>
                <div className="mt-8">
                  <h2 class="mb-2text-xl font-semibold text-gray-900  uppercase dark:text-white"></h2>
                  <p class="">
                    <a href="#" class=" hover:underline">
                      Tableware
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Bakeware
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Kids
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Cookware
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Bath
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Others
                    </a>
                  </p>
                </div>
                <div className="">
                  <h2 class=" text-xl font-semibold text-gray-900  uppercase dark:text-white">
                    Know Us
                  </h2>
                  <p class="">
                    <a href="#" class=" hover:underline">
                      About Us
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Career
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Blogs
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Connect
                    </a>
                  </p>
                </div>
                <div className="">
                  <h2 class="mb-2 text-xl font-semibold text-gray-900  uppercase dark:text-white">
                    Customer Service
                  </h2>
                  <p class="">
                    <a href="#" class=" hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Terms & Use
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Shipping & Delivery
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Returns & Exchanges
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Our Guarantee
                    </a>
                  </p>
                  <p class="">
                    <a href="#" class="hover:underline">
                      Faq's
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BRANDS */}
        <div className="px-20 mx-auto bg-white text-black  border-b-2 border-gray-300">
          <div class="mx-auto w-full max-w-screen-xl">
            <div class="grid  gap-8 px-4 py-6 lg:py-8 md:grid-cols-6">
              <div className="">
                <h2 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                  Brands
                </h2>
                <p class="mb-2">
                  <a href="#" class=" hover:underline">
                    Amefa
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    BarCraf
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    BergHOFF
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Brabantia
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Burleigh
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" hover:underline">
                    Cole & Mason
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Dartington
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Denby
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Jamie Oliver
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Joseph Joseph
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" hover:underline">
                    John Beswick
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Kambukka
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Ken Hom
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Kilner
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Kitchen Craft
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" hover:underline">
                    La Cafetière
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    London Pottery
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Luigi Bormioli
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    MasterClass Mikasa
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" hover:underline">
                    Monno
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Richardson Sheffield
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Royal Brierley
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    The Kitchen Company
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Typhoon
                  </a>
                </p>
              </div>
              <div className="mt-12">
                <p class="mb-2">
                  <a href="#" class=" hover:underline">
                    Zoku
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#" class="hover:underline">
                    Zyliss
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto px-20  text-black border-b-2 border-gray-300">
          <div className="copy-right text-center mx-8 my-20">
            <p>© 2023 Seeba Industries Pvt Ltd.</p>
          </div>
          <div className="absolute right-1/2 border-2 border-white p-4 rounded-full shadow-md">
            <img src={up_icon} alt="" />
          </div>
        </div>
      </section>
      {/* description */}
      <section>
        <div className="container mx-auto mb-8 px-20 bg-white text-black  border-b-2 border-gray-300">
          <div className="copy-right mt-9 mb-8">
            <div className="paragraph-one text-base mt-4">
              <p>
                ThinKitchen aims to empower and encourage families to cook, eat
                and live healthy. This begins with your cookware and kitchen
                utensils. From waterless cookware to beautiful and functional
                kitchen utensil sets, thinKitchen has everything you would need
                for a mindful and healthy kitchen.
              </p>
            </div>
            <div className="paragraph-one text-base mt-4">
              <p>
                Dining has never been more elegant and wonderful. Housing
                beautiful stoneware and tableware sets, along with surgical
                stainless steel cutlery sets, thinKitchen has everything you
                require for casual dinners, intimate gatherings or entertaining
                large parties.
              </p>
            </div>
            <div className="paragraph-one text-base mt-4 mb-8">
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
