import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Swal = require("sweetalert2");

const Login = () => {
  const { loginWithPopup } = useAuth0();

  const showAlert = () => {
    Swal.fire({
      title: "You have entered correctly",
      icon: "success",
    });
  };

  const logg = async () => {
    await loginWithPopup();
    showAlert();
  };

  return <button onClick={() => logg()}>Login</button>;
};

export default Login;
