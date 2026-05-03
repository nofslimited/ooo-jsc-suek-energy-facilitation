import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Fleet } from "./components/pages/Fleet";
import { Products } from "./components/pages/Products";
import { Services } from "./components/pages/Services";
import { About } from "./components/pages/About";
import { Financial } from "./components/pages/Financial";
import { News } from "./components/pages/News";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "fleet", Component: Fleet },
      { path: "products", Component: Products },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "financial", Component: Financial },
      { path: "news", Component: News },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);