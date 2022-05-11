import React, { createContext, useReducer, useRef } from "react";

const initialState = {
  handleMenu: false,
  handleDropdownFeatures: false,
  handleDropdownCompany: false,
};

export const StoreContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "handleMenu":
      return { ...state, handleMenu: state.handleMenu };
    case "handleDropdownFeatures":
      return { ...state, handleDropdownFeatures: state.handleDropdownFeatures };
    case "handleDropdownCompany":
      return { ...state, handleDropdownCompany: state.handleDropdownCompany };
    default:
      throw new Error();
  }
}

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const controlMenuRef = useRef(null);
  const DropdownFeaturesRef = useRef(null);
  const DropdownCompanyRef = useRef(null);

  return (
    <StoreContext.Provider
      value={{
        state,
        controlMenuRef,
        DropdownFeaturesRef,
        DropdownCompanyRef,
        dispatch,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default Store;
