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
            <a
              className="header__link header__title"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photo App
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "header__link header__link--active"
                  : "header__link"
              }
              end
              to="/sign-in"
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
