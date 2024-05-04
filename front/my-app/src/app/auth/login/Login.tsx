"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ILoginErrors } from "@/helpers/validacion";
import Cookies from "js-cookie";
import { ValidateLogin } from "@/helpers/validacion";
import { IProfile } from "@/types";

const Login: React.FC = () => {
  const [errorUser, setErrorUser] = useState<ILoginErrors>({
    password: "",
    email: "",
  });

  const [inputLogin, setInputLogin] = useState<IProfile>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const errors = ValidateLogin(inputLogin);
    setErrorUser(errors);
  }, [inputLogin]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLButtonElement;

    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  };

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/users/login",
        inputLogin
      );
      const data = res.data;

      console.log("==========>", data.user);
      // TENEMOS EL TOKEN====================
      const token = data.token;

      Cookies.set("token", token, { secure: true, sameSite: "strict" });

      alert("Successful entry ");

      // console.log("token=========>", token);
      window.location.href = "/";

      return data;
    } catch (error) {
      alert("the data entered is incorrect");
      return error;
    }
  };
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-sky-900 via-sky-500 to-sky-900 flex flex-col justify-center items-center">
        {" "}
        {}
        <h2 className="text-2xl sm:text-6xl sm:p-10 text-white font-bold text-center ">
          Login
        </h2>{" "}
        <div className="w-full min-h-[450px] sm:h-[200px] flex flex-col items-center">
          <form
            onSubmit={handleOnSubmit}
            className="w-full h-[300px] flex flex-col items-center justify-evenly"
          >
            {/* I N P U N  T */}
            <input
              type="email"
              name="email"
              value={inputLogin.email}
              onChange={handleOnChange}
              id="floating_email"
              placeholder="E-mail..."
              className="bg-white border-2 pl-2 border-white font-medium text-sky-900 sm:w-[450px] placeholder:text-gray-500 placeholder:pl-2"
              required
            />
            {errorUser.email ? (
              <p className="text-orange-900 font-semibold text-lg text-center ">
                {errorUser.email}
              </p>
            ) : null}

            {/* I N P U N  T */}
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={inputLogin.password}
                onChange={handleOnChange}
                id="floating_email"
                placeholder="Password..."
                className="bg-white border-2 pl-2 border-white font-medium text-sky-900 sm:w-[430px] placeholder:text-gray-500 placeholder:pl-2"
                required
              />

              <button
                className=" border-2"
                type="button"
                onClick={handlePassword}
              >
                {showPassword ? "👁️‍🗨️" : "👁️"}
              </button>
              {errorUser.password ? (
                <p className="text-orange-900 font-semibold text-lg text-center ">
                  {errorUser.password}
                </p>
              ) : null}
            </div>

            <p className="text-white sm:text-lg mt-2 mb-2">
              You still dont have an account?
              {
                <Link href="/auth/register">
                  {" "}
                  <span className="text-white sm:text-xl mt-2 mb-2 font-semibold hover:text-gray-900">
                    Register
                  </span>{" "}
                </Link>
              }{" "}
            </p>
            <button
              type="submit"
              className="w-[100px] h-8 text-sm sm:w-[120px] sm:h-10 sm:text-lg text-white bg-sky-800 rounded hover:bg-sky-950 border-2 tracking-wider"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
