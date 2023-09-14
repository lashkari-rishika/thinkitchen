import React, { useState, useEffect } from "react";     
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

    const [activeTab, setActiveTab] = useState("Kitchen"); // Set "Kitchen" as the default active tab
    const [selectedCategory, setSelectedCategory] = useState("Kitchen");
    const [currentPage, setCurrentPage] = useState(1); // Define currentPage state
    const [displayedItems, setDisplayedItems] = useState([]); // Update displayedItems
    const ITEMS_PER_PAGE = 3; // Define the number of items per page

    const blogItems = [
        {
            category: "Kitchen",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img1.png?v=1693223678",
            Blogheader: 'Top Table Styling Ideas and Tips to Follow...',
            Blogcontent: 'The peak of summer is here. It means, it’s time to binge-eat mangoes and pull out all the linens, florals from the closet.',
            ReadButton: 'Read More',
        },
        {

            category: "Kitchen",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img2.png?v=1692952922",
            Blogheader: "Social News XYZ | 09/08/2022",
            Blogcontent: "Embrace the Charm of Ceramics",
            ReadButton: 'Read More',
        },
        {
            category: "Kitchen",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img3.png?v=1693224243",
            Blogheader: 'Newsroom Odisha | 09/08/2022',
            Blogcontent: 'Essentials for Festive Entertaining',
            ReadButton: 'Read More',
        },
        {

            category: "Kitchen",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img6.png?v=1693224527",
            Blogheader: 'Always First | 09/08/2022',
            Blogcontent: 'A Beginners Guide To Choosing The Best Wok To Transform Your Stir-Fry',
            ReadButton: 'Read More',
        },
        {

            category: "Entertaininga",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img4.png?v=1693224435",
            Blogheader: 'Kaumi Marg | 09/08/2022',
            Blogcontent: 'Thoughtful yet effortless gifts for your sibling',
            ReadButton: 'Read More',
        },
        {

            category: "Tips&tricks",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img5.png?v=1693224450",
            Blogheader: 'Investment Guru India | 09/08/2022',
            Blogcontent: 'Thoughtful yet effortless gifts for your sibling',
            ReadButton: 'Read More',
        },
        {

            category: "Tips&tricks",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img8.png?v=1692952969",
            Blogheader: 'Biz Life News | 07/08/2022',
            Blogcontent: 'A Beginners Guide To Choosing The Best Wok To Transform Your Stir-Fry',
            ReadButton: 'Read More',
        },
        {

            category: "Inspiration",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img7.png?v=1693224557",
            Blogheader: 'The Reporting Today | 08/08/2022',
            Blogcontent: 'Giving your kitchen showstopper esque vibes',
            ReadButton: 'Read More',
        },
        {

            category: "Inspiration",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img8.png?v=1692952969",
            Blogheader: 'NDTV | 08/08/2022',
            Blogcontent: 'A Beginners Guide To Choosing The Best Wok To Transform Your Stir-Fry',
            ReadButton: 'Read More',
        },
        {

            category: "Food&Drink",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img5.png?v=1693224450",
            Blogheader: 'Investment Guru India | 09/08/2022',
            Blogcontent: 'Thoughtful yet effortless gifts for your sibling',
            ReadButton: 'Read More',
        },
        {

            category: "Food&Drink",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img5.png?v=1693224450",
            Blogheader: 'Investment Guru India | 09/08/2022',
            Blogcontent: 'Thoughtful yet effortless gifts for your sibling',
            ReadButton: 'Read More',
        },
        {

            category: "Food&Drink",
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img5.png?v=1693224450",
            Blogheader: 'Investment Guru India | 09/08/2022',
            Blogcontent: 'Thoughtful yet effortless gifts for your sibling',
            ReadButton: 'Read More',
        },

    ];

    // Calculate TOTAL_ITEMS and TOTAL_PAGES outside useEffect
    const filteredItems = blogItems.filter((item) =>
        selectedCategory ? item.category === selectedCategory : true
    );

    // Calculate the total number of items in each category after filtering
    const TOTAL_ITEMS_BY_CATEGORY = {};

    blogItems.forEach((item) => {
        if (!TOTAL_ITEMS_BY_CATEGORY[item.category]) {
            TOTAL_ITEMS_BY_CATEGORY[item.category] = 0;
        }
        TOTAL_ITEMS_BY_CATEGORY[item.category]++;
    });

    // Calculate the total number of pages for each category based on items per page (3 items per page)
    const TOTAL_PAGES_BY_CATEGORY = {};

    Object.keys(TOTAL_ITEMS_BY_CATEGORY).forEach((category) => {
        TOTAL_PAGES_BY_CATEGORY[category] = Math.ceil(
            TOTAL_ITEMS_BY_CATEGORY[category] / ITEMS_PER_PAGE
        );
    });

    // Function to change the active tab
    const changeTab = (category) => {
        setActiveTab(category);
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    // =========== pagination logic start ============

    useEffect(() => {
        // Calculate the start and end indices for the currently displayed page
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, TOTAL_ITEMS_BY_CATEGORY[selectedCategory]);

        // Filter and set the displayed items for the selected category
        const selectedCategoryItems = filteredItems
            .filter(item => item.category === selectedCategory)
            .slice(startIndex, endIndex);

        // Set the displayed items based on the calculated indices
        setDisplayedItems(selectedCategoryItems);
    }, [selectedCategory, currentPage]);

    // =========== pagination logic end============

    return (
        <section>

            {/* ============Tabs Functionality================= */}

            <div className=" bg-neutral-100 p-2.5 fixed w-full top-16 sm-only:overflow-x-scroll  sm-only:top-20 hide-scrollbar md-only:overflow-x-scroll md-only:top-24">
                <ul className="tabs-nav flex  lg:flex-row lg:space-x-4 md:justify-end xl:mr-[10%]">
                    <li>
                        <button
                            onClick={() => changeTab("Kitchen")}
                            className={` ${activeTab === "Kitchen" ? "tab-active  border-b-2 border-black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Kitchen
                        </button>
                    </li>


                    <li>
                        <button
                            onClick={() => changeTab("Inspiration")}
                            className={` ${activeTab === "Inspiration" ? "tab-active  border-b-2 border-black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Inspiration
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => changeTab("Food&Drink")}
                            className={` ${activeTab === "Food&Drink" ? "tab-active  border-b-2 border-black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Food&Drink
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => changeTab("Entertaininga")}
                            className={` ${activeTab === "Entertaininga" ? "tab-active  border-b-2 border-black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Entertaininga
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => changeTab("Tips&tricks")}
                            className={` ${activeTab === "Tips&tricks" ? "tab-active  border-b-2 border-black black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Tips&tricks
                        </button>
                    </li>

                </ul>
            </div>

            {/* =============== end Tabs Functionality ================*/}

            <div className=" px-10 pb-10 sm-only:px-3">
                <div>
                    <div className="hidden md:block lg:block xl:block 2xl:block">
                        <p className="text-center text-gray-500 mt-1.5 mb-1.5 text-xs">Home | Blogs</p>
                        <h1 className="text-center text-3xl font-semibold pb-8">Blogs</h1>
                    </div>
                </div>
                <div className="flex justify-center">

                    <div className="tabs-stage lg:grid grid-cols-3 gap-4 ">

                        {displayedItems.map((item, index) => (
                            <div key={index} className={`w-full h-auto mb-5`}>
                                {activeTab === item.category && (
                                    <>
                                        <img src={item.imageUrl} alt="Image Card" />
                                        <div p-4 className="card-content border border-gray-200 p-4">
                                            <h2 className="font-semibold border-b border-gray-300 text-xl pb-2 sm-only:hidden">
                                                {item.Blogheader}
                                            </h2>

                                            <div className="md:hidden">
                                                <h2 className="pb-2 border-b border-gray-300 font-bold">
                                                    {item.Blogheader}
                                                </h2>
                                            </div>

                                            <p className="font-medium py-3 text-black whitespace-normal lg:only:text-justify">
                                                {item.Blogcontent}
                                            </p>
                                            <button className="px-8 border border-gray-300 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300 sm-only:text-black-500 font-bold text-sm">
                                                {item.ReadButton}
                                            </button>
                                        </div>
                                    </>
                                )}

                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* ===================start pagination functionality======================= */}

            {/* Pagination */}
            <div className="flex justify-center items-center">
                <ul className="flex flex-row space-x-2 text-zinc-400">
                    {Array.from({ length: TOTAL_PAGES_BY_CATEGORY[selectedCategory] }).map((_, index) => (
                        <li
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`cursor-pointer ${currentPage === index + 1 ? "text-black font-bold" : ""
                                }`}
                        >
                            {index + 1}
                        </li>
                    ))}

                </ul>
            </div>


        </section>

    );
}

export default Blog;