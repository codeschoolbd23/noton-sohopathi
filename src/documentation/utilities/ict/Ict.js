import React from "react";
import { ExternalLink } from "react-external-link";
import { FaDownload, FaEye } from "react-icons/fa";


const Ict = () => {
  
  const questionPaper = [
    {
      id: 1,
      href1: "1-5oDud4UWiCI9p5xKDumehENeE1fP9Ot",
      topicName: "ICT-নবম শ্রেণি",
    },
    {
      id: 2,
      href1: "1XYqYk0aDh61xS9e2Cv9aZmCfoWJISSpm",
      topicName: "ICT-একাদশ শ্রেণি",
    },
  ];
  return (
   <div className="border-b-2 px-5">
         {questionPaper.map((qs) => (
           <div className="grid grid-cols-3">
             <p className="text-xs">
               {qs.id}.{qs.topicName}
             </p>
             <p className="w-fit p-1">
               <ExternalLink
                 href={`https://drive.google.com/uc?export=download&id=${qs.href1}`}
                 className="p-1 rounded-full bg-red-600 text-yellow-100 flex text-sm flex-row justify-center items-center"
               >
                 <FaDownload className="text-2xl px-1" /> Download
               </ExternalLink>
             </p>
             <p className="w-fit p-1">
               <ExternalLink
                 href={`https://drive.google.com/file/d/${qs.href2}/view`}
                 className="p-1 rounded-full bg-primary text-yellow-100 flex text-sm flex-row-reverse justify-center items-center"
               >
                 <FaEye className="text-2xl px-1 text-black" />
                 View
               </ExternalLink>
             </p>
           </div>
         ))}
       </div>
  );
};

export default Ict;
