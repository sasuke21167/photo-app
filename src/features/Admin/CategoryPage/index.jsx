import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, Table } from "react-bootstrap";
import { FastField, Form, Formik } from "formik";
import InputField from "custom-fields/InputField";
import * as Yup from "yup";
import allApi from "api/allApi";
import adminApi from "api/AdminApi";

CategoryPage.propTypes = {};

function CategoryPage(props) {
  const [categoryList, setCategoryList] = useState([]);

  const fetchCategoryList = async () => {
    try {
      const response = await allApi.getAllCategory();
      setCategoryList(response.data);
    } catch (error) {
      console.log("Failed to fetch product list", error);
    }
  };
  useEffect(() => {
    fetchCategoryList();
  }, []);

  const initialValues = { category: "" };
  const validationSchema = Yup.object().shape({
    category: Yup.string(),
  });

  const handleSubmitCategory = async (values, { resetForm }) => {
    await adminApi.addCategory(values);
    fetchCategoryList();
    resetForm(initialValues);
  };

  const handleDeleteCategory = async (id) => {
    await adminApi.deleteCategory(id);
    fetchCategoryList();
  };
  return (
    <Container>
      <hr />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitCategory}
      >
        <Form>
          <FastField
            name="category"
            component={InputField}
            label="Category"
            placeholder="Category input:..."
          ></FastField>
          <Button type="submit" variant="primary">
            Add category
          </Button>
        </Form>
      </Formik>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Method</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((category, index) => {
            let id = category._id;
            const handleDelete = () => {
              handleDeleteCategory(id);
            };
            return (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  <Button variant="danger" onClick={handleDelete}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default CategoryPage;
