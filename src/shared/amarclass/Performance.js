import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';
const Performance = () => {
    const { user } = useContext(AuthContext);
    const amarclass = [
      {
        amarId: 1,
        topicName: "Motion of Earth",
        subjectName: "Physics",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages:
          "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
      {
        amarId: 2,
        topicName: "Rani Gupta Charon",
        subjectName: "science",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages:
          "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
      {
        amarId: 3,
        topicName: "Rani Gupta Charon",
        subjectName: "science",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages:
          "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
      {
        amarId: 4,
        topicName: "Rani Gupta Charon",
        subjectName: "science",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages:
          "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
      {
        amarId: 5,
        topicName: "Rani Gupta Charon",
        subjectName: "science",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages:
          "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
    ];
    return (
      <div className="p-5 flex flex-col justify-center items-center">
        <h1>Hi,{user?.displayName}</h1>
        <p>Your Class material is bellow.</p>
        <div className="card  image-full w-[100%] lg:w-[500] shadow-sm mx-auto">
          <ul className="list  ">
             {amarclass.map((amar) => (
              <li className="list-row" key={amar.amarId}>
                <div className="text-4xl font-thin opacity-30 tabular-nums">
                  {amar.amarId}
                </div>
                <div>
                  <img
                    className="size-10 rounded-box"
                    src={`${amar.amarImages}`}
                    alt="..."
                  />
                </div>
                <div className="list-col-grow">
                  <div>{amar.topicName}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {amar.subjectName}
                  </div>
                </div>
                <button className="btn btn-square btn-ghost">
                  <svg
                    className="size-[1.2em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 3L20 12 6 21 6 3z"></path>
                    </g>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    );
};

export default Performance;