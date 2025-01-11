import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IoGitCompareOutline } from "react-icons/io5";

const Chart = () => {
  const data = [
    {
      name: "1",
      Slots: 80,
    },
    {
      name: "2",
      Slots: 45,
    },
    {
      name: "3",
      Slots: 30,
    },
    {
      name: "4",
      Slots: 60,
    },
    {
      name: "5",
      Slots: 55,
    },
    {
      name: "6",
      Slots: 45,
    },
    {
      name: "7",
      Slots: 65,
    },
  ];
  const ChartLinks = [
    {
      time: "10",
    },
    {
      time: "15",
    },
    {
      time: "30",
    },
    {
      time: "45",
    },
  ];
  return (
    <div className="relative rounded-md bg-[#FFFFFF] border-[1px] border-[#30394765] mt-5 h-[23.5rem] flex flex-col gap-5 p-4 w-full">
      <div className="flex w-full text-[#5b5c60]  rounded-lg p-1 gap-5">
        <IoGitCompareOutline className=" relative top-[0.2rem] text-2xl" />
        <p className="text-[1.1rem]">Compare Accuracy</p>
      </div>

      <p className="text-lg inline-block -rotate-90 text-center text-slate-900 w-52 relative top-[9.5rem] -left-20">
        Accuracy
      </p>

      <div className="border-4 border-[#ABEDE9] w-[80%] absolute top-[8rem] right-[3.4rem]"></div>

      <div className="flex justify-evenly gap-5">
        {ChartLinks.map((link, index) => (
          <p
            key={index}
            className={` flex items-center px-1 py-0 rounded-md relative z-999 ${
              link.time === "15"
                ? "bg-[#1cb9b4] text-white"
                : "bg-[#E0E2E5] text-slate-600"
            }`}
          >
            {link.time}
            <sub className="text-[0.7rem]">MIN</sub>
          </p>
        ))}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Slots" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
