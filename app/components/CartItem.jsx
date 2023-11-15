"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import { useCurrency } from "../hooks";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";


const CartItem = ({product}) => {
  const cart = useCart()
  const removeItemFromCart = () => {
    let res = confirm(`Bạn có chắc chắn muốn xoá sản phẩm này? ${product.title}`)
    if(res){
      cart.removeFromCart(product)
      toast.success("Đã xoá khỏi giỏ hàng", {autoClose: 3000})
    }
  }
  return (
    <>
      <div className="relative flex justify-start my-2 border w-full p-6">
        <div className="rounded w-[150px] h-[150px] overflow-hidden border border-gray-200"> 
          <img className="w-full h-full object-contain" src={product?.imageUrl} alt="" />
        </div>

        <div className="overflow-hidden pl-2 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center font-semibold justify-between w-[400px] text-[16px] underline">
              {product?.title}
            </div>
            <div className="font-bold text-lg">
              {useCurrency(product?.price)}
            </div>
          </div>

          <div className="font-semibold mt-2">
            MỚI
          </div>
          <div className="font-sm mt-2">
            {product?.description.substring(0,100)}...
          </div>
          <div className="absolute right-0 bottom-0 p-4 text-sm">
            <button 
              onClick={() => removeItemFromCart()}
              className="underline text-blue-500">
              Xoá
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem