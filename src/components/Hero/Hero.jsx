import React from "react";

//styled components
import { ComponentHero } from "./StyleHero";

//images
import ClientDatabiz from "../images/client-databiz.svg";
import ClientAudiophile from "../images/client-audiophile.svg";
import ClientMeet from "../images/client-meet.svg";
import ClientMaker from "../images/client-maker.svg";
import BgDesktop from "../images/image-hero-desktop.png";

const Hero = () => {
  return (
    <ComponentHero className="hero">
      <figure className="hero__description">
        <figcaption>
          <h1>
            <span>Make </span>
            <span>remote work </span>
          </h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button type="button">Learn more</button>
        </figcaption>
        <img src={BgDesktop} alt="hero-desktop" className="hero_img-desktop" />
      </figure>
      <figure className="hero__clients">
        <img src={ClientDatabiz} alt="client-databiz" />
        <img src={ClientAudiophile} alt="client-audiophile" />
        <img src={ClientMeet} alt="client-meet" />
        <img src={ClientMaker} alt="client-maker" />
      </figure>
    </ComponentHero>
  );
};

export default Hero;
