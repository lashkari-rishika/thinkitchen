import React, { useEffect} from 'react'
import Swiper from 'swiper'
import { Link } from '@remix-run/react'

import featuredin1 from '../../asset/featuredin1.webp'
import featuredin2 from '../../asset/featuredin2.webp'
import featuredin3 from '../../asset/featuredin3.webp'
import featuredin4 from '../../asset/featuredin4.webp'
import featuredin5 from '../../asset/featuredin5.webp'


const media = [
    {
      id: 1,
      imageSrc: featuredin1 ,
      link: 'https://www.google.com/',
    },
    {
      id: 2,
      imageSrc: featuredin2 ,
      link: 'https://www.google.com/',
    },
    {
      id: 3,
      imageSrc: featuredin3 ,
      link: 'https://www.google.com/',
    },
    {
      id: 4,
      imageSrc: featuredin4 ,
      link: 'https://www.google.com/',
    },
    {
      id: 5,
      imageSrc: featuredin5 ,
      link: 'https://www.google.com/',
    },
    {
      id: 6,
      imageSrc: featuredin1 ,
      link: 'https://www.google.com/',
    },
    {
      id: 7,
      imageSrc: featuredin2 ,
      link: 'https://www.google.com/',
    },
    {
      id: 8,
      imageSrc: featuredin3 ,
      link: 'https://www.google.com/',
    },
    {
      id: 9,
      imageSrc: featuredin4 ,
      link: 'https://www.google.com/',
    },
    {
      id: 10,
      imageSrc: featuredin5 ,
      link: 'https://www.google.com/',
    },
  ];
const FeaturedIn = () => {

    useEffect(() => {
        if (typeof document !== 'undefined') {
          const swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 5,
            centeredSlides: true,
            autoplay: {
              delay: 5000,
            },
            navigation: {
              nextEl: '.swiper-button-next', // Specify the next arrow element
              prevEl: '.swiper-button-prev', // Specify the previous arrow element
            },
          });
        }
      }, []);

  return (
    <div className="featured-section mt-10 xs-only:px-3 px-10">
      <div className="featured-section-heading">
        <h1 className="text-4xl text-center font-medium pb-4">FEATURED IN</h1>
      </div>
      <div className="image_section">
        <div className="myswiper">
          <div className="swiper">
            <div className="swiper-wrapper gap-2.5">
              {media.map((media) => (
                <div key={media.id} className="swiper-slide">
                  <div className="card">
                    <div className="card__image">
                      <div className="flex flex-col items-center">
                        <div className="new_arrivel_card relative w-full">
                          <Link href={media.link} className="w-full" target="_blank">
                            <img
                              src={media.imageSrc}
                              alt="Product"
                              className="w-full object-cover hover_image"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-next">xfb</div>
            <div className="swiper-button-prev">df</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn