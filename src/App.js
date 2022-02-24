import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import "./App.scss";
import productApi from "api/productApi";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  const [productList, setProductList] = useState([]);

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

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/photos" />} />
          <Route path="/photos/*" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
