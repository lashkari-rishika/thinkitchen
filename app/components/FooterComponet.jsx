import React from 'react';
import facebook_icon from '../asset/facebook.png'
import instagram_icon from '../asset/instagram.png'
import youtobe_icon from '../asset/youtube.png'
const FooterComponet = () => {
  return (
    <div>
      {/* POPULAR SEARCHES SECTION*/}
      <section>
        <div className="container mx-auto px-20 mb-7  text-black">
          <h3 className="text-xl font-medium mb-1">POPULAR SEARCHES</h3>
          <p className="text-xs">
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
        <div className="container mx-auto px-20  text-black border-y-2">
          <h3 className=" mt-7 mb-7 text-xl text-center font-medium mb-1">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>

          <div className="grid grid-cols-2 mt-5 mb-5">
            <div className="text-base">
              <p>
                Be the first to know our new collections, collaborations and
                more! Sign up here
              </p>
            </div>
            <div className="flex">
              <input
                className=" border-black ps-4 pr-72 py-2.5 bg-white text-black text-lg"
                type="text"
                placeholder="Email id"
              />
              <button class=" border-black px-10 py-3.5 bg-black text-white text-base">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* FOLLOW US SECTION */}
       <section>
        <div className="container mx-auto px-20  text-black border-y-2">
            <div className='text-center '>
                <div className='follow-us-header'>
                    <h3 className=" mt-7 mb-7 text-xl text-center font-medium mb-1">
                        FOLLOW US ON
                    </h3>
                </div>
                <div className='follow-us-icon '>
                    <div className='facebook-icon'><img src={facebook_icon} alt="" /></div>
                    <div className='instagram-icon'><img src={instagram_icon} alt="" /></div>
                    <div className='facebook'><img src={youtobe_icon} alt="" /></div>
                </div>
            </div>

          
        </div>
      </section>
    </div>
  );
};

export default FooterComponet;
