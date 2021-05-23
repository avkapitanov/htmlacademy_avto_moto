import React from "react";
import MainNavigation from "../main-navigation/main-navigation";
import {FOOTER_LINKS} from "../../constants";

const MainFooter = () => {
  return (
    <footer className="app__footer main-footer">
      <div className="main-footer__container container">
        <MainNavigation classForWrapper={`main-footer__nav`} classForMenu={`main-nav__list--footer`} links={FOOTER_LINKS}/>
      </div>
    </footer>
  );
};

export default MainFooter;
