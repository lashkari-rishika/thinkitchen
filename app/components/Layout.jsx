import {useParams, Form, Await, useMatches} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Disclosure} from '@headlessui/react';
import {Suspense, useEffect, useMemo} from 'react';
import {
  Drawer,
  useDrawer,
  Text,
  Input,
  IconLogin,
  IconAccount,
  IconBag,
  IconSearch,
  Heading,
  IconMenu,
  IconCaret,
  Section,
  CountrySelector,
  Cart,
  CartLoading,
  Link,
} from '~/components';
import {useIsHomePath} from '~/lib/utils';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import BannerSection from '../components/about_us';
import ShopByCategory from './custom-components/ShopByCategory';
import ShopByBrands from './custom-components/ShopByBrands';
import img2 from '../asset/181618789-set-of-different-cooking-utensils-on-gray-countertop-in-kitchen.webp'
import FooterComponet from './FooterComponet';
import logo_img from '../asset/logo.svg';
import user_img from '../asset/Icon-feather-user.png'
import heart_img from '../asset/heart.png';
import location_img from '../asset/Untitled-1-01.png';
import cart_img from '../asset/cart.png';
import union1_img from '../asset/Union 1.png';


export function Layout({children, layout}) {
  const {headerMenu, footerMenu} = layout;
  const images = [
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
];
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {headerMenu && <Header title={layout.shop.name} menu={headerMenu} />}
          <div>
          <BannerSection/>
          </div>
        {/* <main role="main" id="mainContent" className="flex-grow"> */}
        <main role="main" id="mainContent" className="flex-grow px-10">
          <div className='main_video_banner '>
            <div className='video_banner p-6 place-contant-center'>
              {/* <img src={img1}></img> */}
              <ShopByCategory images={images}/>
              <ShopByBrands images={images}/>
            </div>
          </div>
          {children}
        </main>
      </div>
      {footerMenu && <Footer menu={footerMenu} />}
    </>
  );
}

function Header({title, menu}) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
      <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      />
    </>
  );
}

function CartDrawer({isOpen, onClose}) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({isOpen, onClose, menu}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({menu, onClose}) {
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => (
        <span key={item.id} className="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            className={({isActive}) =>
              isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
    </nav>
  );
}

function MobileHeader({title, isHome, openCart, openMenu}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
      } flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`}
    >
      <div className="flex items-center justify-start w-full gap-4">
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconMenu />
        </button>
        <Form
          method="get"
          action={params.locale ? `/${params.locale}/search` : '/search'}
          className="items-center gap-2 sm:flex"
        >
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8"
          >
            <IconSearch />
          </button>
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </Form>
      </div>

      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <Heading
          className="font-bold text-center leading-none"
          as={isHome ? 'h1' : 'h2'}
        >
          {title}
        </Heading>
      </Link>

      <div className="flex items-center justify-end w-full gap-4">
        <AccountLink className="relative flex items-center justify-center w-8 h-8" />
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function DesktopHeader({isHome, menu, openCart, title}) {
  const params = useParams();
  const {y} = useWindowScroll();
  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'bg-contrast/90  text-black bg-light'
          : 'bg-contrast/80 text-primary'
      } ${
        !isHome && y > 50 && ' shadow-lightHeader'
      } header hidden  lg:flex items-center sticky transition duration-300  opacity-80 z-30 top-0 m-0 justify-between w-full leading-none gap-5 pl-12 pr-8 py-0`}
    >
      {/* <div className='header-logo'>
        <h1>thinKitchen</h1>
      </div> */}
      <div className="flex gap-40 p-0">
        <Link className="header-logo" to="/" prefetch="intent">
          <img src={logo_img} alt="" />
        </Link>
        <nav className="flex flex-auto items-center">
          {/* Top level menu items */}
          {/* {(menu?.items || []).map((item) => (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={({isActive}) =>
                isActive ? 'pb-1 mt-4	 border-b -mb-px' : 'pb-1 mt-4'
              }
            >
              {item.title}
            </Link>
          ))} */}
          {/* <Link
            className={({isActive}) =>
              isActive
                ? 'pb-1 mt-4	 border-b -mb-px font-semibold'
                : 'pb-1 mt-4 font-semibold'
            }
          >
            SHOP BY CATEGORIES
          </Link> */}
          <ul className="header-manu">
            {/* Frist menu */}
            <li className="sub-menu">
              <Link href=" " className="menu-hover">
                SHOP BY CATEGORIES
              </Link>
              <ul className="frist-sub-menu">
                <div className='second-drop-down'>
                  <li className="menu-header">
                    <a href=" ">Propware</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Knives</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Cutter</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Grater</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Utensils</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Masher</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Spatula</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Drinkware</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Bottles</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Tea & Coffee</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Mugs</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Tea Pot</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Expresso Maker</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Coffee Grinder</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Dineware</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Plate </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Platter </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Bowls</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Ramekin</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Cake Stand</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Barware</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Cocktails Set</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Decanter</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Stemware</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">All Barware Glasses</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Barware Accessories</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Ice Cube Trays</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Ice Mold</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Storageware</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Storage Jar </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Food Container</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Lunch Box </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Canister</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Homeware</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Dust Bins </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Vases</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Planter </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Cleaning & Organisation</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Drying Rack</a>
                  </li>
                </div>
                <div className='first-drop-down'>
                  <li className="menu-header">
                    <a href=" ">Tableware</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Cutlery </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" "> Salt And Papper</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Bakeware </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Baking Set</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Cake Pan</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Loaf Pan</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Whisk</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">All Accessories</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Kids </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Kids Lunch Box</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Kids Bottles</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Pop Mold</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Pocket Straw</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Ice Cream Maker</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Pocket Utensils</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Cookware </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Saucepan</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Casserole</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Grilled Pan</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Wok </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" "> Frying Pan Etc.</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Bath </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Toilet Brush</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Bathroom Caddy</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Soap Dispenser</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Soap Dish</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" "> Squeegee</a>
                  </li>

                  <li className="menu-header">
                    <a href=" ">Others </a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" ">Iron Board</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" "> Laundry Bin</a>
                  </li>
                  <li className="menu-sub-header">
                    <a href=" "> Iron Board Cover</a>
                  </li>
                </div>
                <img src={union1_img} alt="" />
              </ul>
            </li>

            <li className="sub-menu">
              <Link href=" " className="menu-hover">
                SHOP BY BRANDS
              </Link>
              <ul className="second-sub-menu">
                <li className="menu-header">
                  <a href=" ">View All Brand</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">BergHOFF</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Amefa</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Brabantia</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Burleigh</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Cole & Mason</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Dartington</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Denby</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Jamie Oliver</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">john Beswick</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Joseph Joseph</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Kambukka</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Ken Hon</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Kilner</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Kitchen Craft</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">La Cafetiere</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">London Pottery</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Luigi Bormioli</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">MasterClass</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Mikasa</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Monno</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Richerdson Sheffield</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Royal Brierly</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">The Kitchen Company</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Typhoon</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">zoku</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Zyliss</a>
                </li>
                <li className="menu-sub-header">
                  <a href=" ">Kilner</a>
                </li>
              </ul>
            </li>

            <li className="sub-menu">
              <Link href=" " className="menu-hover">
                KNOW US
              </Link>
              <ul>
                <li>
                  <a href=" " className="menu-header">
                    About Us
                  </a>
                </li>
                <li>
                  <a href=" " className="menu-sub-header">
                    Career
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* <Link
            className={({isActive}) =>
              isActive
                ? 'pb-1 mt-4	 border-b -mb-px font-semibold'
                : 'pb-1 mt-4 font-semibold'
            }
          >
            SHOP BY BRANDS
          </Link>
          <Link
            className={({isActive}) =>
              isActive
                ? 'pb-1 mt-4	 border-b -mb-px font-semibold'
                : 'pb-1 mt-4 font-semibold'
            }
          >
            KNOW US
          </Link> */}
        </nav>
      </div>
      <div className="flex items-center gap-1">
        <Form
          method="get"
          action={params.locale ? `/${params.locale}/search` : '/search'}
          className="flex items-center gap-2"
        >
          {/* <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          /> */}
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
          >
            <IconSearch />
          </button>
        </Form>
        {/* <AccountLink className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5" /> */}
        {/* <CartCount isHome={isHome} openCart={openCart} /> */}
        <div className='header-icon w-5 h-5'>
          <img src={location_img} alt="" />
        </div>
        <div className='header-icon w-5 h-5'>
          <img src={heart_img} alt="" />
        </div>
        <div className='header-icon w-5 h-5'>
          {/* <AccountLink /> */}
          <img src={user_img} alt="" />
        </div>
        <div className='header-icon w-5 h-5'>
          <img src={cart_img} alt="" />
        </div>
      </div>
    </header>
  );
}

function AccountLink({className}) {
  const [root] = useMatches();
  const isLoggedIn = root.data?.isLoggedIn;
  return isLoggedIn ? (
    <Link to="/account" className={className}>
      <IconAccount />
    </Link>
  ) : (
    <Link to="/account/login" className={className}>
      <IconLogin />
    </Link>
  );
}

function CartCount({isHome, openCart}) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({openCart, dark, count}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <IconBag />
        <div
          className={`${
            dark
              ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
              : 'text-contrast bg-primary'
          } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

function Footer({menu}) {
  const isHome = useIsHomePath();
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      className="foooter w-full gap-4  grid  border-none w-full gap-4  grid border-none grid min-h-[25rem] items-start grid-flow-row w-full gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-
      bg-primary  text-black mb-0.5 light:text-primary text-contrast overflow-hidden bg-slate-100"
    >
      {/* <FooterMenu menu={menu} />
      <CountrySelector />
      <div
        className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
      >
        &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
        Licensed Open Source project.
      </div> */}
      <FooterComponet/>
    </Section>
  );
}

function FooterLink({item}) {
  if (item.to.startsWith('http')) {
    return (
      <a href={item.to} target={item.target} rel="noopener noreferrer">
        {item.title}
      </a>
    );
  }

  return (
    <Link to={item.to} target={item.target} prefetch="intent">
      {item.title}
    </Link>
  );
}

function FooterMenu({menu}) {
  // const styles = {
  //   section: 'grid gap-4',
  //   nav: 'grid gap-2',
  // };

  return (
    <>
      {/* {(menu?.items || []).map((item) => (
        <section key={item.id} className={styles.section}>
          <Disclosure>
            {({open}) => (
              <>
                <Disclosure.Button className="text-left md:cursor-default">
                  <Heading className="flex justify-between" size="lead" as="h3">
                    {item.title}
                    {item?.items?.length > 0 && (
                      <span className="md:hidden">
                        <IconCaret direction={open ? 'up' : 'down'} />
                      </span>
                    )}
                  </Heading>
                </Disclosure.Button>
                {item?.items?.length > 0 ? (
                  <div
                    className={`${
                      open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                    } overflow-hidden transition-all duration-300`}
                  >
                    <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
                      <Disclosure.Panel static>
                        <nav className={styles.nav}>
                          {item.items.map((subItem) => (
                            <FooterLink key={subItem.id} item={subItem} />
                          ))}
                        </nav>
                      </Disclosure.Panel>
                    </Suspense>
                  </div>
                ) : null}
              </>
            )}
          </Disclosure>
        </section>
      ))} */}
      
    </>
  );
}
