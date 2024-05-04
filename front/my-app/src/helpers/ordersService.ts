"use client";
import { useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (products: number[], token: string) => {
  try {
    if (!products.length) {
      throw new Error("No products in the order");
    } else if (!token) {
      throw new Error("No token provided");
    } else if (!apiUrl) {
      throw new Error("No API URL provided");
    }

    const response = await axios.post(
      "http://localhost:3001/orders",

      { products: products },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data; // Return the response data if needed
  } catch (error) {
    throw error;
  }
};

export const getOrders = async (token: string) => {
  try {
    if (!token) {
      throw new Error("No token provided");
    } else if (!apiUrl) {
      throw new Error("No API URL provided");
    }

    const response = await axios.get(`${apiUrl}/users/orders`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data; // Return the response data if needed
  } catch (error) {
    throw error;
  }
};
