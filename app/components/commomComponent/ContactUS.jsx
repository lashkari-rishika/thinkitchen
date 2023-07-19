import React from "react";
import Banner_img from "../../asset/Banner_img.png";

const Contactsection = () => {
    return (

        <section>
            <div className="w-full pb-28">
                <div className="Banner_image relative">
                    <img className='min-w-full' src={Banner_img} alt=''></img>
                </div>
            </div>

            <div className='w-10/12  mx-auto'>
                <div className="container">
                    <form>

                        <div className="formsection1 bg-stone-100  flex flex-wrap justify-center items-center gap-4">
                            <h1 className="text-4xl text-center font-medium w-full">Cook, Eat, Live Healthy</h1>


                            <div className="flex flex-col w-full ">
                                <div className="w-1/2">
                                    <input type="text" name="Name" placeholder="Name*" class="border-neutral-300 w-full text-sm font-bold mb-4" />
                                    <input type="tel" name="Phone" placeholder="Phone Number*" class="border-neutral-300 w-full text-sm font-bold mb-4" />
                                    <input type="email" name="Email" placeholder="Email Address*" class="border-neutral-300 w-full text-sm font-bold mb-4" />

                                    <select name="Query" value="Select" class="border-neutral-300 w-full text-sm font-bold mb-4">
                                        <option value="volvo">Select Query</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col w-full ">
                                <div className="w-1/2">
                                    <select name="State" value="Select" class="border-neutral-300 w-full text-sm font-bold mb-4">
                                        <option value="volvo">Select State*</option>
                                    </select>
                                    <select name="City" value="Select" class="border-neutral-300 w-full text-sm font-bold mb-4">
                                        <option value="volvo">City*</option>
                                    </select>
                                    <input type="tel" name="Pincode" placeholder="Pin code*" class="border-neutral-300 w-full text-sm font-bold mb-4" />
                                    <textarea
                                        name="Message"
                                        placeholder="Message"
                                        class="border-neutral-300 w-full text-sm font-bold mb-4 resize-none"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button type="submit" className="border-neutral-300 bg-black text-slate-300 text-sm w-28 h-10">Submit</button>
                            </div>






                            {/* <div className="flex flex-col w-full w-1/2">
                                <select name="State" value="Select" class="border-neutral-300 w-full text-sm font-bold mb-4">
                                    <option value="volvo">Select State*</option>
                                </select>
                                <select name="City" value="Select" class="border-neutral-300 w-full text-sm font-bold mb-4">
                                    <option value="volvo">City*</option>
                                </select>
                                <input type="tel" name="Pincode" placeholder="Pin code*" class="border-neutral-300 w-full text-sm font-bold mb-4" />
                                <textarea
                                    name="Message"
                                    placeholder="Message"
                                    class="border-neutral-300 w-full text-sm font-bold mb-4 resize-none"
                                    rows="4"
                                ></textarea>
                            </div> */}
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactsection;