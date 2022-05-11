import styled from "styled-components";

export const ComponentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 30px;

  .header__btn-show {
    display: none;
  }

  @media screen and (max-width: 767px) {
    .header__btn-show {
      display: block;
    }
  }
`;

export const HeaderContents = styled.div`
  width: 100%;

  .header__contents {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__btn-close {
      display: none;
    }

    .header__nav {
      margin-left: 5%;
      width: 100%;

      .header__ul {
        display: flex;
        margin-bottom: 6px;

        li + li {
          margin-left: 40px;
        }

        li {
          a {
            color: var(--Medium-Gray);

            &:hover {
              color: var(--Almost-Black);
            }
          }
        }

        .header__ul--li-dropdown {
          position: relative;

          span {
            cursor: pointer;
            color: var(--Medium-Gray);

            &:hover {
              color: var(--Almost-Black);
            }
          }

          .header__ul-caret {
            margin-left: 10px;
          }

          .header__ul-features {
            left: -65px;
            width: 140px;
          }

          .header__ul-company {
            width: 100px;
          }

          ul {
            display: none;
            position: absolute;
            top: 40px;
            border-radius: 10px;
            background-color: #fff;
            padding: 15px;
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);

            li + li {
              margin-top: 20px;
            }

            li {
              margin: 10px 0 10px 7px;

              img {
                margin-right: 12px;
              }
            }
          }
        }
      }
    }

    .header__login {
      display: flex;

      button {
        color: var(--Medium-Gray);
        font-size: 18px;

        &:hover {
          color: var(--Almost-Black);
        }
      }

      .header__login--register {
        border: 2px solid var(--Medium-Gray);
        border-radius: 12px;
        padding: 10px;
        width: 110px;
        margin-left: 40px;

        &:hover {
          border: 2px solid var(--Almost-Black);
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .header__nav {
      .header__ul {
        li + li {
          margin-left: 10px !important;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    display: none;

    .header__contents {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      background-color: var(--Almost-White);
      width: 65%;
      height: 100vh;
      margin-left: auto;

      .header__btn-close {
        display: block;
        margin: 20px 25px 20px auto;
      }

      .header__nav {
        margin-left: 30px;

        .header__ul {
          flex-direction: column;
          font-size: 16px;
          margin-bottom: 0;

          li + li {
            margin-top: 20px;
            margin-left: 0;
          }

          .header__ul--li-dropdown {
            ul {
              margin: 30px 0 10px 27px;
              position: static;
              background-color: transparent !important;
              box-shadow: none;
              padding: 0;
              width: 100%;

              li + li {
                margin-top: 15px;
              }

              li {
                margin: 0;
              }
            }
          }
        }
      }

      .header__login {
        width: 100%;
        margin: 35px auto 0 auto;
        flex-direction: column;

        .header__login--register {
          margin: 20px auto 0 auto;
          width: 80%;
        }
      }
    }
  }
`;
