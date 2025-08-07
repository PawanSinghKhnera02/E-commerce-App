import React from "react";
import CartButton from "./CartButton";
import { formatCurrency } from "../utilities/formatCurrency";

const CartItem = ({ item , fromCart }) => {
  const { id, name, imageUrl, price } = item;
  return (
    <div
      key={id}
      className="group flex flex-col gap-y-2 border border-zinc-200 rounded-md bg-white p-24 relative"
    >
      <img 
        src={imageUrl}
        alt="Product Image"
        width={300}
        height={300}
        className={` ${ !fromCart && "group-hover:-translate-y-2 transition-all" }  duration-500`}
      />

      <div className="absolute bottom-5 left-5">
        <h1 className={`text-zinc-700 ${fromCart && 'text-sm'}`}>{name}</h1>
        <span className={`text-pink-400 ${fromCart && 'text-sm'}`}>{formatCurrency(price)}</span>
      </div>
      <CartButton item={item} fromCart= {fromCart}/>
    </div>
  );
};

export default CartItem;
