import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form as Form1, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultPros = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { initialValues, isAddMode, category } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),

    category: Yup.string().required("This field is required.").nullable(),

    photoUrl: Yup.string()
      .required("This field is required.")
      .when("categoryId", {
        is: 1,
        then: Yup.string().required("This field is required."),
        otherwise: Yup.string().notRequired(),
      }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        //do something here...
        const { values, errors, touched, isSubmitting } = formikProps;
        return (
          <Form1>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg:..."
            ></FastField>
            <FastField
              name="category"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={category}
            />
            <FastField
              name="photoUrl"
              component={RandomPhotoField}
              label="Photo"
            />
            <Form.Group>
              <Button type="submit" variant={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? "Add to album" : "Update your photo"}
              </Button>
            </Form.Group>
          </Form1>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
