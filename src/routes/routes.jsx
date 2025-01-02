import ConstructionLayout from "@ui/ConstructionLayout";
import UnderConstruction from "@pages/UnderConstruction";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <ConstructionLayout />,
    children: [
      {
        path: "*",
        element: <UnderConstruction />,
      },
    ],
  },
]);

export default routes;
