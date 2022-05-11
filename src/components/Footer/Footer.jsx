import React from "react";

//styled components
import { ComponentFooter } from "./StyleFooter";

const Footer = () => {
  return (
    <ComponentFooter className="footer">
      <div className="footer__attribution">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          .{" "}
          <a
            href="https://www.frontendmentor.io/profile/ArturdaSilvaRezende"
            target="_blank"
            rel="noreferrer"
          >
            Artur da Silva Rezende
          </a>
          .
        </p>
      </div>
    </ComponentFooter>
  );
};

export default Footer;
