"use client";
import React, { useEffect, useState } from "react";
import { IOrder } from "@/types";
import { useAuth } from "../context/AuthContext";
import { getOrders } from "@/helpers/ordersService";

const Orders: React.FC = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (token) {
          const fetchedOrders = await getOrders(token);
          setOrders(fetchedOrders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-sky-900 via-sky-500 to-sky-900 flex flex-wrap justify-center items-start">
        <div className="sm:w-full h-20 sm:h-[250px]  overflow-hidden flex flex-col sm:flex-row items-center justify-center ">
          <h2 className="text-xl sm:text-4xl text-white font-bold">
            Click|Tech
          </h2>
          <h2 className=" text-2xl sm:text-6xl text-white font-bold ml-5">
            {" "}
            YOUR ORDERS
          </h2>
        </div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="w-3/4 mt-2 mb-2 sm:w-[300px] h-[250px] sm:mb-8 mr-4 border-2 border-gray-300 rounded-2xl bg-sky-950 flex flex-col justify-evenly items-center"
          >
            <p className="text-white font-semibold text-lg">
              Number order: {order.id}
            </p>
            <p className="text-white font-semibold text-lg">
              Products: {order.products.length}
            </p>
            <p className="text-white font-semibold text-lg">
              Status: {order.status}
            </p>
            <p className="text-white font-semibold">Date: {order.date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
