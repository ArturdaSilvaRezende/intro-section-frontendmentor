import React, { useCallback, useContext } from "react";
import IconMenuShow from "../images/icon-menu.svg";
import { StoreContext } from "../../store/store";

const BtnMenuShow = (props) => {
  const { state, dispatch, controlMenuRef } = useContext(StoreContext);

  const HandleMenuShow = useCallback(() => {
    if (state.handleMenu === false) {
      controlMenuRef.current.style.display = "block";
      controlMenuRef.current.classList.remove("slideOutRight");
      controlMenuRef.current.classList.add("slideInRight");
      return dispatch({
        type: "handleMenu",
        handleMenu: (state.handleMenu = true),
      });
    }
  }, [state, dispatch, controlMenuRef]);

  return (
    <button
      type="button"
      className="header__btn-show"
      onClick={() => HandleMenuShow()}
    >
      <figure>
        <img src={IconMenuShow} alt="icon-menu-show" />
      </figure>
    </button>
  );
};

export default BtnMenuShow;
