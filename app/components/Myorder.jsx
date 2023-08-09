import React from "react";
import Myaccounttabs from "../components/Myaccounttabs";


const Myorder = () => {

    return (
        <section>
            <div>
                <div className="text-center mt-7">
                    <p className="text-zinc-400 text-xs mb-4"> Home | My Order</p>
                    <h1 className="text-3xl ">My Order</h1>
                </div>

                <div className="flex mx-32">
                    <div className="bg-gray-100 mr-6">
                        <Myaccounttabs />
                    </div>

                    <div>
                        <p className="font-semibold border-b-2">My Order</p>
                        <div>
                            <table className=" border-b-2">
                                <div className="mb-4 mt-3">
                                    <tr className="text-zinc-400 ">
                                        <td className="pr-36">Order number</td>
                                        <td className="pr-14">Order placed</td>
                                        <td className="pr-14">Items</td>
                                        <td className="pr-14">Total</td>
                                        <td className="text-center" rowspan="2">    
                                            <button type="button" className="bg-sky-600 text-white px-4 py-2">Order Detail</button>
                                        </td>
                                    </tr>
                                    <tr className="text-sm font-semibold  ">
                                        <td className="">#TKSS25646151</td>
                                        <td className="">14 Dec 2022</td>
                                        <td className="">1</td>
                                        <td className="">₹ 4,999</td>
                                    </tr>
                                </div>


                            </table>

                            <table className=" border-b-2">
                                <div className="mb-4 mt-3">
                                    <tr className="text-zinc-400 ">
                                        <td className="pr-36">Order number</td>
                                        <td className="pr-14">Order placed</td>
                                        <td className="pr-14">Items</td>
                                        <td className="pr-14">Total</td>
                                        <td className="text-center" rowspan="2">
                                            <button type="button" className="bg-sky-600 text-white px-4 py-2">Order Detail</button>
                                        </td>
                                    </tr>
                                    <tr className="text-sm font-semibold  ">
                                        <td className="">#TKSS25646151</td>
                                        <td className="">14 Dec 2022</td>
                                        <td className="">1</td>
                                        <td className="">₹ 4,999</td>
                                    </tr>
                                </div>

                            </table>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
}
export default Myorder;