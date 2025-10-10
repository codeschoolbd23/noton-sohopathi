import React from "react";
import { ExternalLink } from "react-external-link";
import { FaDownload } from "react-icons/fa";
const DataMimo = ({ viewData,userClass,message}) => {
    console.log(message)
  const menubar = (
    <div className="w-full grid lg:grid-cols-3 gap-1">
      {message && (
        <div className="flex flex-grow p-10 text-2xl min-w-96 mx-auto">
          {message}
        </div>
      )}

      {viewData?.map(
        (view) =>
          userClass?.userClassPosition === view?.userClass && (
            <form
              className="flex flex-col justify-center items-center p-5 border-2 border-dotted border-green-300"
              key={view?.id}
            >
              <div className="flex gap-8 bg-blue-700 top-0 py-2 px-1">
                <h1 className="text-white text-shadow-lg/10">
                  প্রকাশ আইডি:{view._id?.slice(20, 24)}
                </h1>
                <h1 className="text-white text-shadow-lg/10">
                  তারিখ:.../.../.....
                </h1>
              </div>
              <div className="flex justify-center items-center text-xl p-1">
                <h1 className="text-xs">{view.bookName}</h1>
                <ExternalLink
                  href={`https://drive.google.com/uc?export=download&id=${view.viewLink}`}
                  className="rounded-full bg-red-600 text-yellow-100 flex text-sm m-1 p-1 hover:bg-yellow-200 hover:text-red-600"
                >
                  <FaDownload />
                </ExternalLink>
              </div>
              <iframe
                src={`https://drive.google.com/file/d/${view.viewLink}/preview`}
                className="bg-blue-600 w-"
                allow="autoplay"
                height={"380"}
                aria-brailleroledescription="Preview of the book"
                title={`${view.bookName}`}
              />
              <div className="text-yellow-200 p-1 text-shadow-lg/10 flex flex-col justify-center items-center">
                <h1 className="p-2 text-lg">শ্রেণি: {view.userClass}</h1>
                <h2 className="">বিষয়: {view.bookName}</h2>
                <h2 className="badge badge-secondary px-2 m-2">
                  {view.version} ভার্সন
                </h2>
                <h1 className="p-1 text-xs">লেখক: {view.author}</h1>
                <h1 className="p-1 text-xs">প্রকাশকাল: {view.session}</h1>
              </div>
            </form>
          )
      )}
    </div>
  );
  return (
    <div className="grad2">
      {menubar}
    </div>
  );
};
export default DataMimo;
