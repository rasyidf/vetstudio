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
        lazy: () => import("./app/page.tsx"),
      },
      {
        path: "about",
        lazy: () => import("./app/about/page.tsx"),
      },
      {
        path: "login",
        lazy: () => import("./app/auth/page.tsx"),
      },
      {
        path: "app",
        async lazy() {
          let { Layout } = await import("./app/dashboard/layout.tsx");
          return { Component: Layout };
        },
        children: [
          {
            index: true,
            lazy: () => import("./app/dashboard/page.tsx"),
          },
          {
            path: "dashboard",
            lazy: () => import("./app/dashboard/page.tsx"),
          },
          {
            path: "settings",
            async lazy() {
              let { Layout } = await import("./app/settings/layout.tsx");
              return { Component: Layout };
            },
            children: [
              {
                index: true,
                lazy: () => import("./app/settings/page.tsx"),
              }
            ]
          },
          {
            path: "clinic",
            children: [
              {

                lazy: () => import("./app/clinic/page.tsx"),
              },
              {
                path: ":id",
                lazy: () => import("./app/clinic/[id].tsx"),
              },
              {
                path: ":id/:operation",
                lazy: () => import("./app/clinic/[id].tsx"),
              }
            ]
          },
        ]
      },
    ]
  }
]);
