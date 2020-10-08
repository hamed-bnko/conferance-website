import React from "react";
import { navlink2 } from "../sections";
const ComSuports = ({ lang }) => {
  return (
    <section class="sections services py-5 " id="comsuports">
      <div class="container">
        <div class="section-header text-center text-white my-4">
          <h2 class="section-title">{navlink2[lang]}</h2>
          <div class="line">
            <span></span>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-4 col-xs-12" data-aos="fade-dow">
            <div class="serv ">
              <img src="./img/com1.png" alt="s" width="250" />
            </div>
          </div>
          <div class="col-md-4 col-xs-12" data-aos="fade-dow">
            <div class="serv ">
              <img src="./img/com2.png" alt="s" width="250" />
            </div>
          </div>
          <div class="col-md-4 col-xs-12" data-aos="fade-dow">
            <div class="serv ">
              <img src="./img/com3.png" alt="s" width="250" />
            </div>
          </div>
          <div class="col-md-4 col-xs-12" data-aos="fade-dow">
            <div class="serv ">
              <img src="./img/com4.png" alt="" width="250" />
            </div>
          </div>
          <div class="col-md-4 col-xs-12" data-aos="fade-dow">
            <div class="serv ">
              <img src="./img/com5.png" alt="" width="250" />
            </div>
          </div>
          <div class="col-md-4 col-xs-12" data-aos="fade-dow">
            <div class="serv ">
              <img src="./img/com6.png" alt="" width="250" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComSuports;
