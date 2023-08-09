import React from 'react'
import { Link } from '@remix-run/react'
import BDB from '../../asset/BrandDetailBanner1.png'
import data from '../../../JSON/db.json'
import {AiOutlineHeart} from 'react-icons/ai';

export const BrandDetails = () => {
  return (
    <div>
        <div className='BDB'>
            <img src={BDB} alt='BDB'/>
        </div>

        <div className='BD_text mx-10 md-max:mx-3'>
            <div className="flex justify-center text-xs py-2">
                <div className="text-gray-400 mr-1">Home | Brands | </div>
                <div className="text-black">BergHOFF</div>
            </div>
            <div className='flex items-center my-5 md-max:flex-wrap md-max:justify-center'>
                <div className='xl:text-[40px] sm-only:text-[22px] md:text-3xl xl:leading-[3rem]'>WELCOME TO BERGHOFF</div>
                <div className='xl:text-base sm:text-sm w-[125%]'>Passionate about cookware in all its form with more than 20 years of experience. BergHOFF is an international brand which creates, produces and distributes sophisticated kitchen designs that give an edge to the everyday cooking experience. They have a keen eye for detail resulting in products that have been recommended and rewarded for their aesthetics as well as their functionality.
                </div>
            </div>
        </div>

        <div className='Brand_Suggetion mx-10 md-max:mx-3 grid grid-cols-1 md:grid-cols-3 gap-12 md-max:gap-3'>
            {data.AllBrandSuggetion.map((item) => (
                <div key={item.id} className="flex flex-col items-center relative">
                <div className="new_arrivel_card relative w-full">
                    <Link href={item.link} className="w-full" target="_blank">
                    <img
                        src={item.imageSrc}
                        alt="Product"
                        className="w-full object-cover hover_image"
                    />
                    </Link>
                </div>
                <div className='flex justify-center items-center text-[1.1rem] md-only:text-sm bg-[#175C8A] p-2 w-full text-white'>{item.productName}</div>
                {/* On Hover State */}
                <div className='hover-content'>
                    <div className='flex justify-center text-3xl text-white mb-2'>Cooking Accessories</div>
                    <div className='flex justify-center text-base text-white mb-2'>Unleash culinary magic with Dreamfarm's innovative cooking accessories.</div>
                    <div className='flex justify-center border'><button className='text-white text-sm border-white py-1.5 px-5'>Shop Now</button></div>
                </div>
                </div>
            ))}
        </div>


        <div className='BDP mx-10 md-max:mx-3 py-20'>
            <div className="arrivel-section-heading">
                <h1 className="text-4xl text-center font-medium pb-4">BERGHOFF LEO PRODUCTS</h1>
            </div>

            <div className="grid grid-cols-1 sm-only:grid-cols-1 md:grid-cols-3 gap-3">
                {data.AllBrandProducts.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                    <div className="new_arrivel_card relative w-full">
                    <Link href={item.link} className="w-full" target="_blank">
                        <img
                        src={item.imageSrc}
                        alt="Product"
                        className="w-full object-cover hover_image"
                        />
                        <button className="absolute top-2 right-2 p-2 bg-white rounded-full ">
                        <AiOutlineHeart/>
                        </button>
                        <div className="discount_lable absolute p-2 md-only:text-sm md-only:p-[0.1rem] text-red-600 bg-white rounded-br-lg  font-xs">
                        {item.discountTag}
                        </div>
                        <div className="px-1 py-2 flex w-full">
                        <div className="product_card_text w-9/12">
                            <div className="font-semibold text-sm md-only:text-xs md-only:leading-4">
                            {item.productName}
                            </div>
                            <span className="font-xs text-gray-400 md-only:text-[12px] mb-1 gap-1">
                            {item.discountedPrice}
                            </span>
                            <span className="text-red-500 font-xs md-only:text-[12px] mb-1">
                            {item.price}
                            </span>
                        </div>
                        <div className=" product_card_button 4/12">
                            <button className="add_cart_button text-sm md-omly:text-[0.675rem] md-only:text-[0.65rem] md-only:leading-[1rem] block w-full bg-white-500 font-semibold text-black py-1 px-2 md-only:px-1 border border-solid border-gray-300 min-w-max">
                            {item.cartButton}
                            </button>
                        </div>
                        </div>
                    </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className='Customer_Review mx-10 md-max:mx-3'></div>
        <div className='YT_video mx-24 md-max:mx-0 lg-only:mx-20 flex flex-col lg:flex-row my-12'>
            <div className='w-[63%] pr-10 md-max:w-full md-max:pr-0'>
                <iframe
                width="100%"
                height="380"
                src="https://www.youtube.com/embed/Y1glVhCWxGo?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
            </div>
            <div className='w-[37%] md-max:w-full md-max:mt-4 lg:pt-28 md-max:px-4'>
                <div className='font-semibold mb-2 text-3xl md-max:text-[26px]'>The Story of Dreamfarm</div>
                <div className='text-sm md-max:text-base font-medium'>
                Dreamfarm's belief that nothing is impossible has seen it grow from one
                product in a backyard shed to an industry leading brand with a worldwide
                reputation for best-in-class innovation and original design. Watch the
                animated story of where Dreamfarm began and how great ideas grow.
                </div>
            </div>
            </div>
    </div>
  )
}


