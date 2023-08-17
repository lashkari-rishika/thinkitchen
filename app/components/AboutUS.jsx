import React from 'react';
import Banner_img from "../asset/Banner_img.png"
import Main_section_img1 from "../asset/Main_section_img1.png"
import Main_section_img2 from "../asset/Main_section_img2.png"
import Main_section_img3 from "../asset/Main_section_img3.png"
import Main_section_img4 from "../asset/Main_section_img4.png"

export function AboutUS() {
    return (
        <section>
            <div>
                <div className="lg:w-full lg:pb-28  sm:pb-5">

                    <div className="Banner_image relative">
                        <div>
                            <img className='min-w-full' src={Banner_img} alt=''></img>
                        </div>

                        <div className='sm:px-4 py-4'>
                            <div className="lg:about_us max-w-md lg:absolute md:absolute  bottom-6 right-8 bg-white lg:py-9 lg:px-9 sm:py-7 px-4 m-auto" style={{ bottom: '-80px' }}>
                                <h1 className="lg:text-3xl font-semibold pb-3.5 sm:text-lg  sm-only:text-center">ABOUT US</h1>
                                <p className="text-sm font-semibold ">At thinKitchen, we want to encourage families to cook, eat and live a healthy and happy life.
                                    For us, the kitchen is the heart of the home – the hub of all activities
                                    where memories are made.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-11/12  mx-auto'>

                    <div className="Main_Section1 flex relative justify-items-center justify-center pb-10">

                        <div className="Main_section_content xl:w-50 xl:py-9 xl:px-9 xl:relative xl:flex">
                            <div className='xl:block  sm:hidden w-6/12 about_health relative sm-only:w-full  sm:transform-none'>

                                <div className='sm-only:w-full md-only:w-full xl:w-full xl-only:w-28 main_block_about xl:absolute bg-white  sm:relative sm:transform-none '>

                                    <h1 className="font-semibold text-4xl pb-3.5 ">Cook, Eat, Live Healthy</h1>
                                    <p className="text-base font-semibold">Family cooking and dining together matters! With the concept of open kitchen catching on in India, the kitchen and dining space is becoming an integral part of our homes. This space is no longer relegated to the cook or domestic help and is equally used by members of the household – an integral hangout where friends and family get together. If your kitchen is not equipped with proper cooking tools and beautiful dinnerware, cooking and entertaining are no longer appealing.”</p>
                                    <p className="font-bold float-right">Manushi & Anand Baldawa</p>
                                </div>

                            </div>
                            <div className='xl:w-6/12 '>
                                <img className="" src={Main_section_img1} alt="" ></img>
                            </div>

                            {/* transform: translate(-50%, -18%) !important */}
                            <div className='xl:hidden lg:block md:hidden sm:block  w-6/12 about_health relative  sm:mt-[-35px] sm:w-11/12 sm:m-auto' >
                                <div className='sm:w-full sm:px-3.5 sm:py-3.5 sm:pb-8  xl:w-28 xl:main_block_about xl:absolute bg-white sm:relative sm:transform-none'>

                                    <h1 className="font-semibold text-4xl pb-3 sm:text-xl">Cook, Eat, Live Healthy</h1>
                                    <p className="text-base font-semibold ">Family cooking and dining together matters! With the concept of open kitchen catching on in India, the kitchen and dining space is becoming an integral part of our homes. This space is no longer relegated to the cook or domestic help and is equally used by members of the household – an integral hangout where friends and family get together. If your kitchen is not equipped with proper cooking tools and beautiful dinnerware, cooking and entertaining are no longer appealing.”</p>
                                    <p className="font-bold float-right">Manushi & Anand Baldawa</p>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className='Main_section2 pb-10'>

                        <div className='Main_section_content1'>
                            <div className='bg-white about_health1 xl:block md:none sm:hidden' style={{ width: '40%', position: 'absolute', left: '53%', padding: '50px', zIndex: '9' }}>
                                <h1 className="font-semibold xl:text-4xl pb-3.5">Our Story</h1>
                                <p className="text-base font-semibold">As a young couple that moved back to India after a stint in the UK and US, Manushi and Anand Baldawa found a lacuna that was waiting to be filled. Their step into the then 24-year old, family-run, manufacturing and export business of stainless steel kitchenware and tableware products - Seeba Industries – helped them discover an opportunity in the domestic market. They could offer the same Seeba quality, simple and functional products to homes. The timing was perfect for bringing quality international brands to the urban Indian household.</p>
                            </div>
                        </div>

                        <div className='xl:w-6/12 xl:left-24  xl:relative '>
                            <img className="" src={Main_section_img2} alt="" ></img>
                        </div>

                        <div className='xl:hidden lg:block md:hidden sm:block w-6/12 about_health relative  sm:mt-[-35px] sm:w-11/12 sm:m-auto' >
                            <div className='sm:w-full sm:px-3.5 sm:py-3.5 sm:pb-8 lg::w-full xl:w-28 xl:main_block_about absolute bg-white sm:relative sm:transform-none'>

                                <h1 className="font-semibold text-4xl pb-3 sm:text-xl">Our Story</h1>
                                <p className="text-base font-semibold ">As a young couple that moved back to India after a stint in the UK and US, Manushi and Anand Baldawa found a lacuna that was waiting to be filled. Their step into the then 24-year old, family-run, manufacturing and export business of stainless steel kitchenware and tableware products - Seeba Industries – helped them discover an opportunity in the domestic market. They could offer the same Seeba quality, simple and functional products to homes. The timing was perfect for bringing quality international brands to the urban Indian household.</p>

                            </div>
                        </div>
                    </div>

                    <div className="Main_section_content xl:w-50 xl:py-9 xl:px-9 xl:relative xl:flex">
                        <div className='xl:block  sm:hidden w-6/12 about_health relative sm-only:w-full  sm:transform-none'>

                            <div className='sm-only:w-full md-only:w-full xl:w-full xl-only:w-28 main_block_about xl:absolute bg-white  sm:relative sm:transform-none '>

                                <h1 className="font-semibold xl:text-4xl pb-3 sm:text-xl">Why Thinkitchen</h1>
                                <p className="text-base font-semibold ">Simply put, we ought to ‘think’ more about our kitchen and what we add to it. It’s not just what we eat that matters, it’s how we prepare our food that matters, the plating and the perception of food that matters. This has been our guiding philosophy in bridging the gap between luxury kitchenware and tableware brands and the Indian kitchen. We bring you an exclusive range of kitchen tools, quality cookware and beautiful tableware from top kitchen and home brands from around the world that offer a perfect balance between design and functionality, providing Indian cooking enthusiasts with world-class quality products.</p>
                            </div>

                        </div>
                        <div className='xl:w-6/12 '>
                            <img className="" src={Main_section_img3} alt="" ></img>
                        </div>

                        <div className='xl:hidden lg:block md:hidden sm:block w-6/12 about_health relative  sm:mt-[-35px] sm:w-11/12 sm:m-auto' >
                            <div className='sm:w-full sm:px-3.5 sm:py-3.5 sm:pb-8 lg::w-full xl:w-28 xl:main_block_about absolute bg-white sm:relative sm:transform-none'>

                                <h1 className="font-semibold text-4xl pb-3 sm:text-xl">Why Thinkitchen</h1>
                                <p className="text-base font-semibold ">Simply put, we ought to ‘think’ more about our kitchen and what we add to it. It’s not just what we eat that matters, it’s how we prepare our food that matters, the plating and the perception of food that matters. This has been our guiding philosophy in bridging the gap between luxury kitchenware and tableware brands and the Indian kitchen. We bring you an exclusive range of kitchen tools, quality cookware and beautiful tableware from top kitchen and home brands from around the world that offer a perfect balance between design and functionality, providing Indian cooking enthusiasts with world-class quality products.</p>

                            </div>
                        </div>
                    </div>
                </div>



                <div className='sm:pt-6'>
                    <div className="text-center font-semibold xl:text-3xl xl:pb-8 sm:text-2xl sm:pb-6">
                        <p>OUR STORE</p>
                    </div>

                    <div className="w-11/12 mx-auto">
                        <img src={Main_section_img4} alt=""></img>
                    </div>
                </div>

            </div>

        </section >
    );
};

