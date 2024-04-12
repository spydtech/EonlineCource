import React, { useState } from 'react';

function Settings() {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="w-full max-w-md mx-auto flex gap-10 pt-10 ml-10">
            <div className="grid ">
                <button
                    className={` py-4 text-start font-medium text-gray-700  rounded-tl-lg focus:outline-none ${activeTab === 'tab1' && 'active:bg-gray-200'}`}
                    onClick={() => openTab('tab1')}
                >
                    Account
                </button>
                <button
                    className={` py-4 text-start font-medium text-gray-700  rounded-tr-lg focus:outline-none ${activeTab === 'tab2' && 'active:bg-gray-200'}`}
                    onClick={() => openTab('tab2')}
                >
                    Tab 2
                </button>
            </div>
            <div id="tab1" className={`tabcontent p-4 ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                <h2 className="text-lg font-bold text-gray-800">Tab 1 Content</h2>
                <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim euismod,
                    imperdiet felis vel, ultrices risus. Sed nec quam id elit fringilla blandit a a risus.</p>
            </div>
            <div id="tab2" className={`tabcontent p-4 ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                <h2 className="text-lg font-bold text-gray-800">Tab 2 Content</h2>
                <p className="mt-2 text-gray-700">Duis lobortis velit tellus, eget luctus tellus facilisis eget. Maecenas non massa
                    varius, molestie lorem eget, molestie nisi. Suspendisse potenti.</p>
            </div>
        </div>
    );
}

export default Settings;
