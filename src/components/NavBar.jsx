import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiHome8Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { PiCastleTurretLight } from "react-icons/pi";
import { PiLightning } from "react-icons/pi";
import { TbChartLine } from "react-icons/tb";
import { RiFileList2Line } from "react-icons/ri";

const NavBar = () => {
  const navLinks = [
    {
      name: "Dashboard",
      icon: <RiHome8Line />,
    },
    {
      name: "FirstGuru",
      icon: <BsStars />,
    },
    {
      name: "TownHall",
      icon: <PiCastleTurretLight />,
    },
    {
      name: "AI Evaluation",
      icon: <PiLightning />,
    },
    {
      name: "Performance",
      icon: <TbChartLine />,
    },
    {
      name: "Mock Test",
      icon: <RiFileList2Line />,
    },
  ];
  return (
    <div>
      <nav>
        <div className="flex gap-3 items-center justify-center bg-[#303947] font-Poppins">
          {/* logo is going to be here */}
          <img className="size-16" src="/firstbench_ai_logo.png" alt="" />
          <h1 className="relative right-5 text-white text-3xl">Firstbench</h1>

          <ul className="flex items-center justify-center gap-6 text-white text-[1.1rem]">
            {navLinks.map((link, index) => {
              const isMockTest = link.name === "Mock Test";
              return (
                <li
                  key={index}
                  className={`flex relative top-1 items-center justify-center gap-2 ${
                    isMockTest ? "text-[#1cb9b4]" : ""
                  }`}
                >
                  {link.icon}
                  {link.name}
                </li>
              );
            })}
          </ul>

          {/* notification bell icon */}
          <IoNotificationsOutline className="size-6 text-white relative top-1 left-6" />

          {/* profile icon */}
          <div className="flex items-center justify-center gap-2 bg-[#1d2633] rounded-md p-1 relative top-1 left-10">
            <div className="flex items-center justify-center rounded-md bg-[#f8c2b3] text-[#52362f] size-6">
              P
            </div>
            <h6 className="text-white">Profile</h6>
            <MdKeyboardArrowDown className="size-6 text-white" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
