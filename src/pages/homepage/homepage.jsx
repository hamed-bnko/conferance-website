import React, { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./homepage.style.css";
import "../../components/modals/bootstrap.css";

import Aos from "aos";
import "aos/dist/aos.css";

import { connect } from "react-redux";
import Navbar from "../../components/Layout/Navbar";

import Commites from "../../components/homeItems/suports";
import Header from "../../components/homeItems/header";
import Speaker from "../../components/homeItems/speakers";
import About from "../../components/homeItems/about";
import Footer from "../../components/homeItems/Footer";
import Members from "../../components/homeItems/Members";
import MembersEN from "../../components/homeItems/MembersEn";
import MembersFR from "../../components/homeItems/MembersFr";
import ImportantDate from "../../components/homeItems/ImportantDate";
import ComSuports from "../../components/homeItems/comSuports";

const HomePage = ({ lang, ChangeLang }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Fragment>
      <Navbar lang={lang} />
      <Header lang={lang} />
      {/* <Speaker lang={lang} /> */}
      <ComSuports lang={lang} />
      <About lang={lang} />
      <Commites lang={lang} />
      {lang === "ar" && <Members />}
      {lang === "en" && <MembersEN />}
      {lang === "fr" && <MembersFR />}
      <ImportantDate lang={lang} />
      <Footer lang={lang} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  lang: state.research.lang,
});
export default connect(mapStateToProps)(HomePage);
