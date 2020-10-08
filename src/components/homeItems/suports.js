import React from "react";
import { s, navlink5 } from "../sections";
const Suports = ({ lang }) => {
  return (
    <section class="sections services py-5 " id="suports">
      <div class="container">
        <div class="section-header text-center text-white my-4">
          <h2 class="section-title">{navlink5[lang]}</h2>
          <div class="line">
            <span></span>
          </div>
        </div>

        <div class="row my-3">
          <div class="col-md-4 col-xs-12" data-aos="fade-dow">
            <div class="serv ">
              <img src="./img/logo-npc.svg" alt="s" width="250" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suports;
