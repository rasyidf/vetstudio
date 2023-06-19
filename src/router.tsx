import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let { Layout } = await import("./app/layout.tsx");
      return { Component: Layout };
    },
    children: [
      {
        path: "/",
        lazy: () => import("./app/page.tsx"),
      },
      {
        path: "/about",
        lazy: () => import("./app/about/about.tsx"),
      },
      {
        path: "/dashboard",
        lazy: () => import("./app/dashboard/dashboard.tsx"),
      },
    ]
  }
]);
