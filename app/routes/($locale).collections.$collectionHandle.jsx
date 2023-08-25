import React, {useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {Link, useLoaderData, useLocation, useSearchParams} from '@remix-run/react';
import {
  flattenConnection,
  AnalyticsPageType,
  Pagination__unstable as Pagination,
  getPaginationVariables__unstable as getPaginationVariables,
} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

import {
  PageHeader,
  Section,
  Text,
  SortFilter,
  Grid,
  ProductCard,
  Button,
} from '~/components';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {routeHeaders} from '~/data/cache';
import {seoPayload} from '~/lib/seo.server';
import {getImageLoadingPriority} from '~/lib/const';
import Plp from '../components/custom-components/Plp';
import {SortBy} from '~/components/custom-components/SortBy';
import {FilterC, PlpFilterUI} from '~/components/custom-components/FilterC';
import {GrClose} from 'react-icons/gr';
import {FiSearch} from 'react-icons/fi';
import '../styles/app.css';
export const headers = routeHeaders;

export async function loader({params, request, context}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });
  const {collectionHandle} = params;

  invariant(collectionHandle, 'Missing collectionHandle param');

  const searchParams = new URL(request.url).searchParams;
  const knownFilters = ['productVendor', 'productType'];
  const available = 'available';
  const variantOption = 'variantOption';
  const {sortKey, reverse} = getSortValuesFromParam(searchParams.get('sort'));
  const filters = [];
  const appliedFilters = [];

  for (const [key, value] of searchParams.entries()) {
    if (available === key) {
      filters.push({available: value === 'true'});
      appliedFilters.push({
        label: value === 'true' ? 'In stock' : 'Out of stock',
        urlParam: {
          key: available,
          value,
        },
      });
    } else if (knownFilters.includes(key)) {
      filters.push({[key]: value});
      appliedFilters.push({label: value, urlParam: {key, value}});
    } else if (key.includes(variantOption)) {
      const [name, val] = value.split(':');
      filters.push({variantOption: {name, value: val}});
      appliedFilters.push({label: val, urlParam: {key, value}});
    }
  }

  // Builds min and max price filter since we can't stack them separately into
  // the filters array. See price filters limitations:
  // https://shopify.dev/custom-storefronts/products-collections/filter-products#limitations
  if (searchParams.has('minPrice') || searchParams.has('maxPrice')) {
    const price = {};
    if (searchParams.has('minPrice')) {
      price.min = Number(searchParams.get('minPrice')) || 0;
      appliedFilters.push({
        label: `Min: $${price.min}`,
        urlParam: {key: 'minPrice', value: searchParams.get('minPrice')},
      });
    }
    if (searchParams.has('maxPrice')) {
      price.max = Number(searchParams.get('maxPrice')) || 0;
      appliedFilters.push({
        label: `Max: $${price.max}`,
        urlParam: {key: 'maxPrice', value: searchParams.get('maxPrice')},
      });
    }
    filters.push({
      price,
    });
  }

  const {collection, collections} = await context.storefront.query(
    COLLECTION_QUERY,
    {
      variables: {
        ...paginationVariables,
        handle: collectionHandle,
        filters,
        sortKey,
        reverse,
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    },
  );

  if (!collection) {
    throw new Response('collection', {status: 404});
  }

  const seo = seoPayload.collection({collection, url: request.url});

  return json({
    collection,
    appliedFilters,
    collections: flattenConnection(collections),
    analytics: {
      pageType: AnalyticsPageType.collection,
      collectionHandle,
      resourceId: collection.id,
    },
    seo,
  });
}

export default function Collection() {
  const {collection, collections, appliedFilters} = useLoaderData();
  const [params] = useSearchParams();
  const location = useLocation();
  const [isFilterUIVisible, setIsFilterUIVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handleFilterIconClick = () => {
    setIsFilterUIVisible(!isFilterUIVisible); // Toggle the visibility of PlpFilterUI on icon click
  };
  const handleDropDownIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the visibility of PlpFilterUI on icon click
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

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

  function getSortLink(sort, params, location) {
    params.set('sort', sort);
    return `${location.pathname}?${params.toString()}`;
  }
  return (
    <>
      {/* <PageHeader heading={collection.title}>
        {collection?.description && (
          <div className="flex items-baseline justify-between w-full">
            <div>
              <Text format width="narrow" as="p" className="inline-block">
                {collection.description}
              </Text>
            </div>
          </div>
        )}
      </PageHeader> */}
      {/* <Plp /> */}

      {/* --------------------------Mobile view search------------------------- */}
      <div className=" lg:hidden bg-[#F6F6F6] relative w-full">
        <input
          className="bg-[#F6F6F6] text-sm border-0 w-full"
          type="text"
          placeholder="Search products"
        />
        <FiSearch className="absolute right-2.5 top-[0.7rem]" />
      </div>
      {/* --------------------------Mobile view search end------------------------- */}
      {/* ------------------------Mobile view sort and filter----------------------- */}
      {isFilterUIVisible && (
        <PlpFilterUI
          filters={collection.products.filters}
          appliedFilters={appliedFilters}
          collections={collections}
        />
      )}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black text-white z-[100]">
        <div className="flex justify-between py-4">
          <div
            onClick={handleFilterIconClick}
            className="flex justify-center items-center w-1/2"
          >
            FILTER BY
          </div>
          <div
            onClick={() => {
              handleDropDownIconClick();
            }}
            className="flex justify-center items-center w-1/2"
          >
            SORT BY
          </div>
        </div>
      </div>
      {/* {isDropdownOpen && <SortBy/>} */}
      {isDropdownOpen && (
        <div className="plp_filter_main">
          <div className="lg:hidden bg-white p-2 mt-1 rounded shadow-lg w-[75%] min-w-max fixed bottom-12 right-0 z-10">
            <div className="flex justify-between items-center text-black font-semibold py-5 px-1.5 border-b">
              <div>SORT BY</div>
              <div onClick={handleDropDownIconClick} className="">
                <GrClose />
              </div>
            </div>
            {items.map((item) => {
              return (
                <>
                  <div className="pt-4 pb-6 px-6" key={item.label}>
                    <label className="mb-[2px] hover:bg-gray-200 py-1.5 rounded cursor-pointer flex items-center">
                      <input
                        type="radio"
                        name="sortingOption"
                        value="Bestselling"
                        checked={selectedOption === item.label}
                        onChange={() => handleOptionSelect(item.label)}
                        className="hidden"
                      />
                      <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            selectedOption === item.label
                              ? 'bg-blue-500'
                              : 'bg-white'
                          }`}
                        ></span>
                      </span>
                      <span className="text-sm">
                        <Link
                          className={`px-2 py-1 cursor-pointer hover:bg-gray-200 rounded ${
                            activeItem?.key === item.key
                              ? 'font-bold'
                              : 'font-normal'
                          }`}
                          to={getSortLink(item.key, params, location)}
                        >
                          {item.label}
                        </Link>
                      </span>
                    </label>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
      {/* ----------------------Mobile view sort and filter end--------------------- */}

      <div className="bg-[#FBFBFB] plp_main_section sm-only:px-3 px-10 relative">
        <div className="flex md-max:justify-center text-xs py-2 ">
          <div className="text-gray-400 mr-1">Home |</div>
          <div className="text-black">{collection.title}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1 mr-5 font-notmal text-sm md-max:hidden ">
            <div>{collection.products.nodes.length} Items</div>
          </div>

          <div className="flex-1 text-center">
            <div className="plp-section-heading">
              <h1 className="text-3xl md-max:text-2xl text-[2rem] font-medium pb-1.5">
                {collection.title}
              </h1>
            </div>
          </div>

          <div className="flex-1 flex justify-end items-center text-sm font-normal md-max:hidden">
            {/* <SortFilter /> */}
            {/* <SortFilter
              filters={collection.products.filters}
              appliedFilters={appliedFilters}
              collections={collections}
            ></SortFilter> */}
            <SortBy
              filters={collection.products.filters}
              appliedFilters={appliedFilters}
              collections={collections}
            />
            <FilterC
              filters={collection.products.filters}
              appliedFilters={appliedFilters}
              collections={collections}
            />
          </div>
        </div>
        {collection?.description && (
          <div className="text-center break-all text-sm md-max:text-[0.7rem] mb-5 leading-5 font-normal">
            {collection.description}
          </div>
        )}
        {/* <SortFilter
          filters={collection.products.filters}
          appliedFilters={appliedFilters}
          collections={collections}
        > */}
        <Pagination connection={collection.products}>
          {({nodes, isLoading, PreviousLink, NextLink}) => (
            <>
              <div className="flex items-center justify-center mb-6">
                <Button as={PreviousLink} variant="secondary" width="full">
                  {isLoading ? 'Loading...' : 'Load previous'}
                </Button>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2.5"
                layout="products"
              >
                {nodes.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    loading={getImageLoadingPriority(i)}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center mt-6">
                <Button as={NextLink} variant="secondary" width="full">
                  {isLoading ? 'Loading...' : 'Load more products'}
                </Button>
              </div>
            </>
          )}
        </Pagination>
        {/* </SortFilter> */}
      </div>
    </>
  );
}

const COLLECTION_QUERY = `#graphql
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $filters: [ProductFilter!]
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor,
        filters: $filters,
        sortKey: $sortKey,
        reverse: $reverse
      ) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

function getSortValuesFromParam(sortParam) {
  switch (sortParam) {
    case 'price-high-low':
      return {
        sortKey: 'PRICE',
        reverse: true,
      };
    case 'price-low-high':
      return {
        sortKey: 'PRICE',
        reverse: false,
      };
    case 'best-selling':
      return {
        sortKey: 'BEST_SELLING',
        reverse: false,
      };
    case 'newest':
      return {
        sortKey: 'CREATED',
        reverse: true,
      };
    case 'featured':
      return {
        sortKey: 'MANUAL',
        reverse: false,
      };
    default:
      return {
        sortKey: 'RELEVANCE',
        reverse: false,
      };
  }
}
