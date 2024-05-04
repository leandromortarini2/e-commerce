"use client";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ValidateRegister } from "@/helpers/validacion";
import { IRegisterErrors } from "@/helpers/validacion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IUser } from "@/types";

export const Register: React.FC = () => {
  const [errorUser, setErrorUser] = useState<IRegisterErrors>({
    password: "",
    email: "",
    name: "",
    address: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [registerState, setRegisterState] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const errors = ValidateRegister(registerState);
    setErrorUser(errors);
  }, [registerState]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setRegisterState({
      ...registerState,
      [name]: value,
    });
  };

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3001/users/register",
        registerState
      );

      const data = res.data;

      console.log("dataaaaaa=========>", data);

      alert("Successful registration");
      window.location.href = "/auth/login";

      setRegisterState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
      });
      return data;
    } catch (error) {
      alert(`your registration cannot be carried out ${error}`);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-sky-900 via-sky-500 to-sky-900   ">
        {/* F O R M U LA R  I O */}
        <h2 className="text-2xl sm:text-6xl pt-3 text-white font-bold text-center ">
          Register
        </h2>
        <div className="w-full min-h-[450px]  sm:h-[200px]  flex flex-col items-center  ">
          <form
            onSubmit={handleOnSubmit}
            className="w-full sm:w-1/3 min-h-[500px] flex flex-col   items-center justify-evenly  rounded-lg sm:mt-5"
          >
            {/* B O X - I N P U T */}
            <div className=" flex flex-col ">
              {/* I N P U T */}
              <input
                type="text"
                name="name"
                value={registerState.name}
                onChange={handleOnChange}
                required
                placeholder="Name..."
                className="bg-white border-2 border-white pl-1 placeholder:pl-1 text-sky-900 font-medium sm:w-[450px] placeholder:text-gray-500 "
              />
              {errorUser.name ? (
                <p className="text-orange-900 font-semibold text-lg text-center ">
                  {errorUser.name}
                </p>
              ) : null}
            </div>
            {/* B O X - I N P U T */}
            <div className=" flex flex-col ">
              {/* I N P U T */}

              <input
                type="email"
                name="email"
                value={registerState.email}
                onChange={handleOnChange}
                required
                placeholder="E-mail..."
                className="bg-white border-2 border-white pl-1 placeholder:pl-1 text-sky-900 font-medium sm:w-[450px] placeholder:text-gray-500 "
              />
              {errorUser.email ? (
                <p className="text-orange-900 font-semibold text-lg text-center ">
                  {errorUser.email}
                </p>
              ) : null}
            </div>

            {/* B O X - I N P U T */}
            <div className=" flex flex-col ">
              {/*I N P U T */}
              <div className="w-full flex items-center">
                {" "}
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={registerState.password}
                  onChange={handleOnChange}
                  required
                  placeholder="Password..."
                  className="bg-white border-2 border-white pl-1 placeholder:pl-1 text-sky-900 font-medium sm:w-[430px] placeholder:text-gray-500 "
                />
                <button
                  className="text-white h-[27px] w-[20px] bg-sky-950 hover:text-gray-700 flex items-center justify-center"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errorUser.password ? (
                <p className="text-orange-900 font-semibold text-lg text-center ">
                  {errorUser.password}
                </p>
              ) : null}
            </div>

            {/* B O X - I N P U T */}
            <div className=" flex flex-col ">
              {/*I N P U T */}
              <input
                type="text"
                name="address"
                value={registerState.address}
                onChange={handleOnChange}
                placeholder="Address..."
                required
                className="bg-white border-2 border-white pl-1 placeholder:pl-1 text-sky-900 font-medium sm:w-[450px] placeholder:text-gray-500 "
              />
              {errorUser.address ? (
                <p className="text-orange-900 font-semibold text-lg text-center ">
                  {errorUser.address}
                </p>
              ) : null}
            </div>

            {/* B O X - I N P U T */}
            <div className=" flex flex-col ">
              {/*I N P U T */}

              <input
                type="text"
                name="phone"
                value={registerState.phone}
                onChange={handleOnChange}
                required
                placeholder="Phone number ..."
                className="bg-white border-2 border-white pl-1 placeholder:pl-1 text-sky-900 font-medium sm:w-[450px] placeholder:text-gray-500 "
              />
              {errorUser.phone ? (
                <p className="text-orange-900 font-semibold text-lg text-center ">
                  {errorUser.phone}
                </p>
              ) : null}
            </div>
            <p className="text-white sm:text-lg mt-2 mb-2">
              Do you already have an account?
              {
                <Link href="/auth/login">
                  {" "}
                  <span className="text-whitesm:text-xl mt-2 mb-2 font-semibold hover:text-gray-900">
                    Login
                  </span>{" "}
                </Link>
              }{" "}
            </p>

            <button
              type="submit"
              disabled={Object.keys(errorUser).length > 0}
              className="w-[120px] h-10 disabled:bg-gray-600 text-white text-lg bg-sky-800 rounded hover:bg-sky-950 border-2 tracking-wider"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
