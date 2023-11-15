"use client";

import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import CartItem from "../components/CartItem";
import { useCurrency, useIsLoading } from "../hooks";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cart";
import ClientOnly from "../components/ClientOnly";
import { toast } from "react-toastify";

const Cart = () => {
  const router = useRouter();

  const cart = useCart();

  console.log(cart.getCart())

  useEffect(() => {
    useIsLoading(true);
    cart.getCart();
    cart.cartTotal();
    useIsLoading(false);
  }, [cart]);

  const goToCheckout = () => {
    if (!cart.cartTotal()) {
      // alert("Bạn không có bất kì sản phẩm nào trong giỏ hàng");
      toast.warn("Bạn không có bất kì sản phẩm nào trong giỏ hàng", {autoClose: 3000})
      return;
    }

    router.push("/checkout");
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-2xl font-bold my-4">Giỏ hàng mua sắm</div>
          <div className="relative flex items-baseline justify-between gap-2">
            <ClientOnly>
              <div className="w-[65%]">
                {cart.getCart().map((item) => (
                  <CartItem key={item.id} product={item} />
                ))}
              </div>
            </ClientOnly>

            <div
              id="GoToCheckout"
              className="md:w-[33%] absolute top-0 right-0 m-2"
            >
              <ClientOnly>
                <div className="bg-white p-4 border">
                  <button 
                    onClick={() => goToCheckout()}
                    className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                    Đi tới thanh toán
                  </button>

                  <div className="flex items-center justify-between mt-4 text-sm mb-1">
                    <div>Sản phẩm ({cart.getCart().length})</div>
                    <div>{useCurrency(cart.cartTotal())}</div>
                  </div>
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div>Phí vận chuyển</div>
                    <div>Miễn phí</div>
                  </div>

                  <div className="border-b border-gray-300"></div>

                  <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                    <div className="">Tổng thu</div>
                    <div>{useCurrency(cart.cartTotal())}</div>
                  </div>
                </div>
              </ClientOnly>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  );
};

export default Cart;
