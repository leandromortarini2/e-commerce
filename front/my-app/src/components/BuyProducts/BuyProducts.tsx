"use client";
import React from "react";
import { useAuth } from "@/app/context/AuthContext";
import { createOrder } from "@/helpers/ordersService";

export const BuyProducts = ({ id }: { id: number }) => {
  // Capturamos token del hook y el id por parametros para generar la orden
  const { token } = useAuth();

  const idProduct: number = id;

  console.log(id);

  const handleAddBuyProducts = async () => {
    try {
      if (!token) {
        throw new Error("No token provided");
      }

      // si hay token enviamos al servis para que cree la orden.

      await createOrder([idProduct], token);

      alert("successful order");
      window.location.href = "/orders";

      console.log("Order created successfully");
    } catch (error) {
      alert("To order you must log in");
      window.location.href = "/auth/login";
      console.error("Error creating order");
    }
  };

  return (
    <>
      <button
        onClick={handleAddBuyProducts}
        className="w-[150px] h-[40px] bg-sky-950 text-white  rounded mt-5 hover:bg-sky-900"
      >
        Buy Product
      </button>
    </>
  );
};
