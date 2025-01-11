import { TbTimelineEventExclamation } from "react-icons/tb";

const Ruler = () => {
  return (
    <div className="relative rounded-md bg-[#FFFFFF] border-[1px] border-[#30394765] mt-5 h-[23.5rem] flex flex-col gap-5 p-4 w-full">
      <div className="flex w-full text-[#5b5c60] rounded-lg p-1 gap-5">
        <TbTimelineEventExclamation className="relative top-[0.2rem] text-2xl" />
        <p className="text-[1.1rem]">Compare Accuracy</p>
      </div>
      <div className="flex flex-col justify-between">
        <img src="./Ruler-1.png" alt="" className="w-full h-[5.5rem]" />
        <p className="py-2 text-slate-400 pl-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
        <img src="./Ruler-2.png" alt="" className="w-full h-[5.5rem]" />
        <p className="py-2 text-slate-400 pl-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default Ruler;
