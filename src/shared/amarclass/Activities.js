import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import { PiTestTubeFill } from 'react-icons/pi';
import { SiExcalidraw } from 'react-icons/si';
import { BiMath } from 'react-icons/bi';
import { TbMathPi } from 'react-icons/tb';
import { FaNetworkWired } from 'react-icons/fa';
const Activities = () => {
    const { user} = useContext(AuthContext);
    const amarclass = [
      {
        amarId: 1,
        topicName: "পদার্থবিজ্ঞান",
        subjectName: "Physics",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (<SiExcalidraw  className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
      {
        amarId: 2,
        topicName: "রসায়ন",
        subjectName: "Chemistry",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <PiTestTubeFill className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
      {
        amarId: 3,
        topicName: "গণিত",
        subjectName: "Mathematics",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <BiMath className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
      {
        amarId: 4,
        topicName: "উচ্চতর গণিত",
        subjectName: "Higher Mathematics",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <TbMathPi className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
      {
        amarId: 5,
        topicName: "তথ্য ও যোগাযোগ প্রযুক্তি",
        subjectName: "ICT",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <FaNetworkWired className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
    ];
    return (
      <div className="p-5 flex flex-col justify-center items-center">
        <h1>Hi,{user?.displayName}</h1>
        <p>Your Question Bank is bellow.</p>
        <div className="card image-full w-[100%] lg:w-[500] shadow-sm mx-auto">
          <ul className="list">
             {amarclass.map((amar) => (
              <li className="list-row" key={amar.amarId}>
                <div className="text-4xl font-thin opacity-30 tabular-nums">
                  {amar.amarId}
                </div>
                <div>
                 {amar.amarImages}  
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

export default Activities;