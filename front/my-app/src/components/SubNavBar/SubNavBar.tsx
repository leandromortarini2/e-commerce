import Link from "next/link";
import React from "react";
import Image from "next/image";
import CarritoImg from "@/assets/carrito.svg";
import { useAuth } from "@/app/context/AuthContext";
import Cookies from "js-cookie";

export const SubNavBar = () => {
  const { token } = useAuth();

  // const [tokenState, setTokenState] = useState(token);

  const handleSignOff = () => {
    Cookies.remove("token");

    window.location.href = "/";
  };

  return (
    <>
      <div className="w-full h-0 sm:flex sm:w-full sm:h-[60px] sm:bg-sky-800 justify-end">
        {token === null ? (
          <div className="w-full  sm:w-1/4 sm:h-[50px] flex justify-evenly items-center sm:mr-10">
            <Link href="/auth/login">
              <button className="text-white sm:font-bold text-xl hover:text-sky-500 font-tituloNav">
                Login
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="text-white sm:font-bold  text-xl hover:text-sky-500 font-tituloNav">
                Register
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full  sm:w-1/4 sm:h-[50px] flex justify-evenly items-center sm:mr-10">
            <Link href="/orders">
              <button className="text-white sm:font-bold text-xl hover:text-sky-500 font-tituloNav">
                Orders
              </button>
            </Link>
            <button
              onClick={handleSignOff}
              className="text-white sm:font-bold text-xl hover:text-sky-500 font-tituloNav"
            >
              Sign Out
            </button>
          </div>
        )}{" "}
      </div>
    </>
  );
};
