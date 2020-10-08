import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import {
  navlink6,
  Bosses,
  CommiteeMembers,
  BossesFR,
  CommiteeMembersFR,
} from "../sections";
import CommitesMembers from "../modals/CommitesMembers";
const Members = ({ lang }) => {
  return (
    <section
      class="sections testimonial"
      id="members"
      style={{ direction: "ltr" }}
    >
      <div class="container" data-aos="fade-up">
        <div class="section-header text-center">
          <h2 class="section-title">{navlink6[lang]}</h2>
          <div class="line"></div>
        </div>

        <OwlCarousel
          className="owl-thene"
          loop
          autoWidth
          items="3"
          margin={7}
          autoPlay
          dots={false}
        >
          {BossesFR.map((speaker) => (
            <div className="item">
              <div className="team-info">
                <img src={speaker.image} alt="" />
                <h4 className="item-info-title my-3 en">{speaker.name}</h4>
                <span className="item-info-desc en">{speaker.capacity}</span>
                <span className="item-info-desc en">{speaker.capacity1}</span>
                <div className="team-info-social ">
                  {speaker.type !== "none" && (
                    <CommitesMembers
                      lang={lang}
                      type={speaker.type}
                      committe={speaker.committe}
                    />
                  )}
                  <span className="bg"></span>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>

        <OwlCarousel
          className="owl-thene"
          items="4"
          margin={7}
          autoPlay
          nav={true}
          autoWidth
          dots={false}
          loop
        >
          {CommiteeMembersFR.map((member) => (
            <div class="item">
              <div class="test-info">
                {member.image && member.image !== "" ? (
                  <img src={member.image} alt="" />
                ) : (
                  <Fragment>
                    {member && member.sex === "ذكر" ? (
                      <img src="./img/man.jpg" alt="" />
                    ) : (
                      <img src="./img/wamen.png" alt="" />
                    )}
                  </Fragment>
                )}

                <h4 class="test-info-title">{member.name}</h4>
                <span class="test-info-span">{member.capacity}</span>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};
const mapStatetoProps = (state) => ({
  lang: state.research.lang,
});

export default connect(mapStatetoProps)(Members);
