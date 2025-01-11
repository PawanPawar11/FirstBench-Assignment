import { BsStars } from "react-icons/bs";

const Suggestions = () => {
  const SuggestionsLinks = [
    {
      question: "Q. 1-12",
      time: "40",
      unit: "sec",
      difficulty: "Easy",
      color: "text-teal-500",
    },
    {
      question: "Q. 12-32",
      time: "1.5",
      unit: "min",
      difficulty: "Medium",
      color: "text-yellow-500",
    },
    {
      question: "Q. 32-40",
      time: "3",
      unit: "min",
      difficulty: "Hard",
      color: "text-red-500",
    },
  ];
  return (
    <div className="w-[25%] flex flex-col gap-5 p-4 bg-[#FFFFFF] border-[1px] border-[#30394765] rounded-xl">
      <div className="flex w-full text-[#5b5c60] rounded-lg p-1 gap-5">
        <BsStars className="relative top-[0.2rem] text-2xl" />
        <p className="text-[1.1rem]">Suggestions</p>
      </div>

      <div className="flex">
        {SuggestionsLinks.map((link, index) => (
          <div
            key={index}
            className="p-1 rounded-lg flex flex-col justify-between h-full gap-4"
          >
            <h3 className="text-[0.7rem] text-white font-bold bg-[#5A5FBC] rounded-sm w-14 px-1 py-[1px]">
              {link.question}
            </h3>
            <div className="border-dashed border-2 border-violet-500 bg-[#f2f1fa] flex items-center justify-center p-2 text-2xl font-semibold rounded-sm">
              {link.time}
              <sub>{link.unit}</sub>
            </div>
            <p className={`text-center text-xl font-semibold ${link.color}`}>
              {link.difficulty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
