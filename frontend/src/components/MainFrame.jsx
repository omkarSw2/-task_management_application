import { Outlet } from "react-router-dom";
import Headers from "./Headers";

const MainFrame = () => {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
};

export default MainFrame;
