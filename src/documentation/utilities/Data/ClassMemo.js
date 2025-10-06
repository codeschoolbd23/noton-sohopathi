import React from 'react';
import { Outlet } from 'react-router-dom';
import AmarclassSidebar from '../../../shared/amarclass/AmarclassSidebar';

const ClassMemo = (userClassObject) => {
  console.log(userClassObject);
  return (
    <div>
      <div
        className="drawer 
      grad3
      lg:drawer-open 
      xl:drawer-open 
      xxl:drawer-open 
      lg:z-10
      xl:z-10
      xxl:z-10"
      >
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="grad3 drawer-button rounded-none flex lg:hidden xl:hidden xxl:hidden text-start p-1 border-b-2 border-b-green-400 w-full"
          >
            ক্লাস মেনু
          </label>
          <div className="flex-grow h-screen overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu grad3">
            <AmarclassSidebar userClassObject={userClassObject} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassMemo;