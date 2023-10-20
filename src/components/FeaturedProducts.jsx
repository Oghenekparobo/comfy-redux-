import React from "react";
import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;
