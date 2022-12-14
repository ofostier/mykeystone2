import { gql } from "@apollo/client";
import client from "../../helpers/apollo-client";
import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1> List of all companies shown here.</h1>
      {data.map((item) => (
        <p key={item.id}>
          <Link href={`/company/${item.id}`}>
            <a> {item.name} </a>
          </Link>
        </p>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        Products {
          name
          id
        }
      }
    `,
  });

  return {
    props: {
      data: data.Products,
    },
  };
}
