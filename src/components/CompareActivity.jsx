import { CiSquareChevDown } from "react-icons/ci";

const CompareActivity = () => {
  return (
    <div className="flex gap-2 text-[#5b5c60] h-80 w-1/3 bg-[#FFFFFF] border-[1px] border-[#30394765] rounded-lg p-2 mt-6">
      <CiSquareChevDown className="relative top-[0.2rem] text-2xl" />
      <p className="text-[1.1rem]">Compare Accuracy</p>
    </div>
  );
};

export default CompareActivity;
