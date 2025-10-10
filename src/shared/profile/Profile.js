import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import { Link} from 'react-router-dom';

const Profile = ({ data, rout }) => {
  console.log(data);
  const cssView =
    "text-shadow-lg/10 p-2 text-yellow-100 border-b-2 border-dotted uppercase";
  const { user } = useContext(AuthContext);
  return (
    <div className="p-2 lg:p-5">
      <h1>{user?.metadata?.lastSignInTime}</h1>
      {data?.map((userProfile) =>
        user?.email === userProfile?.userEmail &&
        userProfile?.userClass === rout ? (
          <>
            <div className="flex flex-col-reverse lg:flex-row justify-around items-center">
              <div>
                <h1 className={`${cssView}`}>
                  শিক্ষার্থীর নাম:
                  {userProfile?.userName || user?.displayName}
                </h1>
                <h1 className={`${cssView}`}>
                  প্রতিষ্ঠানের নাম:
                  {userProfile?.userInstituteName}
                </h1>
                <h1 className={`${cssView}`}>
                  শ্রেণি: {userProfile?.userClass}
                </h1>
                <h1 className={`${cssView}`}>
                  শাখা/বিভাগ: {userProfile?.userGroup}
                </h1>
                <h1 className={`${cssView}`}>
                  শ্রেণির রোল:
                  {userProfile?.userClassRoll}
                </h1>
                <h1 className={`${cssView}`}>
                  সেশন:
                  {userProfile?.userSession}
                </h1>
                <h1 className={`${cssView}`}>
                  মিডিয়াম:
                  {userProfile?.userVersion}
                </h1>
              </div>
              <div>
                <img
                  src={userProfile?.userPhotoUrl || user?.photoUrl}
                  alt="..."
                />
                <p className={`${cssView}`}>
                  ঠিকানা: {userProfile?.userAddress}
                </p>
                {userProfile?.userEmail === user?.email &&
                userProfile?.userClass === rout ? (
                  <Link
                    to={`/amarclass/${rout}/${userProfile?._id}`}
                    className="top-0 btn bg-green-400 rounded-full hover:bg-blue-500"
                  >
                    Update Profile
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        ) : (
          <></>
        )
      )}
      {data[0]?.userEmail === user?.email &&data[0]?.userClass === rout ? (
        <></>
      ) : (
        <>
         {data[0].userEmail === user.email && rout !== data[0].userClass ? 
                  <h1>
                    আপনি বর্তমান {data[0].userClass} শ্রেণিতে পড়েন।আপনার ক্লাস রুমের
                    লিংক:
                    <Link className="btn bg-orange-300 text-white hover:bg-blue-500" to={`/amarclass/${data[0].userClass}`}>
                      আমার ক্লাস-{data[0].userClass}
                    </Link>
                  </h1>:
          <Link to={`/amarclass/${rout}/profile`}>Set Profile</Link>}
        </>
      )}
    </div>
  );
};

export default Profile;