import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';


RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: '',
}

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl)
  }

  return (
    <Form.Group>
      {label && <Form.Label htmlFor={name}>{label}</Form.Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />

      <div className={showError ? 'is-invalid' : ''}></div>
      <ErrorMessage name={name} component={Form.Control.Feedback} />
    </Form.Group>
  );
}

export default RandomPhotoField;