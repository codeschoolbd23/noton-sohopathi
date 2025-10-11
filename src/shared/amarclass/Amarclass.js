import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/Context";
const Amarclass = () => {
  const amarclass = useLoaderData();
  const { user } = useContext(AuthContext);
  const cssLinkBtn =
    "btn  w-full min-w-48 bg-blue-200/10 m-1 p-2 lg:p-10 hover:bg-green-500/10 text-shadow-lg/20";
    const [fltUser,setUser]=useState("")
     useEffect(()=>{
     const fltUse= amarclass.filter((flt) => {
        return flt.userEmail === user.email
          
      });
setUser(fltUse)
     },[]) 
     console.log(fltUser)
  return (
    <div className="grad2 mx-auto min-h-screen">
      {fltUser.length > 0 ? (
        <div
          className="p-10 flex flex-col justify-center flex-grow uppercase"
          key={fltUser[0]?._id}
        >
          <h1 className="w-full bg-orange-800 p-5 text-center text-4xl text-shadow-lg/30 mx-auto rounded-md">
            প্রবেশ করূন
          </h1>
          {fltUser[0].userClass === "6" && (
            <Link to="/amarclass/6" className={`${cssLinkBtn}`}>
              Six ( ষষ্ঠ শ্রেণি )
            </Link>
          )}
          {fltUser[0].userClass === "7" && (
            <Link to="/amarclass/7" className={`${cssLinkBtn}`}>
              Seven ( সপ্তম শ্রেণি )
            </Link>
          )}
          {fltUser[0].userClass === "8" && (
            <Link to="/amarclass/8" className={`${cssLinkBtn}`}>
              Eight ( অষ্টম শ্রেণি )
            </Link>
          )}
          {fltUser[0].userClass === "9" && (
            <Link to="/amarclass/9" className={`${cssLinkBtn}`}>
              Nine ( নবম শ্রেণি )
            </Link>
          )}
          {fltUser[0].userClass === "10" && (
            <Link to="/amarclass/10" className={`${cssLinkBtn}`}>
              Ten ( দশম শ্রেণি )
            </Link>
          )}
          {fltUser[0].userClass === "11" && (
            <Link to="/amarclass/11" className={`${cssLinkBtn}`}>
              Eleven ( একাদশ শ্রেণি )
            </Link>
          )}
          {fltUser[0].userClass === "12" && (
            <Link to="/amarclass/12" className={`${cssLinkBtn}`}>
              Twelve ( দ্বাদশ শ্রেণি )
            </Link>
          )}
        </div>
      ) : (
        <div
          className="p-10 flex flex-col justify-center flex-grow uppercase">
          <h1 className="w-full bg-orange-800 p-5 text-center text-4xl text-shadow-lg/30 mx-auto rounded-md">
            ক্লাস নিবার্চন করূন
          </h1>
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
      )}
    </div>
  );
};

export default Amarclass;
