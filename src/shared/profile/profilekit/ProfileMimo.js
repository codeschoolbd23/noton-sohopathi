import React, { useContext } from "react";
import { AuthContext } from "../../../context/Context";
// import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const ProfileMimo = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { register, handleSubmit } = useForm();
  // const profiledata=useLoaderData()
  const profileData = [
    {
      id: 1,
      type: "text",
      inputName: "id",
      defaultValue: `${user?.uid}`,
      disabled: true,
    },
    {
      id: 2,
      type: "text",
      inputName: "userVersion",
      defaultValue: "user version",
      disabled: false,
    },
    {
      id: 3,
      type: "text",
      inputName: "userEmail",
      defaultValue: `${user?.email}`,
      disabled: true,
    },
    {
      id: 4,
      type: "text",
      inputName: "userName",
      defaultValue: `${user?.displayName}`,
      disabled: false,
    },
    {
      id: 5,
      type: "text",
      inputName: "userInstituteName",
      defaultValue: "Institution name",
      disabled: false,
    },
    {
      id: 6,
      type: "text",
      inputName: "userClass",
      defaultValue: "Class",
      disabled: false,
    },
    {
      id: 7,
      type: "text",
      inputName: "userPhotoUrl",
      defaultValue: `${user?.photoURL}`,
      disabled: false,
    },
    {
      id: 8,
      type: "text",
      inputName: "userClassRoll",
      defaultValue: "Roll",
      disabled: false,
    },
    {
      id: 9,
      type: "text",
      inputName: "userGroup",
      defaultValue: "Group",
      disabled: false,
    },
    {
      id: 10,
      type: "text",
      inputName: "userSession",
      defaultValue: "session",
      disabled: false,
    },
    {
      id: 11,
      type: "text",
      inputName: "userAddress",
      defaultValue: "address",
      disabled: false,
    },
  ];
  const handleUploadData2 = (data) => {
    const {
      id,
      userEmail,
      userInstituteName,
      userClass,
      userName,
      userVersion,
      userPhotoUrl,
      userClassRoll,
      userAddress,
      userSession,
      userGroup,
    } = data;
    const postData = {
      id: id,
      userEmail: userEmail,
      userName: userName,
      userInstituteName: userInstituteName,
      userClass: userClass,
      userVersion: userVersion,
      userPhotoUrl: userPhotoUrl,
      userClassRoll: userClassRoll,
      userGroup: userGroup,
      userAddress: userAddress,
      userSession: userSession,
    };
    fetch(`https://sohopathi-server.vercel.app/profile`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          alert(`${userName} is submitted successfully`);
        }
      });
  };

  const cssInput = "border-0 border-b-2  border-blue w-full m-1 text-white";

  return (
    <div className="w-full">
      <div className="p-1 grad3 lg:w-1/2 mx-auto h-screen my-2">
        <h1 className="p-3 grad2">আমার তথ্য পূরণ করি</h1>
        {
          <form onSubmit={handleSubmit(handleUploadData2)} className="w-full ">
            <div className="w-full">
              {profileData?.map((profile) => (
                <div key={profile.id} className="w-full">
                  <input
                    type={profile?.type}
                    placeholder={profile?.defaultValue}
                    className={`${cssInput}`}
                    {...register(`${profile?.inputName}`, {
                      required: true,
                      disabled: profile?.disabled,
                    })}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="grad3 btn  w-48 bg-blue-600 text-white hover:text-blue-500 hover:bg-yellow-100 rounded-full">
                Submit
              </button>
              <Link
                to="/amarclass/9"
                className="grad3 uppercase btn  w-48 bg-blue-600 text-white hover:text-blue-500 hover:bg-yellow-100 rounded-full"
              >
                Return Profile
              </Link>
            </div>
          </form>
        }
      </div>
    </div>
  );
};

export default ProfileMimo;
