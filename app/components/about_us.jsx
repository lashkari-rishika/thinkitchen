import React from 'react';
import Banner_img from "../assets/Banner_img.png"
const BannerSection = () => {
    return (
        <section>
            <div className="container">
                <div className="Banner_image relative">
                    <img src={Banner_img} alt=''></img>
                    <div className="about_us w-96 absolute bottom-6 left-6 bg-white pl-px">
                        <h1 className="text-3xl">ABOUT US</h1>
                        <p className='text-base'>At thinKitchen, we want to encourage families to cook, eat and live a healthy and happy life.
                            For us, the kitchen is the heart of the home – the hub of all activities
                            where memories are made.</p>
                    </div>
                </div>

            </div>
        </section>
    );
  };
  
  export default BannerSection;
  