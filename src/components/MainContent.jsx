import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const MainContent = () => {
  return (
    <div className="flex mb-8">
      <LeftComponent />
      <RightComponent />
    </div>
  );
};

export default MainContent;
