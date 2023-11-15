"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useUser } from "../../context/user";
import { useCart } from "../../context/cart";
import ClientOnly from "../../components/ClientOnly";
import { useRouter } from "next/navigation";

const TopMenu = () => {
  const user = useUser();
  const cart = useCart();
  const router = useRouter()

  const [isMenu, setIsMenu] = useState(false);

  const isLoggedIn = () => {
    if (user && user?.id) {
      return (
        <button
          onClick={() => (!isMenu ? setIsMenu(true) : setIsMenu(false))}
          className="flex items-center gap-2 hover:underline cursor-pointer"
        >
          <div>Hi, {user.name}</div>
          <BsChevronDown />
        </button>
      );
    }

    return (
      <Link
        href={"/auth"}
        className="flex items-center gap-2 hover:underline cursor-pointer"
      >
        <div>Đăng nhập</div>
        <BsChevronDown />
      </Link>
    );
  };

  return (
    <>
      <div id="TopMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            <li className="relative px-3">
              {isLoggedIn()}

              <div
                id="AuthDropdown"
                className={`absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg ${
                  isMenu ? "visible" : "hidden"
                }`}
              >
                <div className="flex items-center justify-start gap-1 p-3">
                  <img width={50} src={user?.picture} />
                  <div className="font-bold text-[13px]">{user?.name}</div>
                </div>
                <div className="border-b"></div>

                <ul className="bg-white">
                  <li className="text-[11px] py-2 px-4 2-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    <Link href={"/orders"}>Đơn hàng của tôi</Link>
                  </li>
                  <li
                    onClick={() => {
                      user.signOut();
                      setIsMenu(false);
                    }}
                    className="text-[11px] py-2 px-4 2-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"
                  >
                    Đăng xuất
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 hover:underline cursor-pointer">
              Ưu đãi hàng ngày
            </li>
            <li className="px-3 hover:underline cursor-pointer">
              Hỗ trợ và Liên hệ
            </li>
          </ul>

          <ul
            id="TopMenuRight"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
              <img width={32} src="/images/vn.png" alt="" />
              Gửi tới
            </li>
            <ClientOnly>
              <li className="px-3 hover:underline cursor-pointer">
                <div className="relative" onClick={() => router.push("/cart")}>
                  <AiOutlineShoppingCart size={22} />

                  {cart.cartCount() > 0 ? (
                    <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                      <div className="flex items-center justify-center -mt-[1px]">
                        {cart.cartCount()}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </li>
            </ClientOnly>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
