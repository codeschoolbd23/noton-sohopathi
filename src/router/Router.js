import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../documentation/main/Main";
import Home from "../documentation/home/Home";
import SignIn from "../shared/log/SignIn";
import Signup from "../shared/log/Signup";
import SchoolLibrary from "../documentation/utilities/library/school/SchoolLibrary";
import CollegeLibrary from "../documentation/utilities/library/college/CollegeLibrary";
import Library from "../documentation/utilities/library/Library";
import Sohopathi from "../shared/sohopathi/Sohopathi";
import Amarclass from "../shared/amarclass/Amarclass";
import AmarclassMain from "../shared/amarclass/AmarclassMain";

import {
  ClassSix,
  ClassSeven,
  ClassEight,
  ClassNine,
  ClassTen,
  ClassEleven,
  ClassTwelve,
  ClassSixBook,
  ClassSevenBook,
  ClassEightBook,
  ClassNineBook,
  ClassTenBook,
  ClassElevenBook,
  ClassTwelveBook,
  ClassSixQuestionpaper,
  ClassSevenQuestionpaper,
  ClassEightQuestionpaper,
  ClassNineQuestionpaper,
  ClassTenQuestionpaper,
  ClassElevenQuestionpaper,
  ClassTwelveQuestionpaper,
  ClassSixLecturesheet,
  ClassSevenLecturesheet,
  ClassEightLecturesheet,
  ClassNineLecturesheet,
  ClassTenLecturesheet,
  ClassElevenLecturesheet,
  ClassTwelveLecturesheet,
  ClassSixPerformance,
  ClassSevenPerformance,
  ClassEightPerformance,
  ClassNinePerformance,
  ClassTenPerformance,
  ClassElevenPerformance,
  ClassTwelvePerformance,
} from "../documentation/utilities/Data/BookClass";
import ProfileMimo from "../shared/profile/profilekit/ProfileMimo";
import {
  ClassEightProfile,
  ClassEightProfileMimo,
  ClassEightProfileUpdate,
  ClassElevenProfile,
  ClassElevenProfileMimo,
  ClassElevenProfileUpdate,
  ClassNineProfile,
  ClassNineProfileMimo,
  ClassNineProfileUpdate,
  ClassSevenProfile,
  ClassSevenProfileMimo,
  ClassSevenProfileUpdate,
  ClassSixProfile,
  ClassSixProfileMimo,
  ClassSixProfileUpdate,
  ClassTenProfile,
  ClassTenProfileMimo,
  ClassTenProfileUpdate,
  ClassTwelveProfile,
  ClassTwelveProfileMimo,
  ClassTwelveProfileUpdate,
} from "../shared/profile/ProfileData";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/sohopathi",
          element: <Sohopathi />,
          loader: async () =>
            fetch(`https://sohopathi-server.vercel.app/profile`),
        },
        {
          path: "/amarclass",
          element: <AmarclassMain />,
          children: [
            {
              path: "/amarclass",
              element: <Amarclass />,
            },
            {
              path: "/amarclass/6",
              element: <ClassSix />,
              loader: async () =>
                fetch(`https://sohopathi-server.vercel.app/library`),
              children: [
                {
                  path: "/amarclass/6",
                  element: <ClassSixProfile />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/6/profile",
                  element: <ClassSixProfileMimo />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/6/:id",
                  element: <ClassSixProfileUpdate />,
                  loader: async ({ params }) =>
                    fetch(
                      `https://sohopathi-server.vercel.app/profile/${params.id}`
                    ),
                },
                {
                  path: "/amarclass/6/book",
                  element: <ClassSixBook />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/library`),
                },
                {
                  path: "/amarclass/6/question-paper",
                  element: <ClassSixQuestionpaper />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/questionpaper`),
                },
                {
                  path: "/amarclass/6/lecture-sheet",
                  element: <ClassSixLecturesheet />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/lecturesheet`),
                },
                {
                  path: "/amarclass/6/class-performance",
                  element: <ClassSixPerformance />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/performance`),
                },
              ],
            },
            {
              path: "/amarclass/7",
              element: <ClassSeven />,
              loader: async () =>
                fetch(`https://sohopathi-server.vercel.app/library`),
              children: [
                {
                  path: "/amarclass/7",
                  element: <ClassSevenProfile />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/7/profile",
                  element: <ClassSevenProfileMimo />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/7/:id",
                  element: <ClassSevenProfileUpdate />,
                  loader: async ({ params }) =>
                    fetch(
                      `https://sohopathi-server.vercel.app/profile/${params.id}`
                    ),
                },
                {
                  path: "/amarclass/7/book",
                  element: <ClassSevenBook />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/library`),
                },
                {
                  path: "/amarclass/7/question-paper",
                  element: <ClassSevenQuestionpaper />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/questionpaper`),
                },
                {
                  path: "/amarclass/7/lecture-sheet",
                  element: <ClassSevenLecturesheet />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/lecturesheet`),
                },
                {
                  path: "/amarclass/7/class-performance",
                  element: <ClassSevenPerformance />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/performance`),
                },
              ],
            },
            {
              path: "/amarclass/8",
              element: <ClassEight />,
              loader: async () =>
                fetch(`https://sohopathi-server.vercel.app/library`),
              children: [
                {
                  path: "/amarclass/8",
                  element: <ClassEightProfile />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/8/profile",
                  element: <ClassEightProfileMimo />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/8/:id",
                  element: <ClassEightProfileUpdate />,
                  loader: async ({ params }) =>
                    fetch(
                      `https://sohopathi-server.vercel.app/profile/${params.id}`
                    ),
                },
                {
                  path: "/amarclass/8/book",
                  element: <ClassEightBook />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/library`),
                },
                {
                  path: "/amarclass/8/question-paper",
                  element: <ClassEightQuestionpaper />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/questionpaper`),
                },
                {
                  path: "/amarclass/8/lecture-sheet",
                  element: <ClassEightLecturesheet />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/lecturesheet`),
                },
                {
                  path: "/amarclass/8/class-performance",
                  element: <ClassEightPerformance />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/performance`),
                },
              ],
            },
            {
              path: "/amarclass/9",
              element: <ClassNine />,
              loader: async () =>
                fetch(`https://sohopathi-server.vercel.app/library`),
              children: [
                {
                  path: "/amarclass/9",
                  element: <ClassNineProfile />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/9/profile",
                  element: <ClassNineProfileMimo />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/9/:id",
                  element: <ClassNineProfileUpdate />,
                  loader: async ({ params }) =>
                    fetch(
                      `https://sohopathi-server.vercel.app/profile/${params.id}`
                    ),
                },

                {
                  path: "/amarclass/9/book",
                  element: <ClassNineBook />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/library`),
                },
                {
                  path: "/amarclass/9/question-paper",
                  element: <ClassNineQuestionpaper />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/questionpaper`),
                },
                {
                  path: "/amarclass/9/lecture-sheet",
                  element: <ClassNineLecturesheet />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/lecturesheet`),
                },
                {
                  path: "/amarclass/9/class-performance",
                  element: <ClassNinePerformance />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/performance`),
                },
              ],
            },
            {
              path: "/amarclass/10",
              element: <ClassTen />,
              loader: async () =>
                fetch(`https://sohopathi-server.vercel.app/library`),
              children: [
                {
                  path: "/amarclass/10",
                  element: <ClassTenProfile />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/10/profile",
                  element: <ClassTenProfileMimo />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/10/:id",
                  element: <ClassTenProfileUpdate />,
                  loader: async ({ params }) =>
                    fetch(
                      `https://sohopathi-server.vercel.app/profile/${params.id}`
                    ),
                },
                {
                  path: "/amarclass/10/book",
                  element: <ClassTenBook />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/library`),
                },
                {
                  path: "/amarclass/10/question-paper",
                  element: <ClassTenQuestionpaper />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/questionpaper`),
                },
                {
                  path: "/amarclass/10/lecture-sheet",
                  element: <ClassTenLecturesheet />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/lecturesheet`),
                },
                {
                  path: "/amarclass/10/class-performance",
                  element: <ClassTenPerformance />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/performance`),
                },
              ],
            },
            {
              path: "/amarclass/11",
              element: <ClassEleven />,
              loader: async () =>
                fetch(`https://sohopathi-server.vercel.app/library`),
              children: [
                {
                  path: "/amarclass/11",
                  element: <ClassElevenProfile />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/11/profile",
                  element: <ClassElevenProfileMimo />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/11/:id",
                  element: <ClassElevenProfileUpdate />,
                  loader: async ({ params }) =>
                    fetch(
                      `https://sohopathi-server.vercel.app/profile/${params.id}`
                    ),
                },
                {
                  path: "/amarclass/11/profile",
                  element: <ProfileMimo />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },

                {
                  path: "/amarclass/11/book",
                  element: <ClassElevenBook />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/library`),
                },
                {
                  path: "/amarclass/11/question-paper",
                  element: <ClassElevenQuestionpaper />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/questionpaper`),
                },
                {
                  path: "/amarclass/11/lecture-sheet",
                  element: <ClassElevenLecturesheet />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/lecturesheet`),
                },
                {
                  path: "/amarclass/11/class-performance",
                  element: <ClassElevenPerformance />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/performance`),
                },
              ],
            },
            {
              path: "/amarclass/12",
              element: <ClassTwelve />,
              loader: async () =>
                fetch(`https://sohopathi-server.vercel.app/library`),
              children: [
                {
                  path: "/amarclass/12",
                  element: <ClassTwelveProfile />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/12/profile",
                  element: <ClassTwelveProfileMimo />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/profile`),
                },
                {
                  path: "/amarclass/12/:id",
                  element: <ClassTwelveProfileUpdate />,
                  loader: async ({ params }) =>
                    fetch(
                      `https://sohopathi-server.vercel.app/profile/${params.id}`
                    ),
                },
                {
                  path: "/amarclass/12/book",
                  element: <ClassTwelveBook />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/library`),
                },
                {
                  path: "/amarclass/12/question-paper",
                  element: <ClassTwelveQuestionpaper />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/questionpaper`),
                },
                {
                  path: "/amarclass/12/lecture-sheet",
                  element: <ClassTwelveLecturesheet />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/lecturesheet`),
                },
                {
                  path: "/amarclass/12/class-performance",
                  element: <ClassTwelvePerformance />,
                  loader: async () =>
                    fetch(`https://sohopathi-server.vercel.app/performance`),
                },
              ],
            },
          ],
        },
        {
          path: "/library",
          element: <Library />,
        },
        {
          path: "/school",
          element: <SchoolLibrary />,
          loader: async () =>
            fetch(`https://sohopathi-server.vercel.app/library`),
        },
        {
          path: "/college",
          element: <CollegeLibrary />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
