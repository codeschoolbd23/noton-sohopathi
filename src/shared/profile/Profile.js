import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Context';
import { Link} from 'react-router-dom';

const Profile = ({ data, rout }) => {
  const [fltUser,setUser]=useState("")
       useEffect(()=>{
       const fltUse = data.filter((flt) => {
         return flt.userEmail === user.email;
       });
  setUser(fltUse)
       },[]) 
       console.log(data);
       console.log(fltUser[0])
  const cssView =
    "text-shadow-lg/10 p-2 text-yellow-100 border-b-2 border-dotted uppercase";
  const { user } = useContext(AuthContext);
  return (
    <div className="p-2 lg:p-5">
      <h1>{user?.metadata?.lastSignInTime}</h1>
        {user?.email === fltUser[0]?.userEmail? (
          <div className="flex flex-col-reverse lg:flex-row justify-around items-center uppercase">
            <div>
              <h1 className={`${cssView}`}>
                শিক্ষার্থীর নাম:
                {fltUser[0]?.userName || user?.displayName}
              </h1>
              <h1 className={`${cssView}`}>
                প্রতিষ্ঠানের নাম:
                {fltUser[0]?.userInstituteName}
              </h1>
              <h1 className={`${cssView}`}>শ্রেণি: {fltUser[0]?.userClass}</h1>
              <h1 className={`${cssView}`}>শাখা/বিভাগ: {fltUser[0]?.userGroup}</h1>
              <h1 className={`${cssView}`}>
                শ্রেণির রোল:
                {fltUser[0]?.userClassRoll}
              </h1>
              <h1 className={`${cssView}`}>
                সেশন:
                {fltUser[0]?.userSession}
              </h1>
              <h1 className={`${cssView}`}>
                মিডিয়াম:
                {fltUser[0]?.userVersion}
              </h1>
            </div>
            <div>
              <img src={fltUser[0]?.userPhotoUrl || user?.photoUrl} alt="..." />
              <p className={`${cssView}`}>ঠিকানা: {fltUser[0]?.userAddress}</p>
              {fltUser[0]?.userEmail === user?.email &&
              fltUser[0]?.userClass === rout ? (
                <Link
                  to={`/amarclass/${rout}/${fltUser[0]?._id}`}
                  className="top-0 btn bg-green-400 rounded-full hover:bg-blue-500 uppercase"
                >
                  Update Profile
                </Link>
              ) : (
                <>
                  <Link to={`/amarclass/${rout}/profile`}>Set Profile</Link>
                </>
              )}
            </div>
          </div>
        ) : (
          <Link to={`/amarclass/${rout}/profile`} className='uppercase'>Set Profile</Link>
        )}
    </div>
  );
};

export default Profile;