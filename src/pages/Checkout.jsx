import React from "react";
import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="your cart is empty" />;
  }
  return (
    <section>
      <SectionTitle title="place your order" />

      <main className="grid mt-8 gap-8 items-start md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </main>
    </section>
  );
};

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("you must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

export default Checkout;
