import { Navigate, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        async lazy() {
          let { Layout } = await import("./app/(marketing)/layout.tsx");
          return { Component: Layout };
        },
        children: [
          {
            index: true,
            lazy: () => import("./app/(marketing)/page.tsx"),
          },
          {
            path: "about",
            lazy: () => import("./app/(marketing)/about/page.tsx"),
          },
          {
            path: "blog",
            lazy: () => import("./app/(marketing)/blog/page.tsx"),
          },
          {
            path: "pricing",
            lazy: () => import("./app/(marketing)/pricing/page.tsx"),
          }
        ]
      },
      {
        path: "login",
        lazy: () => import("./app/(auth)/login/page.tsx"),
      },
      {
        path: "app",
        async lazy() {
          let { Layout } = await import("./app/(dashboard)/layout.tsx");
          return { Component: Layout };
        },
        children: [
          {
            index: true,
            lazy: () => import("./app/(dashboard)/dashboard/page.tsx"),
          },
          {
            path: "dashboard",
            lazy: () => import("./app/(dashboard)/dashboard/page.tsx"),
          },
          {
            path: "billing",
            lazy: () => import("./app/(dashboard)/billing/page.tsx"),
          },
          {
            path: "settings",
            async lazy() {
              let { Layout } = await import("./app/(dashboard)/settings/layout.tsx");
              return { Component: Layout };
            },
            children: [
              {
                path: "profile",
                lazy: () => import("./app/(dashboard)/settings/profile/page.tsx"),
              },
              {
                path: "account",
                lazy: () => import("./app/(dashboard)/settings/account/page.tsx"),
              },
              {
                path: "appearance",
                lazy: () => import("./app/(dashboard)/settings/appearance/page.tsx"),
              },
              {
                path: "notifications",
                lazy: () => import("./app/(dashboard)/settings/notifications/page.tsx"),
              },
              {
                path: "*",
                element: <Navigate to="profile" />,
              }
            ]
          },
          {
            path: "clinic",
            children: [
              {

                lazy: () => import("./app/(dashboard)/clinic/page.tsx"),
              },
              {
                path: ":id",
                lazy: () => import("./app/(dashboard)/clinic/[id].tsx"),
              },
              {
                path: ":id/:operation",
                lazy: () => import("./app/(dashboard)/clinic/[id].tsx"),
              }
            ]
          },
        ]
      },
    ]
  }
]);
