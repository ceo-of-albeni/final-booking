import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addUser = async newUser => {
    await axios.post(API, newUser);
  };

  function createUser(email, password) {
    if (!email || !password) {
      alert("Some inputs are empty!");
      return;
    }

    let newUser = {
      email,
      password,
    };

    addUser(newUser);

    navigate("/login");
  }

  const logout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    setUser("");
    navigate("/");
  };

  async function login(email, password) {
    if (!email || !password) {
      alert("Some inputs are empty!");
      return;
    }

    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => {
        data.map(item => {
          if (item.email == email && item.password == password) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            navigate("/");
          } else {
            alert("invalid username or password");
          }
        });
      });
  }

  return (
    <authContext.Provider
      value={{
        user,
        error,

        addUser,
        login,
        createUser,
        logout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
