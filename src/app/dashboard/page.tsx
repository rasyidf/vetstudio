import { json, useLoaderData } from "react-router-dom";

export async function loader({ }) {
  let data = "Hello Dashboard!";
  return json(data);
}

export function Component() {
  let data = useLoaderData() as string;

  return (
    <>
      <h1>Dashboard</h1>
      <p>{data}</p>
    </>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "DashboardPage";