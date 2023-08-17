
import React, { useState } from 'react';
import Blog_img1 from "../../../asset/Blog_img1.png";
import Blog_img2 from "../../../asset/Blog_img2.png";
import Blog_img3 from "../../../asset/Blog_img3.png";
import Blog_img4 from "../../../asset/Blog_img4.png";
import Blog_img5 from "../../../asset/Blog_img5.png";
import Blog_img6 from "../../../asset/Blog_img6.png";
import Blog_img7 from "../../../asset/Blog_img7.png";
import Blog_img8 from "../../../asset/Blog_img8.png";
import Blog_img9 from "../../../asset/Blog_img9.png";   

const Tabs = () => {
    const tabsData = [
        {
            title: 'Kitchen',
            content: '',
        },
        {
            title: 'Inspiration',
            content:'',
            
        },
        {
            title: 'Food & Drink',
            content: '',

        },
        {
            title: 'Entertaininga',
            content:'',
        },
        {
            title: 'Tips & tricks',
            content:''
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className='w-screen bg-zinc-100'>
                <div className="tab-buttons flex justify-end mr-[10%]">
                    {tabsData.map((tab, index) => (
                        <button key={index} 
                        onClick={() => handleTabClick(index)} className="text-sm">{tab.title }
                       </button>
                    ))}
                </div>
            </div>

            <div className="tab-content">
                {tabsData.map((tab, index) => (
                    <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
