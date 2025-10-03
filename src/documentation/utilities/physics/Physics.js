import React from "react";
import { ExternalLink } from "react-external-link";
import { FaDownload, FaEye } from "react-icons/fa";


const Physics = () => {
  //Physics-9 Chapter 7, First question:   https://drive.google.com/file/d/10efxjkXBiB6g4dRh0zYz8tJlEVoR_gth/view?usp=drive_link
  //Physics-11 Chapter 2 Vector, First question   https://drive.google.com/file/d/1hV9ByKKuT9V3Q6B0GDfPwKon88FX3AzB/view?usp=drive_link
  const questionPaper = [
    {
      id: 1,
      href1: "10efxjkXBiB6g4dRh0zYz8tJlEVoR_gth",
      topicName: "নবম শ্রেণি",
    },
    {
      id: 2,
      href1: "1hV9ByKKuT9V3Q6B0GDfPwKon88FX3AzB",
      topicName: "একাদশ শ্রেণি",
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
              href={`https://drive.google.com/file/d/${qs.href1}/view`}
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

export default Physics;
