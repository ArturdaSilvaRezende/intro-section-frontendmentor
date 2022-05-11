import React, { useCallback, useContext, useEffect } from "react";

//animations
import "./style/AnimationHeader.css";

//styled-components
import { ComponentHeader, HeaderContents } from "./style/HeaderStyle";

//components
import BtnMenuShow from "./BtnMenuShow";
import BtnMenuClose from "./BtnMenuClose";
import NavMenu from "./NavMenu";

//images
import Logo from "../images/logo.svg";

//store
import { StoreContext } from "../../store/store";

const Header = () => {
  const { controlMenuRef } = useContext(StoreContext);

  const menuResize = useCallback(() => {
    window.onresize = () => {
      if (window.innerWidth > 767) {
        controlMenuRef.current.style.display = "block";
      } else {
        controlMenuRef.current.classList.remove("slideOutRight");
        controlMenuRef.current.style.display = "none";
      }
    };
  }, [controlMenuRef]);

  useEffect(() => {
    menuResize();
  }, [menuResize]);

  return (
    <ComponentHeader className="header">
      <a href="index.html" className="header__logo">
        <figure>
          <img src={Logo} alt="logo-snap" />
        </figure>
      </a>
      <BtnMenuShow />
      <HeaderContents ref={controlMenuRef}>
        <div className="header__contents">
          {/* close button */}
          <BtnMenuClose />

          {/* navigation menu */}
          <NavMenu />

          {/* register / login */}
          <div className="header__login">
            <button type="button">Login</button>
            <button type="button" className="header__login--register">
              Register
            </button>
          </div>
        </div>
      </HeaderContents>
    </ComponentHeader>
  );
};

export default Header;
