import React, { useState } from "react";
const ProfileUpdate = ({ data, rout }) => {
  console.log(rout);
  const [tasks, setTask] = useState(data);
  const handleSub = (event) => {
    event.preventDefault();
    fetch(`https://sohopathi-server.vercel.app/profile/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tasks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("successfully updated!!!");
          event.target.reset();
        }
      });
  };
  const onChangeHandle = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newTask = { ...tasks };
    newTask[field] = value;
    setTask(newTask);
  };
  console.log(tasks);
  const cssLabel =
    "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2";
  const cssInput =
    "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
  const updateInput = [
   
    {
      id: 1,
      name: "id",
      type1: "text",
      defaultValue1: `${data?.id}`,
    },
    {
      id: 2,
      name: "userEmail",
      type1: "text",
      defaultValue1: `${data?.userEmail}`,
    },
    {
      id: 3,
      name: "userInstituteName",
      type1: "text",
      defaultValue1: `${data?.userInstituteName}`,
    },
    {
      id: 4,
      name: "userClass",
      type1: "text",
      defaultValue1: `${data?.userClass}`,
    },
    {
      id: 5,
      name: "userName",
      type1: "text",
      defaultValue1: `${data?.userName}`,
    },
    {
      id: 6,
      name: "userVersion",
      type1: "text",
      defaultValue1: `${data?.userVersion}`,
    },
    {
      id: 7,
      name: "userPhotoUrl",
      type1: "text",
      defaultValue1: `${data?.userPhotoUrl}`,
    },
    {
      id: 8,
      name: "userClassRoll",
      type1: "text",
      defaultValue1: `${data?.userClassRoll}`,
    },
    {
      id: 9,
      name: "userAddress",
      type1: "text",
      defaultValue1: `${data?.userAddress}`,
    },
    {
      id: 10,
      name: "userSession",
      type1: "text",
      defaultValue1: `${data?.userSession}`,
    },
    {
      id: 11,
      name: "userGroup",
      type1: "text",
      defaultValue1: `${data?.userGroup}`,
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <form onSubmit={handleSub} className="w-full max-w-lg p-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label className={`${cssLabel}`}>User ID</label>
                <input
                  onChange={onChangeHandle}
                  type="text"
                  name="_id"
                  defaultValue={data?._id}
                  className={`${cssInput}`}
                  readOnly
                  disabled
                />
              </div>
              {updateInput.map((upIn) => (
                <div
                  className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                  key={upIn.id}
                >
                  <label
                    className={`${cssLabel} uppercase`}
                    htmlFor={`${upIn.name}`}
                  >
                    {upIn.name}
                  </label>
                  <input
                    onChange={onChangeHandle}
                    id={`${upIn.name}`}
                    name={`${upIn.name}`}
                    type={`${upIn.type1}`}
                    defaultValue={upIn.defaultValue1}
                    className={`${cssInput}`}
                  />
                </div>
              ))}
            </div>
            <button className="btn w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
