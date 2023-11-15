"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import { useCurrency } from "../hooks";
import { usePathname } from "next/navigation";

const CheckoutItem = ({ product }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex justify-start rounded-lg mb-2 border p-4">
        <div className="rounded-md w-[150px] h-[150px] overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={product.imageUrl}
          />
        </div>

        <div className="overflow-hidden pl-2">
          <div className="font-semibold">{product.title}</div>

          <div className="text-lg font-semibold">
            <span className="font-bold">{useCurrency(product.price)}</span>
          </div>

          <div className="relative flex items-center text-[14px] text-gray-500">
            <div className="line-through">
              {useCurrency(product.price * 1.2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>

          <div className="text-sm mt-2">
            {product.description.substring(0, 130)}...
          </div>

          {pathname === "/cart" ? (
            <div className="text-sm mt-2 w-full flex justify-end underline text-blue-500 cursor-pointer">
              Xoá
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
