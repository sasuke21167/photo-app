import PropTypes from "prop-types";
import React from "react";
import { ErrorMessage } from "formik";
import { Form } from "react-bootstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <Form.Group>
      {label && <Form.Label htmlFor={name}>{label}</Form.Label>}

      <Form.Control
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        isInvalid={showError}
      />

      {showError && (
        <Form.Control.Feedback type="invalid">
          {errors[name]}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default InputField;
