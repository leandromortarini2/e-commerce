import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo5.png";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={Logo} className="w-8 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Click|Tech
            </span>
          </a>
          <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <Link href="/about">
              <span className="hover:underline me-4 md:me-6">About</span>
            </Link>
            <Link href="https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_privacidad">
              <span className="hover:underline me-4 md:me-6">
                Privacy Policy
              </span>
            </Link>
            <Link href="https://es.wikipedia.org/wiki/Licencia_de_c%C3%B3digo_abierto">
              {" "}
              <span className="hover:underline me-4 md:me-6">Licensing</span>
            </Link>
            <Link href="http://localhost:3000/asdasdasd">
              <span className="hover:underline">Contact</span>
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          SoyHenry | <span>Leandro</span>
          Mortarini
        </span>
      </div>
    </footer>
  );
};

export default Footer;
