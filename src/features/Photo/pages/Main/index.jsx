import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';

MainPage.propTypes = {
  
};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} ></Banner>
      <Container className="text-center">
        <Link to="add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;