import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button} from 'react-bootstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Formik, Form as Form1, FastField} from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';


PhotoForm.propTypes = {
  onSubmit: PropTypes.func
};

PhotoForm.defaultPros = {
  onSubmit: null
}

function PhotoForm(props) {
  const initialValues = {
    title:'',
    validationSchema:null,
    onSubmit:null,
  }

  return (
    <Formik
      initialValues={initialValues}
    >
      {formikProps =>{
        //do something here...
        const {values, errors, touched} = formikProps;
        console.log({values, errors, touched});
        return(
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
              <Button variant="primary">Add to album</Button>
            </Form.Group>
          </Form1>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;