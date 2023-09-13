import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const pages = import.meta.glob<Record<string, string>>(
  "@/components/pages/**/*.tsx",
  { eager: true },
);

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.split("/components/pages")[1].split(".tsx")[0];
  if (!fileName) {
    continue;
  }
  const normalizedPathName = fileName.replace("$", ":").replace(/\/index/, "");
  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ...rest }) => ({
    ...rest,
    element: <Element />,
  })),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
