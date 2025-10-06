import React from "react";
import { ExternalLink } from "react-external-link";
import { FaDownload } from "react-icons/fa";
const Nctb = () => {
  const externalDownload = [
    {
      id: 1,
      href1: "1-5oDud4UWiCI9p5xKDumehENeE1fP9Ot",
      href2: "1-5oDud4UWiCI9p5xKDumehENeE1fP9Ot",
      book_name: "বাংলা সাহিত্য",
    },
    {
      id: 2,
      href1: "1XYqYk0aDh61xS9e2Cv9aZmCfoWJISSpm",
      href2: "1XYqYk0aDh61xS9e2Cv9aZmCfoWJISSpm",
      book_name: "বাংলা সহ পাঠ",
    },
    {
      id: 3,
      href1: "1xBwsYefRZgBXVCDBaHYn9TGiM3wMdcu8",
      href2: "1xBwsYefRZgBXVCDBaHYn9TGiM3wMdcu8",
      book_name: "বাংলা ভাষার ব্যাকরণ ও নির্মিতি",
    },
    {
      id: 4,
      href1: "1CCgj3RnqlSC88h-K2-vErKX1PzfFn3uK",
      href2: "1R0_G_42V155BacroNKMFG7Y22sLtM0E3",
      book_name: "গণিত",
    },
    {
      id: 5,
      href1: "1sfFclvEwd76WzgZzcvjMXxEp14cC-tIC",
      href2: "1jweeX1yHktGKzYbLXRlPJDf2dVNOM_Cj",
      book_name: "উচ্চতর গণিত",
    },
    {
      id: 6,
      href1: "1HjjDObrRkP-5JNClyRCggDaYXhyfNYSy",
      href2: "1HjjDObrRkP-5JNClyRCggDaYXhyfNYSy",
      book_name: "English for Today",
    },
    {
      id: 7,
      href1: "1Y503M0UXrE_uBDw0qk6Q5UAtKoGxnJRF",
      href2: "1Y503M0UXrE_uBDw0qk6Q5UAtKoGxnJRF",
      book_name: "English Grammar",
    },
    {
      id: 8,
      href1: "1C26CUi-p1rb03z-1gfGNXWj1tfmG-gtX",
      href2: "15T3wcobriWXSJ2afuWGvht8rs8J47mkD",
      book_name: "তথ্য ও যোগাযোগ প্রযুক্তি",
    },
    {
      id: 9,
      href1: "1ZQ-dSHrAaXG5YZSSeC6aptOuuj0eD-zR",
      href2: "13QVwhG3LRPvaibBjDzcU2OhKZnSB4qK3",
      book_name: "বিজ্ঞান",
    },
    {
      id: 10,
      href1: "1dbIZB4lvXUhKMr4imAZ9txdoLpuLRlUR",
      href2: "1e2k8lLc7ms2t_HThApg-NV4rDYnpCrx_",
      book_name: "পদার্থবিজ্ঞান",
    },
    {
      id: 11,
      href1: "11LdZSm4FtYfp7NfN9CiJYeglGsjPFUiN",
      href2: "1fC5eLIP-yJxYePw2lGRmrLf5bTclAhJg",
      book_name: "রসায়ন",
    },
    {
      id: 12,
      href1: "1l2ofa1KTetaRIAzBgiHDYN9eJaPlUHLK",
      href2: "12F7W8aVcElyMx2mLU7YYLhQeQMD4aJXg",
      book_name: "জীববিজ্ঞান",
    },
    {
      id: 13,
      href1: "1l2gb1AuRIJ8pFDW8va5gRxNTbSIHhr3j",
      href2: "1cjDJOX44VImuWwFS-cyxBtfZdJ2UB7n1",
      book_name: "বাংলাদেশ ও বিশ্বপরিচয়",
    },
  ];
  const menubar = (
    <>
      {externalDownload.map((bd) => (
        <span key={bd.id} className="grad3 my-2 w-full">
          <div className="flex justify-between items-center text-xl p-1">
            {bd.book_name}
            <ExternalLink
              href={`https://drive.google.com/uc?export=download&id=${bd.href1}`}
              className="rounded-full bg-red-600 text-yellow-100 flex text-sm m-1 p-1 hover:bg-yellow-200 hover:text-red-600"
            >
              <FaDownload />
            </ExternalLink>
          </div>
          <iframe
            src={`https://drive.google.com/file/d/${bd.href1}/preview`}
            className=" bg-blue-600"
            allow="autoplay"
            height={"380"}
            aria-brailleroledescription="Preview of the book"
            title={`${bd?.book_name}`}
          />
        </span>
      ))}
    </>
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="grad3 text-6xl font-extrabold text-shadow-lg/50 text-center shadow-2xl bg-primary text-yellow-200 p-5 w-full">
        লাইব্রেরী
      </h1>
      <div className="w-full flex flex-col lg:grid lg:grid-cols-5 lg:gap-1 justify-center items-center">
        {menubar}
      </div>
    </div>
  );
};

export default Nctb;
