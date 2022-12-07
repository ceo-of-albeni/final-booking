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
// import React, { useState } from "react";
// import axios from "axios";

// export const authContext = React.createContext();

// const API = "";

// const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(false);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   async function handleRegister(formData, navigate) {
//     setLoading(true);
//     try {
// const res = await axios.post(`${API}/`, formData);
//       console.log(res);
//       navigate("/login");
//     } catch (err) {
//       console.log(err);
//       setError();
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleLogin(formData, email, navigate) {
//     setLoading(true);
//     try {
//       const res = await axios.post(`${API}/`, formData);
//       console.log(res);
//       localStorage.setItem("tokens", JSON.stringify(res.data));
//       localStorage.setItem("email", email);
//       setCurrentUser(email);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//       setError();
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function checkAuth() {
//     console.log("Check Auth Worked!");
//     setLoading(true);
//     try {
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios.post(
//         `${API}/`, // sent where
//         { refresh: tokens.refresh }, //what was sent
//         config //who sent
//       );
//       localStorage.setItem(
//         "tokens",
//         JSON.stringify({
//           access: res.data.access,
//           refresh: tokens.refresh,
//         })
//       );
//       const email = localStorage.getItem("email");
//       setCurrentUser(email);
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//       handleLogout();
//     } finally {
//       setLoading(false);
//     }
//   }

//   function handleLogout() {
//     localStorage.removeItem("tokens");
//     localStorage.removeItem("email");
//     setCurrentUser(false);
//   }

//   return (
//     <authContext.Provider
//       value={{
//         currentUser,
//         error,
//         loading,
//         handleRegister,
//         setError,
//         handleLogin,
//         checkAuth,
//         handleLogout,
//       }}>
//       {children}
//     </authContext.Provider>
//   );
// };

// export default AuthContextProvider;
