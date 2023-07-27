import React, {useEffect, useState} from 'react';
import {FaAngleDown} from 'react-icons/fa';
import img2 from '../asset/181618789-set-of-different-cooking-utensils-on-gray-countertop-in-kitchen.webp';
const MenuHeader = () => {
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
    <header className="header">
      <div className="container">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <a href="#">MyStore</a>
            </div>
          </div>
          <div
            className={`header-item item-center ${menuActive ? 'active' : ''}`}
          >
            <div className="menu-overlay" onClick={toggleMenu}></div>
            <nav className={`menu ${menuActive ? 'active' : ''}`}>
              <div className="mobile-menu-head">
                <div className="go-back" onClick={hideSubMenu}>
                  <FaAngleDown />
                </div>
                <div className="current-menu-title">{currentMenuTitle}</div>
                <div className="mobile-menu-close" onClick={toggleMenu}>
                  &times;
                </div>
              </div>
              <ul className={`menu-main ${subMenuActive ? 'active' : ''}`}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="menu-item-has-children" onClick={showSubMenu}>
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
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-item item-right">
            <a href="#">
              <i className="fas fa-search"></i>
            </a>
            <a href="#">
              <i className="far fa-heart"></i>
            </a>
            <a href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <div className="mobile-menu-trigger" onClick={toggleMenu}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
