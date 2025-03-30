import { createRouter } from "@tanstack/react-router";
import rootRoute from "@routes/root-route";
import indexRoute from "@routes/index-route";

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

export default router;
