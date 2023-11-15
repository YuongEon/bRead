"use client";
import Link from "next/link";
import React from "react";
import { useCurrency } from "../hooks";

const Product = ({ product }) => {
  return (
    <>
      <Link
        href={`/products/${product.id}`}
        className="w-[200px] p-1.5 border border-gray-50 hover:border-gary-200 hover:shadow-xl bg-gray-100 rounded mx-auto"
      >
        <div className="rounded h-[200px] overflow-hidden cursor-pointer ">
          {product?.imageUrl ? (
            <img
              className="block w-full h-full object-contain"
              src={product.imageUrl}
            />
          ) : null}
        </div>

        <div className="pt-2 px-1">
          <div className="font-semibold text-[15px] hover:underline cursor-pointer">
            {product?.title}
          </div>
          <div className="font-extrabold">{useCurrency(product?.price)}</div>

          <div className="relative flex items-center text-[12px] text-gray-500">
            <div className="line-through">
              {useCurrency(product?.price * 1.2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
