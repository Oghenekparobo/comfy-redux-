import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  // console.log(products);
  return (
    <section className="pt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="card w-full shadow-xl transition duration-300 hover:shadow-2xl"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt="product img"
                className="rounded-xl h-64 w-full object-cover md:h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{formatPrice(price)}</span>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default ProductsGrid;
