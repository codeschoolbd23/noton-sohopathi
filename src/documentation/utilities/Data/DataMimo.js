import React from "react";
import { ExternalLink } from "react-external-link";
import { FaDownload } from "react-icons/fa";
const DataMimo = ({ viewData,userClass,message}) => {
    console.log(message)
  const menubar = (
    <>
      {message&&
      <div className="flex flex-grow p-10 text-2xl min-w-96 mx-auto">{message}</div>}
      {viewData?.map(
        (view) =>
          userClass?.userClassPosition === view?.userClass && (
            <div
              className="bg-blue-600 w-full lg:w-96 shadow-sm border-2 m-1"
              key={view._id}
            >
              <div className="bg-black text-yellow-200 p-3 text-shadow-lg/10 flex flex-col justify-center items-center">
                <form>
                  <h1 className="p-2 bg-blue-700 text-white text-shadow-lg/10">
                    প্রকাশ আইডি:{view._id?.slice(20, 24)}
                  </h1>
                  <div className="flex justify-between items-center text-xl p-1">
                    {view.bookName}
                    <ExternalLink
                      href={`https://drive.google.com/uc?export=download&id=${view.viewLink}`}
                      className="rounded-full bg-red-600 text-yellow-100 flex text-sm m-1 p-1 hover:bg-yellow-200 hover:text-red-600"
                    >
                      <FaDownload />
                    </ExternalLink>
                  </div>
                  <iframe
                    src={`https://drive.google.com/file/d/${view.viewLink}/preview`}
                    className=" bg-blue-600"
                    allow="autoplay"
                    height={"380"}
                    aria-brailleroledescription="Preview of the book"
                    title={`${view.bookName}`}
                  />
                  <div className="bg-black text-yellow-200 p-3 text-shadow-lg/10 flex flex-col justify-center items-center">
                    <h1 className="p-2 text-lg">শ্রেণি: {view.userClass}</h1>
                    <h2 className="">বিষয়: {view.bookName}</h2>
                    <h2 className="badge badge-secondary px-2 m-2">
                      {view.version} ভার্সন
                    </h2>
                    <h1 className="p-2 text-xs">লেখক: {view.author}</h1>
                    <h1 className="p-2 text-xs">প্রকাশকাল: {view.session}</h1>
                  </div>
                </form>
              </div>
            </div>
          )
      )}
    </>
  );

  return (
    <div className="flex flex-col justify-center items-center grad2">
      <div className="grid grid-cols-1 lg:grid-cols-4">{menubar}</div>
    </div>
  );
};
export default DataMimo;
