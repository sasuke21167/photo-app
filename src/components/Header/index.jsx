import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <NavLink
              className="header__link header__title"
              href="#"
              to="/photo-app"
            >
              Photo App
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "header__link header__link--active"
                  : "header__link"
              }
              end
              to="/photo-app/sign-in"
            >
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
