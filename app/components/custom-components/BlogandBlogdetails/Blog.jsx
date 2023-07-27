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

const Blog = () => {
    return (
        <section className="">

            <div class="container">
                <div class="tab">
                    <input id="tab1" type="radio" name="tabs" checked></input>
                    <label for="tab1">Kitchen</label>
                    <input id="tab2" type="radio" name="tabs"></input>
                    <label for="tab2">Inspiration</label>
                    <input id="tab3" type="radio" name="tabs"></input>
                    <label for="tab3">Food & Drink</label>
                    <input id="tab4" type="radio" name="tabs"></input>
                    <label for="tab4">Entertaininga</label>
                    <input id="tab5" type="radio" name="tabs"></input>
                    <label for="tab5">Tips & tricks</label>
                    
                </div>
            </div>


            <div className=' px-10 pb-10'>

                <div>
                    <div className="">
                        <p className="text-center  text-gray-500 mt-1.5 mb-1.5 text-xs">Home | Blogs</p>
                        <h1 className="text-center text-3xl font-semibold pb-8">Blogs</h1>
                    </div>
                </div>
                <div className="flex justify-center">



                    <div class="card grid grid-cols-3 gap-4">
                        <div className="w-full h-aut mb-5">
                            <img src={Blog_img1} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Top Table Styling Ideas and Tips to Follow...</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">The peak of summer is here. It means, it’s time to binge-eat mangoes and pull out all the linens, florals from the closet.</p>
                                <button className="px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img2} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Social News XYZ | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Embrace the Charm of Ceramics</p>
                                <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img3} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Newsroom Odisha | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Essentials for Festive Entertaining</p>
                                <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img4} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Kaumi Marg | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Thoughtful yet effortless gifts for your sibling</p>
                                <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img5} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Investment Guru India | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Thoughtful yet effortless gifts for your sibling</p>
                                <button className="mt-6  px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img6} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Always First | 09/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">A Beginner's Guide To Choosing The Best Wok To Transform Your Stir-Fry</p>
                                <button className=" px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img7} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">The Reporting Today | 08/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Giving your kitchen showstopper esque vibes</p>
                                <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img8} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">NDTV | 08/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">A Beginner's Guide To Choosing The Best Wok To Transform Your Stir-Fry</p>
                                <button className="px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                        <div className="w-full h-auto mb-5">
                            <img src={Blog_img9} alt="Image Card"></img>
                            <div p-4 class="card-content border border-gray-200 p-4">
                                <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Biz Life News | 07/08/2022</h2>
                                <p className="font-medium text-justify py-3 text-black whitespace-normal">Giving your kitchen showstopper esque vibes   </p>
                                <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Blog;