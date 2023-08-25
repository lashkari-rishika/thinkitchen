import React, {useState, useMemo} from 'react';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import {
  useLocation,
  useSearchParams,
  Link,
  useNavigate,
} from '@remix-run/react';
import {IoMdClose} from 'react-icons/io';
import {FiChevronUp, FiChevronDown, FiSearch} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';
import {useDebounce} from 'react-use';
import {Heading, IconFilters, IconCaret, IconXMark, Text} from '~/components';

export function FilterC({filters = [], appliedFilters = [], collections = []}) {
  // State to manage the visibility of the PlpFilterUI component
  const [isFilterUIVisible, setIsFilterUIVisible] = useState(false);
  const [params] = useSearchParams();
  const location = useLocation();
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
        <HiOutlineMenuAlt3 className="mr-1" /> FILTER BY{' '}
      </div>
      {isFilterUIVisible && (
        <PlpFilterUI
          collections={collections}
          filters={filters}
          appliedFilters={appliedFilters}
        />
      )}
    </>
  );
}
function AppliedFilters({filters = []}) {
  const [params] = useSearchParams();
  const location = useLocation();
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          return (
            <Link
              to={getAppliedFilterLink(filter, params, location)}
              className="flex items-center text-[#818181] border-[#111111] bg-[#FAFAFA] p-[0.2rem] mr-1.5 mb-1.5 w-max "
              key={`${filter.label}-${filter.urlParam}`}
            >
              <span className="flex-grow">{filter.label}</span>
              <span>
                <IconXMark />
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

function getAppliedFilterLink(filter, params, location) {
  const paramsClone = new URLSearchParams(params);
  if (filter.urlParam.key === 'variantOption') {
    const variantOptions = paramsClone.getAll('variantOption');
    const filteredVariantOptions = variantOptions.filter(
      (options) => !options.includes(filter.urlParam.value),
    );
    paramsClone.delete(filter.urlParam.key);
    for (const filteredVariantOption of filteredVariantOptions) {
      paramsClone.append(filter.urlParam.key, filteredVariantOption);
    }
  } else {
    paramsClone.delete(filter.urlParam.key);
  }
  return `${location.pathname}?${paramsClone.toString()}`;
}

function getFilterLink(item, rawInput, params, location) {
  const paramsClone = new URLSearchParams(params);
  const newParams = filterInputToParams(item.type, rawInput, paramsClone);
  return `${location.pathname}?${newParams.toString()}`;
}

const PRICE_RANGE_FILTER_DEBOUNCE = 500;

function PriceRangeFilter({max, min}) {
  const location = useLocation();
  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState(min ? String(min) : '');
  const [maxPrice, setMaxPrice] = useState(max ? String(max) : '');

  useDebounce(
    () => {
      if (
        (minPrice === '' || minPrice === String(min)) &&
        (maxPrice === '' || maxPrice === String(max))
      )
        return;

      const price = {};
      if (minPrice !== '') price.min = minPrice;
      if (maxPrice !== '') price.max = maxPrice;

      const newParams = filterInputToParams('PRICE_RANGE', {price}, params);
      navigate(`${location.pathname}?${newParams.toString()}`);
    },
    PRICE_RANGE_FILTER_DEBOUNCE,
    [minPrice, maxPrice],
  );

  const onChangeMax = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice);
  };

  const onChangeMin = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-4">
        <input
          name="maxPrice"
          className="mb-1 appearance-none rounded dark:bg-transparent border focus:border-primary/50 focus:ring-0 w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-primary/20 py-3"
          type="number"
          defaultValue={min}
          placeholder={'Min Price'}
          onChange={onChangeMin}
        />
      </label>
      <label>
        <input
          name="minPrice"
          className="mb-1 appearance-none rounded dark:bg-transparent border focus:border-primary/50 focus:ring-0 w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-primary/20 py-3"
          type="number"
          defaultValue={max}
          placeholder={'Max Price'}
          onChange={onChangeMax}
        />
      </label>
    </div>
  );
}

function filterInputToParams(type, rawInput, params) {
  const input = typeof rawInput === 'string' ? JSON.parse(rawInput) : rawInput;
  switch (type) {
    case 'PRICE_RANGE':
      if (input.price.min) params.set('minPrice', input.price.min);
      if (input.price.max) params.set('maxPrice', input.price.max);
      break;
    case 'LIST':
      Object.entries(input).forEach(([key, value]) => {
        if (typeof value === 'string') {
          params.set(key, value);
        } else if (typeof value === 'boolean') {
          params.set(key, value.toString());
        } else {
          const {name, value: val} = value;
          const allVariants = params.getAll(`variantOption`);
          const newVariant = `${name}:${val}`;
          if (!allVariants.includes(newVariant)) {
            params.append('variantOption', newVariant);
          }
        }
      });
      break;
  }

  return params;
}

export function PlpFilterUI({
  filters = [],
  appliedFilters = [],
  collections = [],
}) {
  const [params] = useSearchParams();
  const location = useLocation();
  const [selectedSubItems, setSelectedSubItems] = useState({});
  const [visibleDropdowns, setVisibleDropdowns] = useState(
    filters.reduce((acc, item) => {
      acc[item.id] = true; // Set all dropdowns to be visible by default
      return acc;
    }, {}),
  );
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleSubItemSelect = (id, option) => {
    setSelectedSubItems((prevSelectedSubItems) => ({
      ...prevSelectedSubItems,
      [id]: prevSelectedSubItems[id]
        ? prevSelectedSubItems[id].includes(option)
          ? prevSelectedSubItems[id].filter((item) => item !== option)
          : [...prevSelectedSubItems[id], option]
        : [option],
    }));
  };

  const handleOptionClose = (id, option) => {
    // close checked view option
    setSelectedSubItems((prevSelectedSubItems) => ({
      ...prevSelectedSubItems,
      [id]: prevSelectedSubItems[id].filter((item) => item !== option),
    }));
  };

  const toggleDropdown = (id) => {
    setVisibleDropdowns((prevVisibleDropdowns) => ({
      // dropdown in filter
      ...prevVisibleDropdowns,
      [id]: !prevVisibleDropdowns[id],
    }));
  };

  const handleFilterClose = () => {
    setIsFilterVisible(false); // filter UI will close
  };

  const handleClearAll = () => {
    setSelectedSubItems({}); // Clear all the selected items
  };
  const filterMarkup = (item, option) => {
    switch (item.type) {
      case 'PRICE_RANGE':
        const min =
          params.has('minPrice') && !isNaN(Number(params.get('minPrice')))
            ? Number(params.get('minPrice'))
            : undefined;

        const max =
          params.has('maxPrice') && !isNaN(Number(params.get('maxPrice')))
            ? Number(params.get('maxPrice'))
            : undefined;

        return <PriceRangeFilter min={min} max={max} />;

      default:
        const to = getFilterLink(item, option.input, params, location);
        return (
          <>
            <div
              key={`${item.id}-${option.id}`}
              className="flex items-center text-gray-500"
            >
              <Link
                to={to}
                key={option.id}
                className={`ml-2 text-xs font-normal my-1 ${
                  selectedSubItems[item.id] &&
                  selectedSubItems[item.id].includes(option)
                    ? 'font-semibold text-black' // Add the font-semibold class when checkbox is checked
                    : ''
                }`}
              >
                <input
                  className="text-gray h-3 w-3 checked:bg-black cursor-pointer outline-0"
                  type="checkbox"
                  checked={
                    selectedSubItems[item.id] &&
                    selectedSubItems[item.id].includes(option)
                  }
                  onChange={() => handleSubItemSelect(item.id, option)}
                />

                {option?.label}
              </Link>

              {/* </span> */}
            </div>
          </>
          // <Link
          //   className="focus:underline hover:underline"
          //   prefetch="intent"
          //   to={to}
          // >
          //   {option.label}
          // </Link>
        );
    }
  };
  return (
    <>
      {/* {appliedFilters.length > 0 ? (
        <div className="pb-8">
          <AppliedFilters filters={appliedFilters} />
        </div>
      ) : null} */}
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
              {appliedFilters.length > 0 ? (
                        <div className="pb-8">
                          <AppliedFilters filters={appliedFilters} />
                        </div>
                      ) : null}
            </div>

            {/* ---------------------------------Mobile view end----------------------------------- */}

            {filters.map((item) => (
              <div
                key={item.id}
                className="category_main border-t border-gray-500 py-1 px-1"
              >
                <div
                  className="flex items-center justify-between font-semibold text-sm my-1 cursor-pointer"
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.label}
                  {visibleDropdowns[item.id] ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
                {visibleDropdowns[item.id] && (
                  <div>
                    {item.values?.map((option) => (
                      <>{filterMarkup(item, option)}</>
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
