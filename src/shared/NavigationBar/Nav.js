import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";
const Nav = () => {
  const { user, logOut } = React.useContext(AuthContext);
  const navContent = [
    {
      id: 1,
      to1: "/sohopathi",
      content: "সহপাঠি",
    },
    {
      id: 2,
      to1: "/library",
      content: "লাইব্রেরী",
    },
  ];
  const navCss =
    "border-0 p-1 border-b-2 border-b-green-400 m-2  hover:bg-fuchsia-500 hover:text-white hover:border-b-yellow-300";
  const menubar = (
    <>
      {navContent.map((nv) => (
        <span key={nv.id} className="my-1">
          <Link
            to={nv.to1}
            className={`${navCss}`}
          >
            {nv.content}
          </Link>
        </span>
      ))}
    </>
  );
  const accountBtnCss =
    "btn text-yellow-200 bg-purple-500 hover:text-white hover:bg-blue-700 border-0 mx-auto";
  const accountBtn = (
    <>
      {user?.email ? (
        <Link onClick={() => logOut()} className={`${accountBtnCss}`} to="/">
          Sign out
        </Link>
      ) : (
        <Link className={`${accountBtnCss}`} to="/signin">
          sign in
        </Link>
      )}
    </>
  );
  return (
    <div className="w-full grad2 text-white shadow-sm text-shadow-lg/10 flex lg:flex-row-reverse justify-between items-center h-28">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-blue-500 text-xl rounded-none z-1 mt-3 w-80 p-2 shadow"
        >
          {menubar}
          {accountBtn}
        </ul>
      </div>
      <div className="w-32 ml-auto hidden lg:flex justify-end px-1">
        {accountBtn}
      </div>
      <div className="flex justify-center items-center  w-full">
        <div className="hidden lg:flex flex-wrap">{menubar}</div>

        {user?.email ? (
          <Link className={`text-shadow-lg/30 ${navCss}`} to="/amarclass">
            আমার ক্লাস
          </Link>
        ) : (
          <Link className={`text-shadow-lg/30 ${navCss}`} to="/signin">
            আমার ক্লাস
          </Link>
        )}
      </div>
        {user?.photoURL ? (
          <div className="ml-auto">
            <img
              src={`${user?.photoURL}`}
              alt="user"
              className="rounded-full w-26 h-26 p-2"
            />
          </div>
        ) : (
          <></>
        )}
    </div>
  );
};

export default Nav;
