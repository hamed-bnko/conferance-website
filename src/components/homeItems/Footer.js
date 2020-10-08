import React from "react";
import { footer } from "../sections";

const Footer = ({ lang }) => {
  return (
    <>
      <div class="sections copyright py-4 text-center">
        <div class="container">
          <p class="copy-desc">
            &copy; {footer[lang]}
            {"  "}
            {new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
