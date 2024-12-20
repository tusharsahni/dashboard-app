import React from 'react';

const NavigationMenu = () => {
  return (
    <nav className="w-64 bg-[#ffffff] text-gray-500 flex flex-col h-full">
    <style>
       @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
      <h2 className="text-3xl font-bold font-poppins  mr-4 ml-16 mt-4 mb-4">
        <a href="/"> <img src="/logo.png  "/> </a>
      </h2>
      <ul className="space-y-2 p-6 f font-poppins text-base">
        {[
          { name: 'Dashboard', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dashboard" width="30" height="30">
            <path d="M19.088,4.95453c-.00732-.00781-.00952-.01819-.01715-.02582s-.01819-.00995-.02606-.01733a9.97886,9.97886,0,0,0-14.08948,0c-.00787.00738-.01837.00964-.02606.01733s-.00983.018-.01715.02582a10,10,0,1,0,14.1759,0ZM12,20a7.9847,7.9847,0,0,1-6.235-3H9.78027a2.9636,2.9636,0,0,0,4.43946,0h4.01532A7.9847,7.9847,0,0,1,12,20Zm-1-5a1,1,0,1,1,1,1A1.001,1.001,0,0,1,11,15Zm8.41022.00208L19.3999,15H15a2.99507,2.99507,0,0,0-2-2.81573V9a1,1,0,0,0-2,0v3.18427A2.99507,2.99507,0,0,0,9,15H4.6001l-.01032.00208A7.93083,7.93083,0,0,1,4.06946,13H5a1,1,0,0,0,0-2H4.06946A7.95128,7.95128,0,0,1,5.68854,7.10211l.65472.65473A.99989.99989,0,1,0,7.75732,6.34277l-.65466-.65466A7.95231,7.95231,0,0,1,11,4.06946V5a1,1,0,0,0,2,0V4.06946a7.95231,7.95231,0,0,1,3.89734,1.61865l-.65466.65466a.99989.99989,0,1,0,1.41406,1.41407l.65472-.65473A7.95128,7.95128,0,0,1,19.93054,11H19a1,1,0,0,0,0,2h.93054A7.93083,7.93083,0,0,1,19.41022,15.00208Z"></path>
          </svg>
            )
          },
          { name: 'My Cases', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" id="briefcase" viewBox="0 0 32 32" width="30" height="35"> 
            <path d="M4.5 28h23c1.378 0 2.5-1.122 2.5-2.5v-15C30 9.122 28.878 8 27.5 8h-5.11l-.526-2.106A2.497 2.497 0 0 0 19.438 4h-6.877a2.496 2.496 0 0 0-2.425 1.894L9.61 8H4.5A2.503 2.503 0 0 0 2 10.5v15C2 26.878 3.122 28 4.5 28zm23-1h-23c-.827 0-1.5-.673-1.5-1.5V15.17l10.5 3.111V21.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.219L29 15.17V25.5c0 .827-.673 1.5-1.5 1.5zM16 20a.5.5 0 0 0-.5.5v.5h-1v-2h3v2h-1v-.5a.5.5 0 0 0-.5-.5zm1.5-2.093V18h-3v-1h3v.907zM11.106 6.136A1.498 1.498 0 0 1 12.562 5h6.877a1.5 1.5 0 0 1 1.456 1.136L21.36 8H10.64l.466-1.864zM3 10.5C3 9.673 3.673 9 4.5 9h23c.827 0 1.5.673 1.5 1.5v3.626l-10.5 3.111V16.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v.738L3 14.126V10.5z"></path>
          </svg>
            )
          },
          { name: 'Activities', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="heartbeat" width="30" height="35">
            <path d="M44 25h-6c-.27 0-.52.11-.71.29l-2.68 2.68L30.98 9.8c-.09-.45-.48-.78-.94-.8a.984.984 0 0 0-1 .72l-7.2 25.19-6.91-17.28c-.15-.37-.49-.61-.89-.63a1 1 0 0 0-.94.55L9.38 25H4c-.55 0-1 .45-1 1s.45 1 1 1h6c.38 0 .73-.21.89-.55l3-6.01 7.17 17.93c.16.38.53.63.94.63h.05c.43-.02.79-.31.91-.72l6.87-24.03 3.19 15.96a1.002 1.002 0 0 0 1.69.51l3.7-3.72H44c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
          </svg>
            )
          },
          { name: 'Calendar', icon: (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.89" width="30" height="30"><title>date</title><path d="M81.61,4.73C81.61,2.12,84.19,0,87.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM66.11,105.66c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1ZM15.85,68.94c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14-10.1H107c.8,0,.8,10.1,0,10.1H91.25c-.8,0-.8-10.1,0-10.1ZM15.85,87.3c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1ZM41,87.3c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14,0c-.8,0-.8-10.1,0-10.1H107c.8,0,.8,10.1,0,10.1Zm-75.4,18.36c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,43.47H116.47v-22a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,0,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.09a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.55V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07v22Zm110.08,6.41H6.4v63.67a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.55a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V49.88ZM50.43,18.54a3.2,3.2,0,0,1,0-6.4H71.92a3.2,3.2,0,1,1,0,6.4Z"/></svg>
            )
          },
          { name: 'Files', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 412 511.56" width="30" height="30"><path fill-rule="nonzero" d="M32.24 0h229.59a9.06 9.06 0 016.77 3.04l140.63 136.27a8.971 8.971 0 012.74 6.48h.03V479.32c0 8.83-3.63 16.88-9.47 22.74l-.05.05c-5.86 5.83-13.9 9.45-22.72 9.45H32.24c-8.87 0-16.94-3.63-22.78-9.47C3.63 496.26 0 488.19 0 479.32V32.24C0 23.37 3.63 15.3 9.46 9.46 15.3 3.63 23.37 0 32.24 0zm56.24 414.35c-5.01 0-9.08-4.06-9.08-9.07 0-5.01 4.07-9.08 9.08-9.08h235.04c5.01 0 9.07 4.07 9.07 9.08s-4.06 9.07-9.07 9.07H88.48zm0-74.22c-5.01 0-9.08-4.06-9.08-9.07 0-5.01 4.07-9.08 9.08-9.08h231.38c5.01 0 9.08 4.07 9.08 9.08s-4.07 9.07-9.08 9.07H88.48zm0-74.22c-5.01 0-9.08-4.07-9.08-9.08s4.07-9.07 9.08-9.07H275.7c5.01 0 9.08 4.06 9.08 9.07 0 5.01-4.07 9.08-9.08 9.08H88.48zm0-74.23c-5.01 0-9.08-4.06-9.08-9.07 0-5.01 4.07-9.08 9.08-9.08h114.45c5.01 0 9.07 4.07 9.07 9.08s-4.06 9.07-9.07 9.07H88.48zm0-74.22c-5.01 0-9.08-4.06-9.08-9.07a9.08 9.08 0 019.08-9.08h56.29a9.08 9.08 0 019.08 9.08c0 5.01-4.07 9.07-9.08 9.07H88.48zm176.37-92.85v114.4h118.07L264.85 24.61zm129 132.55H255.78c-5.01 0-9.08-4.07-9.08-9.08V18.15H32.24c-3.86 0-7.39 1.59-9.95 4.15-2.55 2.55-4.14 6.08-4.14 9.94v447.08c0 3.86 1.59 7.39 4.14 9.94 2.56 2.56 6.09 4.15 9.95 4.15h347.52c3.89 0 7.41-1.58 9.94-4.11l.04-.04c2.53-2.53 4.11-6.05 4.11-9.94V157.16z" /></svg>
            )
          },
          { name: 'Open a Dispute', icon: (
           <img src="/fist.png"  width="30" height="35" alt="" className=" "/>

            )
          },
        ].map(({ name, icon }) => (
          <li key={name} className="hover:bg-[#1B56A0] p-1 rounded cursor-pointer flex items-center whitespace-nowrap ">
            <span className="mr-5"></span> 
            {icon}
            <span className="mr-5"></span>  
            {name}
            <span className="mr-5"></span> 
          </li>
        ))}
      </ul>
      <div className="justice mr-4 ml-4 " >
        <img src="/justice.png" alt="justice image" width="200" height="10"  />
      </div>
    </nav>
  );
};

export default NavigationMenu;
