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
    <div className="w-[30%] flex flex-col gap-5 p-4 bg-gray-800 rounded-xl">
      <div className="flex w-full bg-blue-800 rounded-lg p-1 gap-5">
        <IoIosTrendingUp className=" bg-amber-600 text-2xl" />
        {/* relative top-1 */}
        <p className="text-[1.1rem] bg-lime-800">Improvements</p>
      </div>

      <h2 className="text-xl font-bold">Subject Understanding</h2>

      <ul className="flex flex-wrap gap-2 bg-slate-600">
        {ImprovementLinks.map((link, index) => {
          return (
            <li
              key={index}
              style={{ backgroundColor: link.color }}
              className="px-2 py-[1px] rounded-xl"
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
