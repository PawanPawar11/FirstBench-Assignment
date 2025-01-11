import { CiSquareChevDown } from "react-icons/ci";

const CompareActivity = () => {
  return (
    <div className="flex h-80 w-1/3 bg-slate-800 rounded-lg p-2 mt-6">
      <CiSquareChevDown className="relative top-1 bg-amber-600 text-2xl" />
      <p className="text-[1.1rem] bg-yellow-950">Compare Accuracy</p>
    </div>
  );
};

export default CompareActivity;
