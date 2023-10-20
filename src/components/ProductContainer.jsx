import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductList from "./ProductList";
import { useLoaderData } from "react-router-dom";
import { BsGridFill, BsList } from "react-icons/bs";

const ProductContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination?.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyle = (pattern) => {
    return `btn btn-circle btn-sm text-xl ${
      pattern === layout
        ? "btn-primary text-neutral-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <section>
      {/* header */}
      <header className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}{" "}
        </h4>

        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyle("grid")}
          >
            <BsGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyle("list")}
          >
            <BsList />
          </button>
        </div>
      </header>
      {/* products */}
      {totalProducts === 0 ? (
        <p className="text-2xl font-bold">No products available</p>
      ) : layout === "list" ? (
        <ProductList />
      ) : (
        <ProductsGrid />
      )}
    </section>
  );
};

export default ProductContainer;
