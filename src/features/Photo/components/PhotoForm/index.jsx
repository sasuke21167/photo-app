import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form as Form1, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultPros = {
  onSubmit: null,
};

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
    photo: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),

    categoryId: Yup.number().required("This field is required.").nullable(),

    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Submit", values)}
    >
      {(formikProps) => {
        //do something here...
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form1>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg:..."
            ></FastField>
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
            <Form.Group>
              <Button type="submit" variant="primary">
                Add to album
              </Button>
            </Form.Group>
          </Form1>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
