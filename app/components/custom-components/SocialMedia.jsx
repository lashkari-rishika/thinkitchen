import React from 'react'
import { Link } from '@remix-run/react'
import { FaInstagram } from 'react-icons/fa'
// import social1 from '../../asset/social1.png'
// import social2 from '../../asset/social2.png'
// import social3 from '../../asset/social3.png'
// import social4 from '../../asset/social4.png'
// import social5 from '../../asset/social5.png'

import data from '../../../JSON/db.json'

// const media = [
//     {
//         id: 1,
//         imageSrc: social1 ,
//         link: 'https://www.google.com/',
//       },
//       {
//         id: 2,
//         imageSrc: social2 ,
//         link: 'https://www.google.com/',
//       },
//       {
//         id: 3,
//         imageSrc: social3 ,
//         link: 'https://www.google.com/',
//       },
//       {
//         id: 4,
//         imageSrc: social4 ,
//         link: 'https://www.google.com/',
//       },
//       {
//         id: 5,
//         imageSrc: social5 ,
//         link: 'https://www.google.com/',
//       },
// ]

const SocialMedia = () => {
  return (
    <div className='social-media-section my-10 px-3 sm:px-0'>
        <div className='social-section-heading'>
            <h1 className='text-4xl sm-only:text-2xl text-center font-medium pb-4'>JOIN US ON SOCIAL @THINKITCHEN</h1>
        </div>
        <div className='image_section'>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {data.socialmedia.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                    <div className='social-brand-image'>
                        <Link href={item.link} className='w-full' target="_blank">
                        <div className='image-text'>
                        <img
                            src={item.imageSrc}
                            className="w-full object-cover hover_image"
                        />
                        <div className='social-hover-logo'>
                            <FaInstagram color='white'/>
                        </div>
                        </div>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default SocialMedia