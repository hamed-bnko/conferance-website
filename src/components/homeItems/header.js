import React, { Fragment, useEffect } from "react";
import Timer from "../timer/timer";
import { head1, head2, head3, head4, head41, head5 } from "../sections";
import Regester from "../modals/Regester";
import { connect } from "react-redux";
import VideoModals from "../modals/VideoModals";
import { getResearchs } from "../../actions/research";

const Header = ({ lang, researchs, getResearchs }) => {
  useEffect(() => {
    getResearchs();
  }, []);

  let researchsNumber = researchs.length;
  return (
    <section className="showcase text-center" id="mains">
      <div className="video-container">
        <video src="/img/1.mp4" autoPlay muted loop />
      </div>
      <div className="content ">
        <h1>{head1[lang]}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: head2[lang] }}></h2>
        <h3>
          <h4 className="my-3">{head5[lang]} </h4>
          <Timer lang={lang} />
        </h3>
        <br />
        <h2>
          {" "}
          {head3[lang]}
          {"   "}
          <span> {researchsNumber}</span>
          {"   "}
          {head4[lang]} {"   "} 0{"   "}
        </h2>
        <br />
        {
          Date.now() > new Date("2020-09-01") && (
            <Fragment>
              <Regester lang={lang} />
              <VideoModals lang={lang} />
            </Fragment>
          )
          // : (
          //   <a
          //     href="#list"
          //     className="modal-trigger   btn-large red darken-2 waves-effect waves-light btn "
          //   >
          //     {" "}
          //     <i class="material-icons left">format_list_numbered</i>
          //     {lang === "ar"
          //       ? " قائمة الملخصات المقبولة"
          //       : " accepted Abstructs list "}
          //   </a>
          // )
        }
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  researchs: state.research.researchs,
});
export default connect(mapStateToProps, { getResearchs })(Header);
