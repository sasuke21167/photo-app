import React from "react";
import PropTypes from "prop-types";
import "./PhotoCard.scss";
import { Button } from "react-bootstrap";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(photo);
  };

  return (
    <div className="photo">
      <img src={photo.photoUrl} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button variant="outline-light" size="sm" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
