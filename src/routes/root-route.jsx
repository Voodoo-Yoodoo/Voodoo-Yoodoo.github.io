import { createRootRoute, HeadContent } from "@tanstack/react-router";
import LayoutSite from "@ui/LayoutSite";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <LayoutSite />
    </>
  ),
  head: () => ({
    meta: [{ title: "Voodoo-Yoodoo Website // Under Construction" }],
    links: { rel: "icon", href: "/img/favicon.png" },
  }),
});

export default rootRoute;
