import {useRef, Suspense, useMemo, useState, useEffect} from 'react';
import {Disclosure, Listbox} from '@headlessui/react';
import {defer} from '@shopify/remix-oxygen';
import {
  useLoaderData,
  Await,
  useSearchParams,
  useLocation,
  useNavigation,
} from '@remix-run/react';
import {AnalyticsPageType, Money, ShopPayButton} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import clsx from 'clsx';

import {
  Heading,
  IconCaret,
  IconCheck,
  IconClose,
  ProductGallery,
  ProductSwimlane,
  Section,
  Skeleton,
  Text,
  Link,
  AddToCartButton,
  Button,
} from '~/components';
import {getExcerpt} from '~/lib/utils';
import {seoPayload} from '~/lib/seo.server';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {routeHeaders} from '~/data/cache';
import {BsHeart} from 'react-icons/bs';
import {GrShare} from 'react-icons/gr';
import {FiChevronDown} from 'react-icons/fi';
import {MdDone, MdVerified} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import {BiStar} from 'react-icons/bi';
import PdpYouLike from '~/components/pdpYouLike';
import pdp_star_image from '../asset/pdp-star-img.svg';
import pdp_offer_img from '../asset/pdp-page-offer-img.png';
import pdp_shopping_img from '../asset/pdp-shoping-img.png';
import pdp_qulity_img from '../asset/pdp-qulity-img.png';
import pdp_payment_img from '../asset/pdp-payment-img.png';
import pdp_cup_img from '../asset/pdp-cup-img.png';
import pdp_whatsapp_img from '../asset/pdp-whatsapp-img.png';
import pdp_email_img from '../asset/pdp-email-img.png';
import pdp_benner_img from '../asset/pdp-benner-img.png';
// import first_customer from '../asset/first-customer.png';
// import second_customer from '../asset/second-customer.png';
// import third_customer from '../asset/third-customer.png';
import product_image from '../asset/product-detail-page-image.png';
import CustomerReview from '~/components/CustomerReview';
import pdp_share_facebook from '../asset/pdp_share_facebook.png';
import pdp_share_whatsapp from '../asset/pdp_share_whatsapp.png';
import pdp_share_link from '../asset/pdp_share_link.png';

export const headers = routeHeaders;

export async function loader({params, request, context}) {
  const {productHandle} = params;
  invariant(productHandle, 'Missing productHandle param, check route filename');

  const searchParams = new URL(request.url).searchParams;

  const selectedOptions = [];
  searchParams.forEach((value, name) => {
    selectedOptions.push({name, value});
  });

  const {shop, product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle: productHandle,
      selectedOptions,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!product?.id) {
    throw new Response('product', {status: 404});
  }

  const recommended = getRecommendedProducts(context.storefront, product.id);
  const firstVariant = product.variants.nodes[0];
  const selectedVariant = product.selectedVariant ?? firstVariant;

  const productAnalytics = {
    productGid: product.id,
    variantGid: selectedVariant.id,
    name: product.title,
    variantName: selectedVariant.title,
    brand: product.vendor,
    price: selectedVariant.price.amount,
  };

  const seo = seoPayload.product({
    product,
    selectedVariant,
    url: request.url,
  });

  return defer({
    product,
    shop,
    storeDomain: shop.primaryDomain.url,
    recommended,
    analytics: {
      pageType: AnalyticsPageType.product,
      resourceId: product.id,
      products: [productAnalytics],
      totalValue: parseFloat(selectedVariant.price.amount),
    },
    seo,
  });
}

export default function Product() {
  const [count, setCount] = useState(1); // Initialize the count to 1
  const [isDiscriptionOpen, setIsDiscriptionOpen] = useState(false);
  const [isDimensionOpen, setIsDimensionOpen] = useState(false);
  const [isUseAndCareOpen, setIsUseAndCareOpen] = useState(false);
  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);
  const [shareIconVisible, setShareIconVisible] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const {product, shop, recommended} = useLoaderData();
  const [currentSearchParams] = useSearchParams();
  const {location} = useNavigation();
  const {media, title, vendor, descriptionHtml} = product;
  const {shippingPolicy, refundPolicy} = shop;
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const toggleDiscription = () => {
    setIsDiscriptionOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleDimension = () => {
    setIsDimensionOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleUseAndCare = () => {
    setIsUseAndCareOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleAdditionalInfo = () => {
    setIsAdditionalInfoOpen((prevIsOpen) => !prevIsOpen);
  };
  const handleFirstCheckBoxClick = () => {
    setIsFirstChecked(!isFirstChecked);
  };
  const handleSecondCheckBoxClick = () => {
    setIsSecondChecked(!isSecondChecked);
  };
  /**
   * We update `searchParams` with in-flight request data from `location` (if available)
   * to create an optimistic UI, e.g. check the product option before the
   * request has completed.
   */
  const searchParams = useMemo(() => {
    return location
      ? new URLSearchParams(location.search)
      : currentSearchParams;
  }, [currentSearchParams, location]);

  const firstVariant = product.variants.nodes[0];
  /**
   * We're making an explicit choice here to display the product options
   * UI with a default variant, rather than wait for the user to select
   * options first. Developers are welcome to opt-out of this behavior.
   * By default, the first variant's options are used.
   */
  const searchParamsWithDefaults = useMemo(() => {
    const clonedParams = new URLSearchParams(searchParams);

    for (const {name, value} of firstVariant.selectedOptions) {
      if (!searchParams.has(name)) {
        clonedParams.set(name, value);
      }
    }

    return clonedParams;
  }, [searchParams, firstVariant.selectedOptions]);
  /**
   * Likewise, we're defaulting to the first variant for purposes
   * of add to cart if there is none returned from the loader.
   * A developer can opt out of this, too.
   */
  const selectedVariant = product.selectedVariant ?? firstVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;
  const isOnSale =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;

  const calculateDiscountPercentage = () => {
    const discount =
      selectedVariant?.price?.amount - selectedVariant?.compareAtPrice?.amount;
    const discountPercentageValue = parseInt(
      (discount / selectedVariant?.price?.amount) * 100,
    );
    setDiscountPercentage(Math.floor(discountPercentageValue.toFixed(2)));
  };
  useEffect(() => {
    calculateDiscountPercentage();
  }, []);
  return (
    <>
      <div className="pdp-section sm-only:mt-10 md-only:mt-10 bg-white sm-only:bg-[#FBFBFB]">
        <div className="py-8 px-11 sm-only:px-2">
          <div>
            <p className="text-xs font-semibold">
              <span className="text-slate-300	">Home | Knives |</span>Amefa
              Austin Cutlery, Set of 24
            </p>
          </div>
        </div>
        <div className="product-deatil-section grid grid-cols-2 sm-only:px-3  sm-only:grid-cols-1 gap-1 px-11 pt-3 sm-only:columns-1  columns-3">
          <div className="product-image-1">
            <ProductGallery
              media={media.nodes}
              className="w-full lg:col-span-2"
            />
          </div>

          <div className="sticky product-contant pl-3 md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll">
            {/* <section className="flex flex-col w-full max-w-xl gap-8 p-6 md:mx-auto md:max-w-sm md:px-0"> */}
            <div>
              {vendor && (
                <Text className="underline  font-semibold text-sm">
                  {vendor}
                </Text>
              )}
              <button className="text-xs absolute right-11 pl-2 pr-2 rounded-none bg-indigo-800 text-white ">
                Bestseller
              </button>
            </div>

            <div className="flex pt-3">
              <h2 className="text-2xl sm-only:text-[15px] text-black font-medium">
                {title}
              </h2>
              <div className="heart-icon flex justify-end pl-24">
                <a href="">
                  <BsHeart />
                </a>
              </div>
            </div>
            {/* REVIEW SECTION */}
            <div className="review-section">
              <p className="flex text-xs pt-3 pb-5">
                <span className="text-slate-300">SKU:</span>TK123456789
                <span className="star-image pl-2 pr-2 flex">
                  <img
                    className="hover:bg-[#fa55d6]"
                    src={pdp_star_image}
                    alt=""
                  />
                </span>
                <span className="underline">400 review</span>
              </p>
            </div>

            <div className="pt-4 mb-4  border-t border-gray-300">
              {descriptionHtml && (
                <p className="text-sm">{descriptionHtml}...Read More</p>
              )}
              {/* <p className="text-xs">
                Refined and elegant design with a contemporary feel, the Austin
                pattern has perfect lines and elegant shapes. Made of
                high-quality stainless steel this cutlery set is designed for
                superior durability{' '}
                <span className="text-slate-300">...Read More</span>
              </p> */}
            </div>
            <div className="pt-4 border-t border-gray-300">
              <p className="flex items-center">
                <Money
                  withoutTrailingZeros
                  data={selectedVariant?.price}
                  as="span"
                  className="text-[#969696] text-xs line-through"
                />
                {isOnSale && (
                  <Money
                    withoutTrailingZeros
                    data={selectedVariant?.compareAtPrice}
                    as="span"
                    className="pl-2 pr-2 text-xl text-[#E91111] font-semibold"
                  />
                )}
                <span className="text-xs bg-[#E91111] text-white p-2 rounded-2xl">
                  {discountPercentage} % OFF
                </span>
              </p>
              <p className="text-[#969696] text-xs">(inclusive of all taxes)</p>
            </div>
            <div className="sm-only:hidden color-section pt-4 border-t border-gray-300">
              <p className="text-sm	font-semibold">
                Select Colour:{' '}
                {product.selectedVariant && product.selectedVariant.selectedOptions[0].value}
              </p>
              <div className="mr-3 py-3">
                <ProductOptions
                  options={product.options}
                  searchParamsWithDefaults={searchParamsWithDefaults}
                />
              </div>
            </div>
            <div className="product-counter-section relative flex pt-4 border-t border-gray-300">
              <div
                className={`share-icon ${
                  shareIconVisible ? 'block' : 'hidden'
                } flex absolute right-[4%] bottom-[45px] bg-white shadow-md`}
              >
                <img className="p-[5px] w-10" src={pdp_share_facebook} alt="" />
                <img className="p-[5px] w-10" src={pdp_share_whatsapp} alt="" />
                <img className="p-[5px] w-10" src={pdp_share_link} alt="" />
              </div>
              <p className="2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden sm-only:mt-[5px] ">
                Qty:
              </p>
              <div className="product-counter flex w-36 sm-only:w-[105px] border border-[#E6E6E6] ">
                <button
                  className="text-lg  px-7 sm-only:px-[15px] py-1"
                  onClick={decrement}
                >
                  -
                </button>
                <p className="flex text-lg font-semibold items-center">
                  {count}
                </p>
                <button
                  className="text-lg px-7 sm-only:px[15px] py-1"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <div className="flex absolute right-[5px] mt-3 sm-only:right-[25px] sm-only:mt-0 sm-only:items-center">
                <p className="text-xs">SHARE IT :</p>
                <a
                  className="pl-1 sm-only:hidden sm-only-hidden cursor-pointer"
                  onClick={() => setShareIconVisible(!shareIconVisible)}
                >
                  <GrShare className="text-gray-400" />
                </a>
                <div
                  className={`share-icon flex  shadow-md sm-only:shadow-none 2xl-only:hidden xl-only:hidden lg-only:hidden md-only:hidden `}
                >
                  <img
                    className="p-[5px] w-10"
                    src={pdp_share_facebook}
                    alt=""
                  />
                  <img
                    className="p-[5px] w-10"
                    src={pdp_share_whatsapp}
                    alt=""
                  />
                  <img className="p-[5px] w-10" src={pdp_share_link} alt="" />
                </div>
              </div>
            </div>

            <ProductForm />

            <div
              className="color-section pt-2  flex items-center justify-between cursor-pointer"
              onClick={toggleDiscription}
            >
              <h3 className="text-sm font-semibold">Description</h3>
              <FiChevronDown
                size={24}
                className={`transition-transform ${
                  isDiscriptionOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isDiscriptionOpen && (
              <div>
                <p className="text-sm">
                  Refined and elegant design with a contemporary feel, the
                  Austin pattern has perfect lines and elegant shapes. Made of
                  high-quality stainless steel this cutlery set is designed for
                  superior durability. Each piece in Amefa's flatware set has
                  delicate and simple design elements on them that will never go
                  out of style no matter how often you use them. Set Includes:
                  6x Dinner Forks, 6x Dinner Spoons, 6x Dinner Knives, 6x
                  Dessert Spoons
                </p>
              </div>
            )}
            <div className=" pb-2 border-b border-gray-300"></div>
            <div
              className="color-section pt-2  flex items-center justify-between cursor-pointer"
              onClick={toggleDimension}
            >
              <h3 className="text-sm font-semibold">Size & Dimension</h3>
              <FiChevronDown
                size={24}
                className={`transition-transform ${
                  isDimensionOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isDimensionOpen && (
              <div>
                <p className="text-sm">
                  Refined and elegant design with a contemporary feel, the
                  Austin pattern has perfect lines and elegant shapes. Made of
                  high-quality stainless steel this cutlery set is designed for
                  superior durability. Each piece in Amefa's flatware set has
                  delicate and simple design elements on them that will never go
                  out of style no matter how often you use them. Set Includes:
                  6x Dinner Forks, 6x Dinner Spoons, 6x Dinner Knives, 6x
                  Dessert Spoons
                </p>
              </div>
            )}
            <div className=" pb-2 border-b border-gray-300"></div>
            <div
              className="color-section pt-2  flex items-center justify-between cursor-pointer"
              onClick={toggleUseAndCare}
            >
              <h3 className="text-sm font-semibold">Use & Care</h3>
              <FiChevronDown
                size={24}
                className={`transition-transform ${
                  isUseAndCareOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isUseAndCareOpen && (
              <div>
                <p className="text-sm">
                  Refined and elegant design with a contemporary feel, the
                  Austin pattern has perfect lines and elegant shapes. Made of
                  high-quality stainless steel this cutlery set is designed for
                  superior durability. Each piece in Amefa's flatware set has
                  delicate and simple design elements on them that will never go
                  out of style no matter how often you use them. Set Includes:
                  6x Dinner Forks, 6x Dinner Spoons, 6x Dinner Knives, 6x
                  Dessert Spoons
                </p>
              </div>
            )}
            <div className=" pb-2 border-b border-gray-300"></div>

            <div
              className="color-section pt-2  flex items-center justify-between cursor-pointer"
              onClick={toggleAdditionalInfo}
            >
              <h3 className="text-sm font-semibold">Additional Info</h3>
              <FiChevronDown
                size={24}
                className={`transition-transform ${
                  isAdditionalInfoOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isAdditionalInfoOpen && (
              <div>
                <p className="text-sm">
                  Refined and elegant design with a contemporary feel, the
                  Austin pattern has perfect lines and elegant shapes. Made of
                  high-quality stainless steel this cutlery set is designed for
                  superior durability. Each piece in Amefa's flatware set has
                  delicate and simple design elements on them that will never go
                  out of style no matter how often you use them. Set Includes:
                  6x Dinner Forks, 6x Dinner Spoons, 6x Dinner Knives, 6x
                  Dessert Spoons
                </p>
              </div>
            )}
            <div className=" pb-2 border-b border-gray-300"></div>

            <div className="color-section pt-4 ">
              <div>
                <p className="text-sm flex">
                  <span>
                    {' '}
                    <img className="pr-2 h-6" src={pdp_offer_img} alt="" />
                  </span>{' '}
                  Offer
                </p>
              </div>
              <div className="grid pb-3 grid-cols-3 gap-2 mt-2">
                <div className="text-sm border border-gray-300 rounded-lg shadow-md p-2.5">
                  <h5 className="font-semibold ">No Cost EMI</h5>
                  <p className="text-[11px] mt-[8px]">
                    Avail No Cost EMI on select cards for orders above ₹3000
                  </p>
                  <p className=" text-[#175C8A] mt-[8px]">1 offer </p>
                </div>
                <div className="text-sm border border-gray-300 rounded-lg shadow-md p-2.5">
                  <h5 className="font-semibold ">Bank Offer</h5>
                  <p className="text-[11px] mt-[8px]">
                    Upto ₹1,750.00 discount on select Credit Cards,HDFC…
                  </p>
                  <p className=" text-[#175C8A] mt-[8px]">6 offer </p>
                </div>
                <div className="text-sm border border-gray-300 rounded-lg shadow-md p-2.5">
                  <h5 className="font-semibold ">Partner Offers</h5>
                  <p className="text-[11px] mt-[8px]">
                    Get GST invoice and save up to 28% on business purchases.
                  </p>
                  <p className=" text-[#175C8A] mt-[8px]">1 offer </p>
                </div>
              </div>
            </div>

            <div className="color-section pt-4 border-t border-gray-300">
              <div className="grid grid-cols-4 gap-0">
                <div className="border-r border-gray-300 pt-2 ">
                  <img
                    className="h-5 w-6 ml-[32px]"
                    src={pdp_shopping_img}
                    alt=""
                  />
                  <p className="text-[10px] mt-1">
                    Free Shipping on Orders Above Rs 2000!
                  </p>
                </div>
                <div className="border-r border-gray-300 p-2 ">
                  <img
                    className="h-6 w-4 ml-[30px]"
                    src={pdp_qulity_img}
                    alt=""
                  />
                  <p className="text-[10px] mt-1">Premium Quality</p>
                </div>
                <div className="border-r border-gray-300 p-2 ">
                  <img
                    className="h-5 w-7 ml-[25px]"
                    src={pdp_payment_img}
                    alt=""
                  />
                  <p className="text-[10px] mt-2">Secure Payments</p>
                </div>
                <div className="p-2">
                  <img className="h-6 w-4 ml-[35px]" src={pdp_cup_img} alt="" />
                  <p className="text-[10px] mt-1">Award Winning products</p>
                </div>
              </div>
            </div>
            <div className="color-section mt-3 p-2 bg-[#F5F9FA]">
              <h5 className="font-semibold">
                Want to know more? Get in touch.
              </h5>
              <p className="text-[11px]">(Monday - Friday - 10am to 6pm)</p>
              <p className="text-[11px] flex mt-3">
                {' '}
                <img
                  className="pr-2 w-6 h-4"
                  src={pdp_whatsapp_img}
                  alt=""
                />{' '}
                +91 704522 3344
              </p>
              <p className="text-[11px] flex mt-2">
                {' '}
                <img className="pr-2 w-6 h-4" src={pdp_email_img} alt="" />
                contact@seebagroup.com
              </p>
            </div>
            <div className="grid gap-4 py-4">
              {shippingPolicy?.body && (
                <ProductDetail
                  title="Shipping"
                  content={getExcerpt(shippingPolicy.body)}
                  learnMore={`/policies/${shippingPolicy.handle}`}
                />
              )}
              {refundPolicy?.body && (
                <ProductDetail
                  title="Returns"
                  content={getExcerpt(refundPolicy.body)}
                  learnMore={`/policies/${refundPolicy.handle}`}
                />
              )}
            </div>
            {/* </section> */}
          </div>
        </div>

        {/* {Frequently Bought and image } */}
        <div>
          <div className="mt-16 px-11">
            <div className="bg-[#F5F5F5] px-20 py-6">
              <div className="">
                <h1 className="font-ubuntu text-base font-semibold">
                  FREQUENTLY BOUGHT TOGETHER
                </h1>
              </div>
              <div className="pt-4 flex">
                <div>
                  <img className="w-[190px]" src={product_image} alt="" />
                  <p className="text-[14px] mt-2">Amefa Austin </p>
                  <p className="text-[14px] mt-2">Cutlery, Set of 24</p>
                </div>

                <div>
                  <p className="flex items-center p-[32px] text-[30px]"> +</p>
                </div>
                <div>
                  <img className="w-[190px]" src={product_image} alt="" />
                  <p className="text-[14px] mt-2">Mikasa Reactive Blue</p>
                  <p className="text-[14px] mt-2">Dinnerware Set, 12 pcs</p>
                </div>
                <div className="pl-10">
                  <div>
                    <p className="text-sm flex">
                      <div
                        className="w-4 h-4 border bg-white border-[1px solid #ECECEC]  cursor-pointer flex items-center justify-center"
                        onClick={handleFirstCheckBoxClick}
                      >
                        {isFirstChecked && <MdDone className="text-black" />}
                      </div>
                      <span className="pl-3 pr-1">Current items</span>
                      <span className="text-gray-500">
                        {' '}
                        Amefa Austin Cutlery, Set of 24
                      </span>
                    </p>
                    <p>
                      {' '}
                      <span className="text-[#E91111] mr-2 text-[14px]">
                        ₹4,999
                      </span>{' '}
                      <span className="text-slate-300 text-xs line-through text-[10px]">
                        MRP. ₹ 5,999{' '}
                      </span>{' '}
                      <span className="ml-4 text-[14px]"> 20% OFF</span>{' '}
                    </p>
                  </div>
                  <div className="pt-4 pb-4 border-b border-gray-200">
                    <p className="text-sm flex">
                      <div
                        className="w-4 h-4 border bg-white border-[1px solid #ECECEC]  cursor-pointer flex items-center justify-center"
                        onClick={handleSecondCheckBoxClick}
                      >
                        {isSecondChecked && <MdDone className="text-black" />}
                      </div>
                      <span className="pl-3 text-gray-500">
                        Mikasa Reactive Blue Dinnerware Set, 12 pcs
                      </span>
                    </p>
                    <p>
                      {' '}
                      <span className="text-[#E91111] text-[14px] mr-2">
                        ₹ 8,399
                      </span>{' '}
                      <span className="text-slate-300 text-xs line-through text-[10px]">
                        MRP. ₹ 9,999{' '}
                      </span>{' '}
                      <span className="ml-4 text-[14px]"> 20% OFF</span>{' '}
                    </p>
                  </div>
                  <div className="ml-8 pt-4 flex">
                    <p className="flex items-center">Total: ₹ 1,040</p>
                    <button className=" text-white text-sm bg-[#003354] ml-4 py-2 pl-5 pr-5 ">
                      Add Both to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <PdpYouLike />
          {/* <NewArrivels/> */}
        </div>
         <div className="mt-16  px-11">
          <div>
            <img src={pdp_benner_img} alt="" />
          </div>
        </div>

        {/* <CustomerReview /> */}

        <div className="pdp-footer sticky sm-only:col-span-1 shadow-[0px -5px 6px #0000000] pt-3 px-4 md:px-11 pb-3 bg-white bottom-0 grid md:grid-cols-2">
          <div className="flex md-only:hidden sm-only:hidden">
            <h2 className="text-2xl text-black font-medium flex items-center">
              Amefa Austin Cutlery, Set of 24
            </h2>
          </div>
          <div className="flex md-only:flex md-only:ml-4 mt-3 md-only:mt-0 md-only:items-end">
            <div className="md:pl-5">
              <p className="flex items-center">
                <span className="text-[#969696] text-xs line-through">
                  MRP.₹5999
                </span>
                <span className="pl-2 pr-2 text-xl text-[#E91111] font-semibold">
                  ₹4,999
                </span>
                <span className="text-xs bg-[#E91111] text-white p-2 rounded-2xl">
                  20% OFF
                </span>
              </p>
              <p className="text-[#969696] text-xs">(inclusive of all taxes)</p>
            </div>
            <div className="mt-3 md:mt-4">
              <div className="flex">
                <div className="md-only:hidden product-counter flex w-36 border border-[#E6E6E6] ">
                  <button className="text-base px-4" onClick={decrement}>
                    -
                  </button>
                  <p className="flex text-lg font-semibold items-center">
                    {count}
                  </p>
                  <button className="text-base px-4" onClick={increment}>
                    +
                  </button>
                </div>
                <div className="ml-4 mt-2">
                  <button classNameName=" text-white text-[10px] bg-[#175C8A] hover:bg-[#003354] py-2 px-4">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* <Suspense fallback={<Skeleton className="h-32" />}>
        <Await
          errorElement="There was a problem loading related products"
          resolve={recommended}
        >
          {(products) => (
            <ProductSwimlane title="Related Products" products={products} />
          )}
        </Await>
      </Suspense> */}
    </>
  );
}

export function ProductForm() {
  const {product, analytics, storeDomain} = useLoaderData();

  const [currentSearchParams] = useSearchParams();
  const {location} = useNavigation();

  /**
   * We update `searchParams` with in-flight request data from `location` (if available)
   * to create an optimistic UI, e.g. check the product option before the
   * request has completed.
   */
  const searchParams = useMemo(() => {
    return location
      ? new URLSearchParams(location.search)
      : currentSearchParams;
  }, [currentSearchParams, location]);

  const firstVariant = product.variants.nodes[0];

  /**
   * We're making an explicit choice here to display the product options
   * UI with a default variant, rather than wait for the user to select
   * options first. Developers are welcome to opt-out of this behavior.
   * By default, the first variant's options are used.
   */
  const searchParamsWithDefaults = useMemo(() => {
    const clonedParams = new URLSearchParams(searchParams);

    for (const {name, value} of firstVariant.selectedOptions) {
      if (!searchParams.has(name)) {
        clonedParams.set(name, value);
      }
    }

    return clonedParams;
  }, [searchParams, firstVariant.selectedOptions]);

  /**
   * Likewise, we're defaulting to the first variant for purposes
   * of add to cart if there is none returned from the loader.
   * A developer can opt out of this, too.
   */
  const selectedVariant = product.selectedVariant ?? firstVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;

  const isOnSale =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;

  const productAnalytics = {
    ...analytics.products[0],
    quantity: 1,
  };

  return (
    <>
      <div className="sm-only:flex sm-only:grid-cols-2 gap-3 sm-only:pb-3 sm-only:border-b border-gray-300">
        {isOutOfStock ? (
          <div className="pt-3">
            <button className="text-white text-sm bg-[#175C8A] hover:bg-[#003354] py-2 px-10 sm-only:px-12 lg:px-36">
              OUT OF STOCK
            </button>
          </div>
        ) : (
          <div className="pt-3">
            <AddToCartButton
              lines={[
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                },
              ]}
              variant="primary"
              data-test="add-to-cart"
              analytics={{
                products: [productAnalytics],
                totalValue: parseFloat(productAnalytics.price),
              }}
            >
              <p className="text-white text-sm bg-[#175C8A] hover:bg-[#003354] py-2 px-10 sm-only:px-12 lg:px-8">
                ADD TO CART{' '}
              </p>
            </AddToCartButton>
          </div>
        )}
        <div className="pt-3">
          {!isOutOfStock && (
            <ShopPayButton
              // width="100%"
              variantIds={[selectedVariant?.id]}
              storeDomain={storeDomain}
            />
          )}
          {/* <button className="text-white text-sm bg-[#175C8A] hover:bg-[#003354] sm-only:px-12 py-2 px-12 lg:px-40">
            BUY NOW
          </button> */}
        </div>
      </div>
    </>
  );
}

function ProductOptions({options, searchParamsWithDefaults}) {
  const closeRef = useRef(null);
  return (
    <>
      {options
        .filter((option) => {
          return option.values.length > 1;
        })
        .map((option) => (
          <div
            key={option.name}
            className="flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0"
          >
            {/* <Heading as="legend" size="lead" className="min-w-[4rem]">
              {option.name}
            </Heading> */}
            <div className="flex flex-wrap items-baseline gap-4">
              {/**
               * First, we render a bunch of <Link> elements for each option value.
               * When the user clicks one of these buttons, it will hit the loader
               * to get the new data.
               *
               * If there are more than 7 values, we render a dropdown.
               * Otherwise, we just render plain links.
               */}
              {option.values.length > 7 ? (
                <div className="relative w-full">
                  <Listbox>
                    {({open}) => (
                      <>
                        <Listbox.Button
                          ref={closeRef}
                          className={clsx(
                            'flex items-center justify-between w-full py-3 px-4 border border-primary',
                            open
                              ? 'rounded-b md:rounded-t md:rounded-b-none'
                              : 'rounded',
                          )}
                        >
                          <span>
                            {searchParamsWithDefaults.get(option.name)}
                          </span>
                          <IconCaret direction={open ? 'up' : 'down'} />
                        </Listbox.Button>
                        <Listbox.Options
                          className={clsx(
                            'border-primary bg-contrast absolute bottom-12 z-30 grid h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b',
                            open ? 'max-h-48' : 'max-h-0',
                          )}
                        >
                          {option.values.map((value) => (
                            <Listbox.Option
                              key={`option-${option.name}-${value}`}
                              value={value}
                            >
                              {({active}) => (
                                <>
                                  <p>{value}</p>
                                  <ProductOptionLink
                                    optionName={option.name}
                                    optionValue={value}
                                    className={clsx(
                                      'text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer',
                                      active && 'bg-primary/10',
                                    )}
                                    searchParams={searchParamsWithDefaults}
                                    onClick={() => {
                                      if (!closeRef?.current) return;
                                      closeRef.current.click();
                                    }}
                                  >
                                    {value}
                                    {console.log(
                                      '🚀 ~ file: ($locale).products.$productHandle.jsx:788 ~ ProductOptions ~ value:',
                                      value,
                                    )}
                                    {searchParamsWithDefaults.get(
                                      option.name,
                                    ) === value && (
                                      <span className="ml-2">
                                        <IconCheck />
                                      </span>
                                    )}
                                  </ProductOptionLink>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </>
                    )}
                  </Listbox>
                </div>
              ) : (
                <>
                  {option.values.map((value) => {
                    const checked =
                      searchParamsWithDefaults.get(option.name) === value;
                    const id = `option-${option.name}-${value}`;

                    return (
                      <Text key={id}>
                        <ProductOptionLink
                          optionName={option.name}
                          optionValue={value}
                          searchParams={searchParamsWithDefaults}
                          className={clsx(
                            'leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200',
                            checked ? 'border-primary/50' : 'border-primary/0',
                          )}
                        />
                      </Text>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        ))}
    </>
  );
}

function ProductOptionLink({
  optionName,
  optionValue,
  searchParams,
  children,
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const {pathname} = useLocation();
  const isLocalePathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);
  // fixes internalized pathname
  const path = isLocalePathname
    ? `/${pathname.split('/').slice(2).join('/')}`
    : pathname;

  const clonedSearchParams = new URLSearchParams(searchParams);
  clonedSearchParams.set(optionName, optionValue);

  return (
    <Link
      {...props}
      preventScrollReset
      prefetch="intent"
      replace
      to={`${path}?${clonedSearchParams.toString()}`}
    >
      <p
        style={{
          backgroundColor: optionValue,
          // height: '20px',
          // width: '20px',
        }}
        className={`w-6 h-6 bg-gray-100 focus:outline-none focus:ring   rounded-full ${
          isActive ? 'border-black' : ''
        }`}
        onClick={handleClick}
      ></p>
      {children}
    </Link>
  );
}

function ProductDetail({title, content, learnMore}) {
  return (
    <Disclosure key={title} as="div" className="grid w-full gap-2">
      {({open}) => (
        <>
          <Disclosure.Button className="text-left">
            <div className="flex justify-between">
              <Text size="lead" as="h4">
                {title}
              </Text>
              <IconClose
                className={clsx(
                  'transition-transform transform-gpu duration-200',
                  !open && 'rotate-[45deg]',
                )}
              />
            </div>
          </Disclosure.Button>

          <Disclosure.Panel className={'pb-4 pt-2 grid gap-2'}>
            <div
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{__html: content}}
            />
            {learnMore && (
              <div className="">
                <Link
                  className="pb-px border-b border-primary/30 text-primary/50"
                  to={learnMore}
                >
                  Learn more
                </Link>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 1) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      primaryDomain {
        url
      }
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  query productRecommendations(
    $productId: ID!
    $count: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

async function getRecommendedProducts(storefront, productId) {
  const products = await storefront.query(RECOMMENDED_PRODUCTS_QUERY, {
    variables: {productId, count: 12},
  });

  invariant(products, 'No data returned from Shopify API');

  const mergedProducts = (products.recommended ?? [])
    .concat(products.additional.nodes)
    .filter(
      (value, index, array) =>
        array.findIndex((value2) => value2.id === value.id) === index,
    );

  const originalProduct = mergedProducts.findIndex(
    (item) => item.id === productId,
  );

  mergedProducts.splice(originalProduct, 1);

  return {nodes: mergedProducts};
}
