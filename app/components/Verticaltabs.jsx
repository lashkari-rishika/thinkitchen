import React, { useEffect } from "react";
import Myaccount from "./Myaccount";
import Myorder from "./Myorder";
import { Link } from '~/components';
import { usePrefixPathWithLocale } from '~/lib/utils';
import { Form } from "@remix-run/react";

const VerticalTabs = ({ customer, addresses, orders }) => {
  useEffect(() => {
    // Click on the defaultOpen tab when the component mounts
    document.getElementById("defaultOpen").click();
  }, []);

  const openCity = (event, cityName) => {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    const selectedCity = document.getElementById(cityName);
    if (selectedCity) {
      selectedCity.style.display = "block";
    }

    event.currentTarget.classList.add("active");
  };

  return (
    <div className="container mx-auto">

      {/* <div className="text-center xl:hidden sm:mt-12 sm-only:block">
        <p className="text-zinc-400 text-xs mb-4"> Home | My Order</p>
        <h1 className="text-3xl sm:text-2xl sm:font-medium">My Order</h1>
      </div> */}

      <div className="lg:grid lg:grid-cols-5 lg:gap-4 ">

        <div className="lg:hidden sm-only:flex sm-only:justify-end sm-only:font-semibold sm-only:mx-2.5 sm-only:my-2.5 ">
          <Form method="post" action={usePrefixPathWithLocale('/account/logout')}>
            <Link to="" className="border-b border-black pb-1">Log Out</Link>
          </Form>
        </div>

        <div className="lg:mt-20  bg-[#d3d3d34d] sm-only:flex lg-only:ml-4 xl-only:ml-4">
          <button
            className="tablinks block text-left w-full pt-6 pb-4 px-4 xl-only:hover:bg-gray-200 relative"
            onClick={(e) => openCity(e, "London")}
            id="defaultOpen"
          >
            My Profile
            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c8c2c26e]"></span>
          </button>

          <button
            className="tablinks block text-left w-full pt-4 pb-4 px-4 xl-only:marker:hover:bg-gray-200 relative"
            onClick={(e) => openCity(e, "Paris")}
          >
            My Orders
            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c8c2c26e]"></span>
          </button>

          <Form method="post" action={usePrefixPathWithLocale('/account/logout')}>
            <button
              className="tablinks block text-left w-full pt-4 pb-4 px-4 xl-only:hover:bg-gray-200 sm-only:hidden relative"
              onClick={(e) => openCity(e, "Tokyo")}
            >
              Logout
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c8c2c26e]"></span>
            </button>
          </Form>

      </div>



      <div className="p-2 col-span-4 lg-only:px-10 lg:pt-6 lg:pb-6">

        <div id="London" className="tabcontent hidden">
          <h3 className="text-lg "><Myaccount customer={customer} addresses={addresses} /> </h3>

        </div>

        <div id="Paris" className="tabcontent hidden">
          <h3 className="text-lg "><Myorder orders={orders} /></h3>

        </div>
        {/* 
          <div id="Tokyo" className="tabcontent hidden">
            <h3 className="text-lg "></h3>
          </div> */}

      </div>
    </div>

    </div >
  );
};

export default VerticalTabs;
