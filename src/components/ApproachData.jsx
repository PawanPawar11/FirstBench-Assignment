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
    <div className="w-[30%] flex flex-col gap-5 p-4 bg-gray-800 rounded-xl">
      <div className="flex w-full bg-blue-800 rounded-lg p-1 gap-5">
        <IoIosTrendingUp className=" bg-amber-600 text-2xl" />
        <p className="text-[1.1rem] bg-lime-800">Approach Data</p>
      </div>
      <ul className="flex flex-col justify-between h-full">
        {ApproachDataLinks.map((link, index) => (
          <li key={index}>
            <div className=" bg-red-500 border-2 border-black p-2 rounded-lg">
              <div className="flex justify-start gap-2 bg-violet-500">
                <p className="bg-green-200">{link.percentage} </p>
                <p className="bg-yellow-500">Based on {link.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApproachData;
