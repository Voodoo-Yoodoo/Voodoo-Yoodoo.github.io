import settings from "@constants/settings";
import UnderConstruction from "@pages/UnderConstruction";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "@routes/root-route";

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <UnderConstruction />,
});

export default indexRoute;
