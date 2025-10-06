import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import { SiGooglesheets, SiSemanticuireact } from 'react-icons/si';
import { GiPapers, GiProgression } from 'react-icons/gi';
import { BsFillPatchQuestionFill } from 'react-icons/bs';

const AmarclassSidebar = ({userClassObject}) => {
  console.log(userClassObject.userClassPosition);
    const { user, logOut } = useContext(AuthContext);
    const amarclass = [
      {
        id: 1,
        to1: "/amarclass/profile",
        bookName: "আমার বৃত্তান্ত",
        userClassName: <>{user?.displayName?.slice(0, 16)}</>,
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <SiSemanticuireact className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
      {
        id: 2,
        to1: `/amarclass/${userClassObject.userClassPosition}/book`,
        bookName: "আমার পাঠ্য বই",
        userClassName: `${userClassObject?.userClassName}`,
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <GiPapers className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
      {
        id: 3,
        to1: `/amarclass/${userClassObject.userClassPosition}/question-paper`,
        bookName: "পরীক্ষার প্রশ্নপত্র",
        userClassName: "বিজ্ঞান বিভাগ",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <BsFillPatchQuestionFill className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
      {
        id: 4,
        to1: `/amarclass/${userClassObject.userClassPosition}/lecture-sheet`,
        bookName: "লেকচার শীট",
        userClassName: "বিজ্ঞান বিভাগ",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <SiGooglesheets className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
      {
        id: 5,
        to1: `/amarclass/${userClassObject.userClassPosition}/class-performance`,
        bookName: "আমার পড়াশুনার মান",
        userClassName: "প্রতিবেদন",
        amarDescription:
          "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        amarImages: (
          <GiProgression className="grad3 p-1 w-8 h-8 text-blue-600 rounded-xl" />
        ),
      },
    ];
    return (
      <div className="h-screen overflow-y-auto">
        <ul className="list text-yellow-200">
          <div className="flex flex-col justify-start items-center p-3 shadow-xl">
            <p className="text-justify w-full text-shadow-lg/50">Hi,{user?.displayName}</p>
            <p className="text-justify w-full text-shadow-lg/50">Your Class material is bellow.</p>
          </div>
          {amarclass.map((amar) => (
            <li
              className="flex flex-row justify-start items-center"
              key={amar.id}
            >
              <Link to={`${amar.to1}`}>{amar.amarImages}</Link>
              <div className="flex flex-col justify-start items-start mx-0">
                <div className="text-xs uppercase">{amar.bookName}</div>
                <Link
                  to={`${amar.to1}`}
                  className="text-xs uppercase opacity-80"
                >
                  {amar.userClassName}
                </Link>
              </div>
              <Link
                to={`${amar.to1}`}
                className="btn btn-square btn-ghost navbar-end ml-auto"
              >
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="grad"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          onClick={() => logOut()}
          className="btn btn-primary w-full fixed m-auto rounded-xl text-yellow-300 bottom-1 right-0 left-0"
          to="/"
        >
          Left Class
        </Link>
      </div>
    );
};

export default AmarclassSidebar;