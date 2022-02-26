import { unwrapResult } from "@reduxjs/toolkit";
import productApi from "api/productApi";
import { getMe } from "app/userSlice";
import SingIn from "features/Auth/pages/SignIn";
import firebase from "firebase/compat/app";
import React, { Suspense, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBQkxaHaxZB_TvlTb0-9PCx81jIjtUOhPg",
  authDomain: "photo-app-4b058.firebaseapp.com",
};
firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Fauled to fetch product list", error);
      }
    };

    fetchProductList();
  }, []);

  // Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          // user logs out, handle something here
          console.log("User is not logged in");
          return;
        }

        // Get me when signed in
        // const action = getMe();
        try {
          const actionResult = await dispatch(getMe());
          const currentUser = unwrapResult(actionResult);
          localStorage.setItem(
            "firebaseui::rememberedAccounts",
            JSON.stringify(currentUser)
          );
          console.log("Logged in user: ", currentUser);
        } catch (error) {
          console.log("Failed to login ", error.message);
          // show toast error
        }
      });

    return () => unregisterAuthObserver();
  }, []);

  const handleButtonClick = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await productApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />

        <Button onClick={handleButtonClick}>Fetch Product List</Button>

        <Routes>
          <Route path="/" element={<Navigate replace to="/photo-app" />} />
          <Route path="/photo-app/*" element={<Photo />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
