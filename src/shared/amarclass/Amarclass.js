import React from "react";
import { Link } from "react-router-dom";
const Amarclass = () => {
 const cssLinkBtn="btn w-48 bg-blue-700"
  return (
        <div className="p-10 flex flex-col flex-grow">
          <h1>Select Your Class</h1>
          <Link to="/amarclass/6"
          className={`${cssLinkBtn}`}
          >
         Six
          </Link>
          <Link to="/amarclass/7"
          className={`${cssLinkBtn}`}
          >
          Seven
          </Link>
          <Link to="/amarclass/8"
          className={`${cssLinkBtn}`}
          >
          Eight
          </Link>
          <Link to="/amarclass/9"
          className={`${cssLinkBtn}`}
          >
          Nine
          </Link>
          <Link to="/amarclass/10"
          className={`${cssLinkBtn}`}
          >
          Ten
          </Link>
          <Link to="/amarclass/11"
          className={`${cssLinkBtn}`}
          >
          Eleven
          </Link>
          <Link to="/amarclass/12"
          className={`${cssLinkBtn}`}
          >
          Twelve
          </Link>
      </div>
  );
};

export default Amarclass;
