import Main from "@ui/Main";
import { Outlet } from "react-router-dom";

const ConstructionLayout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default ConstructionLayout;
