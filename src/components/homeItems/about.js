import React from "react";
import {
  head6,
  about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  Gools1,
  Gools2,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
  m13,
  m14,
  m15,
  m16,
  m17,
  m18,
  m19,
  m20,
  m21,
} from "../sections";
import { Tabs, Tab } from "react-bootstrap";
const About = ({ lang }) => {
  return (
    <>
      <section id="about" className="bg-info py-5">
        <div data-aos="flip-right" className="container text-center text-white">
          <h1 className=" teal-text darken-4" style={{ marginTop: "50px" }}>
            {head6[lang]}
          </h1>
          <p style={{ fontSize: "1.4rem", lineHeight: "2.4rem" }}>
            {about1[lang]}
          </p>
          <h5 style={{ lineHeight: "3rem" }}>
            {about2[lang]}
            {lang === "ar" ? (
              <a className="nav-line my-3" href="./img/ar.doc">
                {about3[lang]}
              </a>
            ) : (
              <a className="nav-line my-3" href="./img/en.doc">
                {about3[lang]}
              </a>
            )}
          </h5>
        </div>
      </section>

      <section
        className=" goals"
        style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
      >
        <div
          className="overlay py-3"
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div
            className="container text-center text-white"
            style={{ fontSize: "1.3rem" }}
          >
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="home" title={Gools1[lang]}>
                <ol
                  className={lang === "ar" ? "text-right" : "text-left"}
                  dangerouslySetInnerHTML={{ __html: Gools2[lang] }}
                  style={{ lineHeight: "2.4rem", padding: "1rem 2rem" }}
                ></ol>
              </Tab>

              <Tab eventKey="contact" title={m1[lang]}>
                <div
                  className={lang === "ar" ? "text-right" : "text-left"}
                  style={{ lineHeight: "2.4rem", padding: "1rem 2rem" }}
                >
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m2[lang]}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m3[lang] }}
                  >
                    {/* html */}
                  </div>

                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m4[lang]}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m5[lang] }}
                  >
                    {/* html */}
                  </div>
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m6[lang]}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m7[lang] }}
                  >
                    {/* html */}
                  </div>
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m8[lang]}{" "}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m9[lang] }}
                  >
                    {/* html */}
                  </div>
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m10[lang]}{" "}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m11[lang] }}
                  >
                    {/* html */}
                  </div>
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m12[lang]}{" "}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m13[lang] }}
                  >
                    {/* html */}
                  </div>
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m14[lang]}{" "}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m15[lang] }}
                  >
                    {/* html */}
                  </div>
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m16[lang]}{" "}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m17[lang] }}
                  >
                    {/* html */}
                  </div>
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m18[lang]}{" "}
                  </h6>
                  <div
                    class="collapsible-body"
                    dangerouslySetInnerHTML={{ __html: m19[lang] }}
                  >
                    {/* html */}
                  </div>
                  <h6>
                    <i
                      class="material-icons teal-text"
                      style={{ marginLeft: "15px" }}
                    >
                      check
                    </i>
                    {m20[lang]}{" "}
                  </h6>
                  <div
                    class="collapsible-body mb-5"
                    dangerouslySetInnerHTML={{ __html: m21[lang] }}
                  >
                    {/* html */}
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
