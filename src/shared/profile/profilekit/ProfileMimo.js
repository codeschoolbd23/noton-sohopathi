import React, { useContext } from "react";
import { AuthContext } from "../../../context/Context";
// import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const ProfileMimo = ({ data,rout }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(data);
  const { register, handleSubmit } = useForm();
  // const profiledata=useLoaderData()
  const profileData = [
    {
      id: 1,
      type: "text",
      inputName: "id",
      placeholder: "আপনার আইডি লিখুন/ক্লাস রোল",
      defaultValue: `${user?.uid}`,
      readonly: true,
    },
    {
      id: 2,
      type: "text",
      inputName: "userVersion",
      placeholder: "আপনি কোন ভার্সনে পড়েন? বাংলা/ইংরেজি",
      defaultValue: "বাংলা",
      readonly: false,
    },
    {
      id: 3,
      type: "text",
      inputName: "userEmail",
      placeholder: "আপনার ইমেইল লিখুন",
      defaultValue: `${user?.email}`,
      readonly: true,
    },
    {
      id: 4,
      type: "text",
      inputName: "userName",
      placeholder: "আপনার নাম লিখুন",
      defaultValue: `${user?.displayName}`,
      readonly: false,
    },
    {
      id: 5,
      type: "text",
      inputName: "userInstituteName",
      placeholder: "আপনার প্রতিষ্ঠানের নাম লিখুন",
      // defaultValue: "Institution name",
      readonly: false,
    },
    {
      id: 6,
      type: "text",
      inputName: "userClass",
      defaultValue: `${rout}`,
      readonly: false,
    },
    {
      id: 7,
      type: "text",
      inputName: "userPhotoUrl",
      defaultValue: `${user?.photoURL}`,
      readonly: false,
    },
    {
      id: 8,
      type: "text",
      inputName: "userClassRoll",
      placeholder: "আপনার রোল লিখুন",
      defaultValue: "০০০০০",
      readonly: false,
    },
    {
      id: 9,
      type: "text",
      inputName: "userGroup",
      placeholder: "আপনার শাখা/বিভাগ লিখুন",
      defaultValue: "Science",
      readonly: false,
    },
    {
      id: 10,
      type: "text",
      inputName: "userSession",
      defaultValue: "২০২৫",
      readonly: false,
    },
    {
      id: 11,
      type: "text",
      inputName: "userAddress",
      placeholder: "আপনার ঠিকানা লিখুন",
      defaultValue: "..........,বিাংলাদেশ",
      readonly: false,
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
      <div className="p-1 grad3 lg:w-1/2 mx-auto my-2">
        <form
                onSubmit={handleSubmit(handleUploadData2)}
                className="w-full "
              >
                <div className="w-full">
                  {profileData?.map((profile) => (
                    <div key={profile?.id} className="w-full">
                      <input
                        type={profile?.type}
                        placeholder={profile?.defaultValue}
                        defaultValue={profile?.defaultValue}
                        className={`${cssInput}`}
                        {...register(`${profile?.inputName}`, {
                          required: true,
                          readOnly: profile.readonly,
                        })}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="grad3 uppercase btn  w-48 bg-blue-600 text-white hover:text-blue-500 hover:bg-yellow-100 rounded-full">
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
      </div>
    </div>
  );
};

export default ProfileMimo;
