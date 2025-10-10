import React, { useContext } from "react";
import { ExternalLink } from "react-external-link";
import { FaDownload} from "react-icons/fa";
import { AuthContext } from "../../../context/Context";
import { useLoaderData } from "react-router-dom";
const BookMemo = ({ userClassPosition, userClassName }) => {
  const externalDownload = useLoaderData();
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full py-5 lg:p-5 min-h-screen text-shadow-lg/20">
      <h1 className="p-4 text-start bg-blue-600 text-white w-full">
        {userClassName}
      </h1>
      {user?.displayName && (
        <h1 className="text-center mb-1">Hi, {user?.displayName}</h1>
      )}
      <h1 className="w-full text-center text-shadow-lg/50 text-lg lg:text-lg mb-2">
        আমার বোর্ডবই-২০২৫
      </h1>
      <p className="text-center">সরকার কর্তৃক বিনামূল্যে বিতরণের জন্য। </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {externalDownload.map(
          (bd) =>
            bd.userClass === userClassPosition && (
              <div
                key={bd.id}
                className="border-2 border-dotted border-yellow-200 mx-auto"
              >
                <h1 className="grad flex flex-col justify-center items-center">
                  <ExternalLink
                    href={`https://drive.google.com/uc?export=download&id=${bd?.viewLink}`}
                    className="p-1 w-5"
                  >
                    <FaDownload className="bg-red-500 rounded-full w-5 h-5 p-1" />
                  </ExternalLink>
                </h1>
                <iframe
                  src={`https://drive.google.com/file/d/${bd?.viewLink}/preview`}
                  title="...."
                  height={"380"}
                />
              </div>
            )
        )}
      </div>
      {/* <div className="lg:flex justify-center w-full lg:gap-1 lg:w-4/5 mx-auto">
        <div className="my-1 flex flex-col">
          <div className="grid grid-cols-2 lg:grid-cols-3 mx-2 text-white">
            <div className="flex border">
              <p className="text-center w-1/5 p-1 border">নং</p>
              <p className="w-full flex p-1 justify-center">
                পাঠ্যপুস্তকের নাম
              </p>
            </div>
            <div className="border">
              <p className="w-full p-1 flex justify-center">বাংলা ভার্সন</p>
            </div>
            <div className="hidden lg:block border">
              <p className="w-full p-1 flex justify-center">ইংরেজি ভার্সন</p>
            </div>
          </div>
          {externalDownload.map(
            (bd) =>
              bd.userClass === userClassPosition && (
                <div
                  className="grid grid-cols-2 lg:grid-cols-3 px-2"
                  key={bd.id}
                >
                  <div className="flex border">
                    <p className="text-center w-1/5 border text-sm">{bd.id}</p>
                    <p className="w-full text-sm">{bd?.bookName}</p>
                  </div>
                  <div className="grid grid-cols-2 border">
                    <p className="w-full p-0">
                      <ExternalLink
                        href={`https://drive.google.com/uc?export=download&id=${bd?.viewLink}`}
                        className="p-1 rounded-full text-yellow-100 text-sm w-full"
                      >
                        <FaDownload className="text-2xl bg-red-600" />
                      </ExternalLink>
                    </p>
                    <p className="w-full p-0">
                      <ExternalLink
                        href={`https://drive.google.com/file/d/${bd?.viewLink}/view`}
                        className="p-1 rounded-full text-yellow-100 text-sm w-full"
                      >
                        <FaEye className="text-4xl text-black"/>
                      </ExternalLink>
                    </p>
                  </div>
                  <div className="hidden lg:grid lg:grid-cols-2 border">
                    <p className="w-full p-0">
                      <ExternalLink
                        href={`https://drive.google.com/uc?export=download&id=${bd?.viewLink}`}
                        className="p-1 rounded-full text-yellow-100 text-sm w-full"
                      >
                        <FaDownload className="text-2xl bg-red-600" />
                      </ExternalLink>
                    </p>
                    <p className="w-full p-0">
                      <ExternalLink
                        href={`https://drive.google.com/file/d/${bd?.viewLink}/view`}
                        className="p-1 rounded-full text-yellow-100 text-sm w-full"
                      >
                        <FaEye className="text-4xl text-black"/>
                      </ExternalLink>
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
        <h1 className="text-center block lg:hidden text-sm">
          ইংরেজি ভার্সন
        </h1>
        <div className="my-1 block lg:hidden">
          <div className="grid grid-cols-2 mx-2 text-white">
            <div className="flex border">
              <p className="text-center w-1/5 border p-1 text-sm">নং</p>
              <p className="w-full p-1 text-sm">পাঠ্যপুস্তকের নাম</p>
            </div>
            <div className="border">
              <p className="w-full p-1 text-cenetr flex justify-center text-sm">
                ইংরেজি ভার্সন
              </p>
            </div>
          </div>
          {externalDownload.map((bd) =>
            bd.userClass === userClassPosition ? (
              <div className="grid grid-cols-2 px-2" key={bd?.id}>
                <div className="flex border">
                  <p className="text-center w-1/5 border text-sm">{bd?.id}</p>
                  <p className="w-full text-sm">{bd?.bookName}</p>
                </div>
                <div className="grid grid-cols-2 border">
                  <p className="w-fit p-1">
                    <ExternalLink
                      href={`https://drive.google.com/uc?export=download&id=${bd?.viewLink}`}
                      className="p-1 rounded-full text-yellow-100 flex text-sm"
                    >
                      <FaDownload className="text-2xl bg-red-600 p-1" />
                    </ExternalLink>
                  </p>
                  <p className="w-full p-0">
                    <ExternalLink
                      href={`https://drive.google.com/file/d/${bd?.viewLink}/view`}
                      className="p-1 rounded-full text-yellow-100 text-sm w-full"
                    >
                      <FaEye className="text-2xl"/>
                    </ExternalLink>
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div> */}
    </div>
  );
};

export default BookMemo;
