import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../documentation/main/Main';
import Home from '../documentation/home/Home';
import SignIn from '../shared/log/SignIn';
import Signup from '../shared/log/Signup';
import SchoolLibrary from '../documentation/utilities/library/school/SchoolLibrary';
import CollegeLibrary from '../documentation/utilities/library/college/CollegeLibrary';
import Library from '../documentation/utilities/library/Library';
import Sohopathi from '../shared/sohopathi/Sohopathi';
import Amarclass from '../shared/amarclass/Amarclass';
import AmarclassMain from '../shared/amarclass/AmarclassMain';
import Profile from '../shared/profile/Profile';
import Pdf from '../documentation/utilities/pdf/Pdf';
import Lecturesheet from '../shared/amarclass/Lecturesheet';
import Performance from '../shared/amarclass/Performance';
import QuestionLayout from '../shared/amarclass/QuestionLayout';

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
                path: "/amarclass/profile",
                element: <Profile />,
              },
              {
                path: "/amarclass/nctb-9",
                element: <Pdf />,
              },
              {
                path: "/amarclass/question-paper",
                element: <QuestionLayout />,
              },
              {
                path: "/amarclass/lecture-sheet",
                element: <Lecturesheet />,
              },
              {
                path: "/amarclass/class-performance",
                element: <Performance/>,
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
          },
          {
            path: "/college",
            element: <CollegeLibrary />,
          },
        ],
      },
    ]);
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Router;