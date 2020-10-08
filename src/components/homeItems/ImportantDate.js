import React from "react";
import { D1, D2, c1, c2 } from "../sections";

const ImportantDate = ({ lang }) => {
  return (
    <section id="impo" style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
      <div
        className={
          lang === "ar"
            ? "text-white text-right container"
            : "text-white text-left container"
        }
      >
        <div className="row" data-aos="fade-up">
          <div className="col m6 ">
            <h3 className=" center-align"> {D1[lang]}</h3>
            <ul
              className="date"
              dangerouslySetInnerHTML={{ __html: D2[lang] }}
            ></ul>
          </div>
          <div className="col m6 d2">
            <h3 className=" center-align"> {c1[lang]}</h3>
            <div dangerouslySetInnerHTML={{ __html: c2[lang] }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDate;
