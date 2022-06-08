import NotFound from "components/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";

Photo.propTypes = {};

function Photo(props) {
  return (
    <Routes>
      <Route end path="" element={<MainPage />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
