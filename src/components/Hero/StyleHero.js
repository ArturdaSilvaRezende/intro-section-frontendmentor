import styled from "styled-components";

import BgMobile from "../images/image-hero-mobile.png";

export const ComponentHero = styled.div`
  height: 100vh;
  margin-top: 30px;
  padding-bottom: 160px;

  .hero__description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;

    .hero_img-mobile {
      display: none;
    }

    .hero_img-desktop {
      width: 50%;
      display: block;
      position: relative;
      right: -80px;
    }

    figcaption {
      position: relative;
      left: -30px;

      h1 {
        font-size: 4.5rem;
        display: flex;
        flex-direction: column;
        display: block;
      }

      p {
        color: var(--Medium-Gray);
        line-height: 1.5;
        margin: 30px 0;
      }

      button {
        background-color: var(--Almost-Black);
        color: var(--Almost-White);
        padding: 15px;
        border-radius: 10px;
        font-weight: 700;
      }
    }
  }

  .hero__clients {
    display: flex;
    justify-content: space-evenly;
    width: 45%;
    position: relative;
    left: 110px;
    top: -40px;

    img {
      width: 12%;
      display: block;
    }
  }

  @media screen and (min-width: 482px) and (max-width: 992px) {
    padding-bottom: 0;

    .hero__description {
      width: 100%;
      flex-direction: column;

      .hero_img-desktop {
        position: static;
        right: 0;
        width: 40%;
        order: 1;
      }

      figcaption {
        position: static;
        left: 0;
        order: 2;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-size: 3rem;
        }

        p {
          width: 80%;
          margin: 60px auto;
          text-align: center;
        }
      }
    }

    .hero__clients {
      position: static;
      top: 0;
      left: 0;
      width: 100%;
      margin-top: 80px;
    }
  }

  @media screen and (max-width: 481px) {
    background-image: url(${BgMobile});
    background-size: 100% 100%;
    height: 50vh;
    margin-top: 0;
    padding-bottom: 0;

    .hero__description {
      flex-direction: column;
      position: relative;
      top: 380px;
      text-align: center;
      width: 100%;

      .hero_img-desktop {
        display: none;
      }

      .hero_img-mobile {
        display: block;
      }

      figcaption {
        left: 0;

        h1 {
          font-size: 1.8rem;
        }

        p {
          margin: 20px auto;
          font-size: 16px;
          width: 90%;
        }

        button {
          width: 130px;
          margin: 10px auto 0 auto;
        }
      }
    }

    .hero__clients {
      position: relative;
      top: 430px;
      left: 0;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
      padding-bottom: 100px;

      img {
        width: 60px;
      }
    }
  }
`;
