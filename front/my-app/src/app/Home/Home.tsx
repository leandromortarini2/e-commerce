import React from "react";
import Image from "next/image";
import Portadaimg from "@/assets/portada4.jpg";
import SeguridadImg from "@/assets/seguridad.svg";
import CamionImg from "@/assets/camioon.svg";
import OfertasImg from "@/assets/ooferrtas.svg";
import NumberOne from "@/assets/numberOne.svg";
import { ProductsCard } from "@/components/ProductsCard/ProductsCard";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen  bg-gradient-to-r from-sky-900 via-sky-500 to-sky-900  flex flex-col ">
        <Image src={Portadaimg} alt="" className="w-full opacity-70 " />

        <ProductsCard />
        {/* SERVICE */}
        <div className="w-full sm:h-[200px] rounded-3xl flex  flex-col sm:flex-row justify-evenly items-center  ">
          {/* BOX 1 SERVICE */}
          <div className="w-1/4 sm:w-1/2 mt-2 flex flex-col justify-center items-center">
            <Image
              src={SeguridadImg}
              alt=""
              className="w-14 sm:w-24 rounded-lg"
            />
            <h3 className="text-white text-sm sm:text-lg sm:font-bold">
              All cards
            </h3>
          </div>
          <div className="w-1/2 sm:w-1/2 mt-2 flex flex-col justify-center items-center">
            <Image
              src={CamionImg}
              alt=""
              className="w-14 sm:w-24  rounded-lg"
            />
            <h3 className="text-white text-sm sm:text-lg sm:font-bold">
              Shipping all over the country
            </h3>{" "}
          </div>
          <div className="w-1/2 sm:w-1/2 mt-2 flex flex-col justify-center items-center">
            <Image
              src={OfertasImg}
              alt=""
              className="w-14 sm:w-24  rounded-lg"
            />
            <h3 className="text-white text-sm sm:text-lg sm:font-bold">
              Dispatches on the day
            </h3>{" "}
          </div>
          <div className="w-1/4 sm:w-1/2 mt-2 mb-3 flex flex-col justify-center items-center">
            <Image
              src={NumberOne}
              alt=""
              className="w-14 sm:w-24  rounded-lg"
            />
            <h3 className="text-white text-sm sm:text-lg sm:font-bold">
              Leading company
            </h3>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
