import React, { useState } from "react";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/Cartslice";

const SingleProduct = () => {
  const { product } = useLoaderData();

  const { image, title, price, description, colors, company } =
    product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    description,
    productColor,
    company,
    amount,
  };


  const addToCart = ()=>{ 
    dispatch(addItem({product: cartProduct}))
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/" className="capitalize">
              home
            </Link>
          </li>
          <li>
            <Link to="/products" className="capitalize">
              products
            </Link>
          </li>
        </ul>
      </div>
      {/* product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="h-96 w-96 object-cover rounded-lg lg:w-full"
        />
        {/* product */}
        <div className="">
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h2 className="text-3xl text-neutral-content font-bold mt-2">
            {company}
          </h2>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* colors */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor &&
                      "border-2 border-secondary rounded-full"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md -tracking-wider capitalize font-medium">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          {/* cart btn */}
          <div className="mt-10">
            <button
              className="btn btn-secondary capitalize"
              onClick={addToCart}
            >
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await customFetch(`/products/${id}`);

  return { product: response.data?.data };
};

export default SingleProduct;
