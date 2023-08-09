import React from "react";
import Myaccounttabs from "../components/Myaccounttabs";
import Myaccount_img1 from "../asset/Myaccount_img1.png";

const Myaccount = () => {

    return (
        <section>
            <div>
                <div className="text-center mt-7">
                    <p className="text-zinc-400 "> Home | Account</p>
                    <h1 className="text-4xl">My account</h1>
                </div>

                <div className="flex mx-32">
                    <div className="bg-gray-100 w-2/4 mr-6">
                        <Myaccounttabs />
                    </div>


                    <div className=" grid-rows-12">
                        <p className="font-semibold">My Profile Details</p>

                        <div className="grid-rows-1 gap-4 border-b-2">

                            <div className="flex mb-5 mt-3">
                                <div className="w-16">
                                    <img src={Myaccount_img1} alt='' />
                                </div>

                                <div className="w-2/5 mt-2 ml-2.5">
                                    <p className="text-gray-400 text-sm">Name :</p>
                                    <p className="font-semibold text-sm">Jayesh Khagram</p>
                                </div>

                                <div className="w-2/5 mt-2">
                                    <p className="text-gray-400 text-sm">Email Id:</p>
                                    <p className="font-semibold text-sm">Info@gmail.com</p>
                                </div>

                                <div className="w-2/5 mt-2">
                                    <p className="text-gray-400 text-sm">Mobile:</p>
                                    <p className="font-semibold text-sm">+91 123456789</p>
                                </div>

                            </div>
                        </div>

                        <div className="border-b-2 text-sm pt-2 pb-2">
                            <p>Select Delivery Address</p>
                        </div>




                        <div className=" my-4 border-b-2">
                            <div className="flex items-center justify-between">
                                <div >
                                    <p className="mr-4 text-gray-400 text-sm">DEFAULT ADDRESS</p>
                                    <input type="radio" id="html" className="mr-2" name="fav_language" value="HTML" />
                                    <label className="font-semibold" for="html">Jayesh Khagram</label><br />
                                </div>
                                <div >
                                    <div>
                                        <button type="button" className="bg-sky-600 text-white px-4 py-2 mx-3 my-3">+ Add New Address</button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 mb-4">
                                <div className="flex flex-wrap">
                                    <label htmlFor="html" className="text-gray-400 w-1/5">Address</label>
                                    <p className="w-2/3">:903, Filix Tower, Opp. Asian Paints, LBS Road, Sonapur, Bhandup (W)</p>

                                    <label htmlFor="city" className="text-gray-400 w-1/5">City</label>
                                    <p className="w-2/3" id="city">:Mumbai</p>

                                    <label htmlFor="html" className="text-gray-400 w-1/5">Pincode</label>
                                    <p className="w-2/3">:400078</p>

                                    <label htmlFor="html" className="text-gray-400 w-1/5">Mobile</label>
                                    <p className="w-2/3">:+91 123456789</p>

                                    <div className=" flex">
                                        <button type="button" className="bg-sky-600 text-white px-4 py-2 my-3 ">
                                            Edit Address
                                        </button>
                                        <button type="button" className="bg-sky-600 text-white px-4 py-2 mx-3 my-3">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 mb-4">
                            <div className="">
                                <p className="mr-4 text-gray-400 text-sm">OTHER ADDRESS</p>

                                <input type="radio" id="html" className="mr-2" name="fav_language" value="HTML" />
                                <label className="font-semibold" for="html">Jayesh Khagram</label><br></br>

                                <div className="flex flex-wrap">
                                    <label htmlFor="html" className="text-gray-400 w-1/5">Address</label>
                                    <p className="w-2/3">:903, Filix Tower, Opp. Asian Paints, LBS Road, Sonapur, Bhandup (W)</p>

                                    <label htmlFor="city" className="text-gray-400 w-1/5">City</label>
                                    <p className="w-2/3" id="city">:Mumbai</p>

                                    <label htmlFor="html" className="text-gray-400 w-1/5">Pincode</label>
                                    <p className="w-2/3">:400078</p>

                                    <label htmlFor="html" className="text-gray-400 w-1/5">Mobile</label>
                                    <p className="w-2/3">:+91 123456789</p>

                                    <div className=" flex">
                                        <button type="button" className="bg-sky-600 text-white px-4 py-2 my-3 ">
                                            Edit Address
                                        </button>
                                        <button type="button" className="bg-sky-600 text-white px-4 py-2 mx-3 my-3">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section >
    );
}

export default Myaccount;