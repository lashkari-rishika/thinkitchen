import clsx from 'clsx';
import {useRef} from 'react';
import {useScroll} from 'react-use';
import {flattenConnection, Image, Money} from '@shopify/hydrogen';
import {useFetcher} from '@remix-run/react';

import {
  Button,
  Heading,
  IconRemove,
  Text,
  Link,
  FeaturedProducts,
} from '~/components';
import {getInputStyleClasses} from '~/lib/utils';
import {CartAction} from '~/lib/type';

export function Cart({layout, onClose, cart}) {
  const linesCount = Boolean(cart?.lines?.edges?.length || 0);

  return (
    <>
      <CartEmpty hidden={linesCount} onClose={onClose} layout={layout} />
      <CartDetails cart={cart} layout={layout} />
    </>
  );
}

export function CartDetails({layout, cart}) {
  // @todo: get optimistic cart cost
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  const container = {
    drawer: 'grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto] h-[18rem]',
    page: 'w-full pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12',
  };

  return (
    <div className={container[layout]}>
      <CartLines lines={cart?.lines} layout={layout} />
      {/* {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )} */}
    </div>
  );
}

/**
 * Temporary discount UI
 * @param discountCodes the current discount codes applied to the cart
 * @todo rework when a design is ready
 */
function CartDiscounts({discountCodes}) {
  const codes = discountCodes?.map(({code}) => code).join(', ') || null;

  return (
    <>
      {/* Have existing discount, display it with a remove option */}
      <dl className={codes ? 'grid' : 'hidden'}>
        <div className="flex items-center justify-between font-medium">
          <Text as="dt">Discount(s)</Text>
          <div className="flex items-center justify-between">
            <UpdateDiscountForm>
              <button>
                <IconRemove
                  aria-hidden="true"
                  style={{height: 18, marginRight: 4}}
                />
              </button>
            </UpdateDiscountForm>
            <Text as="dd">{codes}</Text>
          </div>
        </div>
      </dl>

      {/* No discounts, show an input to apply a discount */}
      <UpdateDiscountForm>
        <div
          className={clsx(
            codes ? 'hidden' : 'flex',
            'items-center gap-4 justify-between text-copy',
          )}
        >
          <input
            className={getInputStyleClasses()}
            type="text"
            name="discountCode"
            placeholder="Discount code"
          />
          <button className="flex justify-end font-medium whitespace-nowrap">
            Apply Discount
          </button>
        </div>
      </UpdateDiscountForm>
    </>
  );
}

function UpdateDiscountForm({children}) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form action="/cart" method="post">
      <input
        type="hidden"
        name="cartAction"
        value={CartAction.UPDATE_DISCOUNT}
      />
      {children}
    </fetcher.Form>
  );
}

function CartLines({layout = 'drawer', lines: cartLines}) {
  const currentLines = cartLines ? flattenConnection(cartLines) : [];
  const scrollRef = useRef(null);
  const {y} = useScroll(scrollRef);

  const className = clsx([
    y > 0 ? 'border-t' : '',
    layout === 'page'
      ? 'flex-grow md:translate-y-4'
      : 'px-8 pb-6 sm-max:pt-2 overflow-auto transition h-[10rem]',
  ]);

  return (
    <section
      ref={scrollRef}
      aria-labelledby="cart-contents"
      className={className}
    >
      <ul className="grid gap-6 md:gap-10">
        {currentLines.length > 0 && (
          <CartLineItem
            key={currentLines[currentLines.length - 1].id}
            line={currentLines[currentLines.length - 1]}
          />
        )}
        <div className="fixed right-0 py-5 w-full bottom-0 items-center grid gap-y-1.5 text-sm bg-white">
          <button className="h-9 mx-10 items-center border border-[E1E1E1] hover:bg-[#175C8A] hover:text-white" onClick={toggleMyCart}>
            View My Cart ({currentLines.length})
          </button>
          <button className="h-9 mx-10 items-center border border-[E1E1E1] bg-[#175C8A] text-white hover:text-white">
            Checkout
          </button>
          <Button className="h-9 mx-10 items-center border border-[E1E1E1] hover:bg-[#175C8A] hover:text-white">
            Continue Shopping
          </Button>
        </div>
      </ul>
      {/* <ul className="grid gap-6 md:gap-10">
        {currentLines.map((line) => (
          <CartLineItem key={line.id} line={line} />
        ))}
      </ul> */}
    </section>
  );
}

function CartCheckoutActions({checkoutUrl}) {
  if (!checkoutUrl) return null;

  return (
    <div className="flex flex-col mt-2">
      <a href={checkoutUrl} target="_self">
        <Button as="span" width="full">
          Continue to Checkout
        </Button>
      </a>
      {/* @todo: <CartShopPayButton cart={cart} /> */}
    </div>
  );
}

function CartSummary({cost, layout, children = null}) {
  const summary = {
    drawer: 'grid gap-4 p-6 border-t md:px-12',
    page: 'sticky top-nav grid gap-6 p-4 md:px-6 md:translate-y-4 bg-primary/5 rounded w-full',
  };

  return (
    <section aria-labelledby="summary-heading" className={summary[layout]}>
      <h2 id="summary-heading" className="sr-only">
        Order summary
      </h2>
      <dl className="grid">
        <div className="flex items-center justify-between font-medium">
          <Text as="dt">Subtotal</Text>
          <Text as="dd" data-test="subtotal">
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </Text>
        </div>
      </dl>
      {children}
    </section>
  );
}

function CartLineItem({line}) {
  if (!line?.id) return null;

  const {id, quantity, merchandise} = line;
  console.log("🚀 ~ file: Cart.jsx:216 ~ CartLineItem ~ merchandise:", merchandise)

  if (typeof quantity === 'undefined' || !merchandise?.product) return null;

  return (
    <>
      <div key={id} className="gap-4">
        <div className="flex gap-4">
          <div className="max-w-[4.5rem]">
            {merchandise.image && (
              <>
                <Image
                  width={110}
                  height={110}
                  data={merchandise.image}
                  alt={merchandise.title}
                />
              </>
            )}
          </div>

          <div className=" text-base">
            <Heading as="h3" size="copy">
              {merchandise?.product?.handle ? (
                <>
                  <Link to={`/products/${merchandise.product.handle}`}>
                    {merchandise?.product?.title || ''}
                  </Link>
                  <div className='flex gap-2'>
                  {/* <div>{merchandise.price.amount}</div> */}
                  <div>{merchandise.compareAtPrice.amount}</div>
                  </div>
                </>
              ) : (
                <Text>{merchandise?.product?.title || ''}</Text>
              )}
            </Heading>
          </div>
        </div>
        <ItemRemoveButton lineIds={[id]} />
      </div>
      {/* <li key={id} className="flex gap-4">
        <div className="flex-shrink">
          {merchandise.image && (
            <Image
              width={110}
              height={110}
              data={merchandise.image}
              className="object-cover object-center w-24 h-24 border rounded md:w-28 md:h-28"
              alt={merchandise.title}
            />
          )}
        </div>

        <div className="flex justify-between flex-grow">
          <div className="grid gap-2">
            <Heading as="h3" size="copy">
              {merchandise?.product?.handle ? (
                <Link to={`/products/${merchandise.product.handle}`}>
                  {merchandise?.product?.title || ''}
                </Link>
              ) : (
                <Text>{merchandise?.product?.title || ''}</Text>
              )}
            </Heading>

            <div className="grid pb-2">
              {(merchandise?.selectedOptions || []).map((option) => (
                <Text color="subtle" key={option.name}>
                  {option.name}: {option.value}
                </Text>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex justify-start text-copy">
                <CartLineQuantityAdjust line={line} />
              </div>
              <ItemRemoveButton lineIds={[id]} />
            </div>
          </div>
          <Text>
            <CartLinePrice line={line} as="span" />
          </Text>
        </div>
      </li> */}
    </>
  );
}

function ItemRemoveButton({lineIds}) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input
        type="hidden"
        name="cartAction"
        value={CartAction.REMOVE_FROM_CART}
      />
      <input type="hidden" name="linesIds" value={JSON.stringify(lineIds)} />
      <button
        className="flex items-center justify-center w-full h-9 mt-1.5 border rounded hover:outline-black bg-red-500 text-white  "
        type="submit"
      >
        <span className="sr-only">Remove</span>
        <IconRemove aria-hidden="true" />
      </button>
    </fetcher.Form>
  );
}

function CartLineQuantityAdjust({line}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <>
      <label htmlFor={`quantity-${lineId}`} className="sr-only">
        Quantity, {quantity}
      </label>
      <div className="flex items-center border rounded">
        <UpdateCartButton lines={[{id: lineId, quantity: prevQuantity}]}>
          <button
            name="decrease-quantity"
            aria-label="Decrease quantity"
            className="w-10 h-10 transition text-primary/50 hover:text-primary disabled:text-primary/10"
            value={prevQuantity}
            disabled={quantity <= 1}
          >
            <span>&#8722;</span>
          </button>
        </UpdateCartButton>

        <div className="px-2 text-center" data-test="item-quantity">
          {quantity}
        </div>

        <UpdateCartButton lines={[{id: lineId, quantity: nextQuantity}]}>
          <button
            className="w-10 h-10 transition text-primary/50 hover:text-primary"
            name="increase-quantity"
            value={nextQuantity}
            aria-label="Increase quantity"
          >
            <span>&#43;</span>
          </button>
        </UpdateCartButton>
      </div>
    </>
  );
}

function UpdateCartButton({children, lines}) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value={CartAction.UPDATE_CART} />
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      {children}
    </fetcher.Form>
  );
}

function CartLinePrice({line, priceType = 'regular', ...passthroughProps}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />;
}

export function CartEmpty({hidden = false, layout = 'drawer', onClose}) {
  const scrollRef = useRef(null);
  const {y} = useScroll(scrollRef);

  const container = {
    drawer: clsx([
      'content-start gap-4 px-6 pb-8 transition overflow-y-scroll md:gap-12 md:px-12 h-screen-no-nav md:pb-12',
      y > 0 ? 'border-t' : '',
    ]),
    page: clsx([
      hidden ? '' : 'grid',
      `pb-12 w-full md:items-start gap-4 md:gap-8 lg:gap-12`,
    ]),
  };

  return (
    <div ref={scrollRef} className={container[layout]} hidden={hidden}>
      <section className="grid gap-6">
        <Text format>
          Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
          started!
        </Text>
        <div>
          <Button onClick={onClose}>Continue shopping</Button>
        </div>
      </section>
      {/* <section className="grid gap-8 pt-16">
        <FeaturedProducts
          count={4}
          heading="Shop Best Sellers"
          layout={layout}
          onClose={onClose}
          sortKey="BEST_SELLING"
        />
      </section> */}
    </div>
  );
}
