import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

const Landing = () => {
  return (
    <section className="py-24">
      <Hero />
      <div className="pt-24">
        <FeaturedProducts />
      </div>
    </section>
  );
};

export const loader = (queryClient) => async () => {
  console.log(queryClient);

  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data?.data;
  console.log(products);
  return { products };
};

export default Landing;
