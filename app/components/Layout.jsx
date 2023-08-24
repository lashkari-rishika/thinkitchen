import {useParams, Form, Await, useMatches} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Disclosure} from '@headlessui/react';
import {Suspense, useEffect, useMemo, useState} from 'react';
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
  FeaturedProducts,
} from '~/components';
import {useIsHomePath} from '~/lib/utils';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import FooterComponet from './FooterComponet';
import accountLogin from '../asset/Icon-feather-user.png';
import cart from '../asset/cart.png';
import wishList from '../asset/heart.png';
import cart_location from '../asset/cart_location.png';
import Plp from './custom-components/Plp';
import header_logo from '../asset/logo.svg';
import dropdownImageMoblie from '../asset/dropdown-mobile.png';
import dropdown_icon_moblie from '../asset/dropdown_icon_mobile.png';
import {CiCircleChevDown} from 'react-icons/ci';
import {Image} from '@shopify/hydrogen';
import EmailComponent from './EmailComponent';

export function Layout({children, layout}) {
  const {headerMenu, footerMenu} = layout;
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {headerMenu && <Header title={layout.shop.name} menu={headerMenu} />}

        <main role="main" id="mainContent" className="flex-grow ">
          <div className="main_video_banner ">

            {/* {children} */}
            <EmailComponent />

          </div>
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
    <Drawer
      open={isOpen}
      onClose={onClose}
      heading="Cart"
      openFrom="right"
      className="text-2xl"
    >
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
  console.log('🚀 ~ file: Layout.jsx:156 ~ MenuMobileNav ~ menu:', menu);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [activeSubMenuId, setActiveSubMenuId] = useState(null);

  const toggleCategory = (categoryId) => {
    setActiveCategoryId(activeCategoryId === categoryId ? null : categoryId);
    setActiveSubMenuId(null); // Close any active sub-menu
  };

  const toggleSubMenu = (subMenuId) => {
    setActiveSubMenuId(activeSubMenuId === subMenuId ? null : subMenuId);
  };

  const data = [
    {
      id: 'category',
      title: 'Shop by Category',
      icon: dropdownImageMoblie,
      subMenus: [
        {
          id: 'prepware',
          title: 'Prepware',
          icon: dropdown_icon_moblie,
          options: [
            'Prepware Accessories',
            'Knife & Knife Sets',
            'Cooking Accessories',
            'Serving Accessories',
          ],
        },
        {
          id: 'drinkware',
          title: 'Drinkware',
          icon: dropdown_icon_moblie,
          options: [
            'Cups & Mugs',
            'Bottles',
            'On-the-Go',
            'Tea Pots',
            'Coffee Makers',
            'Tea Accessories',
          ],
        },
      ],
    },
    {
      id: 'brands',
      title: 'Shop by Brands',
      icon: dropdownImageMoblie,
      options: [
        'View All Brands',
        'BergHOFF',
        'Amefa',
        'Brabantia',
        'Burleigh',
        'Cole & Mason',
      ],
    },
    {
      id: 'know-us',
      title: 'Know Us',
      icon: dropdownImageMoblie,
      options: ['About Us', 'Career'],
    },
  ];
  return (
    <nav className="grid bg-white gap-4 p-6 sm-only:gap-4 sm:px-12 sm:py-8">
      {(menu?.items || []).map((item) => (
        <div key={item.id} className="block border-b-2">
          <ul className="space-y-2 mb-[12px]">
            <li className="relative">
              <Link
                key={item.id}
                to={item.to}
                target={item.target}
                prefetch="intent"
                className="text-base"
              >
                {item.title}
              </Link>
              <ul className="absolute border-l border-[#DEDEDE] top-0 right-0 transform  -translate-x-2.5">
                <li
                  onClick={() => toggleCategory(item.id)}
                  className={`w-8 h-8 transition-transform ${
                    activeCategoryId === item.id ? 'transform rotate-180' : ''
                  }`}
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/dropdown-mobile.png?v=1692696964"
                    alt=""
                    className="ml-auto"
                  />
                </li>
              </ul>
            </li>
          </ul>
          {activeCategoryId === item.id && (
            <ul className="max-h-60 overflow-y-scroll">
              <ul className="space-y-2">
                {(item?.items || []).map((subitem) => (
                  <Link
                  key={subitem.id}
                  to={subitem.to}
                  target={subitem.target}
                  prefetch="intent"
                  className="relative"
                  >
                    {console.log("🚀 ~ file: Layout.jsx:253 ~ item:", item)}
                    <div className="text-sm font-semibold text-black mb-[10px]">
                      {subitem.title}
                    </div>
                    <div className="absolute top-0 right-0 transform  -translate-x-4">
                      <li
                        onClick={() => toggleSubMenu(subitem.id)}
                        className={`h-5 w-5 transition-transform ${
                          activeSubMenuId === subitem.id
                            ? 'transform rotate-180'
                            : ''
                        }`}
                      >
                        {console.log("🚀 ~ file: Layout.jsx:273 ~ subitem:", subitem?.items?.length )}
                       
                          { !subitem?.items?.length == 0 && ( 
                            <img
                              src="https://cdn.shopify.com/s/files/1/0293/6448/6192/files/dropdown_icon_mobile.png?v=1692697923"
                              alt=""
                            />
                          )}
                      </li>
                    </div>
                    {activeSubMenuId === subitem.id && (
                      <ul className="space-y-2 grid">
                        {(subitem?.items || []).map((subchilditem) => (
                          <Link
                            key={subchilditem.id}
                            to={subchilditem.to}
                            target={subchilditem.target}
                            prefetch="intent"
                            className="mt-3 text-sm font-medium text-black"
                          >
                            {subchilditem.title}
                          </Link>
                        ))}
                      </ul>
                    )}
                  </Link>
                ))}
                {/* {!category.subitem && category.subitem && (
                  <ul className="space-y-2">
                     {(item?.items || []).map((subitem) => (
                      <li
                      key={subitem.id}
                      to={subitem.to}
                      target={subitem.target}
                      prefetch="intent"
                        className="mt-3 mb-3 text-sm font-medium text-black"
                      >
                        {subitem.title}
                      </li>
                    ))}
                  </ul>
                )} */}
              </ul>
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}

export default MenuMobileNav;

function MobileHeader({title, isHome, openCart, openMenu}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${
        isHome ? 'bg-white text-black' : ' text-primary'
      } flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`}
    >
      <div className="flex items-center justify-start gap-4">
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center h-8 "
        >
          <IconMenu />
        </button>
      </div>

      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center w-full h-full"
        to="/"
      >
        <Heading
          className="font-bold text-center leading-none"
          as={isHome ? 'h1' : 'h2'}
        >
          <img src={header_logo} alt="" />
        </Heading>
      </Link>

      <div className="flex items-center justify-end w-full gap-4">
        <AccountLink className="relative flex items-center justify-center  h-8" />
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
      <div>
        <Form
          method="get"
          action={params.locale ? `/${params.locale}/search` : '/search'}
          className="search-section items-center gap-2 shadow-sm sm:flex absolute top-full bg-gray-100 w-full left-0"
        >
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 absolute left-0 text-center dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search Product"
            name="q"
          />
          <button
            type="submit"
            className="search-icon flex items-center justify-center h-8 ml-[85%]"
          >

            <IconSearch />
          </button>
        </Form>
      </div>
    </header>
  );
}

function DesktopHeader({isHome, menu, openCart, title}) {
  const params = useParams();
  const {y} = useWindowScroll();
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState('');

  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  const showSubMenu = (event) => {
    const hasChildren = event.target.closest('.menu-item-has-children');
    const menuTitle =
      hasChildren.querySelector('i').parentNode.childNodes[0].textContent;

    setSubMenuActive(true);
    setCurrentMenuTitle(menuTitle);
  };

  const hideSubMenu = () => {
    setSubMenuActive(false);
    setCurrentMenuTitle('');
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 991 && menuActive) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [menuActive]);
  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'header flex md:hidden sm:hidden bg-gray-100 bg-contrast/60 text-contrast dark:text-primary'
          : ' text-primary'
      } ${
        !isHome && y > 50 && ' shadow-lightHeader'
      } hidden h-2 lg:flex opacity-80  shadow-sm bg-gray-100 items-center sticky transition duration-300  z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`}
    >
      <div className="header">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <Link className="font-bold" to="/" prefetch="intent">
                <img src={header_logo} alt="logo" />
                {/* {title} */}
              </Link>
            </div>
          </div>
          <div
            className={`header-item item-center ${menuActive ? 'active' : ''}`}
          >
            <div className="menu-overlay" onClick={toggleMenu}></div>
            <nav className={`menu ${menuActive ? 'active' : ''}`}>
              <div className="mobile-menu-head">
                <div className="go-back" onClick={hideSubMenu}></div>
                <div className="current-menu-title">{currentMenuTitle}</div>
                <div className="mobile-menu-close" onClick={toggleMenu}>
                  &times;
                </div>
              </div>
              <ul
                className={`menu-main flex items-center gap-6 ${
                  subMenuActive ? 'active' : ''
                }`}
              >
                {(menu?.items || []).map((item) => (
                  <li className="menu-item-has-children" onClick={showSubMenu}>
                    <Link
                      key={item.id}
                      to={item.to}
                      target={item.target}
                      prefetch="intent"
                      className={({isActive}) =>
                        isActive ? 'pb-1  -mb-px' : 'pb-1'
                      }
                    >
                      {item.title}
                    </Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      {(item?.items || []).map((subitem) => (
                        <>
                          <div className="list-item">
                            <h4 className="title">
                              <Link
                                key={subitem.id}
                                to={subitem.to}
                                target={subitem.target}
                                prefetch="intent"
                                className={({isActive}) =>
                                  isActive ? 'pb-1  -mb-px' : 'pb-1'
                                }
                              >
                                {subitem.title}
                              </Link>
                            </h4>
                            <ul>
                              {(subitem?.items || []).map((subchilditem) => (
                                <>
                                  <li>
                                    <Link
                                      key={subchilditem.id}
                                      to={subchilditem.to}
                                      target={subchilditem.target}
                                      prefetch="intent"
                                      className={({isActive}) =>
                                        isActive ? 'pb-1  -mb-px' : 'pb-1'
                                      }
                                    >
                                      {subchilditem.title}
                                    </Link>
                                  </li>
                                </>
                              ))}
                            </ul>
                          </div>
                        </>
                      ))}
                      {/* <div class="list-item">
                          <img src={img2} alt="shop" />
                        </div> */}
                    </div>
                  </li>
                ))}
                {/* <li>
                    <a href="#">Home</a>
                  </li> */}
                {/* <li className="menu-item-has-children" onClick={showSubMenu}>
                    <a href="#">Shop</a>
                    <div class="sub-menu mega-menu mega-menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Men's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                        <h4 class="title">Beauty</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Women's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                        <h4 class="title">Furniture</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Home, Kitchen</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <img src={img2} alt="shop" />
                      </div>
                    </div>
                  </li> */}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <Form
              method="get"
              action={params.locale ? `/${params.locale}/search` : '/search'}
              className="flex items-center gap-2 bg-white rounded-md drop-shadow-md text-black"
            >
              <Input
                className={
                  isHome
                    ? 'focus:border-contrast/20 dark:focus:border-primary/20 text-black'
                    : 'focus:border-primary/20 text-black'
                }
                type="search"
                variant="minisearch"
                placeholder="Search"
                name="q"
              />
              <button
                type="submit"
                className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
              >
                <IconSearch />
              </button>
            </Form>
            <div className="">
              <img src={cart_location} alt="location" />
            </div>
            <div className="">
              <img src={wishList} alt="heart" />
            </div>
            <AccountLink className="relative flex items-center justify-center focus:ring-primary/5 " />
            <CartCount isHome={isHome} openCart={openCart} className="" />
          </div>
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
      <img src={accountLogin} alt="login" />
      {/* <IconAccount /> */}
    </Link>
  ) : (
    <Link to="/account/login" className={className}>
      <img src={accountLogin} alt="login" />
      {/* <IconLogin /> */}
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
        <img src={cart} alt="cart" />
        {/* <IconBag />
        <div
          className={`${
            dark
              ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
              : 'text-contrast bg-primary'
          } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
          <span>{count || 0}</span>
        </div> */}
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
      className="foooter w-full gap-4  grid  border-none  min-h-[25rem] items-start grid-flow-row grid-cols-1 md:grid-cols-1 lg:grid-cols-bg-primary  text-black mb-0.5 light:text-primary overflow-hidden bg-slate-100"
    >
      {/* <FooterMenu menu={menu} />
      <CountrySelector />
      <div
        className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
      >
        &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
        Licensed Open Source project.
      </div> */}
      <FooterComponet menu={menu} />
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
            {({ open }) => (
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
                    className={`${open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
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
