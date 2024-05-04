"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SubNavBar } from "../SubNavBar/SubNavBar";
// IMAGENES
import Image from "next/image";
import Logo from "@/assets/logo5.png";
import CarritoImg from "@/assets/carrito.svg";
import BurgerImg from "@/assets/menu.svg";
import BurgerClose from "@/assets/close-square-svgrepo-com.svg";

export const NavBar = () => {
  const [BurgerMenu, setBurgerMenu] = useState(false);

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setBurgerMenu(!BurgerMenu);
  };

  return (
    <>
      <div className="w-full h-[60px] flex items-center bg-sky-950">
        {/* LOGO */}
        <div className="w-1/2 sm:w-1/4 flex flex-row justify-center ">
          <Image src={Logo} alt="" className="w-6 sm:w-8 h-8" />
          <h1 className=" text-white text-xl sm:text-xl md:text-3xl font-semibold">
            Click|Tech
          </h1>
        </div>

        {/* BURGER MENU */}
        {BurgerMenu === false ? (
          <div className="w-1/2 mr-6 flex justify-end sm:hidden">
            <button onClick={handleOnClick} className="rigth-0">
              <Image src={BurgerImg} alt="" className="w-8 " />
            </button>
          </div>
        ) : (
          <div className="w-1/2 mr-6 flex justify-end sm:hidden">
            <button onClick={handleOnClick} className="rigth-0">
              <Image src={BurgerClose} alt="" className="w-6 " />
            </button>
          </div>
        )}

        {/* BOTONERA */}
        <div className="hidden w-1/2 sm:flex flex-row justify-evenly ">
          <Link href="/">
            <button className="text-white text-xl hover:text-sky-500 ">
              Home
            </button>
          </Link>
          <Link href="/about">
            <button className="text-white text-xl hover:text-sky-500 ">
              About
            </button>
          </Link>
          <Link href="/products">
            <button className="text-white text-xl hover:text-sky-500 ">
              Products
            </button>
          </Link>{" "}
        </div>

        {/* container busqueda */}
        <div className="hidden sm:flex justify-center items-center sm:w-1/4 sm:h-6  rounded">
          <button className="p-2 ">🔍</button>
          <input
            type="search"
            className="sm:w-[120px] md:w-[150px] bg-gray-200 rounded-lg"
            placeholder="Search..."
          />
        </div>
      </div>
      {/* CONTAINER BURGER */}
      {BurgerMenu === true ? (
        <div className="w-full h-[400px] absolute right-0 bg-gray-800 flex flex-col items-center justify-evenly sm:hidden z-10">
          {" "}
          <Link href="/">
            <button className="text-white text-lg hover:text-sky-500 ">
              Home
            </button>
          </Link>
          <Link href="/about">
            <button className="text-white text-lg hover:text-sky-500 ">
              About
            </button>
          </Link>
          <Link href="/products">
            <button className="text-white text-lg hover:text-sky-500">
              Products
            </button>
          </Link>{" "}
          <button>
            <Image src={CarritoImg} alt="" className="w-7 " />
          </button>
          <SubNavBar />
        </div>
      ) : (
        <div className="hidden sm:block">
          <SubNavBar />
        </div>
      )}
    </>
  );
};
