import React, { useState, useRef } from 'react';
import '../../../node_modules/swiper/swiper-bundle.css';
import '../../styles/app.css'; // You might need to adjust this path
import data from '../../../JSON/db.json';

const SsAbc = () => {
  const [counter, setCounter] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const sliderRef = useRef(null);

  const slideWidth = 16; // Adjust this value to control the slide movement amount

  const prevSlide = () => {
    setCounter((prevCounter) => (prevCounter === 0 ? 0 : prevCounter - 1));
  };

  const nextSlide = () => {
    setCounter((prevCounter) => (prevCounter === data.products.length - 1 ? prevCounter : prevCounter + 1));
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    e.preventDefault(); // Prevent the default vertical scroll behavior
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dragOffsetX = e.clientX - dragStartXRef.current;
      const sliderWidth = sliderRef.current.clientWidth;
      const offsetPercentage = (dragOffsetX / sliderWidth) * 50;
      const offsetSlides = Math.round(offsetPercentage / slideWidth);

      setCounter((prevCounter) => {
        let newCounter = prevCounter - offsetSlides;
        if (newCounter < 0) {
          newCounter = 0;
        } else if (newCounter >= data.products.length) {
          newCounter = data.products.length - 1;
        }
        return newCounter;
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="slider-container"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={sliderRef}
    >
      <div className="slider relative w-full lg-only:w-[250%] md-only:w-[300%] sm-only:w-[450%] " style={{ transform: `translateX(-${counter * slideWidth}%)` }}>
        {data.products.map((item, index) => (
          <div key={index} className="slide">
            <img src={item.imageSrc} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="arrow prev" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="arrow next" onClick={nextSlide}>
        &#10095;
      </div>
    </div>
  );
};

export default SsAbc;
// import React, { useState, useRef } from 'react';
// import '../../../node_modules/swiper/swiper-bundle.css';
// import '../../styles/app.css'; // You might need to adjust this path
// import data from '../../../JSON/db.json';

// const SsAbc = () => {
//   const [counter, setCounter] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const dragStartXRef = useRef(0);
//   const sliderRef = useRef(null);

//   const slideWidth = 8; // Adjust this value to control the slide movement amount

//   const prevSlide = () => {
//     setCounter((prevCounter) => (prevCounter === 0 ? 0 : prevCounter - 1));
//   };

//   const nextSlide = () => {
//     setCounter((prevCounter) => (prevCounter === data.category.length - 1 ? prevCounter : prevCounter + 1));
//   };

//   const handleWheel = (e) => {
//     if (e.deltaY > 0) {
//       nextSlide();
//     } else {
//       prevSlide();
//     }

//     e.preventDefault(); // Prevent the default vertical scroll behavior
//   };

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     dragStartXRef.current = e.clientX;
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const dragOffsetX = e.clientX - dragStartXRef.current;
//       const sliderWidth = sliderRef.current.clientWidth;
//       const offsetPercentage = (dragOffsetX / sliderWidth) * 50;
//       const offsetSlides = Math.round(offsetPercentage / slideWidth);

//       setCounter((prevCounter) => {
//         let newCounter = prevCounter - offsetSlides;
//         if (newCounter < 0) {
//           newCounter = 0;
//         } else if (newCounter >= data.category.length) {
//           newCounter = data.category.length - 1;
//         }
//         return newCounter;
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div
//       className="slider-container"
//       onWheel={handleWheel}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       ref={sliderRef}
//     >
//       <div className="slider relative w-full lg-only:w-[250%] md-only:w-[300%] sm-only:w-[450%] " style={{ transform: `translateX(-${counter * slideWidth}%)` }}>
//         {data.category.map((item, index) => (
//           <div key={index} className="slide">
//             <img src={item.imageSrc} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//       <div className="arrow prev" onClick={prevSlide}>
//         &#10094;
//       </div>
//       <div className="arrow next" onClick={nextSlide}>
//         &#10095;
//       </div>
//     </div>
//   );
// };

// export default SsAbc;



// import React,{ useState, useRef  } from 'react'
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import SwiperCore, { Navigation } from 'swiper';


// import '../../../node_modules/swiper/swiper-bundle.css'
// // import '../../../node_modules/swiper/swiper-bundle.min.css'
// import '../../../node_modules/swiper/swiper-bundle.js'
// // import '../../../node_modules/swiper/swiper-bundle.min.js'
// import '../../styles/app.css'
// import data from '../../../JSON/db.json'

// const SsAbc = () => {

//   const [counter, setCounter] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const dragStartXRef = useRef(0);
//   const sliderRef = useRef(null);

//   const prevSlide = () => {
//     setCounter((nextCounter) =>{
//       const prevCounter = nextCounter - 1;
//       return prevCounter < data.category.length ? prevCounter : nextCounter;
//     });
//   };

//   const nextSlide = () => {
//     setCounter((prevCounter) => {
//       const nextCounter = prevCounter + 1;
//       return nextCounter < data.category.length ? nextCounter : prevCounter;
//     });
//   };

//   const handleWheel = (e) => {
//     if (e.deltaY > 0) {
//       nextSlide();
//     } else {
//       prevSlide();
//     }
//     e.preventDefault();
//   };

//    const handleMouseDown = (e) => {
//     setIsDragging(true);
//     dragStartXRef.current = e.clientX;
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const dragOffsetX = e.clientX - dragStartXRef.current;
//       const sliderWidth = sliderRef.current.clientWidth;
//       const slideWidth = sliderWidth / data.category.length;
//       const offsetPercentage = (dragOffsetX / sliderWidth) * 100;
//       const offsetSlides = Math.round(offsetPercentage / (100 / data.category.length));

//       setCounter((prevCounter) => {
//         let newCounter = prevCounter - offsetSlides;
//         if (newCounter < 0) {
//           newCounter = 0;
//         } else if (newCounter >= data.category.length) {
//           newCounter = data.category.length - 1;
//         }
//         return newCounter;
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div className="slider-container"
//     onWheel={handleWheel}
//     onMouseDown={handleMouseDown}
//     onMouseMove={handleMouseMove}
//     onMouseUp={handleMouseUp}
//     ref={sliderRef}>
//     <div className="slider relative w-full lg-only:w-[250%] md-only:w-[300%] sm-only:w-[450%] " style={{ transform: `translateX(-${counter * 5}%)` }}>
//       {data.category.map((item, index) => (
//         <div key={index} className="slide">
//           <img src={item.imageSrc} alt={`Image ${index + 1}`} />
//         </div>
//       ))}
//     </div>
//     <div className="arrow prev" onClick={prevSlide}>&#10094;</div>
//     <div className="arrow next" onClick={nextSlide}>&#10095;</div>
//   </div>
// );
// };
// export default SsAbc
