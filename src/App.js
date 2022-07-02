import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangePassword from "./Components/ChangePassword";
import ForgetPassword from "./Components/ForgetPassword";
import Home from "./Components/Home";
import NavigationBarCom from "./Components/NavigationBarCom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <>
      <NavigationBarCom />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
      </Routes>
    </>
  );
};

export default App;
