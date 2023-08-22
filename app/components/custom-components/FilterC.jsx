import React, { useState } from 'react';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import { PlpFilterUI } from './PlpFilterUI';

export function FilterC() {
  // State to manage the visibility of the PlpFilterUI component
  const [isFilterUIVisible, setIsFilterUIVisible] = useState(false);

  const handleFilterIconClick = () => {
    setIsFilterUIVisible(!isFilterUIVisible); // Toggle the visibility of PlpFilterUI on icon click
  };

  return (
    <>
      <div
        className="justify-end mr-2.5 cursor-pointer min-w-fit"
        style={{display: 'flex', alignItems: 'center'}}
        onClick={handleFilterIconClick}
      >
        <HiOutlineMenuAlt3 className="mr-1"/> FILTER BY{' '}
      </div>
      {isFilterUIVisible && <PlpFilterUI />}
    </>
  );
};

