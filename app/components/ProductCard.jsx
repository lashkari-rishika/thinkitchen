import clsx from 'clsx';
import {flattenConnection, Image, Money, useMoney} from '@shopify/hydrogen';
import {Text, Link, AddToCartButton} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';
import {AiOutlineHeart} from 'react-icons/ai';
import {useEffect, useState} from 'react';

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
}) {
  let cardLabel;

  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  if (!firstVariant) return null;
  const {image, price, compareAtPrice} = firstVariant;

  const [discountPercentage, setDiscountPercentage] = useState(0);

  const calculateDiscountPercentage = () => {
    const discount = price.amount - compareAtPrice.amount;
    const discountPercentageValue = parseInt((discount / price.amount) * 100);
    setDiscountPercentage(Math.floor(discountPercentageValue.toFixed(2)));
  };
  useEffect(() => {
    calculateDiscountPercentage();
  }, []);
  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="new_arrivel_card relative w-full">
          <Link
            onClick={onClick}
            to={`/products/${product.handle}`}
            prefetch="intent"
            className="w-full"
            target="_blank"
          >
            {image && (
              <Image
                className="w-full object-cover hover_image max-h-[24rem]"
                sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
                aspectRatio="4/5"
                data={image}
                alt={image.altText || `Picture of ${product.title}`}
                loading={loading}
              />
            )}
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full ">
              <AiOutlineHeart />
            </button>
            <div className="discount_lable absolute p-1 md-only:text-sm md-only:p-[0.001rem] text-red-600 font-semibold bg-white rounded-br-lg  font-xs">
              {discountPercentage}% <span> OFF</span>
            </div>
            <div className="px-1 py-2  w-full">
              <div className="product_card_text flex">
                <div className="font-semibold text-sm md-only:text-xs md-only:leading-4  w-9/12 sm-only:w-full">
                  {product.title}
                </div>
                <div className=" product_card_button 4/12 sm-only:hidden">
                {/* {quickAdd && ( */}
                <AddToCartButton
                  lines={[
                    {
                      quantity: 1,
                      merchandiseId: firstVariant.id,
                    },
                  ]}
                  variant="secondary"
                  className="add_cart_button text-sm md-omly:text-[0.675rem] md-only:text-[0.65rem] md-only:leading-[1rem] block w-full bg-white-500 font-semibold text-black py-1 px-2 md-only:px-1 border border-solid border-gray-300 min-w-max"
                  analytics={{
                    products: [productAnalytics],
                    totalValue: parseFloat(productAnalytics.price),
                  }}
                >
                  {/* <Text
                      as="span"
                      className="flex items-center justify-center gap-2"
                    > */}
                  Add to Cart
                  {/* </Text> */}
                </AddToCartButton>
                {/* )} */}
                {/* <button className="add_cart_button text-sm md-omly:text-[0.675rem] md-only:text-[0.65rem] md-only:leading-[1rem] block w-full bg-white-500 font-semibold text-black py-1 px-2 md-only:px-1 border border-solid border-gray-300 min-w-max">
                    {media.cartButton}
                  </button> */}
              </div>
              </div>
              <div className='flex justify-between items-center sm-only:my-1.5'>
                <div className='flex'>
                  <span className="font-xs text-gray-400 md-only:text-[12px] mb-1 gap-1 ">
                    {isDiscounted(price, compareAtPrice) && (
                      <CompareAtPrice
                        className={'opacity-50 mr-3'}
                        data={compareAtPrice}
                      />
                    )}
                  </span>
                  <span className="text-red-500 font-xs md-only:text-[12px] mb-1">
                    <Money withoutTrailingZeros data={price} />
                  </span>
                </div>
                <div className=" product_card_button 4/12 md:hidden">
                {/* {quickAdd && ( */}
                <AddToCartButton
                  lines={[
                    {
                      quantity: 1,
                      merchandiseId: firstVariant.id,
                    },
                  ]}
                  variant="secondary"
                  className="add_cart_button text-sm md-omly:text-[0.675rem] md-only:text-[0.65rem] md-only:leading-[1rem] block w-full bg-white-500 font-semibold text-black py-1 px-2 md-only:px-1 border border-solid border-gray-300 min-w-max"
                  analytics={{
                    products: [productAnalytics],
                    totalValue: parseFloat(productAnalytics.price),
                  }}
                >
                  {/* <Text
                      as="span"
                      className="flex items-center justify-center gap-2"
                    > */}
                  Add to Cart
                  {/* </Text> */}
                </AddToCartButton>
                {/* )} */}
                {/* <button className="add_cart_button text-sm md-omly:text-[0.675rem] md-only:text-[0.65rem] md-only:leading-[1rem] block w-full bg-white-500 font-semibold text-black py-1 px-2 md-only:px-1 border border-solid border-gray-300 min-w-max">
                    {media.cartButton}
                  </button> */}
              </div>
              </div>
              
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

function CompareAtPrice({data, className}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}
