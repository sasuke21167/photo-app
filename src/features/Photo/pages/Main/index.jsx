import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Banner from "components/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import allApi from "api/allApi";

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  console.log("List photos:", photos);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          page: 0,
          size: 12,
        };
        const response = await allApi.getAllPhoto(params);
        console.log(response.data);
        setProductList(response.data.photos);
      } catch (error) {
        console.log("Failed to fetch product list", error);
      }
    };

    fetchProductList();
  }, []);

  const handlePhotoEditClick = (photo) => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    navigate(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log("Remove: ", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner
        title="Your awesome photos"
        backgroundUrl={Images.PINK_BG}
      ></Banner>
      <Container className="text-center">
        <div className="py-5">
          <Link to={"/admin/add"}>Add new photo</Link>
        </div>

        <PhotoList
          photoList={productList}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
