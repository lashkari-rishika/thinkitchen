import React from "react";
// import Banner_img from "../../asset/Banner_img.png";
// import Location from "../../asset/Location.png";
// import Email from "../../asset/Email.png";
// import ShareIcon from "../../asset/share_icon.png";
// import Enquries from "../../asset/Enquries.png";
// import facebookicon from "../../asset/facebook_icon.png";
// import instagram from "../../asset/instagram.png";
// import youtube from "../../asset/youtube.png";


const ContactUs = () => {
    return (
        <section>
            <div className="w-full xl:pb-14 sm:pb-8">
                <div className="Banner_image relative">
                    <img className='min-w-full' src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Banner_img.png?v=1690960125" />
                </div>
            </div>

            <div className="md-only:w-10/12 lg-only:w-[95%] mx-auto xl:mb-8 sm:w-11/12 sm:pb-8">
                <div className="container mx-auto">

                    <div className="grid lg:grid-cols-4 gap-2 bg-stone-100 py-3.5 px-3.5 sm:grid-cols-2 sm-only:gap-4 sm-only:gap-x-0">
                        
                        <div className="">
                            <div className="sm-only:flex md-only:flex">
                                <div className="bg-white w-10 h-10 xl:mb-1.5 rounded-full flex items-center justify-center sm-only:w-9 sm-only:h-9">
                                    <div className="w-4 h-5 sm-only:w-3">
                                        <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Location.png?v=1693463117" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className="font-bold lg:text-lg sm:text-sm sm-only:mt-1.5 sm-only:ml-3 md-only:text-base md-only:mt-1.5 md-only:ml-3">Address</h1>
                                </div>
                            </div>
                            <p className="sm-only:text-xs sm-only:pt-2 md-only:text-sm md-only:pt-2 lg-only:text-sm">ThinKitchen, 101-104, Sheetal Enclave, Near Vibgyor School, Mind Space, Malad (West), Mumbai - 400064</p>
                        </div>

                        <div className="border-l border-zinc-300 border-inherit md:pl-3.5 ">
                            <div className="sm-only:flex md-only:flex">
                                <div className="bg-white w-10 h-10 xl:mb-1.5 rounded-full flex items-center justify-center sm-only:w-9 sm-only:h-9">
                                    <div className="w-4 h-5 sm-only:w-3">
                                        <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Email.png?v=1690960123" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className="font-bold lg:text-lg sm:text-sm sm-only:mt-1.5 sm-only:ml-3 md-only:text-base md-only:mt-1.5 md-only:ml-3">Email</h1>
                                </div>
                            </div>
                            <p className="text-sm font-medium lg:text-base sm-only:text-xs sm-only:pt-2 md-only:text-sm md-only:pt-2 lg-only:text-sm">contact@seebagroup.com</p>
                        </div>

                        <div className="lg:border-l lg:border-zinc-300 lg:border-inherit lg:pl-3.5 ">
                            <div className="sm-only:flex md-only:flex">
                                <div className="bg-white w-10 h-10 xl:mb-1.5 rounded-full flex items-center justify-center sm-only:w-9 sm-only:h-9">
                                    <div className="w-4 h-5 sm-only:w-3">
                                        <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/share_icon_af57eefa-6807-4352-9741-5312f46ad806.png?v=1693464633" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className="font-bold lg:text-lg sm:text-sm sm-only:mt-1.5 sm-only:ml-1 md-only:text-base md-only:ml-3 md-only:mt-1.5">Social Media</h1>
                                </div>
                            </div>

                            <div className="flex sm-only:pt-2 md-only:pt-2">
                                <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/facebook_icon_17be1079-5eb5-4782-91c1-73a90bc75c19.png?v=1693464284" className="w-2 h-4 mr-5" />
                                <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/instagram_3ecaa9b5-1674-4476-afa2-25db802f71cb.png?v=1693464800" className="w-4 h-4 mr-5" />
                                <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/youtube_8a3c0428-2006-4c9a-99b4-71e4111211a9.png?v=1693464930" className="w-5 h-4 mr-5" />

                            </div>
                        </div>

                        <div className="border-l border-zinc-300 border-inherit md:pl-3.5 ">
                            <div className="sm-only:flex md-only:flex">
                                <div className="bg-white w-10 h-10 xl:mb-1.5 rounded-full flex items-center justify-center sm-only:w-9 sm-only:h-9">
                                    <div className="w-4 h-5 sm-only:w-3">
                                        <img src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Enquries.png?v=1690960123"></img>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className="font-bold lg:text-lg sm:text-sm sm-only:mt-1.5 md-only:text-base md-only:ml-3 md-only:mt-1.5">For Enquiries:</h1>
                                </div>
                            </div>
                            <p className="text-sm font-medium lg:text-base sm-only:text-xs sm-only:pt-2 sm-only:pl-2.5 md-only:text-sm md-only:pt-2 lg-only:text-sm">Phone Number: +91 704522 3344 (Monday-Friday 10 am to 6 pm)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto md:w-10/12 sm:w-11/12 lg-only:w-[95%] xl:w-11/12">
                <div className="container mx-auto">
                    <form>
                        <div className="formsection1 bg-stone-100  flex flex-wrap justify-center items-center gap-4  sm:gap-2 md:gap-3 lg:gap-4 ">
                            <h6 className="text-2xl  pb-5 sm:pb-1 lg:text-4xl text-center font-medium w-full py-5 sm-only:text-lg sm-only:font-bold">Cook, Eat, Live Healthy</h6>

                            <div className="grid grid-cols-2 gap-4 mx-10 sm-only:mx-2">
                                <div>
                                    <input type="text" name="Name" placeholder="Name*" className="border-neutral-300 w-full text-sm font-medium mb-4 sm:text-sm lg:border-neutral-300 sm-only:text-xs" />
                                    <input type="email" name="Email" placeholder="Email Address*" className="border-neutral-300 font-medium w-full text-sm  mb-4 sm-only:text-xs" />
                                    <select name="State" value="Select" className="border-neutral-300 w-full font-medium text-sm  mb-4 sm-only:text-xs">
                                        <option value="volvo">Select State*</option>
                                    </select>
                                    <input type="text" name="Pincode" placeholder="Pin Code" className="border-neutral-300 font-medium w-full text-sm  mb-1 sm-only:text-xs" />
                                </div>
                                <div>
                                    <input type="tel" name="Phone" placeholder="Phone Number*" className="border-neutral-300 w-full text-sm font-medium mb-4 sm-only:text-xs" />
                                    <select name="Query" value="Select" className="border-neutral-300 w-full text-sm mb-4 font-medium sm-only:text-xs">
                                        <option value="volvo">Select Query</option>
                                    </select>
                                    <select name="City" value="Select" className="border-neutral-300 w-full text-sm mb-4 font-medium sm-only:text-xs">
                                        <option value="volvo">City*</option>
                                    </select>
                                </div>

                                <div className=" mb-5 col-span-2 lg:mb-10">
                                    <textarea id="w3review" name="w3review" placeholder="Message" rows="5" className="w-full font-medium border-neutral-300 mb-4 sm-only:text-xs"></textarea>

                                    <button type="submit" className="border-neutral-300 bg-black text-slate-300 text-sm w-28 h-10 ">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;


