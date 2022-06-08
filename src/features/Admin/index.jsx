import React from "react";
import PropTypes from "prop-types";

import { Route, Routes } from "react-router-dom";
import AddEditPage from "./AddEditPhoto";
import BoardAdmin from "components/BoardAdmin";
import CategoryPage from "./CategoryPage";

Admin.propTypes = {};

function Admin(props) {
  return (
    <Routes>
      <Route path="" element={<BoardAdmin />} />
      <Route path="add" element={<AddEditPage />} />
      <Route path=":photoId" element={<AddEditPage />} />
      <Route path="category" element={<CategoryPage />} />
    </Routes>
  );
}

export default Admin;
