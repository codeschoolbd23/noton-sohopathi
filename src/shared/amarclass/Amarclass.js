import React from "react";
import { Link } from "react-router-dom";
const Amarclass = () => {
 const cssLinkBtn="btn  w-full min-w-48 bg-blue-200/10 m-1 p-2 lg:p-10 hover:bg-green-500/10 text-shadow-lg/20"
  return (
    <div className="grad2 mx-auto">
      <div className="p-10 flex flex-col justify-center flex-grow uppercase">
        <h1 className="w-full bg-orange-800 p-5 text-center text-4xl text-shadow-lg/30 mx-auto rounded-md">ক্লাস নির্বাচন করূন</h1>
        <Link to="/amarclass/6" className={`${cssLinkBtn}`}>
          Six ( ষষ্ঠ শ্রেণি )
        </Link>
        <Link to="/amarclass/7" className={`${cssLinkBtn}`}>
          Seven ( সপ্তম শ্রেণি )
        </Link>
        <Link to="/amarclass/8" className={`${cssLinkBtn}`}>
          Eight ( অষ্টম শ্রেণি )
        </Link>
        <Link to="/amarclass/9" className={`${cssLinkBtn}`}>
          Nine ( নবম শ্রেণি )
        </Link>
        <Link to="/amarclass/10" className={`${cssLinkBtn}`}>
          Ten ( দশম শ্রেণি )
        </Link>
        <Link to="/amarclass/11" className={`${cssLinkBtn}`}>
          Eleven ( একাদশ শ্রেণি )
        </Link>
        <Link to="/amarclass/12" className={`${cssLinkBtn}`}>
          Twelve ( দ্বাদশ শ্রেণি )
        </Link>
      </div>
    </div>
  );
};

export default Amarclass;
