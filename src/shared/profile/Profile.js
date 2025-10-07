import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import ProfileMimo from './profilekit/ProfileMimo';

const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
      <div className="p-2 lg:p-5">
        <h1>{user?.metadata?.lastSignInTime}</h1>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-5xl font-bold">
            {user?.displayName || "My Name unable"}
          </h1>
          <h1 className="text-xl font-bold">{user?.email}</h1>
          <ProfileMimo/>
        </div>
      </div>
    );
};

export default Profile;