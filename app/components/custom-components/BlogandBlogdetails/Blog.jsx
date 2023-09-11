import React from "react";
import Blog_img1 from "../../../asset/Blog_img1.png";
import Blog_img2 from "../../../asset/Blog_img2.png";
import Blog_img3 from "../../../asset/Blog_img3.png";
import Blog_img4 from "../../../asset/Blog_img4.png";
import Blog_img5 from "../../../asset/Blog_img5.png";
import Blog_img6 from "../../../asset/Blog_img6.png";
import Blog_img7 from "../../../asset/Blog_img7.png";
import Blog_img8 from "../../../asset/Blog_img8.png";
import Blog_img9 from "../../../asset/Blog_img9.png";
import Tabs from "./Tabs";
import Blogdetails from "./Blogdetails";

const Blog = () => {
    return (
        <section>
            <div>
                <Tabs />
            </div>

            <div className="px-10 pb-10 sm-only:px-3">
                <div>
                    <div className="hidden md:block">
                        <p className="text-center text-gray-500 mt-1.5 mb-1.5 text-xs">Home | Blogs</p>
                        <h1 className="text-center text-3xl font-semibold pb-8">Blogs</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className=" md:grid grid-cols-3 gap-4 ">
                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img1} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:hidden">Top Table Styling Ideas and Tips to Follow...</h2>
                                <h2 className="pb-2 border-b border-gray-300 md:hidden font-bold">
                                    Top Table Styling Ideas and Tips...
                                </h2>
                                <p className="font-medium py-3 text-black whitespace-normal lg:only:text-justify">The peak of summer is here. It means, it’s time to binge-eat mangoes and pull out all the linens, florals from the closet.</p>
                                <button className="px-8 border border-gray-300 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img2} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:text-lg">Social News XYZ | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Embrace the Charm of Ceramics</p>
                                <button className="mt-6 px-8 border border-gray-300  py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img3} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:text-base">Newsroom Odisha | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Essentials for Festive Entertaining</p>
                                <button className="mt-6 px-8 border border-gray-300  py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img4} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:text-lg">Kaumi Marg | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Thoughtful yet effortless gifts for your sibling</p>
                                <button className="mt-6 px-8 border border-gray-300  py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img5} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:text-base">Investment Guru India | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Thoughtful yet effortless gifts for your sibling</p>
                                <button className="mt-6  px-8 border border-gray-300  py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img6} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:text-lg">Always First | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">A Beginner's Guide To Choosing The Best Wok To Transform Your Stir-Fry</p>
                                <button className=" px-8 border border-gray-300  py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img7} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:text-base">The Reporting Today | 08/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Giving your kitchen showstopper esque vibes</p>
                                <button className="mt-6 px-8 border border-gray-300 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img8} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:text-lg">NDTV | 08/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">A Beginner's Guide To Choosing The Best Wok To Transform Your Stir-Fry</p>
                                <button className="px-8 border border-gray-300  py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img9} alt="Image Card"></img>
                            <div p-4 className="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:text-lg">Biz Life News | 07/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Giving your kitchen showstopper esque vibes   </p>
                                <button className="mt-6 px-8 border border-gray-300  py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                    <div className="">
                        <ul className="flex flex-row space-x-2 text-zinc-400">
                            <li>01</li>
                            <li>02</li>
                            <li>03</li>
                            <li>04</li>
                            <li>...</li>
                            <li>07</li>
                        </ul>
                    </div>
                </div>
        </section>

    );
}

export default Blog;