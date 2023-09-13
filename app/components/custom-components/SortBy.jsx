import React, {useState, useEffect, useRef} from 'react';
import {FiChevronDown} from 'react-icons/fi';
import {useLocation, useSearchParams, Link} from '@remix-run/react';

export function SortBy({
  filters,
  appliedFilters = [],
  children,
  collections = [],
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('select one');
  const [params] = useSearchParams();
  const location = useLocation();

  const dropdownRef = useRef(null);
  const items = [
    {label: 'Featured', key: 'featured'},
    {
      label: 'Price: Low - High',
      key: 'price-low-high',
    },
    {
      label: 'Price: High - Low',
      key: 'price-high-low',
    },
    {
      label: 'Best Selling',
      key: 'best-selling',
    },
    {
      label: 'Newest',
      key: 'newest',
    },
  ];
  const activeItem = items.find((item) => item.key === params.get('sort'));
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
  function getSortLink(sort, params, location) {
    // debugger;
    params.set('sort', sort);
    return `${location.pathname}?${params.toString()}`;
  }
  return (
    <>
      <div
        className="flex justify-center flex-wrap items-center mr-2.5 cursor-pointer w-fit relative md-max:fixed md-max:bottom-[17rem] md-max:right-[70px] md-max:z-10"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <div className="mr-1 md-max:hidden">SORT BY:</div>
        <div className="bg-white flex rounded items-center p-1 font-semibold md-max:fixed md-max:bottom-[11px] md-max:right-[33px]">
          {(activeItem || items[0]).label} <FiChevronDown className="ml-1.5" />
        </div>
        {isDropdownOpen && (
          <>
            <div
              className="bg-white p-2 mt-1 rounded shadow-lg min-w-max absolute top-full left-0 z-10"
            >
              {items.map((item) => {
                return (
                  <div key={item.label}>
                  <Link
                    className={`px-2 py-1 cursor-pointer hover:bg-gray-200 rounded ${
                      activeItem?.key === item.key ? 'font-bold' : 'font-normal'
                    }`}
                    to={getSortLink(item.key, params, location)}
                  >
                    {item.label}
                  </Link>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
