"use client";

import { CiDeliveryTruck } from "react-icons/ci";

import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useCurrency, useIsLoading } from "../hooks";
import Link from "next/link";
import { useUser } from "../context/user";
import { toast } from "react-toastify";
import moment from "moment";

const Orders = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      if (!user && !user?.id) return;
      const response = await fetch("/api/orders");
      const result = await response.json();
      setOrders(result);
      useIsLoading(false);
    } catch (error) {
      toast.error("Something went wrong?", { autoClose: 3000 });
      useIsLoading(false);
    }
  };

  useEffect(() => {
    useIsLoading(true)
    getOrders()
}, [user])

  return (
    <>
      <MainLayout>
        <div
          id="OrdersPage"
          className="mt-4 max-w-[1200px] mx-auto min-h-[50vh]"
        >
          <div className="bg-white w-full p-6 min-h-[150px]">
            <div className="flex items-center text-xl">
              <CiDeliveryTruck className="text-green-500" size={35} />
              <span className="pl-4">Đơn hàng</span>
            </div>

            {orders.length < 1 ? (
              <div className="flex items-center justify-center">
                Bạn chưa có đơn hàng nào cả
              </div>
            ) : null}

            {orders.map((order) => (
              <div key={order?.id} className="text-sm pl-[50px]">
                <div className="border-b py-1">
                  <div className="pt-2">
                    <span className="font-bold mr-2">Strip ID:</span>
                    {order?.stripe_id}
                  </div>
                  <div className="pt-2">
                    <span className="font-bold mr-2">Địa chỉ nhận hàng:</span>
                    {order?.name},{order?.address},{order?.zipcode},
                    {order?.city},{order?.country},
                  </div>
                  <div className="pt-2">
                    <span className="font-bold mr-2">Tổng:</span>
                    {useCurrency(order?.total)}
                  </div>
                  <div className="pt-2">
                    <span className="font-bold mr-2">Ngày tạo đơn hàng:</span>
                    {moment(order?.created_at).calendar()}
                  </div>
                  <div className="pt-2">
                    <span className="font-bold mr-2">Ngày nhận đơn hàng:</span>
                    {moment(order?.created_at).add(5, 'days').calendar()}
                  </div>

                  <div className="flex gap-4">
                    {order?.orderItem.map((item) => (
                      <div key={item.id} className="flex w-[120px] h-auto">
                        <Link
                          href={`/products/${item.product_id}`}
                          className="py-1 hover:underline text-blue-500 font-bold  flex flex-col"
                        >
                          <div className="rounded w-[120px] h-[120px] overflow-hidden">
                            <img
                              src={item.product.imageUrl}
                              alt=""
                              className="w-full h-full object-contain"
                              width={120}
                            />
                          </div>
                          <div className="grow">{item.product.title}</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Orders;
