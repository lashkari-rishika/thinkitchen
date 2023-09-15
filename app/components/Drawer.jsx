import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {GrCheckmark} from 'react-icons/gr';

import {Heading, IconClose} from '~/components';

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
export function Drawer({heading, open, onClose, openFrom = 'right', children, drawerType}) {
  const offScreen = {
    right: 'translate-x-full',
    left: '-translate-x-full',
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="absolute inset-0 overflow-hidden">


            {drawerType === 'cart' && (
              <div
                className={`fixed top-16 bottom-0 flex w-[26%] md-max:w-[85%] ${
                  openFrom === 'right' ? 'right-16 md-max:right-8' : ''
                }`}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom={offScreen[openFrom]}
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo={offScreen[openFrom]}
                >
                  <Dialog.Panel className="w-screen max-w-lg text-left align-middle transition-all transform shadow-xl bg-contrast h-[22rem] ">
                    <header
                      className={`sticky top-0 flex items-center my-3 pl-6 pr-3 h-[2rem] md-max:px-8 ${
                        heading ? 'justify-between' : 'justify-end'
                      }`}
                    >
                      {heading !== null && (
                        <Dialog.Title>
                          <Heading as="span" size="lead" id="cart-contents">
                            <div className="flex items-center gap-1 text-sm">
                              {heading}
                              <span>
                                <GrCheckmark />
                              </span>
                              <span>Item added to your cart</span>
                            </div>
                          </Heading>
                        </Dialog.Title>
                      )}
                      <button
                        type="button"
                        className="p-4 -m-4 transition text-primary hover:text-primary/50"
                        onClick={onClose}
                        data-test="close-cart"
                      >
                        <IconClose aria-label="Close panel" />
                      </button>
                    </header>
                    {children}
                    {/* <div className="sticky bottom-0 items-center grid gap-y-1.5 text-sm">
                    <button className="h-9 items-center border border-[E1E1E1] hover:bg-[#175C8A] hover:text-white">
                      View My Cart (2)
                    </button>
                    <button className="h-9 items-center border border-[E1E1E1] bg-[#175C8A] text-white hover:text-white">
                      Checkout
                    </button>
                    <button className="h-9 items-center border border-[E1E1E1] hover:bg-[#175C8A] hover:text-white">
                      Continue Shopping
                    </button>
                  </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            )}


            {drawerType === 'menu' && (
              <div
                className={`fixed top-0 bottom-0 flex w-[26%] md-max:w-[85%] ${
                  openFrom === 'right' ? 'right-16 md-max:right-8' : ''
                }`}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom={offScreen[openFrom]}
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo={offScreen[openFrom]}
                >
                  <Dialog.Panel className="w-screen max-w-lg text-left align-middle transition-all transform shadow-xl bg-contrast ">
                    <header
                      className={`sticky top-0 flex items-center my-3 pl-6 pr-3 h-[2rem] md-max:px-8 ${
                        heading ? 'justify-between' : 'justify-end'
                      }`}
                    >
                      {heading !== null && (
                        <Dialog.Title>
                          <Heading as="span" size="lead" id="cart-contents">
                            <div className="flex items-center gap-1 text-sm">
                              {/* {heading} */}
                              {/* <span>
                                <GrCheckmark />
                              </span>
                              <span>Item added to your cart</span> */}
                            </div>
                          </Heading>
                        </Dialog.Title>
                      )}
                      <button
                        type="button"
                        className="p-4 -m-4 transition text-primary hover:text-primary/50"
                        onClick={onClose}
                        data-test="close-cart"
                      >
                        <IconClose aria-label="Close panel" />
                      </button>
                    </header>
                    {children}
                    {/* <div className="sticky bottom-0 items-center grid gap-y-1.5 text-sm">
                              <button className="h-9 items-center border border-[E1E1E1] hover:bg-[#175C8A] hover:text-white">
                                View My Cart (2)
                              </button>
                              <button className="h-9 items-center border border-[E1E1E1] bg-[#175C8A] text-white hover:text-white">
                                Checkout
                              </button>
                              <button className="h-9 items-center border border-[E1E1E1] hover:bg-[#175C8A] hover:text-white">
                                Continue Shopping
                              </button>
                            </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title;

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}
