import React, { useState } from 'react';
import Myaccount from '../components/Myaccount';

const Myaccounttabs = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    const tabs = [
      { title: 'My Profile ', content:''},
      { title: 'My Orders', content: '' },
      { title: 'Logout', content: '' }, 
      // Add more tabs as needed
    ];
  
    return (
        // put flex if required
      <div className="">  
        <div className="">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`w-full px-4 py-2 text-left border-b-2  border-gray ${
                activeTab === index ? ' text-black ' : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className=" p-4 ">
          {tabs.map((tab, index) => (
            <div key={index} className={activeTab === index ? '' : 'hidden'}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Myaccounttabs;
  
  