import React from "react";
import { ExternalLink } from "react-external-link";
import { FaDownload } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
const SchoolLibrary = () => {
  const viewData=useLoaderData()
  // const viewData = [
  //   {
  //     "id": 1,
  //     "viewLink": "1-5oDud4UWiCI9p5xKDumehENeE1fP9Ot",
  //     "viewLinkEnglish": "1-5oDud4UWiCI9p5xKDumehENeE1fP9Ot",
  //     "bookName": "বাংলা সাহিত্য",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
      
  //   },
  //   {
  //     "id": 2,
  //     "viewLink": "1XYqYk0aDh61xS9e2Cv9aZmCfoWJISSpm",
  //     "viewLinkEnglish": "1XYqYk0aDh61xS9e2Cv9aZmCfoWJISSpm",
  //     "bookName": "বাংলা সহ পাঠ",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 3,
  //     "viewLink": "1xBwsYefRZgBXVCDBaHYn9TGiM3wMdcu8",
  //     "viewLinkEnglish": "1xBwsYefRZgBXVCDBaHYn9TGiM3wMdcu8",
  //     "bookName": "বাংলা ভাষার ব্যাকরণ ও নির্মিতি",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 4,
  //     "viewLink": "1CCgj3RnqlSC88h-K2-vErKX1PzfFn3uK",
  //     "viewLinkEnglish": "1R0_G_42V155BacroNKMFG7Y22sLtM0E3",
  //     "bookName": "গণিত",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 5,
  //     "viewLink": "1sfFclvEwd76WzgZzcvjMXxEp14cC-tIC",
  //     "viewLinkEnglish": "1jweeX1yHktGKzYbLXRlPJDf2dVNOM_Cj",
  //     "bookName": "উচ্চতর গণিত",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 6,
  //     "viewLink": "1HjjDObrRkP-5JNClyRCggDaYXhyfNYSy",
  //     "viewLinkEnglish": "1HjjDObrRkP-5JNClyRCggDaYXhyfNYSy",
  //     "bookName": "English for Today",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 7,
  //     "viewLink": "1Y503M0UXrE_uBDw0qk6Q5UAtKoGxnJRF",
  //     "viewLinkEnglish": "1Y503M0UXrE_uBDw0qk6Q5UAtKoGxnJRF",
  //     "bookName": "English Grammar",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 8,
  //     "viewLink": "1C26CUi-p1rb03z-1gfGNXWj1tfmG-gtX",
  //     "viewLinkEnglish": "15T3wcobriWXSJ2afuWGvht8rs8J47mkD",
  //     "bookName": "তথ্য ও যোগাযোগ প্রযুক্তি",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 9,
  //     "viewLink": "1ZQ-dSHrAaXG5YZSSeC6aptOuuj0eD-zR",
  //     "viewLinkEnglish": "13QVwhG3LRPvaibBjDzcU2OhKZnSB4qK3",
  //     "bookName": "বিজ্ঞান",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 10,
  //     "viewLink": "1dbIZB4lvXUhKMr4imAZ9txdoLpuLRlUR",
  //     "viewLinkEnglish": "1e2k8lLc7ms2t_HThApg-NV4rDYnpCrx_",
  //     "bookName": "পদার্থবিজ্ঞান",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 11,
  //     "viewLink": "11LdZSm4FtYfp7NfN9CiJYeglGsjPFUiN",
  //     "viewLinkEnglish": "1fC5eLIP-yJxYePw2lGRmrLf5bTclAhJg",
  //     "bookName": "রসায়ন",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 12,
  //     "viewLink": "1l2ofa1KTetaRIAzBgiHDYN9eJaPlUHLK",
  //     "viewLinkEnglish": "12F7W8aVcElyMx2mLU7YYLhQeQMD4aJXg",
  //     "bookName": "জীববিজ্ঞান",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  //   {
  //     "id": 13,
  //     "viewLink": "1l2gb1AuRIJ8pFDW8va5gRxNTbSIHhr3j",
  //     "viewLinkEnglish": "1cjDJOX44VImuWwFS-cyxBtfZdJ2UB7n1",
  //     "bookName": "বাংলাদেশ ও বিশ্বপরিচয়",
  //     "author":"NCTB",
  //     "session":2025,
  //     "userClass":"নবম ও দশম"
  //   },
  // ];
  const menubar = (
    <>
      {viewData.map((view) => (
        <div className="bg-blue-600 w-full lg:w-96 shadow-sm border-2 m-1">
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
      ))}
    </>
  );

  return (
    <div className="flex flex-col justify-center items-center grad2">
      <h1 className="grad3 text-6xl font-extrabold text-shadow-lg/50 text-center shadow-2xl bg-primary text-yellow-200 p-5 w-full">
        স্কুল লাইব্রেরী
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4">{menubar}</div>
    </div>
  );
};

export default SchoolLibrary;
