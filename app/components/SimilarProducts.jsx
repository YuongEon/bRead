"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { BiLoader } from "react-icons/bi";

const SimilarProducts = () => {

  const [products, setProducts] = useState([])

  const getRandomProducts = async () => {
    try {
      const response = await fetch('/api/products/get-random')
      const result = await response.json()

      if (result) {
        setProducts(result)
        return
      }

      setProducts([])
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => { getRandomProducts() }, [])

  return (
    <>
      <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="font-bold text-2xl py-2 mt-4">Sản phẩm tương tự</div>

          {products.length > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {products.map((item) => (
                <Product key={item.id} product={item} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center gap-4 font-semibold">
                <BiLoader size={30} className="text-blue-400 animate-spin" />
                Đang tải ...
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SimilarProducts;
