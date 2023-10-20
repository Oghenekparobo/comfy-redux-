import React from "react";
import { Filters, PaginationContainer, ProductContainer } from "../components";
import { customFetch } from "../utils";

const Products = () => {
  return (
    <>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};

export const loader = async ({ request }) => {
  const params =Object.fromEntries([...new URL(request.url).searchParams.entries()]) ;
  // console.log(params);
  const response = await customFetch("/products" , {params});
  const products = response.data?.data;
  const meta = response.data?.meta;

  return { products, meta , params };
};

export default Products;
