import Verticaltabs from "../components/Verticaltabs";
import Myaccount_img1 from "../asset/Myaccount_img1.png";
import { Button, Link } from '~/components';

const Myaccount = ({ customer, addresses }) => {
    const customerAddress = customer.addresses.edges;
    // console.log(customerAddress, "customerAddress");
    const address = addresses;

    return (
        <section>

            <div>
                <div className="xl:text-center xl:mt-7 sm-only:hidden   ">
                    <p className="text-zinc-400 text-xs "> Home | Account</p>
                    <h1 className="text-2xl">My account</h1>
                </div>

                <div className="xl-only:flex">
                    <div className=" grid-rows-12">
                        <p className="font-semibold sm-only:hidden">My Profile Details</p>

                        <div className="grid-rows-1 gap-4 border-b-2">

                            <div className="flex mb-5 mt-3 sm-only:hidden">
                                <div className="w-16">
                                    <img src={Myaccount_img1} alt='' />
                                </div>

                                <div className="w-2/5 mt-2 ml-2.5">
                                    <p className="text-gray-400 text-sm">Name :</p>
                                    <p className="font-semibold text-sm">{customer && customer?.firstName + ' ' + customer?.lastName}</p>
                                </div>


                                <div className="w-2/5 mt-2">
                                    <p className="text-gray-400 text-sm">Email Id:</p>
                                    <p className="font-semibold text-sm">{customer && customer?.email}</p>
                                </div>

                                <div className="w-2/5 mt-2">
                                    <p className="text-gray-400 text-sm">Mobile:</p>
                                    <p className="font-semibold text-sm">{customer && customer?.phone}</p>
                                </div>

                            </div>
                        </div>

                        <div className="border-b-2 text-sm pt-2 pb-2">
                            <p>Select Delivery Address</p>
                        </div>

                        <div className=" my-4 border-b-2 sm-only:hidden">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="mr-4 text-gray-400 text-sm">DEFAULT ADDRESS</p>
                                    <input type="radio" id="html" className="mr-2" name="fav_language" value="HTML" />
                                    <label className="font-semibold" for="html">{customer && customer?.firstName + ' ' + customer?.lastName}</label><br />
                                </div>
                                <div>
                                    <Button type="button"
                                        to="address/add"
                                        className="bg-sky-600 text-white px-4 py-2 mx-3 my-3 text-base"
                                        variant="secondary"
                                    >
                                        + Add New Address
                                    </Button>
                                </div>
                            </div>
                            {customerAddress.map((item) => {
                                return (<>
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="flex flex-wrap">
                                            <label htmlFor="html" className="text-gray-400 w-1/5 text-base">Address</label>
                                            <p className="w-2/3 text-base">:{item?.node?.address1}</p>

                                            <label htmlFor="city" className="text-gray-400 w-1/5 text-base">City</label>
                                            <p className="w-2/3 text-base">:{item?.node?.city}</p>

                                            <label htmlFor="html" className="text-gray-400 w-1/5 text-base ">Pincode</label>
                                            <p className="w-2/3 text-base">:{item?.node?.zip}</p>

                                            <label htmlFor="html" className="text-gray-400 w-1/5 text-base">Mobile</label>
                                            <p className="w-2/3 text-base">{customer && customer?.phone}</p>

                                            {address && address.map((item) => {
                                                return (
                                                    <div className=" flex">
                                                        <Link
                                                            to={`/account/address/${encodeURIComponent(item.id)}`}
                                                            className="bg-sky-600 text-white px-4 py-2 my-3 text-base"
                                                            prefetch="intent"
                                                        >
                                                            Edit Address
                                                        </Link>

                                                        <Link
                                                            to={`/account/address/${encodeURIComponent(item.id)}`}
                                                            className="bg-sky-600 text-white px-4 py-2 mx-3 my-3 text-base">
                                                            Remove
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </>)
                            })}
                        </div >

                        {/* ------start mobile view UI----- */}

                        <div className="xl:hidden" >
                            <div className="border-b-2">
                                <p className="py-3 text-sm">DEFAULT ADDRESS</p>

                                <div>
                                    <input type="radio" id="html" className="mr-2" name="fav_language" value="HTML" />
                                    <label className="font-semibold text-lg" for="html">{customer && customer?.firstName + ' ' + customer?.lastName}</label><br />
                                </div>

                                {/* <div className="">
                                    <input type="radio" id="html" className="mr-2" name="fav_language" value="HTML" />
                                    <label className="font-semibold text-lg" htmlFor="html">Jayesh Khagram</label>
                                </div> */}

                                <div class="mx-6 my-2 ">
                                    {customerAddress.map((item) => {
                                        return (<>
                                            <div>
                                                <div class="grid grid-cols-2 gap-2 ">
                                                    <label className="font-medium text-sm px-1 py-1">Email Id:</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{customer && customer?.email}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Location</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.city + ' ' + item?.node?.zip}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Mobile</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.phone}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Address</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.address1}</p>

                                                    <label className="font-medium text-sm px-1 py-1">City</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.city}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Pincode</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.zip}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Country</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.country}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Phone No</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.phone}</p>
                                                </div>
                                            </div>
                                        </>)
                                    })}

                                    {address && address.map((item) => {
                                        return (
                                            <div className=" flex">
                                                <Link
                                                    to={`/account/address/${encodeURIComponent(item.id)}`}
                                                    className="bg-sky-600 text-white px-4 py-2 my-3 text-sm w-32 h-10"
                                                    prefetch="intent"
                                                >
                                                    Edit Address
                                                </Link>

                                                <Link
                                                    to={`/account/address/${encodeURIComponent(item.id)}`}
                                                    className="bg-sky-600 text-white px-4 py-2 my-3 text-sm ml-3 w-32 h-10 text-center">
                                                    Remove
                                                </Link>
                                            </div>
                                        )
                                    })}

                                    <div>
                                        <Button type="button"
                                            to="address/add"
                                            className="bg-sky-600 text-white  py-2 my-3 text-sm w-32 h-10"
                                            variant="secondary"
                                        >
                                            + Add New Address
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <p className="py-4 text-sm">OTHER ADDRESS</p>

                                <div>
                                    <input type="radio" id="html" className="mr-2" name="fav_language" value="HTML" />
                                    <label className="font-semibold text-lg" for="html">{customer && customer?.firstName + ' ' + customer?.lastName}</label><br />
                                </div>

                                <div class="mx-6 my-2 ">
                                    {customerAddress.map((item) => {
                                        return (<>
                                            <div>
                                                <div class="grid grid-cols-2 gap-2 ">
                                                    <label className="font-medium text-sm px-1 py-1">Email Id:</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{customer && customer?.email}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Location</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.city + ' ' + item?.node?.zip}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Mobile</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.phone}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Address</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.address1}</p>

                                                    <label className="font-medium text-sm px-1 py-1">City</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.city}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Pincode</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.zip}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Country</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.country}</p>

                                                    <label className="font-medium text-sm px-1 py-1">Phone No</label>
                                                    <p className="text-sm px-1 py-1 text-gray-500">{item?.node?.phone}</p>
                                                </div>

                                            </div>
                                        </>)
                                    })}

                                    {address && address.map((item) => {
                                        return (
                                            <div className=" flex">
                                                <Link
                                                    to={`/account/address/${encodeURIComponent(item.id)}`}
                                                    className="bg-black text-white px-4 py-2 my-3 text-sm w-32 h-10"
                                                    prefetch="intent"
                                                >
                                                    Edit Address
                                                </Link>

                                                <Link
                                                    to={`/account/address/${encodeURIComponent(item.id)}`}
                                                    className="bg-black text-white px-4 py-2 my-3 text-sm ml-3 w-32 h-10 text-center">
                                                    Remove
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* ------end mobile view UI----- */}

                        <div className=" my-4 sm-only:hidden">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="mr-4 text-gray-400 text-sm">OTHER ADDRESS</p>
                                    <input type="radio" id="html" className="mr-2" name="fav_language" value="HTML" />
                                    <label className="font-semibold" for="html">{customer && customer?.firstName + ' ' + customer?.lastName}</label><br />
                                </div>
                            </div>
                            {customerAddress.map((item) => {
                                return (<>
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="flex flex-wrap">
                                            <label htmlFor="html" className="text-gray-400 w-1/5 text-base">Address</label>
                                            <p className="w-2/3 text-base">:{item?.node?.address1}</p>

                                            <label htmlFor="city" className="text-gray-400 w-1/5 text-base">City</label>
                                            <p className="w-2/3 text-base">:{item?.node?.city}</p>

                                            <label htmlFor="html" className="text-gray-400 w-1/5 text-base ">Pincode</label>
                                            <p className="w-2/3 text-base">:{item?.node?.zip}</p>

                                            <label htmlFor="html" className="text-gray-400 w-1/5 text-base">Mobile</label>
                                            <p className="w-2/3 text-base">{customer && customer?.phone}</p>

                                            {address && address.map((item) => {
                                                return (
                                                    <div className=" flex">
                                                        <Link
                                                            to={`/account/address/${encodeURIComponent(item.id)}`}
                                                            className="bg-sky-600 text-white px-4 py-2 my-3 text-base"
                                                            prefetch="intent"
                                                        >
                                                            Edit Address
                                                        </Link>

                                                        <Link
                                                            to={`/account/address/${encodeURIComponent(item.id)}`}
                                                            className="bg-sky-600 text-white px-4 py-2 mx-3 my-3 text-base">
                                                            Remove
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </>)
                            })}
                        </div >
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Myaccount;