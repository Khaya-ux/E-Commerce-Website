import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const Menus = [
    { title: "Store", path: "/" },
    { title: "Favorite", icon: <FaRegHeart />, path: "/favorite" },
    {
      title: "Bag",
      icon: <IoBagHandle />,
      path: "/cart",
      showCount: true,
    },
    { title: "Logout", spacing: true, icon: <TbLogout />, path: "/logout" },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-neutral-200 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        {open ? (
          <IoMdClose
            className="text-black text-3xl absolute -translate-x-1/2 top-24 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <IoMenu
            className="text-black text-3xl absolute right-7 top-24 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        )}

        {/*Logo*/}

        <div className="inline-flex">
          <GiShoppingBag
            className={`bg-neutral-200 text-4xl text-emerald-400 rounded cursor-pointer block float-left duration-500 ${
              open && "rotate-6"
            }`}
          />
        </div>
        <ul className="pt-14">
          {Menus.map((menu) => {
            const isActive =
              menu.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(menu.path);

            return (
              <li
                key={menu.title}
                className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 ${
                  menu.title === "Logout"
                    ? "hover:bg-red-500 hover:text-white"
                    : "hover:bg-black hover:text-white"
                } rounded-md ${menu.spacing ? "mt-64" : "mt-2"} ${
                  isActive && menu.title !== "Logout"
                    ? "bg-black text-white"
                    : "text-gray-700"
                }`}
              >
                <Link
                  to={menu.path}
                  className="flex items-center gap-x-4 w-full"
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <IoStorefrontSharp />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.showCount && totalQuantity > 0 && (
                    <span className="ml-auto text-xs font-semibold bg-black text-white rounded-full px-2 py-0.5">
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
