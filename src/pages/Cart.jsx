import React from "react";
import { useSelector } from "react-redux";
import { CartItemList, CartTotals, SectionTitle } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  // temp
  const user = null;

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="your cart is empty" />;
  }
  return (
    <section className="py-10">
      <SectionTitle text="shopping cart" />
      <div className="grid gap-10 mt-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              proced to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
