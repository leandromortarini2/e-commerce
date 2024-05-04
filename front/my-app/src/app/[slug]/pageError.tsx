import React from "react";
import Image from "next/image";
import ErrorImg from "@/assets/errorPage-Photoroom.png";
import Link from "next/link";

const pageError = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-sky-900 via-sky-600 to-sky-900 flex flex-col items-center ">
        <Image src={ErrorImg} alt="" />
        <p className="text-white font-semibold sm:text-2xl">
          <span className="sm:text-4xl">Dont worry</span>, there are still many
          things to see, you can start by choosing an option
        </p>
        {/* BOTONERA */}
        <div className="w-1/4 sm:flex flex-col justify-evenly ">
          <Link href="/">
            <button className="text-sky-950 sm:text-2xl hover:text-sky-500 font-medium ">
              -Home
            </button>
          </Link>
          <Link href="/about">
            <button className="text-sky-950  sm:text-2xl hover:text-sky-500 font-medium ">
              -About
            </button>
          </Link>
          <Link href="/products">
            <button className="text-sky-950  sm:text-2xl hover:text-sky-500 font-medium ">
              -Products
            </button>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};
export default pageError;
