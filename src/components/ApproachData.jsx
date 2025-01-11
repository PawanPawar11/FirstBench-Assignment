import { IoIosTrendingUp } from "react-icons/io";

const ApproachData = () => {
  const ApproachDataLinks = [
    {
      percentage: "25%",
      title: "Facts",
    },
    {
      percentage: "32%",
      title: "Analysis",
    },
    {
      percentage: "19%",
      title: "Elimination",
    },
    {
      percentage: "24%",
      title: "Guess",
    },
  ];
  return (
    <div className="w-[30%] flex flex-col gap-5 p-4 bg-[#FFFFFF] border-[1px] border-[#30394765] rounded-xl">
      <div className="flex w-full text-[#5b5c60]  rounded-lg p-1 gap-5">
        <IoIosTrendingUp className="relative top-[0.2rem] text-2xl" />
        <p className="text-[1.1rem]">Approach Data</p>
      </div>
      <ul className="flex flex-col justify-between h-full">
        {ApproachDataLinks.map((link, index) => (
          <li key={index}>
            <div className="bg-[#FFFFFF] border-[1px] border-violet-200 p-2 rounded-lg">
              <div className="flex justify-start gap-2">
                <p className="bg-violet-100 text-[#5A5FBC] text-sm font-bold p-1 rounded-sm">
                  {link.percentage}
                </p>
                <p className="text-[#5A5FBC] text-md font-semibold flex items-center">
                  <span className="text-slate-900 mr-1">Based on</span>{" "}
                  {link.title}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApproachData;
