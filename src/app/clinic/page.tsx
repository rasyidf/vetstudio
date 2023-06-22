import { Table } from "@/components/ui/table";
import { json, useLoaderData } from "react-router-dom";

export async function loader({ }) {
  let data = "Hello Clinics!";
  return json(data);
}

export function Component() {
  let data = useLoaderData() as string;

  return (
    <>
      <h1>Clinics</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "AboutPage";