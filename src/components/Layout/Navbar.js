import React, { useEffect, useState } from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.style.css";
import { ChangeLang } from "../../actions/research";
import { connect } from "react-redux";
import {
  navlink1,
  navlink2,
  navlink3,
  navlink4,
  navlink6,
  navlink7,
  navlink5,
} from "../sections";

const Navbars = ({ ChangeLang, lang }) => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className={scrollPosition > 50 && "sticky"}
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      <>
        <Navbar collapseOnSelect expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#home">
              <img src="./img/logo.png" alt="logo" width="100" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link
                    to="mains"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {navlink1[lang]}{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="comsuports"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {navlink2[lang]}{" "}
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    to="speakers"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {navlink3[lang]}{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {navlink4[lang]}
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  {" "}
                  <Link
                    to="suports"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {navlink5[lang]}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="members"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {navlink6[lang]}{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="impo"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {navlink7[lang]}
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav className="mr-auto grid-3">
                <Nav.Link className="lang" onClick={() => ChangeLang("ar")}>
                  AR
                </Nav.Link>
                <Nav.Link className="lang" onClick={() => ChangeLang("en")}>
                  EN
                </Nav.Link>
                <Nav.Link className="lang" onClick={() => ChangeLang("fr")}>
                  FR
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default connect(null, { ChangeLang })(Navbars);
