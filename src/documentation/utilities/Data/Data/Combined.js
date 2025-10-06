
import { useLoaderData } from "react-router-dom";
import DataMimo from "../DataMimo";
const Lecturesheet = (userClass) => {
  const viewData = useLoaderData();
  return <DataMimo viewData={viewData} userClass ={userClass}/>;
};
const QuestionLayout = (userClass) => {
  const viewData = useLoaderData();
  return <DataMimo viewData={viewData} userClass={userClass} />;
};
const Performance = (userClass) => {
  const viewData = useLoaderData();
  return <DataMimo viewData={viewData} userClass={userClass} message="The page is underdeveloping!!!Please patient"/>;
};
export { Lecturesheet, QuestionLayout,Performance };
