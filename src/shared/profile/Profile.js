import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import { Link, useLoaderData } from 'react-router-dom';

const Profile = () => {
    const {user}=useContext(AuthContext)
    const userData=useLoaderData()
    return (
      <div className="p-2 lg:p-5">
        <h1>{user?.metadata?.lastSignInTime}</h1>
        <Link to="/amarclass/9/profile">Set Profile</Link> 
        {userData?.map(
          (userProfile) =>
            user.email === userProfile.userEmaill && (
              <div className="flex flex-col-reverse lg:flex-row justify-start items-start">
                <div>
                  <h1 className="text-5xl font-bold">
                    {userProfile?.userName || user?.displayName}
                  </h1>
                  <h1 className="text-xl font-bold">
                    {userProfile?.userInstituteName}
                  </h1>
                  <h1 className="text-xl font-bold">{userProfile?.userName}</h1>
                  <h1 className="text-xl font-bold">
                    {userProfile?.userClass}
                  </h1>
                  <h1 className="text-xl font-bold">
                    {userProfile?.userGroup}
                  </h1>
                  <h1 className="text-xl font-bold">
                    {userProfile?.userClassRoll}
                  </h1>
                  <h1 className="text-xl font-bold">
                    {userProfile?.userSession}
                  </h1>
                  <h1 className="text-xl font-bold">
                    {userProfile?.userVersion}
                  </h1>
                </div>
                <div>
                  <img
                    src={userProfile.userPhotoUrl || user.photoUrl}
                    alt="..."
                  />
                  <p>{userProfile?.userAddress}</p>
                </div>
              </div>
            )
        )}
      </div>
    );
};

export default Profile;