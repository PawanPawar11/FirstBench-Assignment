import { BsClipboardCheck } from "react-icons/bs";
import { GoFileSymlinkFile } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";

const LeftComponent = () => {
  return (
    <div className="pl-16 pr-6 py-10 bg-[#F9FAFB]  flex-[2] font-Poppins">
      <div className="rounded-xl p-4 bg-[#F7F6FC] border-[1px] border-[#30394765]">
        {/* first part */}
        <div className="flex flex-col items-center mb-10">
          <img className="size-40" src="/completedTasks.png" alt="" />
          <h3 className="text-3xl font-bold text-[#5a5fbc]">Your Result!</h3>
          <p className="text-[0.95rem] text-[#3039479c]">
            All your insights & details in one place
          </p>
        </div>

        {/* Insider second part */}
        <div className="p-5 border-[1px] border-[#30394765] bg-[#FFFFFF] rounded-lg">
          {/* second part */}
          <div className="flex items-center justify-between bg-[#F7F6FC] rounded-md p-2 gap-2">
            <BsClipboardCheck className="size-14 p-3 rounded-md bg-[#DBD8F7]" />
            <div className="flex flex-col items-center gap-1">
              <p className="bg-[#5a5fbc] text-white px-2 rounded-2xl text-[9px]">
                YOU&apos;VE PASSED
              </p>
              <div className="flex font-bold font-Montserrat">
                <h3 className="text-3xl">136</h3>
                <h3 className="relative text-[#afb4bd] top-3 text-[12px]">
                  &nbsp;/&nbsp;240
                </h3>
              </div>
            </div>
            <div className="rightLine border-r border-2 h-14 border-[#e1e2e8]"></div>
            <div className="text-white flex flex-col items-center">
              <span className="bg-[#059794] px-2 py-[2px] rounded-md">76%</span>
              <p className="text-[#059794]">ACCURACY</p>
            </div>
          </div>

          {/* third part */}
          <div className="p-2 bg-[#F7F6FC] rounded-lg mt-10">
            <div className="flex items-center justify-start p-2 gap-3">
              <div className="size-16 p-[3px] rounded-sm bg-violet-300">
                <img
                  src="/user.jpeg"
                  className="w-full h-full object-cover rounded-sm"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center gap-1">
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
            <div className="text-white flex items-center justify-between p-2">
              <p className="text-black">
                <span className="text-[#606062]">By</span>
                &nbsp;Parth Akotkar
              </p>
              <span className="bg-[#059794] text-[11px] px-2 py-[2px] rounded-2xl">
                92% ACCURACY
              </span>
            </div>
          </div>

          {/* fourth part */}
          <div className="mt-4 ml-1">
            <h1 className="font-semibold text-xl">Improve your Marks</h1>
            <p className="text-slate-500">
              Improve your score by practicing more.
            </p>
            <div className="bg-[#5a5fbc] py-1 text-center mt-8 rounded-lg text-white text-xl">
              Practice more
            </div>
          </div>
        </div>

        {/* fifth part */}
        <div className="border-[1px] border-[#30394765] bg-[#FFFFFF] top-10 mt-10 p-4 rounded-lg">
          <h1 className="font-bold text-2xl">Revisit Paper</h1>
          <p className="text-slate-500 mt-3">
            Challenge your friends by simply sharing a ink to this test
          </p>
          <button className="bg-[#5a5fbc] px-20 py-1 text-center m-8 rounded-md text-white text-xl flex gap-2 items-center justify-center mx-auto">
            <GoFileSymlinkFile />
            Visit
          </button>
          <p className="flex items-start justify-center gap-2 text-slate-400 text-[13px]">
            <CiCircleInfo className="size-7" />
            Instructions for how to upload your handwritten material in given
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
