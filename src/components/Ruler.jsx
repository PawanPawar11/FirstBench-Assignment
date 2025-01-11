import { TbTimelineEventExclamation } from "react-icons/tb";

const Ruler = () => {
  return (
    <div className="border-2 relative rounded-md border-red-700 mt-5 h-[23.5rem] flex flex-col gap-5 p-4 w-full">
      <div className="flex w-full bg-blue-800 rounded-lg p-1 gap-5">
        <TbTimelineEventExclamation className=" bg-amber-600 text-2xl" />
        <p className="text-[1.1rem] bg-lime-800">Compare Accuracy</p>
      </div>
      <div className="flex flex-col justify-between">
        <img src="./Ruler-1.png" alt="" className="w-full h-[5.5rem]" />
        <p className="py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
        <img src="./Ruler-2.png" alt="" className="w-full h-[5.5rem]" />
        <p className="py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default Ruler;
