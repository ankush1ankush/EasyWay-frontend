import React, { useEffect, useState } from "react";
import Header from  "./Header/Header"
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Register from "./Register/Register"
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login/login";




function App() {

  const [user, setUser] = useState(null);

  
  const getUser = async () => {
    const url = `http://localhost:8080/auth/login/success`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          // 'Content-Type' header is not necessary for a GET request
        },
      });
    
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      const data = await response.json(); 
      //console.log(data.user);
      setUser(data.user)
     // console.log(user)
    } catch (error) {
      console.error('Fetch error:', error);
    }
	};

  useEffect(()=>{
  getUser();
  });

  return (
    <div className="App">
      <Header  User={user} />
      <BrowserRouter>
      <Routes>
            
          <Route path="/"  element={user?<Home User={user}/>:<Navigate to="/login"/>}/>
          <Route path="/login"  element={user?<Navigate to="/"/>:<Login UpdateUser={setUser}/>}/>
          <Route path="/register"  element={user?<Navigate to='/'/>:<Register UpdateUser={setUser}/>}/>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
