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
                index: true,
                element: <Navigate to="/app/settings/profile" />,
              },  
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
          {
            path: "customers",
            lazy: () => import("./app/(dashboard)/customers/page.tsx"),
            children: [
              {
                path: "owners",
                lazy: () => import("./app/(dashboard)/customers/owners/page.tsx"),
              },
              {
                path: "pets",
                lazy: () => import("./app/(dashboard)/customers/pets/page.tsx"),
              },
            ],
          },
          {
            path: "appointments",
            lazy: () => import("./app/(dashboard)/appointments/page.tsx"),
            children: [
              {
                path: "calendar",
                lazy: () => import("./app/(dashboard)/appointments/calendar/page.tsx"),
              },
              {
                path: "assignments",
                lazy: () => import("./app/(dashboard)/appointments/assignments/page.tsx"),
              },
            ],
          },
          {
            path: "inventory",
            lazy: () => import("./app/(dashboard)/inventory/page.tsx"),
            children: [
              {
                path: "suppliers",
                lazy: () => import("./app/(dashboard)/inventory/suppliers/page.tsx"),
              },
              {
                path: "orders",
                lazy: () => import("./app/(dashboard)/inventory/orders/page.tsx"),
              },
              {
                path: "stocks",
                lazy: () => import("./app/(dashboard)/inventory/stocks/page.tsx"),
              },
              {
                path: "purchase-orders",
                lazy: () => import("./app/(dashboard)/inventory/purchase-orders/page.tsx"),
              },
            ],
          },
          {
            path: "prescriptions",
            lazy: () => import("./app/(dashboard)/prescriptions/page.tsx"),
            children: [
              {
                path: "new",
                lazy: () => import("./app/(dashboard)/prescriptions/new/page.tsx"),
              },
              {
                path: "history",
                lazy: () => import("./app/(dashboard)/prescriptions/history/page.tsx"),
              },
            ],
          },
          {
            path: "reports",
            lazy: () => import("./app/(dashboard)/reports/page.tsx"),
          }

        ]
      },
    ]
  }
]);
