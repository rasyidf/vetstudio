import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

type LoaderData = {
  operation: "new" | "edit" | "view" | string & {},
  clinic: Record<string, unknown>,
};

export async function loader({ params }: LoaderFunctionArgs) {

  if (params.id === "new" || params.operation === "new") {
    return {
      operation: "new",
      clinic: {},
    };
  }

  // let { data: clinic } = await supabase
  //   .from('clinics')
  //   .select('*')
  //   .eq('id', params.id);

  // if (clinic.length === 0) {
  //   return json({ message: "Clinic not found" }, { status: 404 });
  // }


  if (params.operation === "edit") {
    return {
      operation: "edit",
      clinic: {},
    };
  }

  return {
    operation: "view",
    clinic: {
      id: params.id,

    },
  };
}

export function Component() {
  let data = useLoaderData() as LoaderData;

  return (
    <>
      <h1>Clinic {data.operation}</h1>
      <p>{JSON.stringify(data.clinic)}</p>
    </>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "AboutPage";