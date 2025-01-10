import { BsClipboardCheck } from "react-icons/bs";
import { GoFileSymlinkFile } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";

const LeftComponent = () => {
  return (
    <div className="bg-blue-500 p-4 flex-[3] font-Poppins">
      <div className="rounded-md p-4 bg-gray-600">
        {/* first part */}
        <div className="bg-violet-700 flex flex-col items-center mb-10">
          <img
            className="size-40 bg-pink-800"
            src="/completedTasks.png"
            alt=""
          />
          <h3 className="text-2xl">Your Result!</h3>
          <p>All your insights & details in one place</p>
        </div>

        {/* inner second part */}
        <div className="bg-orange-950 p-4 rounded-lg">
          {/* second part */}
          <div className="flex items-center justify-center bg-amber-700 p-2 gap-3">
            <BsClipboardCheck className="size-10 p-2 rounded-md bg-violet-300" />
            <div className="flex flex-col items-center gap-1">
              <p className="bg-[#5a5fbc] text-white px-2 rounded-2xl">
                YOU'VE PASSED
              </p>
              <div className="flex font-bold font-Montserrat">
                <h3 className="text-3xl">136</h3>
                <h3 className="relative text-[#afb4bd] top-3 text-[12px]">
                  &nbsp;/&nbsp;240
                </h3>
              </div>
            </div>
            <div className="rightLine border-r border-2 h-14 border-[#e1e2e8]"></div>
            <div className="text-white flex flex-col items-center bg-red-600">
              <span className="bg-[#059794] px-2 py-[2px] rounded-md">76%</span>
              <p>ACCURACY</p>
            </div>
          </div>

          {/* third part */}
          <div className="p-1 bg-amber-200 mt-10">
            <div className="flex items-center justify-start bg-lime-600 p-2 gap-3">
              <div className="size-16 p-[3px] rounded-sm bg-violet-300">
                <img
                  src="/user.jpeg"
                  className="w-full h-full object-cover rounded-sm"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center gap-1 bg-yellow-900">
                <p className="text-bold text-[#5a5fbc]  px-2 rounded-2xl">
                  Top Score
                </p>
                <div className="flex font-bold font-Montserrat">
                  <h3 className="text-3xl">230</h3>
                  <h3 className="relative text-[#afb4bd] top-3 text-[12px]">
                    &nbsp;/&nbsp;240
                  </h3>
                </div>
              </div>
            </div>
            <div className="bottomLine border-b-2 border-black"></div>
            <div className="text-white flex items-center justify-between p-2 bg-red-600">
              <p>
                <span className="text-[#606062]">By</span>
                &nbsp;Parth Akotkar
              </p>
              <span className="bg-[#059794] px-2 py-[2px] rounded-2xl">
                92% ACCURACY
              </span>
            </div>
          </div>

          {/* fourth part */}
          <div className="bg-red-500 mt-4">
            <h1 className="font-semibold text-xl">Improve your Marks</h1>
            <p className="text-slate-500">
              Improve your score by practicing more.
            </p>
            <div className="bg-[#5a5fbc] py-1 text-center mt-3 rounded-md text-white text-xl">
              Practice more
            </div>
          </div>
        </div>
        {/* fifth part */}
        <div className="bg-yellow-400 top-10 mt-10 rounded-lg p-4">
          <h1 className="text-3xl font-bold">Revisit Paper</h1>
          <p className="mt-2">
            Challenge your friends by simply sharing a ink to this test
          </p>
          <button className="bg-[#5a5fbc] px-24 py-2 text-center mt-3 rounded-md text-white text-xl flex items-center justify-center mx-auto">
            <GoFileSymlinkFile />
            Visit
          </button>
          <p className="flex items-start justify-start gap-2 mt-3 text-slate-400">
            <CiCircleInfo className=" text-2xl" />
            Instructions for how to upload your handwritten material in given
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
