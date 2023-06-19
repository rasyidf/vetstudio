import { json, useLoaderData, useRouteError, isRouteErrorResponse } from "react-router-dom";

export async function loader({ }) {
  let data = "Home";
  return json(data);
}

export function Component() {
  let data = useLoaderData() as string;

  return (
    <>
      <h1>You made it!</h1>
      <p>{data}</p>
    </>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "IndexPage";

export function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{(error instanceof Error) ? (error.message || JSON.stringify(error)) : "Erorr"}</h1>
  );
}

// If you want to customize the component display name in React dev tools:
ErrorBoundary.displayName = "SampleErrorBoundary";