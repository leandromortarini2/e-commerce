import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getUser = async (user: any) => {
  try {
    const res = await axios.post(`${apiUrl}/users/login`, user);
    const data = res.data;

    return data;
  } catch (error) {
    return error;
  }
};
