import styled from "styled-components";

export const ComponentFooter = styled.footer`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: -250px;

  .footer__attribution {
    p {
      line-height: 1.5;
      color: var(--Medium-Gray);
      font-weight: 700;

      a {
        color: var(--Medium-Gray);
        &:hover {
          color: var(--Almost-Black);
        }
      }
    }
  }

  @media screen and (min-width: 482px) and (max-width: 768px) {
    bottom: -100px;
  }

  @media screen and (max-width: 481px) {
    bottom: -250px;

    .footer__attribution {
      margin: 0 auto;

      p {
        font-size: 0.9rem;
        a {
          margin-left: 6px;
        }
        a + a {
          display: block;
        }
      }
    }
  }
`;
