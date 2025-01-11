import ApproachData from "./ApproachData";
import Chart from "./Chart";
import CompareActivity from "./CompareActivity";
import Improvements from "./Improvements";
import ResponseTime from "./ResponseTime";
import Suggestions from "./Suggestions";
import Ruler from "./Ruler";

const RightComponent = () => {
  return (
    <div className="bg-green-500 flex-[8] pr-7">
      <div className="flex items-center justify-between bg-red-600 p-4 pl-0 gap-5">
        <CompareActivity />
        <CompareActivity />
        <CompareActivity />
      </div>

      <div className="bg-teal-600 p-4 pl-0 flex gap-3">
        <Improvements />
        <ResponseTime />
        <ApproachData />
        <Suggestions />
      </div>

      <div className="flex gap-5">
        <div className="flex-1 basis-1/2">
          <Chart />
        </div>
        <div className="flex-1 basis-1/2">
          <Ruler />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
