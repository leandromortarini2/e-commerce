import React from "react";

import { ProductsCard } from "@/components/ProductsCard/ProductsCard";

const Products = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-sky-900 via-sky-500 to-sky-900 ">
        <div className="sm:w-full h-20 sm:h-[250px]  overflow-hidden flex flex-col sm:flex-row items-center justify-center ">
          <h2 className="text-xl sm:text-4xl text-white font-bold">
            Click|Tech
          </h2>
          <h2 className=" text-2xl sm:text-6xl text-white font-bold ml-5">
            {" "}
            PRODUCTS
          </h2>
        </div>
        <ProductsCard />{" "}
      </div>
    </>
  );
};

export default Products;
