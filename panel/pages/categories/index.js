import Link from "next/link";
import React from "react";

import Layout from "../../components/Layout";
import Title from "../../components/Layout/Title";
import Table from "../../components/Table";

import { useQuery } from "../../lib/graphql";
const query = {
  query: `
    query {
      getAllCategories {
        id, name, slug
      }
    }
  `,
};

const Index = () => {
  const { data, error } = useQuery(query);
  return (
    <Layout>
      <Title>Gerenciar Categorias</Title>
      <div className="mt-8"></div>
      <div>
        <Link href="/categories/create">
          <a className="href">Criar Categoria</a>
        </Link>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <Table>
              <Table.Head>
                <Table.Th>Categorias</Table.Th>
                <Table.Th></Table.Th>
              </Table.Head>
              <Table.Body>
                {data &&
                  data.getAllCategories &&
                  data.getAllCategories.map((category) => (
                    <Table.Tr key={category.id}>
                      <Table.Td className="Td">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm leading-5 font-medium text-gray-900">
                              {category.name}
                            </div>
                            <div className="text-sm leading-5 text-gray-500">
                              {category.slug}
                            </div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Editar
                        </a>
                      </Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
