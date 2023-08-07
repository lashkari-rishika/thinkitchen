import React from 'react'
import { Link } from '@remix-run/react'
// import lb1 from '../../asset/OurLB1.png'
// import lb2 from '../../asset/OurLB2.png'
// import lb3 from '../../asset/OurLB3.png'
import data from '../../../JSON/db.json'

// const item = [
//     {
//         id: 1,
//         imageSrc: lb1 ,
//         date: 'November 01, 2022' ,
//         text: 'Champagne is a luxurious drink that is often associated with celebrations and special occasions.',
//         exploreBtn: 'Explore',
//         link: 'https://www.google.com/',
//       },
//       {
//         id: 2,
//         imageSrc: lb2 ,
//         date: 'November 01, 2022' ,
//         text: 'Champagne is a luxurious drink that is often associated with celebrations and special occasions.',
//         exploreBtn: 'Explore',
//         link: 'https://www.google.com/',
//       },
//       {
//         id: 3,
//         imageSrc: lb3 ,
//         date: 'November 01, 2022' ,
//         text: 'Champagne is a luxurious drink that is often associated with celebrations and special occasions.',
//         exploreBtn: 'Explore',
//         link: 'https://www.google.com/',
//       },
// ]

const OurLatestBlog = () => {
  return (
    <div className='blog_main_section mt-10 sm-only:px-3 px-10'>
        <div className='flex justify-center relative items-center pb-4'>
            <div className='blog-section-heading block ml-auto w-full text-center'>
                <h1 className='text-4xl font-item'>OUR LATEST BLOGS</h1>
            </div>
            <Link to={`/journal/${handle}`} className="block absolute top-5 right-5 font-semibold ml-auto text-right cursor-pointer underline">
                View All
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2.5">
            {data.blog.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
                <div className='Our_Blog_csrd relative w-full'>
                    <Link href={item.link} className='w-full' target="_blank">
                        <img
                            src={item.imageSrc}
                            alt="Product"
                            className="w-full object-cover hover_image"
                        />
                        <div className="px-1 py-2 w-full">
                            <div className='OurBlog_card_text w-full'>
                                <div className="font-bold text-sm mb-2">{item.date}</div>
                                <div className="font-semibold text-base mb-2">{item.text}</div>
                            </div>
                            <div className=' OurBlog_card_button w-1/3'>
                                <button className="add_cart_button rounded text-sm block w-full bg-white-500 font-semibold text-black py-1.5 px-2 border border-solid border-gray-300">
                                {item.exploreBtn}
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default OurLatestBlog;