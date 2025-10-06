import React, { useContext } from "react";
import { AuthContext } from "../../context/Context";
import "../../../src/App";
const SubNav = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(user?.photoURL);
  console.log(user?.displayName);
  return (
    <div className="navBackground w-full flex flex-col justify-center items-center  text-yellow-200 shadow-2xl h-48 lg:h-80 bg-opacity-70">
          <div className="w-full text-6xl lg:text-9xl font-extrabold flex justify-start items-center text-shadow-lg/50 text-center px-5 lg:px-2 text-red-500">
            <h1>আমার সহপাঠি</h1>
          </div>
    </div>
  );
};

export default SubNav;
