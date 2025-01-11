import { BsStars } from "react-icons/bs";

const Suggestions = () => {
  const SuggestionsLinks = [
    {
      question: "Q. 1-12",
      time: "40",
      difficulty: "Easy",
    },
    {
      question: "Q. 12-32",
      time: "1.5",
      difficulty: "Medium",
    },
    {
      question: "Q. 32-40",
      time: "3",
      difficulty: "Hard",
    },
  ];
  return (
    <div className="w-[30%] flex flex-col gap-5 p-4 bg-gray-800 rounded-xl">
      <div className="flex w-full bg-blue-800 rounded-lg p-1 gap-5">
        <BsStars className=" bg-amber-600 text-2xl" />
        <p className="text-[1.1rem] bg-lime-800">Response Time</p>
      </div>

      <div className="flex gap-1">
        {SuggestionsLinks.map((link, index) => (
          <div
            key={index}
            className="bg-blue-800 p-2 rounded-lg flex flex-col justify-between h-full gap-4"
          >
            <h3 className="text-sm bg-red-300 rounded-md w-16 p-1">
              {link.question}
            </h3>
            <div className="border-dashed border-2 border-violet-500 flex items-center justify-center p-2 text-2xl rounded-md">
              {link.time}
              <sub>sec</sub>
            </div>
            <p className="text-center text-green-600">{link.difficulty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
