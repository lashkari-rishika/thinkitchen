import React, { useEffect, useState } from "react";
import Myaccount from "./Myaccount";
import Myorder from "./Myorder";
import { Link } from '~/components';
import { usePrefixPathWithLocale } from '~/lib/utils';
import { Form } from "@remix-run/react";

const VerticalTabs = ({ customer, addresses, orders }) => {
  const [activeTab, setActiveTab] = useState("Profile");

  useEffect(() => {
    // Click on the defaultOpen tab when the component mounts
    document.getElementById("defaultOpen").click();
  }, []);

  const openCity = (event, cityName) => {
    const tabcontents = document.getElementsByClassName("tabcontents");
    for (let i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
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

    // Update the active tab state
    setActiveTab(cityName); // Updated the activeTab state
  };

  return (
    <div className="container mx-auto">

      <div className="text-center xl:hidden sm:mt-12 sm-only:block">
        <p className="text-zinc-400 text-xs mb-4"> Home | My Order</p>
        <h1 className="text-3xl sm:text-2xl sm:font-medium">My Order</h1>
      </div>

      <div className="lg:grid lg:grid-cols-5 lg:gap-4 ">

        <div className="sm:flex sm:justify-end sm:font-semibold sm:mx-2.5 sm:my-2.5 lg:hidden xl:hidden">
          <Form method="post" action={usePrefixPathWithLocale('/account/logout')}>
            <button className="border-b border-black pb-1" onClick={(e) => openCity(e, "Logout")}
            >
              Logout
            </button>
          </Form>
        </div>

        <div className="sm-only:bg-[#d3d3d34d] md-only:bg-[#d3d3d34d] sm-only:flex md-only:flex lg:mt-20 lg:bg-[#d3d3d34d] lg-only:ml-4 xl-only:ml-4">
          <div className="sm-only:w-[70%] sm-only:flex sm-only:py-1 md md-only:w-[70%] md-only:py-1 lg-only:w-full">
            <button
              className={`tablinks font-bold block text-left w-full pt-6 pb-4 px-4 relative sm-only: sm-only:pt-0 sm-only:pb-0 ${activeTab === "Profile" ? "text-black sm-only:border-b-2 sm-only:border-black" : "text-gray-500"}`}
              onClick={(e) => { openCity(e, "Profile"); setActiveTab("Profile"); }}
              id="defaultOpen"
            >
              My Profile
              <span className="absolute bottom-0 left-4 right-4 h-0.5 lg:bg-[#c8c2c26e]"></span>
            </button>

            <button
              className={`tablinks font-bold  block text-left w-full pt-4 pb-4 px-4 relative sm-only:pt-0 sm-only:pb-0 ${activeTab === "Orders" ? "text-black sm-only:border-b-2 sm-only:border-black" : "text-gray-500"}`}
              onClick={(e) => { openCity(e, "Orders"); setActiveTab("Orders"); }}
            >
              My Orders
              <span className="absolute bottom-0 left-4 right-4 h-0.5 lg:bg-[#c8c2c26e]"></span>
            </button>

            <Form method="post" action={usePrefixPathWithLocale('/account/logout')}>
              <button
                className={`sm-only:hidden md:hidden tablinks lg:block text-left font-bold w-full pt-4 pb-4 px-4 relative ${activeTab === "Logout" ? "text-black" : "text-gray-500"}`}
                onClick={(e) => { openCity(e, "Logout"); setActiveTab("Logout"); }}
              >
                Logout
                <span className="absolute bottom-0 left-4 right-4 h-0.5 lg:bg-[#c8c2c26e]"></span>
              </button>
            </Form>
          </div>
        </div>

        <div className="p-2 col-span-4 lg:pt-6 lg:pb-6">
          <div id="Profile" className="tabcontents hidden">
            <h3 className="text-lg "><Myaccount customer={customer} addresses={addresses} /> </h3>
          </div>

          <div id="Orders" className="tabcontents hidden">
            <h3 className="text-lg "><Myorder orders={orders} /></h3>
          </div>
        </div>

      </div>
    </div >
  );
};

export default VerticalTabs;
