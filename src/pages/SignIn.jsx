import React, { useState } from "react";
import Logo from "../assets/icon.png";
import Input from "../components/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../redux/slices/tokenSlice";
import { setUser } from "../redux/slices/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const login = async (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("user"));
    if (data === null) {
      alert("Account does not exist");
      setUserData({
        email: "",
        password: "",
      });
      return;
    }
    if (userData.email === data.email) {
      if (userData.password === data.password) {
        dispatch(setLoggedIn(true));
        dispatch(setUser(data));
      } else {
        alert("Invalid login details");
      }
    } else {
      alert("Account does not exist");
    }
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

          <h1 className="font-medium text-4xl">Sign In</h1>

          <form onSubmit={(e) => login(e)}>
            <div>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter email address"
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
              Sign In
            </button>
            <NavLink to="/signup">
              New user? <span className="text-[#7000F6]">Create account</span>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
