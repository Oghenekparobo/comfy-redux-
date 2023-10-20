import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

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

export const loader = async () => {
  const url = "/products?featured=true";

  const response = await customFetch(url);

  const products = response.data?.data;
  console.log(products);
  return { products };
};

export default Landing;
