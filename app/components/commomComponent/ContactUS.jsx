import React from "react";
import Banner_img from "../../asset/Banner_img.png";
import Location from "../../asset/Location.png";
import Email from "../../asset/Email.png";
import ShareIcon from "../../asset/share_icon.png";
import Enquries from "../../asset/Enquries.png";
import facebookicon from "../../asset/facebook_icon.png";
import instagram from "../../asset/instagram.png";
import Youtube from "../../asset/youtube.png"

const Contactsection = () => {
    return (
        <section>
            <div className="w-full pb-14">
                <div className="Banner_image relative">
                    <img className='min-w-full' src={Banner_img} alt=''></img>
                </div>
            </div>
            <div className="w-11/12  mx-auto mb-14 sm:w-6/12  lg:w-10/12 ">
                <div className="">
                    <div className="bg-stone-100 flex py-3.5 flex-wrap">
                        <div className="w-40 pl-3 md:w-44 lg:w-80">
                            <div className="bg-white w-10 h-10 mb-1.5 rounded-full flex items-center justify-center ">
                                <img src={Location} alt="" className="w-4 h-5 "></img>
                            </div>
                            <div className="">
                                <h1 className="text-black text-base font-bold  top-0.5 lg:text-lg ">Address</h1>
                                <p className="text-sm font-medium lg:text-base">ThinKitchen, 101-104, Sheetal Enclave, Near Vibgyor School, Mind Space, Malad (West), Mumbai - 400064</p>
                            </div>
                        </div>
                        <div className="w-80 border-l border-zinc-300 border-inherit pl-4">
                            <div className="bg-white w-10 h-10 mb-1.5 rounded-full flex items-center justify-center">
                                <img src={Email} alt="" class="w-5 h-4"></img>
                            </div>
                            <h1 className="text-black font-bold  lg:text-lg">Email</h1>
                            <p className="text-sm font-medium lg:text-base">contact@seebagroup.com</p>
                        </div>
                        <div className="w-80 border-l border-zinc-300 border-inherit pl-4">
                            <div className="bg-white w-10 h-10 mb-1.5 rounded-full flex items-center justify-center">
                                <img src={ShareIcon} alt="" class="w-5 h-4"></img>
                            </div>
                            <h1 className="text-black font-bold pb-1 lg:text-lg">Social Media</h1>
                            <div className="flex">
                                <img src={facebookicon} alt="" className="w-2 h-4 mr-5"></img>
                                <img src={instagram} alt="" className="w-4 h-4 mr-5"></img>
                                <img src={Youtube} alt="" className="w-5 h-4 mr-5"></img>
                            </div>
                        </div>
                        <div className=" w-72 border-l  border-zinc-300 pl-4">
                            <div className="bg-white w-10 h-10 mb-1.5 rounded-full flex items-center justify-center">
                                <img src={Enquries} alt="" class="w-4 h-5"></img>
                            </div>
                            <h1 className="text-black font-bold lg:text-lg">For Enquiries:</h1>
                            <p className="text-sm font-medium lg:text-base">Phone Number: +91 704522 3344 (Monday-Friday 10 am to 6 pm)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto sm:w-11/12 lg:w-10/12">
                <div className="">
                    <form>
                        <div className="formsection1 bg-stone-100  flex flex-wrap justify-center items-center gap-4  sm:gap-2 md:gap-3 lg:gap-4 ">
                            <h6 className="text-2xl  pb-5 sm:pb-1 lg:text-4xl text-center font-medium w-full py-5">Cook, Eat, Live Healthy</h6>
                            <div className="grid grid-cols-2 gap-4 sm:gap-1 mx-2">
                                <div>
                                    <input type="text" name="Name" placeholder="Name*" className="border-neutral-300 w-full text-sm font-medium mb-4 sm:text-sm lg:border-neutral-300 " />
                                    <input type="email" name="Email" placeholder="Email Address*" className="border-neutral-300 font-medium w-full text-sm  mb-4" />
                                    <select name="State" value="Select" className="border-neutral-300 w-full font-medium text-sm  mb-4">
                                        <option value="volvo">Select State*</option>
                                    </select>
                                    <input type="text" name="Pincode" placeholder="Pin Code" className="border-neutral-300 font-medium w-full text-sm  mb-1" />
                                </div>
                                <div>
                                    <input type="tel" name="Phone" placeholder="Phone Number*" className="border-neutral-300 w-full text-sm font-medium mb-4" />
                                    <select name="Query" value="Select" className="border-neutral-300 w-full text-sm mb-4 font-medium">
                                        <option value="volvo">Select Query</option>
                                    </select>
                                    <select name="City" value="Select" className="border-neutral-300 w-full text-sm mb-4 font-medium">
                                        <option value="volvo">City*</option>
                                    </select>
                                </div>
                                <div className=" mb-5 col-span-2 lg:mb-10">
                                    <textarea id="w3review" name="w3review" placeholder="Message" rows="5" className="w-full font-medium border-neutral-300 mb-4  sm:"></textarea>
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

export default Contactsection;


