import React, { useState } from "react";
import Logo from "../assets/icon.png";
import Input from "../components/Input";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const createAccount = async (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(userData));

    setUserData({ fName: "", lName: "", email: "", password: "" });
    navigate("/");
  };

  return (
    <div className="h-dvh block sm:flex">
      <div className="bg-[#F0EEFF] flex-1 hidden sm:block">
        <div className="mt-14 ml-12">
          <img src={Logo} />
        </div>
      </div>
      <div className="flex-[3] flex justify-center items-center mt-14 sm:mt-0">
        <div className="w-full sm:w-[340px] flex flex-col gap-10 p-6 sm:p-0">
          <div className="sm:hidden mb-6">
            <img src={Logo} />
          </div>

          <h1 className="font-medium text-4xl">Create Account</h1>

          <form onSubmit={(e) => createAccount(e)}>
            <div className="">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter first name"
                value={userData.fName}
                onChange={(e) =>
                  setUserData({ ...userData, fName: e.target.value })
                }
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Enter last name"
                value={userData.lName}
                onChange={(e) =>
                  setUserData({ ...userData, lName: e.target.value })
                }
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter password"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-[#7000F6] w-full text-white font-semibold p-4 rounded-md mt-10 mb-2"
            >
              Create Account
            </button>
            <NavLink to="/">
              Own an account already?{" "}
              <span className="text-[#7000F6]">Login</span>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
