import React, {useState, useEffect, useRef} from 'react';
import {FiChevronDown} from 'react-icons/fi';

export function SortBy() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('select one');

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Add event listener to detect clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close the dropdown when a new option is selected
    setIsDropdownOpen(false);
  }, [selectedOption]);

 const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div
        className="flex justify-center flex-wrap items-center mr-2.5 cursor-pointer w-fit relative md-max:fixed md-max:bottom-[17rem] md-max:right-[70px] md-max:z-10"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
      <div className="mr-1 md-max:hidden">SORT BY:</div>
        <div className="bg-white flex rounded items-center p-1 font-semibold md-max:fixed md-max:bottom-[11px] md-max:right-[33px]">
          {selectedOption || 'Bestselling'} <FiChevronDown className="ml-1.5" />
        </div>
        {isDropdownOpen && (
          <div className="bg-white p-2 mt-1 rounded shadow-lg min-w-max absolute top-full left-0 z-10">
            <div
              className="px-2 py-1 cursor-pointer hover:bg-gray-200 rounded"
              onClick={() => handleOptionSelect('Bestselling')}
            >
              Bestselling
            </div>
            <div
              className="px-2 py-1 cursor-pointer hover:bg-gray-200 rounded"
              onClick={() => handleOptionSelect('New Arrival')}
            >
              New Arrival
            </div>
            <div
              className="px-2 py-1 cursor-pointer hover:bg-gray-200 rounded"
              onClick={() => handleOptionSelect('Price (low - high)')}
            >
              Price (low - high)
            </div>
            <div
              className="px-2 py-1 cursor-pointer hover:bg-gray-200 rounded"
              onClick={() => handleOptionSelect('Price (high - low)')}
            >
              Price (high - low)
            </div>
          </div>
        )}
      </div>
    </>
  );
}
