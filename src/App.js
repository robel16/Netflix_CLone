import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homescreen from "./component/Homescreen/Homescreen";
import Login from "./component/Login/Login";
import Profile from "./component/Profile/Profile";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectuser } from "./features/userSlice";
function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth,
            email: userAuth.email,
          })
        );
        console.log(userAuth);
      } else {
        //logged out
        dispatch(logout);
      }
    });
    return unsubscribe();
  }, []);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route path="/" element={<Homescreen />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
