import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* subtotal */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="capitalize">subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* shipping */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="capitalize">shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="capitalize">tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* orderTotal */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="capitalize">orderTotal </span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
