import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';

const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
      <div className="grad3 bg-primary text-primary-content p-10">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col">
            
            <div>
              <h1 className="text-5xl font-bold">{user?.displayName||"My Name unable"}</h1>
              <h1 className="text-xl font-bold">{user?.email}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Know more....</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;