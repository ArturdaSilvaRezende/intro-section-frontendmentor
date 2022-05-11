import React, { useCallback, useContext } from "react";

//images
import IconArrowUp from "../images/icon-arrow-up.svg";
import IconArrowDown from "../images/icon-arrow-down.svg";
import IconTodo from "../images/icon-todo.svg";
import IconCalendar from "../images/icon-calendar.svg";
import IconReminders from "../images/icon-reminders.svg";
import IconPlanning from "../images/icon-planning.svg";

//store
import { StoreContext } from "../../store/store";

const NavMenu = (props) => {
  const { state, DropdownFeaturesRef, DropdownCompanyRef, dispatch } =
    useContext(StoreContext);

  const HandleDropdownFeatures = useCallback(() => {
    if (state.handleDropdownFeatures === false) {
      DropdownFeaturesRef.current.style.display = "block";
      DropdownFeaturesRef.current.classList.remove("fadeOut");
      DropdownFeaturesRef.current.classList.add("fadeIn");

      //The code block below hides the "dropdown company"
      if (state.handleDropdownCompany === true) {
        DropdownCompanyRef.current.classList.remove("fadeIn");
        DropdownCompanyRef.current.classList.add("fadeOut");

        setTimeout(() => {
          DropdownCompanyRef.current.style.display = "none";
        }, 1000);
      }

      return dispatch({
        type: "handleDropdownFeatures",
        handleDropdownFeatures: (state.handleDropdownFeatures = true),
        handleDropdownCompany: (state.handleDropdownCompany = false),
      });
    } else {
      DropdownFeaturesRef.current.classList.remove("fadeIn");
      DropdownFeaturesRef.current.classList.add("fadeOut");

      setTimeout(() => {
        DropdownFeaturesRef.current.style.display = "none";
      }, 1000);

      return dispatch({
        type: "handleDropdownFeatures",
        handleDropdownFeatures: (state.handleDropdownFeatures = false),
      });
    }
  }, [state, DropdownFeaturesRef, DropdownCompanyRef, dispatch]);

  const HandleDropdownCompany = useCallback(() => {
    if (state.handleDropdownCompany === false) {
      DropdownCompanyRef.current.style.display = "block";
      DropdownCompanyRef.current.classList.remove("fadeOut");
      DropdownCompanyRef.current.classList.add("fadeIn");

      //The code block below hides the "dropdown features"
      if (state.handleDropdownFeatures === true) {
        DropdownFeaturesRef.current.classList.remove("fadeIn");
        DropdownFeaturesRef.current.classList.add("fadeOut");

        setTimeout(() => {
          DropdownFeaturesRef.current.style.display = "none";
        }, 1000);
      }

      return dispatch({
        type: "handleDropdownCompany",
        handleDropdownCompany: (state.handleDropdownCompany = true),
        handleDropdownFeatures: (state.handleDropdownFeatures = false),
      });
    } else {
      DropdownCompanyRef.current.classList.remove("fadeIn");
      DropdownCompanyRef.current.classList.add("fadeOut");

      setTimeout(() => {
        DropdownCompanyRef.current.style.display = "none";
      }, 1000);

      return dispatch({
        type: "handleDropdownCompany",
        handleDropdownCompany: (state.handleDropdownCompany = false),
      });
    }
  }, [state, DropdownCompanyRef, DropdownFeaturesRef, dispatch]);

  return (
    <nav className="header__nav">
      <ul className="header__ul">
        <li className="header__ul--li-dropdown">
          <span onClick={() => HandleDropdownFeatures()}>
            Features{" "}
            <img
              className="header__ul-caret"
              src={state.handleDropdownFeatures ? IconArrowUp : IconArrowDown}
              alt="icon-arrow-down"
            />
          </span>
          <ul className="header__ul-features" ref={DropdownFeaturesRef}>
            <li>
              <a href=" #">
                <img src={IconTodo} alt="icon-todo-list" /> Todo List
              </a>
            </li>
            <li>
              <a href=" #">
                <img src={IconCalendar} alt="icon-calendar" /> Calendar
              </a>
            </li>
            <li>
              <a href=" #">
                <img src={IconReminders} alt="icon-reminders" /> Reminders
              </a>
            </li>
            <li>
              <a href=" #">
                <img src={IconPlanning} alt="icon-planning" /> Planning
              </a>
            </li>
          </ul>
        </li>
        <li className="header__ul--li-dropdown">
          <span onClick={() => HandleDropdownCompany()}>
            Company{" "}
            <img
              className="header__ul-caret"
              src={state.handleDropdownCompany ? IconArrowUp : IconArrowDown}
              alt="icon-arrow-down"
            />
          </span>
          <ul className="header__ul-company" ref={DropdownCompanyRef}>
            <li>
              <a href=" #">History</a>
            </li>
            <li>
              <a href=" #">Out Team</a>
            </li>
            <li>
              <a href=" #">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <a href=" #">Careers</a>
        </li>
        <li>
          <a href=" #">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
