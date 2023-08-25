import React, {useState} from 'react';
import {IoMdClose} from 'react-icons/io';
import {FiChevronUp, FiChevronDown, FiSearch} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';

// {
//   id: 1,
//   main_category: 'Categories',
//   sub_category: [
//     {
//       id:1,
//       category:'Prepware',
//     },
//     {
//       id:2,
//       category:'Drinkware',
//     },
//     {
//       id:3,
//       category:'Barware',
//     },
//     {
//       id:4,
//       category:'Storageware',
//     },
//     {
//       id:5,
//       category:'Homeware',
//     },
//     {
//       id:6,
//       category:'Tableware',
//     },
//   ],
// },

// {
//   id: 2,
//   main_category: 'Sub Categories',
//   sub_category: [
//     {
//       id:1,
//       category:'Knives',
//     },
//     {
//       id:2,
//       category:'Cutter',
//     },
//     {
//       id:3,
//       category:'Grater',
//     },
//     {
//       id:4,
//       category:'Utensils',
//     },
//   ],
// },

// {
//   id: 3,
//   main_category: 'Brands',
//   sub_category: [
//     {
//       id:1,
//       category:'Amefa',
//     },
//     {
//       id:2,
//       category:'BarCraft',
//     },
//     {
//       id:3,
//       category:'BergHOFF',
//     },
//     {
//       id:4,
//       category:'Brabantia',
//     },
//   ],
// },
export const filtermanu = [
  {
    id: 1,
    main_category: 'Categories',
    sub_category: [
      'Prepware',
      'Drinkware',
      'Dineware',
      'Barware',
      'Storageware',
      'Homeware',
      'Tableware',
    ],
  },
  {
    id: 2,
    main_category: 'Sub Categories',
    sub_category: ['Knives', 'Cutter', 'Grater', 'Utensils'],
  },
  {
    id: 3,
    main_category: 'Brands',
    sub_category: ['Amefa', 'BarCraft', 'BergHOFF', 'Brabantia'],
  },
  {
    id: 4,
    main_category: 'Just Launch',
    sub_category: [
      'Award Winners',
      'Sets/Bundles',
      ' Ratings, Sale/ Offers',
      'Gifting',
    ],
  },
  {
    id: 5,
    main_category: 'Restricted Price Filter',
    sub_category: [
      'Inspiration',
      ' Home Essentials',
      'Back To School',
      'Healthy Living',
    ],
  },
  {
    id: 6,
    main_category: 'ABCD',
    sub_category: [
      'Jam & Pickle',
      'Making Travel',
      ' wedding Dinner',
      'Parties',
    ],
  },
  {
    id: 7,
    main_category: 'Price',
    sub_category: [],
  },
];
export function PlpFilterUI({mainCategory, subCategory}) {
  const [selectedSubItems, setSelectedSubItems] = useState({});
  const [visibleDropdowns, setVisibleDropdowns] = useState(
    filtermanu.reduce((acc, item) => {
      acc[item.id] = true; // Set all dropdowns to be visible by default
      return acc;
    }, {}),
  );
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleSubItemSelect = (mainCategoryId, subItem) => {
    console.log("🚀 ~ file: PlpFilterUI.jsx:154 ~ handleSubItemSelect ~ subItem:", subItem)
    console.log("🚀 ~ file: PlpFilterUI.jsx:154 ~ handleSubItemSelect ~ mainCategoryId:", mainCategoryId)
    setSelectedSubItems((prevSelectedSubItems) => ({
      ...prevSelectedSubItems,
      [mainCategoryId]: prevSelectedSubItems[mainCategoryId]
        ? prevSelectedSubItems[mainCategoryId].includes(subItem)? prevSelectedSubItems[mainCategoryId].filter(
              (item) => item !== subItem,
            )
          : [...prevSelectedSubItems[mainCategoryId], subItem]
        : [subItem],
    }));
  };

  const handleOptionClose = (mainCategoryId, subItem) => {
    // close checked view option
    setSelectedSubItems((prevSelectedSubItems) => ({
      ...prevSelectedSubItems,
      [mainCategoryId]: prevSelectedSubItems[mainCategoryId].filter(
        (item) => item !== subItem,
      ),
    }));
  };

  const toggleDropdown = (mainCategoryId) => {
    setVisibleDropdowns((prev) => ({
      // dropdown in filter
      ...prev,
      [mainCategoryId]: !prev[mainCategoryId],
    }));
  };

  const handleFilterClose = () => {
    setIsFilterVisible(false); // filter UI will close
  };

  const handleClearAll = () => {
    setSelectedSubItems({}); // Clear all the selected items
  };

  return (
    <>
      {isFilterVisible && (
        <div className="w-full plp_filter_main z-10 md-max:z-[1] max-h-[125%]">
          <div className="filter_main_section max-h-max w-[25%] md-max:w-[85%] bg-white px-8 md-max:pl-4 md-max:pr-8 py-3 absolute top-0 right-0 md-max:left-0 z-[100] border-b ">
            <div className="flex justify-between items-center filter_heading my-2">
              <div className="font-semibold text-lg">FILTER BY:</div>
              <div onClick={handleFilterClose} className="cursor-pointer">
                <IoMdClose />
              </div>
            </div>
          </div>
          <div className="filter_main_section max-h-max w-[25%] md-max:w-[85%] md-max:left-0 bg-white px-8 md-max:pl-4 md-max:pr-8 py-3 absolute top-12 right-0 z-[100] ">
            {/* --------------------------Mobile view search------------------------- */}

            <div className=" lg:hidden bg-[#F6F6F6] relative w-full">
              <input
                className="bg-[#F6F6F6] text-sm border w-full"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products"
              />
              <FiSearch className="absolute right-2.5 top-[0.7rem]" />
            </div>

            {/* --------------------------Mobile view search end------------------------- */}

            <div className="flex justify-between text-sm my-2">
              <div className="">Refine By</div>
              <div onClick={handleClearAll} className="text-red-700">
                Clear All
              </div>
            </div>
            <div className="flex text-sm font-medium mb-2.5 flex-wrap">
              {filtermanu.map((category) =>
                category.sub_category.map((subItem) =>
                  selectedSubItems[category.id] &&
                  selectedSubItems[category.id].includes(subItem) ? (
                    <div
                      className="flex items-center text-[#818181] border-[#111111] bg-[#FAFAFA] p-[0.2rem] mr-1.5 mb-1.5 w-max "
                      key={subItem}
                    >
                      {subItem}
                      <GrClose
                        className="ml-1.5 mr-1.5"
                        onClick={() => handleOptionClose(category.id, subItem)}
                      />
                    </div>
                  ) : null,
                ),
              )}
            </div>

            {/* ---------------------------------Mobile view end----------------------------------- */}

            {filtermanu.map((item) => (
              <div
                key={item.id}
                className="category_main border-t border-gray-500 py-1 px-1"
              >
                <div
                  className="flex items-center justify-between font-semibold text-sm my-1 cursor-pointer"
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.main_category}
                  {visibleDropdowns[item.id] ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
                {visibleDropdowns[item.id] && (
                  <div>
                    {item.sub_category.map((subItem, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-500"
                      >
                        <input
                          className="text-gray h-3 w-3 checked:bg-black cursor-pointer outline-0"
                          type="checkbox"
                          checked={
                            selectedSubItems[item.id] &&
                            selectedSubItems[item.id].includes(subItem)
                          }
                          onChange={() => handleSubItemSelect(item.id, subItem)}
                        />
                        <label
                          className={`ml-2 text-xs font-normal my-1 ${
                            selectedSubItems[item.id] &&
                            selectedSubItems[item.id].includes(subItem)
                              ? 'font-semibold text-black' // Add the font-semibold class when checkbox is checked
                              : ''
                          }`}
                        >
                          {subItem}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex w-full justify-between items-center text-sm font-medium py-10">
              <div
                onClick={handleClearAll}
                className="border border-black py-1.5 px-3.5 cursor-pointer"
              >
                <button>Clear All</button>
              </div>
              <div className="flex justify-end border py-[0.4rem] px-[1.15rem] bg-black text-white cursor-pointer">
                <button>APPLY</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
