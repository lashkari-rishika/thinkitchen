import React, { useState } from "react";

const Blog = () => {

    const [activeTab, setActiveTab] = useState(0);

    // Function to change the active tab
    const changeTab = (newTab) => {
        setActiveTab(newTab);
      };

    const blogItems = [
        {
            id: 1,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img1.png?v=1693223678",
            Blogheader: 'Top Table Styling Ideas and Tips to Follow...',
            Blogcontent: 'The peak of summer is here. It means, it’s time to binge-eat mangoes and pull out all the linens, florals from the closet.',
            ReadButton: 'Read More',
        },
        {
            id: 2,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img2.png?v=1692952922",
            Blogheader: "Social News XYZ | 09/08/2022",
            Blogcontent: "Embrace the Charm of Ceramics",
            ReadButton: 'Read More',
        },
        {
            id: 3,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img3.png?v=1693224243",
            Blogheader: 'Newsroom Odisha | 09/08/2022',
            Blogcontent: 'Essentials for Festive Entertaining',
            ReadButton: 'Read More',
        },
        {
            id: 4,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img4.png?v=1693224435",
            Blogheader: 'Kaumi Marg | 09/08/2022',
            Blogcontent: 'Thoughtful yet effortless gifts for your sibling',
            ReadButton: 'Read More',
        },
        {
            id: 5,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img5.png?v=1693224450",
            Blogheader: 'Investment Guru India | 09/08/2022',
            Blogcontent: 'Thoughtful yet effortless gifts for your sibling',
            ReadButton: 'Read More',
        },
        {
            id: 6,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img6.png?v=1693224527",
            Blogheader: 'Always First | 09/08/2022',
            Blogcontent: 'A Beginners Guide To Choosing The Best Wok To Transform Your Stir-Fry',
            ReadButton: 'Read More',
        },
        {
            id: 7,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img7.png?v=1693224557",
            Blogheader: 'The Reporting Today | 08/08/2022',
            Blogcontent: 'Giving your kitchen showstopper esque vibes',
            ReadButton: 'Read More',
        },
        {
            id: 8,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img8.png?v=1692952969",
            Blogheader: 'NDTV | 08/08/2022',
            Blogcontent: 'A Beginners Guide To Choosing The Best Wok To Transform Your Stir-Fry',
            ReadButton: 'Read More',
        },
        {
            id: 9,
            imageUrl: "https://cdn.shopify.com/s/files/1/0293/6448/6192/files/Blog_img8.png?v=1692952969",
            Blogheader: 'Biz Life News | 07/08/2022',
            Blogcontent: 'A Beginners Guide To Choosing The Best Wok To Transform Your Stir-Fry',
            ReadButton: 'Read More',
        },
    ];



    const ITEMS_PER_PAGE = 3; // Adjust this value as needed
    const TOTAL_ITEMS = blogItems.length; // Assuming you have an array of blog items
    const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, TOTAL_ITEMS);
    const displayedItems = blogItems.slice(startIndex, endIndex);



    return (
        <section>

            {/* ============Tabs Functionality================= */}

            <div className=" bg-neutral-100 p-2.5 fixed w-full top-16 sm-only:overflow-x-scroll  sm-only:top-20 hide-scrollbar md-only:overflow-x-scroll md-only:top-24">
                <ul className="tabs-nav flex  lg:flex-row lg:space-x-4 md:justify-end xl:mr-[10%]">
                    <li>
                        <a
                            href="#Kitchen"
                            onClick={() => changeTab(5)}
                            className={` ${activeTab === 5 ? "tab-active  border-b-2 border-black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Kitchen
                        </a>
                    </li>

                    <li>
                        <a
                            href="#Inspiration"
                            onClick={() => changeTab(1)}
                            className={` ${activeTab === 1 ? "tab-active  border-b-2 border-black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Inspiration
                        </a>
                    </li>

                    <li>
                        <a
                            href="#Food&Drink"
                            onClick={() => changeTab(2)}
                            className={` ${activeTab === 2 ? "tab-active  border-b-2 border-black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Food&Drink
                        </a>
                    </li>

                    <li>
                        <a
                            href="#Entertaininga"
                            onClick={() => changeTab(3)}
                            className={` ${activeTab === 3 ? "tab-active  border-b-2 border-black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Entertaininga
                        </a>
                    </li>

                    <li>
                        <a
                            href="#Tips&tricks"
                            onClick={() => changeTab(4)}
                            className={` ${activeTab === 4 ? "tab-active  border-b-2 border-black black" : ""} text-sm lg:pb-3 sm-only:px-2 sm-only:py-2 md-only:py-2 md-only:px-2`}
                        >
                            Tips&tricks
                        </a>
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

                        {displayedItems.map((item) => (
                            <div
                                key={item.id} // Ensure each item has a unique key
                                id={item.id} // Use the id as the identifier (you can customize this)
                                className={`w-full h-auto mb-5 ${activeTab === item.id ? "" : "hidden"}`}
                            >
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
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* ===================pagination======================= */}

            <div className="flex justify-center items-center">
                <ul className="flex flex-row space-x-2 text-zinc-400">
                    {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
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