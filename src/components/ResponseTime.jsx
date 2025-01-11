import { LuClockAlert } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";

const ResponseTime = () => {
  return (
    <div className="w-[30%] flex flex-col gap-5 p-4 bg-[#FFFFFF] border-[1px] border-[#30394765]  rounded-xl">
      <div className="flex w-full text-[#5b5c60] rounded-lg p-1 gap-5">
        <LuClockAlert className="relative top-[0.2rem] text-2xl" />
        <p className="text-[1.1rem]">Response Time</p>
      </div>

      <div className=" bg-[#5A5FBC] text-white font-bold w-[60%] px-1 py-[1px] rounded-sm flex items-center justify-center">
        Std Time - 2<sub>min</sub>
      </div>

      <div className="flex items-end gap-4 bg-[#F2F1FA] border-dashed border-2 border-violet-300 rounded-md p-2">
        <div className="flex items-end gap-1">
          <h3 className="text-3xl text-[#1cb9b4] font-bold">
            60<span className="text-slate-400">%</span>
          </h3>
          <p className="text-slate-400 text-sm">Ans took</p>
        </div>
        <div className="flex items-center  gap-1">
          <FaArrowUp className="text-2xl text-[#DF3F40]" />
          <p className="flex items-center text-lg text-[#5A5FBC]">
            2<sub>min</sub>
          </p>
        </div>
      </div>

      <div className="border-b-2 border-slate-600"></div>

      <h3 className="text-2xl text-slate-900 font-bold text-center">
        Your are <span className="text-red-600">slow</span> !
      </h3>
    </div>
  );
};

export default ResponseTime;
