import adminApi from "api/AdminApi";
import allApi from "api/allApi";
import Banner from "components/Banner";
import PhotoForm from "features/Admin/components/PhotoForm";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await allApi.getAllCategory();
        setCategory(response.data);
      } catch (error) {
        console.log("Failed to fetch product list", error);
      }
    };

    fetchCategoryList();
  }, []);

  console.log(category);

  const editedPhoto = useSelector((state) => {
    const foundPhoto = state.photos.find((x) => x.id === +photoId);
    return foundPhoto;
  });

  const initialValues = isAddMode
    ? {
        title: "",
        category: null,
        photoUrl: "",
      }
    : editedPhoto;

  const addPhoto = async (values) => {
    try {
      const response = await adminApi.addPhoto(values);
      setCategory(response.data);
    } catch (error) {
      console.log("Failed to add photo", error);
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
    addPhoto(values);
    navigate("/");
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          category={category}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
