import { BellIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom"; // 👉 thêm import
import LanguageDropDown from "./LanguageDropDown";

import useAuth from "../hooks/useAuth";
import MeDropDown from "./MeDropDown";
import { use } from "react";

function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/authen/login');
  };
  const handleSignin = () => {
    navigate('/authen/signup');
  };
  const languageOptions = [
    { key: "vi", label: "Tiếng Việt" },
    { key: "en", label: "English" },
  ];

  const meOptions = [
    {
      key: "me",
      label: "Tài khoản của tôi ",
    },
    {
      key: "order",
      label: "Đơn hàng",
    },
    {
      key: "logout",
      label: "Đăng xuất",
    },
  ];

  // if (!user) return;

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 w-full bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 shadow-md ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 text-white">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold tracking-wide flex justify-center items-center">
              <img src="/logo.png" className="w-12 h-12" alt="" />
              <p>TMDT</p>
            </div>
            <div className="hidden md:flex gap-2 font-medium text-large">
              {/* 👉 dùng Link thay a */}
              <Link
                to="/"
                className="px-3 py-2 rounded-lg hover:bg-white/20 transition cursor-pointer"
              >
                Trang Chủ
              </Link>
              <Link
                to="/products"
                className="px-3 py-2 rounded-lg hover:bg-white/20 transition cursor-pointer"
              >
                Sản Phẩm
              </Link>
            </div>
          </div>

          <div className="flex-1 mx-6 hidden md:block">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <div className="flex items-center ">

            <div className="p-6">
              <LanguageDropDown options={languageOptions} defaultValue="vi" />
            </div>
            {user ? (
              <>
                <div className="relative flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/20 transition cursor-pointer">
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <BellIcon className="w-6 h-6 text-white" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-md">
                      3
                    </span>
                  </div>
                  <span className="text-white font-medium">Thông báo</span>
                </div>
                <div className="p-6">
                  <MeDropDown options={meOptions} />
                </div>

                <div className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/20 transition cursor-pointer">
                  <ShoppingCartIcon className="w-6 h-6 text-white" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-md">
                    5
                  </span>
                </div>
              </>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={handleLogin}
                  className="relative flex items-center gap-2 px-3 py-1 bg-green-500  hover:bg-green-600 rounded-lg text-sm font-medium shadow-md transition"
                >
                  Login
                </button>
                <button
                  onClick={handleSignin}
                  className="relative flex items-center gap-2 px-3 py-1 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-sm font-medium shadow-md transition"
                >
                  Signin
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="block md:hidden py-2">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
