import React from "react";
import getProducts from "@/helpers/getProducts";
import ImgProduct from "@/helpers/ImgProduct";
import Image from "next/image";
import Link from "next/link";

export const ProductsCard: React.FC = async () => {
  const products = await getProducts();

  return (
    <div className="w-full flex justify-center items-center flex-wrap  mx-auto">
      {products?.map((element) => (
        <div
          key={element.id}
          className="w-[220px] h-[320px] rounded bg-sky-950 overflow-hidden shadow-lg m-4 flex flex-col  justify-evenly items-center"
        >
          {ImgProduct.map((img) =>
            img.id === element.id ? (
              <Image className="w-20" src={img.img} alt="" key={img.id} />
            ) : null
          )}

          <div className="px-6 py-4 flex flex-col items-center">
            <h2 className="font-bold text-xl text-white mb-2 text-center">
              {element.name}
            </h2>
            <p className="font-semibold text-lg text-white">
              $ {element.price}
            </p>
          </div>
          <Link href={`/products/${element.id}`}>
            {" "}
            <button className="w-[150px] h-[40px] mb:2 bg-sky-700 text-white  rounded  hover:bg-sky-900">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
