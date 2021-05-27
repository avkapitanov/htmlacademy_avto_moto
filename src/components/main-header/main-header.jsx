import React from "react";
import Logo from "../logo/logo";
import MainNavigation from "../main-navigation/main-navigation";
import {HEADER_LINKS} from "../../constants";

const MainHeader = () => {
  return (
    <header className="app__header main-header">
      <div className="main-header__container container">
        <Logo />
        <button className="main-header__toggle" type="button" aria-label="Открыть меню"></button>
        <MainNavigation links={HEADER_LINKS}/>
      </div>
    </header>
  );
};

export default MainHeader;
