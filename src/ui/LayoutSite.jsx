import Footer from "@ui/Footer";
import Header from "@ui/Header";
import Main from "@ui/Main";
import { Outlet } from "@tanstack/react-router";
import settings from "@constants/settings";

const AppLayout = () => {
  return (
    <>
      {!settings.isUnderConstruction && <Header />}
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default AppLayout;
