import React, { useContext } from "react";
import { AuthContext } from "../../context/Context";
import "../../../src/App";
const SubNav = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(user?.photoURL);
  console.log(user?.displayName);
  return (
    <div className="grad w-full flex justify-between items-center  text-yellow-200 py-3 lg:py-4 shadow-2xl h-24 lg:h-56">
      <div>
        <img
          src="https://i.ibb.co.com/3966qd03/images-1.jpg"
          alt="studenta images"
          className="h-24 w-full lg:w-96 lg:h-56 "
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-sm lg:text-2xl lg:py-2 text-shadow-lg/30 text-blue-800">
          {user?.displayName?.slice(0, 16)}
        </h1>
        <div className="w-full text-2xl lg:text-6xl font-extrabold flex  justify-center items-center text-shadow-lg/50 font-mono text-center px-1 lg:px-2">
          নতুন সহপাঠি
        </div>
      </div>
      {user?.photoURL ? (
        <div>
          <img src={`${user?.photoURL}`} alt="user" className="h-24 lg:h-56" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SubNav;
