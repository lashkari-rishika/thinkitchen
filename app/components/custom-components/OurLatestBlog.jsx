import React from 'react'
import { Link } from '@remix-run/react'
import lb1 from '../../asset/OurLB1.png'
import lb2 from '../../asset/OurLB2.png'
import lb3 from '../../asset/OurLB3.png'

const OurLatestBlog = () => {
  return (
    <div className='blog_main_section mt-10 xs-only:px-3 px-10'>
        <div className='flex justify-between items-center mb-4'>
            <div className='blog-section-heading block ml-auto text-center'>
                <h1 className='text-4xl text-center font-medium'>OUR LATEST BLOGS</h1>
            </div>
            <div className="block ml-auto text-right cursor-pointer underline">
                View All
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2.5">

            <div className="flex flex-col items-center">
                <div className='Our_Blog_csrd relative w-full'>
                    <Link href="https://www.google.com/" className='w-full' target="_blank">
                        <img
                            src={lb1}
                            alt="Product"
                            className="w-full object-cover hover_image"
                        />
                        <div className="px-1 py-2 w-full">
                            <div className='OurBlog_card_text w-full'>
                                <div className="font-bold text-sm mb-2">November 01, 2022</div>
                                <div className="font-semibold text-base mb-2">Champagne is a luxurious drink that is often associated with celebrations and special occasions.</div>
                            </div>
                            <div className=' OurBlog_card_button w-1/3'>
                                <button className="add_cart_button rounded text-sm block w-full bg-white-500 font-semibold text-black py-1.5 px-2 border border-solid border-gray-300">
                                Explore
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className='Our_Blog_csrd relative w-full'>
                    <Link href="https://www.google.com/" className='w-full' target="_blank">
                        <img
                            src={lb2}
                            alt="Product"
                            className="w-full object-cover hover_image"
                        />
                        <div className="px-1 py-2 w-full">
                            <div className='OurBlog_card_text w-full'>
                                <div className="font-bold text-sm mb-2">November 01, 2022</div>
                                <div className="font-semibold text-base mb-2">Champagne is a luxurious drink that is often associated with celebrations and special occasions.</div>
                            </div>
                            <div className=' OurBlog_card_button w-1/3'>
                                <button className="add_cart_button rounded text-sm block w-full bg-white-500 font-semibold text-black py-1.5 px-2 border border-solid border-gray-300">
                                Explore
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className='Our_Blog_csrd relative w-full'>
                    <Link href="https://www.google.com/" className='w-full' target="_blank">
                        <img
                            src={lb3}
                            alt="Product"
                            className="w-full object-cover hover_image"
                        />
                        <div className="px-1 py-2 w-full">
                            <div className='OurBlog_card_text w-full'>
                                <div className="font-bold text-sm mb-2">November 01, 2022</div>
                                <div className="font-semibold text-base mb-2">Champagne is a luxurious drink that is often associated with celebrations and special occasions.</div>
                            </div>
                            <div className=' OurBlog_card_button w-1/3'>
                                <button className="add_cart_button rounded text-sm block w-full bg-white-500 font-semibold text-black py-1.5 px-2 border border-solid border-gray-300">
                                Explore
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default OurLatestBlog;