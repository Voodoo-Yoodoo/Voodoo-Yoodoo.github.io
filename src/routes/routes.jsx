import UnderConstruction from "@pages/UnderConstruction";
import AppLayout from "@ui/AppLayout";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <UnderConstruction />,
      },
    ],
  },
]);

export default routes;
