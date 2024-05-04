import React from "react";
import { ProductParams } from "@/types";
import getProducts from "@/helpers/getProducts";
import Image from "next/image";
import ImgProducts from "@/helpers/ImgProduct";
import { BuyProducts } from "@/components/BuyProducts/BuyProducts";

const ProductsDetail = async ({ params }: { params: ProductParams }) => {
  const product = await getProducts();
  const id: number = Number(params.slug);
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-sky-900 via-sky-500 to-sky-900 ">
        {product?.map((element) =>
          element.id === id ? (
            <div
              key={element.id}
              className="w-[90%] mx-auto flex flex-col justify-evenly items-center sm:flex-row md:justify-center"
            >
              {ImgProducts.map((imagen) =>
                imagen.id === element.id ? (
                  <Image
                    src={imagen.img}
                    alt=""
                    key={imagen.id}
                    className="w-[180px] h-[200px]  sm:mt-20 sm:w-[300px] sm:h-[350px]"
                  />
                ) : null
              )}
              <div className="sm:w-[500px]  sm:mt-20">
                <h2 className="text-center text-4xl text-white font-extrabold">
                  {element.name}
                </h2>{" "}
                <p className="text-center text-xl text-white font-textNormal p-2 font-bold">
                  $ {element.price}
                </p>{" "}
                <p className="text-center text-lg text-white font-textNormal p-3">
                  Description: <br /> {element.description}
                </p>
                <p className="text-center text-lg text-white font-textNormal ">
                  Stok:
                  {element.stock}
                </p>
                <div className="w-full flex justify-center items-center">
                  <BuyProducts id={id} />
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default ProductsDetail;
