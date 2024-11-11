import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AuthPage from "./Pages/AuthPage/AuthPage";
import { createContext, useEffect, useState } from "react";
import axios from "./axiosConfig";

export const Appstate = createContext();

function App() {
  const [user, setuser] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setuser(data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  }
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <Appstate.Provider value={{ user, setuser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/login' element={<Login/>} /> */}
        <Route path="/register" element={<AuthPage defaultform="register" />} />
        <Route path="/login" element={<AuthPage defaultform="login" />} />
      </Routes>
    </Appstate.Provider>
  );
}

export default App;
