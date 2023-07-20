import React from 'react';
import { Link } from '@remix-run/react';
import sb2 from '../../asset/sb2.png'
import sb3 from '../../asset/sb3.png'
import sb5 from '../../asset/sb5.png'
import sb6 from '../../asset/sb6.png'
import grazia from '../../asset/grazialogo.png'
import '../../styles/app.css'

const ShopByBrands = () => {

  return (
    <div className='brand-section mt-10'>
      <div className='brand-section-heading'>
        <h1 className='text-3xl text-center font-normal pb-4'>SHOP BY BRANDS</h1>
      </div>
      <div className='image_section'>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1">
          
          <div className="flex flex-col items-center">
            <div className='all-brand-image'>
              <Link href="https://www.google.com/" className='w-full' target="_blank">
                <img
                  src={sb3}
                  className="w-full object-cover hover_image"
                  
                />
                <div className='all_brand_text text-3xl  text-white'><h1> AMEFA</h1> </div>
                <div className='all-brand-hidden'>
                  <div className='brand_hidden_image'>
                    <img src={grazia} />
                  </div>
                  <div className='mt-2'>
                    <h1 className='text-xl'>BY THEMEKITCHEN</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className='all-brand-image'>
              <Link href="https://www.google.com/" className='w-full' target="_blank">
                <img
                  src={sb5}
                  className="w-full object-cover hover_image"
                />
                <div className='all_brand_text text-3xl text-white'><h1> BERGHOFF</h1> </div>
                <div className='all-brand-hidden'>
                  <div className='brand_hidden_image'>
                    <img src={grazia} />
                  </div>
                  <div className='mt-2'>
                    <h1 className='text-xl'>BY THEMEKITCHEN</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className='all-brand-image'>
              <Link href="https://www.google.com/" className='w-full' target="_blank">
                <img
                  src={sb5}
                  className="w-full object-cover"
                />
                <div className='all_brand_text text-3xl text-white'><h1>COLE&MASON</h1> </div>
                <div className='all-brand-hidden'>
                  <div className='brand_hidden_image'>
                    <img src={grazia} />
                  </div>
                  <div className='mt-2'>
                    <h1 className='text-xl'>BY THEMEKITCHEN</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className='all-brand-image'>
              <Link href="https://www.google.com/" className='w-full' target="_blank">
                <img
                  src={sb6}
                  className="w-full object-cover"
                />
                <div className='all_brand_text text-3xl text-white'><h1> BRABANTIA</h1> </div>
                <div className='all-brand-hidden'>
                  <div className='brand_hidden_image'>
                    <img src={grazia} />
                  </div>
                  <div className='mt-2'>
                    <h1 className='text-xl'>BY THEMEKITCHEN</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className='all-brand-image'>
              <Link href="https://www.google.com/" className='w-full' target="_blank">
                <img
                  src={sb2}
                  className="w-full object-cover"
                />
                <div className='all_brand_text text-3xl text-white'><h1> JAMIE OLIVER</h1> </div>
                <div className='all-brand-hidden'>
                  <div className='brand_hidden_image'>
                    <img src={grazia} />
                  </div>
                  <div className='mt-2'>
                    <h1 className='text-xl'>BY THEMEKITCHEN</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className='all-brand-image'>
              <Link href="https://www.google.com/" className='w-full' target="_blank">
                <img
                  src={sb3}
                  className="w-full object-cover"
                />
                <div className='all_brand_text text-3xl text-white'><h1> ZYLISS</h1> </div>
                <div className='all-brand-hidden'>
                  <div className='brand_hidden_image'>
                    <img src={grazia} />
                  </div>
                  <div className='mt-2'>
                    <h1 className='text-xl'>BY THEMEKITCHEN</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='my-2 text-center '>
        <h2 className='font-medium underline-offset-8'>Viwe All Brands </h2>
      </div>
    </div>
  );
};

export default ShopByBrands