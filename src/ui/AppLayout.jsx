import Footer from "@ui/Footer";
import Header from "@ui/Header";
import Main from "@ui/Main";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Main>
        <Outlet />
      </Main>
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
