import { IoIosTrendingUp } from "react-icons/io";

const Improvements = () => {
  const ImprovementLinks = [
    {
      title: "Geography",
      color: "#1CB9B4",
    },
    {
      title: "Politics",
      color: "#EAB308",
    },
    {
      title: "Current Affairs",
      color: "#1CB9B4",
    },
    {
      title: "General Studies",
      color: "#B91C1C",
    },
    {
      title: "Mathematics",
      color: "#1CB9B4",
    },
    {
      title: "Social Science",
      color: "#C5C9CF",
    },
    {
      title: "English Literature",
      color: "#B91C1C",
    },
    {
      title: "Indian History",
      color: "#EAB308",
    },
    {
      title: "Economics",
      color: "#1CB9B4",
    },
  ];
  return (
    <div className="w-[30%] flex flex-col gap-5 p-4 bg-[#FFFFFF] border-[1px] border-[#30394765] rounded-xl">
      <div className="flex w-full text-[#5b5c60] rounded-lg p-1 gap-5">
        <IoIosTrendingUp className="text-2xl relative top-[0.2rem]" />
        <p className="text-[1.1rem]">Improvements</p>
      </div>

      <h2 className="text-xl font-bold text-slate-900">
        Subject Understanding
      </h2>

      <ul className="flex flex-wrap gap-2">
        {ImprovementLinks.map((link, index) => {
          return (
            <li
              key={index}
              style={{ backgroundColor: link.color }}
              className="px-2 text-white py-[1px] rounded-xl"
            >
              {link.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Improvements;
