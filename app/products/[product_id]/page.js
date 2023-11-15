"use client";

import React, { useEffect, useState } from "react";
import useCart from "../../context/cart";
import { toast } from "react-toastify";
import SimilarProducts from "../../components/SimilarProducts";
import { useCurrency, useIsLoading } from "../../hooks";
import MainLayout from "../../layouts/MainLayout";

const Product = ({ params }) => {
  const cart = useCart();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    useIsLoading(true);
    setProduct({});

    const response = await fetch(`/api/product/${params.product_id}`);
    const prod = await response.json();
    setProduct(prod);
    cart.props.value.isItemAddedToCart(prod);
    useIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            <div className="w-[40%] rounded-lg overflow-hidden">
              {product?.imageUrl ? (
                <img
                  className="w-full h-full object-contain"
                  src={product?.imageUrl}
                />
              ) : (
                <div className="w-[40%]"></div>
              )}
            </div>

            <div className="px-4 w-full">
              <div className="font-bold text-xl">{product?.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Mới - Bảo Hành đầy đủ
              </div>

              <div className="border-b py-1"></div>

              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Tình trạng:{" "}
                  <span className="font-bold text-[17px] ml-2">Mới</span>
                </div>
              </div>

              <div className="border-b py-1"></div>

              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Giá:{" "}
                    {product?.price ? (
                      <div className="font-bold text-[20px] ml-2">
                        {useCurrency(product.price)}
                      </div>
                    ) : null}
                  </div>
                  <button
                    onClick={() => {
                      if (cart.props.value.isItemAdded) {
                        cart.props.value.removeFromCart(product);
                        toast.info("Đã xoá sản phẩm khỏi giỏ hàng", {
                          autoClose: 3000,
                        });
                      } else {
                        cart.props.value.addToCart(product);
                        toast.success("Đã thêm sản phẩm vào giỏ hàng", {
                          autoClose: 3000,
                        });
                      }
                    }}
                    className={`
                    bg-[#3498C9] text-white py-2 px-20 rounded-full cursor-pointer
                    ${
                      cart.props.value.isItemAdded
                        ? "bg-[#e9a321] hover:bg-[#bf851a]"
                        : "bg-[#3498C9] hover:bg-[#0054a0]"
                    }
                    `}
                  >
                    {cart.props.value.isItemAdded
                      ? "Xoá khỏi giỏ hàng"
                      : "Thêm vào giỏ hàng"}
                  </button>
                </div>
              </div>
              <div className="border-b py-1"></div>

              <div className="pt-3">
                <div className="font-semibold pb-1">Mô tả:</div>
                <div className="text-sm">{product?.description}</div>
              </div>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  );
};

export default Product;
