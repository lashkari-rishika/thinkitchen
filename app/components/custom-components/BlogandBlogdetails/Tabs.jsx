

<<<<<<< HEAD
const Tabs = () => {
    // const tabsData = [
    //     {
    //         title: 'Kitchen',
    //         content: 'Welcome to the kitchen Tab!',
    //     },
    //     {
    //         title: 'Inspiration',
    //         content: (
    //             <>
    //                 <div className='flex gap-4  '>
    //                      <div className="w-full h-auto ml-4">
    //                         <img src={Blog_img1} alt="Image Card"></img>
    //                         <div p-4 className="card-content border border-gray-200 p-4">
    //                             <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Top Table Styling Ideas and Tips to Follow...</h2>
    //                             <p className="font-medium text-justify py-3 text-black whitespace-normal">The peak of summer is here. It means, it’s time to binge-eat mangoes and pull out all the linens, florals from the closet.</p>
    //                             <button className="px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                         </div>
    //                     </div>
    //                     <div className="w-full h-auto mb-5">
    //                         <img src={Blog_img1} alt="Image Card"></img>
    //                         <div p-4 className="card-content border border-gray-200 p-4">
    //                             <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Top Table Styling Ideas and Tips to Follow...</h2>
    //                             <p className="font-medium text-justify py-3 text-black whitespace-normal">The peak of summer is here. It means, it’s time to binge-eat mangoes and pull out all the linens, florals from the closet.</p>
    //                             <button className="px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                         </div>
    //                     </div>
    //                     <div className="w-full h-auto mb-5 mr-4">
    //                         <img src={Blog_img1} alt="Image Card"></img>
    //                         <div p-4 className="card-content border border-gray-200 p-4">
    //                             <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Top Table Styling Ideas and Tips to Follow...</h2>
    //                             <p className="font-medium text-justify py-3 text-black whitespace-normal">The peak of summer is here. It means, it’s time to binge-eat mangoes and pull out all the linens, florals from the closet.</p>
    //                             <button className="px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </>
    //         ),
            
    //     },
    //     {
    //         title: 'Food & Drink',
    //         content: (
    //             <div className="w-96 h-auto mb-5">
    //                 <img src={Blog_img3} alt="Image Card"></img>
    //                 <div p-4 className="card-content border border-gray-200 p-4">
    //                     <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Newsroom Odisha | 09/08/2022</h2>
    //                     <p className="font-medium text-justify py-3 text-black whitespace-normal">Essentials for Festive Entertaining</p>
    //                     <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                 </div>
    //             </div>
    //         )

    //     },
    //     {
    //         title: 'Entertaininga',
    //         content: (
    //             <div className="w-96 h-auto mb-5">
    //                 <img src={Blog_img4} alt="Image Card"></img>
    //                 <div p-4 className="card-content border border-gray-200 p-4">
    //                     <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Kaumi Marg | 09/08/2022</h2>
    //                     <p className="font-medium text-justify py-3 text-black whitespace-normal">Thoughtful yet effortless gifts for your sibling</p>
    //                     <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                 </div>
    //             </div>
    //         ),
    //         content: (
    //             <div className="w-96 h-auto mb-5">
    //                 <img src={Blog_img6} alt="Image Card"></img>
    //                 <div p-4 className="card-content border border-gray-200 p-4">
    //                     <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Always First | 09/08/2022</h2>
    //                     <p className="font-medium text-justify py-3 text-black whitespace-normal">A Beginner's Guide To Choosing The Best Wok To Transform Your Stir-Fry</p>
    //                     <button className=" px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                 </div>
    //             </div>
    //         )
    //     },
    //     {
    //         title: 'Tips & tricks',
    //         content: (
    //             <div className="w-96 h-auto mb-5">
    //                 <img src={Blog_img7} alt="Image Card"></img>
    //                 <div p-4 className="card-content border border-gray-200 p-4">
    //                     <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">The Reporting Today | 08/08/2022</h2>
    //                     <p className="font-medium text-justify py-3 text-black whitespace-normal">Giving your kitchen showstopper esque vibes</p>
    //                     <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                 </div>
    //             </div>
    //         ),
    //         content: (
    //             <div className="w-96 h-auto mb-5">
    //                 <img src={Blog_img8} alt="Image Card"></img>
    //                 <div p-4 className="card-content border border-gray-200 p-4">
    //                     <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">NDTV | 08/08/2022</h2>
    //                     <p className="font-medium text-justify py-3 text-black whitespace-normal">A Beginner's Guide To Choosing The Best Wok To Transform Your Stir-Fry</p>
    //                     <button className="px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                 </div>
    //             </div>
    //         ),

    //         content: (
    //             <div className="w-96 h-auto mb-5">
    //                 <img src={Blog_img9} alt="Image Card"></img>
    //                 <div p-4 className="card-content border border-gray-200 p-4">
    //                     <h2 className="font-semibold border-b border-gray-300 text-xl pb-2">Biz Life News | 07/08/2022</h2>
    //                     <p className="font-medium text-justify py-3 text-black whitespace-normal">Giving your kitchen showstopper esque vibes   </p>
    //                     <button className="mt-6 px-8 border border-gray-300 px-4 py-2 text-black-500 hover:bg-indigo-800 hover:text-gray-300">Read More</button>
    //                 </div>
    //             </div>
    //         )

    //     },
    // ];
=======
// const Tabs = () => {
//     const tabsData = [
//         {
//             title: 'Kitchen',
//             content: '',
//         },
//         {
//             title: 'Inspiration',
//             content:'',
//         },
//         {
//             title: 'Food & Drink',
//             content: '',
//         },
//         {
//             title: 'Entertaininga',
//             content:'',
//         },
//         {
//             title: 'Tips & tricks',
//             content:''
//         }
//     ];

//     const [activeTab, setActiveTab] = useState(0);

//     const handleTabClick = (index) => {
//         setActiveTab(index);
//     };

//     return (
//         <div>
//             <div className='w-screen bg-zinc-100'>
//                 <div className="tab-buttons flex justify-end mr-[10%]">
//                     {tabsData.map((tab, index) => (
//                         <button key={index}
//                         onClick={() => handleTabClick(index)} className="text-sm">{tab.title }
//                        </button>
//                     ))}
//                 </div>
//             </div>
>>>>>>> 449741bb3aebcdefdfc47dd10233c0a9644a89ed

//             <div className="tab-content">
//                 {tabsData.map((tab, index) => (
//                     <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
//                         {tab.content}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Tabs;
