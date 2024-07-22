import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Transaction from "./pages/Transaction";
import Home from "./pages/undeveloped/Home";
import { selectLoggenin } from "./redux/slices/tokenSlice";

const PrivateRoute = ({ element }) => {
  const loggedIn = useSelector(selectLoggenin);
  return loggedIn ? element : <Navigate to="/" />;
};

const Navigation = () => {
  const loggedIn = useSelector(selectLoggenin);

  return (
    <BrowserRouter>
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<Home />}>
              <Route path="transactions" element={<Transaction />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </>
        )}
        <Route path="*" element={<Navigate to={loggedIn ? "/" : "/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
