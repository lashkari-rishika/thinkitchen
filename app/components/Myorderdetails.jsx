import React from "react";
import order_details1 from "../asset/order_details1.png";


const Myorderdetails = () => {

    return (
        <section>
            <div>
                <div className="text-center mt-7">
                    <p className="text-zinc-400 text-xs mb-4"> Home | My Order</p>
                    <h1 className="text-3xl ">My Order</h1>
                </div>

                <div className="flex mx-32 sm-only:mx-0">

                    <div className="w-full">

                        <div className="items-center justify-between flex">
                            <p className="font-semibold sm-only:hidden">My Order</p>
                            <button type="button" className="bg-sky-600 text-white py-0.5 px-3.5">Back to order</button>
                        </div>
                        <div className="bg-neutral-100 flex items-center justify-between mt-3 mb-3">
                            <p className="py-2.5 pl-3 font-semibold">Order: #TKSS25646151</p>
                            <p className="pr-3 font-semibold">Date: 14 Dec 2022 10:10AM</p>
                        </div>

                        <div className="mb-4 mt-3">
                            <table className="w-full">
                                <tr className="border-b-2 ">
                                    <td className="">Products</td>
                                    <td className="">Product Title</td>
                                    <td className="">SKU</td>
                                    <td className="">Price / Qty</td>
                                    <td className="text-end">Total</td>
                                </tr>

                                <tr className="border-b-2 ">
                                    <td>
                                        <div className="w-24 py-2.5">
                                            <img src={order_details1} alt='' />
                                        </div>

                                    </td>
                                    <div className="sm-only:grid">
                                    <td className="pr-14">Amefa Austin Cutlery, Set of 24</td>
                                    <td className="pr-14">#TKSS25646151</td>
                                    <td className="pr-14">₹ 4,999 X 1</td>
                                    <td className="text-end">₹ 4,999</td>
                                    </div>
                                    
                                </tr>
                            </table>

                            <div className="flex justify-end py-2.5 ">
                                <div className="text-gray-400">
                                    <p> Subtotal:</p>
                                    <p> Shipping (Standard):</p>
                                    <p className="Delivery border-b-2 w-[89%]"> Delivery:</p>

                                </div>

                                <div>
                                    <p> ₹ 4,999</p>
                                    <p> ₹ 00.00</p>
                                    <p> FREE</p>

                                </div>
                            </div>

                            {/* <div className="w-3/12 border-b-2 self-end"> </div> */}

                            <div className="Total flex justify-end">
                                <div>
                                    <p className="font-semibold" > Total:</p>
                                </div>
                                <div>
                                    <p> ₹ 4,999</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Myorderdetails;