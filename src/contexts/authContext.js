import React, { useState } from "react";
import axios from "axios";

export const authContext = React.createContext();

const API = "";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/`, formData);
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError();
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/`, formData);
      console.log(res);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError();
    } finally {
      setLoading(false);
    }
  }

  async function checkAuth() {
    console.log("Check Auth Worked!");
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/`, // sent where
        { refresh: tokens.refresh }, //what was sent
        config //who sent
      );
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh,
        })
      );
      const email = localStorage.getItem("email");
      setCurrentUser(email);
      console.log(res);
    } catch (err) {
      console.log(err);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(false);
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        handleRegister,
        setError,
        handleLogin,
        checkAuth,
        handleLogout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
