import React from 'react';
import { Outlet } from 'react-router-dom';
const AmarclassMain = () => {
    return (
      <>
        <div className="flex-grow h-screen overflow-y-auto">
          <Outlet />
        </div>
      </>
    );
};

export default AmarclassMain;