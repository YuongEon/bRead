"use client";

import { useEffect, useState } from "react";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainLayout from "./layouts/MainLayout";
import { useIsLoading } from "./hooks";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    useIsLoading(true);

    const response = await fetch("/api/products");
    const prods = await response.json();

    // xoa toan bo product trc khi reset
    setProducts([]);

    setProducts(prods);
    useIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainLayout>
      <CarouselComp />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Sản phẩm</div>

        <div className="grid grid-cols-5 gap-4">
          {products.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
