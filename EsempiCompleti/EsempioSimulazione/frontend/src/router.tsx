import { createBrowserRouter } from "react-router";

import { HomePage } from "./pages/HomePage";
import { PropostePage } from "./pages/PropostePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/proposte", element: <PropostePage /> },
];

export const router = createBrowserRouter(routes);
