import React, { useCallback, useContext } from "react";
import IconMenuClose from "../images/icon-close-menu.svg";
import { StoreContext } from "../../store/store";

const BtnMenuShow = (props) => {
  const { state, dispatch, controlMenuRef } = useContext(StoreContext);

  const HandleMenuClose = useCallback(() => {
    if (state.handleMenu === true) {
      controlMenuRef.current.classList.remove("slideInRight");
      controlMenuRef.current.classList.add("slideOutRight");

      setTimeout(() => {
        controlMenuRef.current.style.display = "none";
      }, 1000);

      return dispatch({
        type: "handleMenu",
        handleMenu: (state.handleMenu = false),
      });
    }
  }, [state, dispatch, controlMenuRef]);

  return (
    <button
      type="button"
      className="header__btn-close"
      onClick={() => HandleMenuClose()}
    >
      <figure>
        <img src={IconMenuClose} alt="icon-menu-close" />
      </figure>
    </button>
  );
};

export default BtnMenuShow;
