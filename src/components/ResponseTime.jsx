import { LuClockAlert } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";

const ResponseTime = () => {
  return (
    <div className="w-[30%] flex flex-col gap-5 p-4 bg-gray-800 rounded-xl">
      <div className="flex w-full bg-blue-800 rounded-lg p-1 gap-5">
        <LuClockAlert className=" bg-amber-600 text-2xl" />
        <p className="text-[1.1rem] bg-lime-800">Response Time</p>
      </div>

      <div className=" bg-violet-600 text-white font-bold w-[55%] px-1 py-0 rounded-md flex items-center justify-center">
        Std Time - 2<sub>min</sub>
      </div>

      <div className="flex items-end justify-between gap-5 bg-orange-600 border-dashed border-2 border-violet-300 rounded-lg p-2">
        <div className="flex items-center gap-1 bg-blue-500">
          <h3 className="text-3xl font-bold bg-red-300">
            60<span>%</span>
          </h3>
          <p className="bg-lime-500">Ans took</p>
        </div>
        <div className="flex items-center  gap-1 bg-green-500">
          <FaArrowUp className="text-2xl" />
          <p className="flex items-center">
            2<sub>min</sub>
          </p>
        </div>
      </div>

      <div className="border-b-2 border-slate-600"></div>

      <h3 className="text-2xl text-center">
        Your are <span className="text-red-600">slow</span> !
      </h3>
    </div>
  );
};

export default ResponseTime;
